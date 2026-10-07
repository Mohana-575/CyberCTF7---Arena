import { useState } from 'react'
import { Activity, Archive, ArrowRight, Bell, CalendarDays, Check, ChevronRight, Crosshair, Download, Flag, LayoutDashboard, LogOut, Menu, Radio, Settings2, Shield, Trophy, UserRound, Users, X } from 'lucide-react'
import { challenges as initialChallenges, navigation } from './data'
import { Difficulty, Modal, Toast } from './components'
import { ArenaPage, CompletedPage, Dashboard, LeaderboardPage, OngoingPage, ProfilePage, SettingsPage, UpcomingPage } from './views'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userChallenges, setUserChallenges] = useState(initialChallenges)
  const [score, setScore] = useState(4850)
  const [modal, setModal] = useState(null)
  const [toast, setToast] = useState(null)
  const [flag, setFlag] = useState('')
  const [hintOpen, setHintOpen] = useState(false)
  const [flagCaptured, setFlagCaptured] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [registrationForm, setRegistrationForm] = useState({ name: '', email: '' })

  const notify = (message, type = 'success') => setToast({ message, type, id: Date.now() })
  const handleRegistrationChange = (field, value) => setRegistrationForm((current) => ({ ...current, [field]: value }))
  const submitRegistration = (event) => {
    event.preventDefault()
    if (!registrationForm.name.trim() || !registrationForm.email.trim()) {
      notify('Please enter your name and email to register.', 'error')
      return
    }
    setRegistered(true)
    notify(`Registration confirmed for ${modal.item.name}`)
  }
  const navigate = (page) => { setActivePage(page); setMobileOpen(false); setModal(null); window.scrollTo({ top: 0, behavior: 'instant' }) }
  const openChallenge = (challenge) => { setFlag(''); setHintOpen(false); setFlagCaptured(false); setModal({ type: 'challenge', item: challenge }) }
  const submitFlag = (event) => {
    event.preventDefault()
    if (flag.trim() !== 'flag{cyberctf7_demo_capture}') {
      notify('That flag is incorrect. Keep digging.', 'error')
      return
    }
    if (!modal.item.solved) {
      setUserChallenges((items) => items.map((item) => item.name === modal.item.name ? { ...item, solved: true } : item))
      setScore((value) => value + modal.item.points)
    }
    setFlagCaptured(true)
  }

  const iconMap = { LayoutDashboard, CalendarDays, Radio, Archive, Crosshair, Trophy, UserRound, Settings2 }
  const pageViews = {
    Dashboard: <Dashboard onNavigate={navigate} onOpenEvent={(event) => setModal({ type: 'competition', item: event })} solvedCount={userChallenges.filter((item) => item.solved).length + 30} score={score} />,
    'Upcoming Events': <UpcomingPage onToast={notify} onOpenEvent={(event) => { setRegistered(false); setModal({ type: 'event', item: event }) }} />,
    'Ongoing Events': <OngoingPage onOpenChallenge={openChallenge} />,
    'Completed Events': <CompletedPage onOpenResult={(event) => setModal({ type: 'result', item: event })} />,
    'Challenge Arena': <ArenaPage onOpenChallenge={openChallenge} userChallenges={userChallenges} />,
    Leaderboard: <LeaderboardPage score={score} solvedCount={userChallenges.filter((item) => item.solved).length + 30} />,
    Profile: <ProfilePage score={score} solvedCount={userChallenges.filter((item) => item.solved).length + 30} />,
    Settings: <SettingsPage onToast={notify} />,
  }

  return (
    <div className="app-shell">
      {mobileOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
      <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="brand"><span className="brand-symbol"><Shield size={19} /></span><span><span className="brand-name">CYBER<span>CTF7</span></span><span className="brand-tagline">Think. Exploit. Capture.</span></span><button className="icon-button mobile-close" aria-label="Close menu" onClick={() => setMobileOpen(false)}><X size={17} /></button></div>
        <nav className="sidebar-nav" aria-label="Main navigation">{navigation.map((group) => <div className="nav-group" key={group.section}><div className="nav-label">{group.section}</div>{group.items.map((item) => { const Icon = iconMap[item.icon]; return <button key={item.id} className={`nav-item ${activePage === item.id ? 'active' : ''}`} aria-current={activePage === item.id ? 'page' : undefined} onClick={() => navigate(item.id)}><Icon size={16} strokeWidth={1.8} /><span>{item.id}</span>{item.id === 'Ongoing Events' && <span className="nav-count">2</span>}</button> })}</div>)}</nav>
        <div className="sidebar-bottom"><div className="account-mini"><span className="avatar">YK</span><span className="account-copy"><strong>HexKite</strong><span>Elite Operator</span></span><span className="account-level">#27</span></div><button className="logout-button" onClick={() => notify('You are signed out of other sessions')}><LogOut size={14} />Log out</button></div>
      </aside>
      <div className="main-column"><header className="topbar"><button className="mobile-menu-button" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={17} /></button><div className="breadcrumb"><span>CYBERCTF7</span><ChevronRight size={13} /><strong>{activePage}</strong></div><div className="topbar-right"><span className="system-status"><span className="system-dot" /> ALL SYSTEMS NOMINAL</span><button className="icon-button" aria-label="Notifications" onClick={() => notify('You’re all caught up') }><Bell size={16} /></button><button className="avatar topbar-avatar" aria-label="Open profile" onClick={() => navigate('Profile')}>YK</button></div></header>
        <main>{pageViews[activePage]}</main>
        <footer className="app-footer"><span>CYBERCTF7 <span>·</span> THINK. EXPLOIT. CAPTURE THE FLAG.</span><span>PLATFORM STATUS <i className="system-dot"/> OPERATIONAL</span></footer>
      </div>
      {modal?.type === 'challenge' && <Modal title={modal.item.name} subtitle="Challenge details" onClose={() => setModal(null)}><div className="modal-body">{flagCaptured ? <div className="success-state"><span className="success-mark"><Check size={28}/></span><h3>FLAG CAPTURED!</h3><p>Another foothold secured. Keep pushing.</p><span className="success-score">+{modal.item.points} POINTS ADDED</span></div> : <><div className="challenge-detail-tags"><Difficulty value={modal.item.difficulty}/><span className="detail-category">{modal.item.category}</span></div><p className="challenge-description">{modal.item.description}</p><div className="detail-meta-grid"><div><span>POINTS</span><strong>{modal.item.points} pts</strong></div><div><span>SUCCESSFUL SOLVES</span><strong>{modal.item.solves}</strong></div><div><span>AUTHOR</span><strong>{modal.item.author}</strong></div></div><div className="hint-box"><button onClick={() => setHintOpen((value) => !value)}><span><SparkleIcon/> Hint {hintOpen ? 'revealed' : '(1 available)'}</span><ChevronRight size={14}/></button>{hintOpen && <p>Look closely at what the challenge already gave you. The important detail is hiding in the metadata.</p>}</div><div className="download-box"><Download size={16}/><span><strong>challenge-files.zip</strong><small>2.4 MB · Challenge attachment</small></span><a href="data:application/zip;base64,UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==" download="challenge-files.zip" aria-label="Download challenge files"><Download size={15}/></a></div><div className="target-box"><span className="eyebrow">TARGET INFORMATION</span><p>Connection: <code>challenge.cyberctf7.io:31415</code><br/>Environment resets every 30 minutes.</p></div><form className="flag-form" onSubmit={submitFlag}><label htmlFor="flag-entry">Submit your flag</label><div className="flag-input-row"><span><Crosshair size={14}/></span><input id="flag-entry" value={flag} onChange={(event) => setFlag(event.target.value)} placeholder="flag{...}" autoComplete="off" required/><button className="icon-button" type="submit" aria-label="Submit flag"><ArrowSubmit/></button></div><button className="button-primary" type="submit">Submit flag <Check size={14}/></button></form></>}</div></Modal>}
      {modal?.type === 'event' && <Modal title="Event briefing" subtitle="Upcoming competition" onClose={() => setModal(null)}><div className="event-detail-body"><div className="event-detail-title"><span className={`event-mark ${modal.item.accent}`}><span>{modal.item.short}</span></span><div><h3>{modal.item.name}</h3><p>{modal.item.type} <span className="divider-dot">·</span> {modal.item.level}</p></div></div><div className="event-facts"><EventFact icon={CalendarDays} label="STARTS" value={`${modal.item.date} · ${modal.item.time}`}/><EventFact icon={Clock3} label="DURATION" value={modal.item.duration}/><EventFact icon={Crosshair} label="CHALLENGES" value={`${modal.item.challenges} challenges`}/><EventFact icon={UserRound} label="EXPECTED" value={`${modal.item.participants.toLocaleString()} competitors`}/></div><div className="event-countdown-detail"><span className="eyebrow">COUNTDOWN TO START</span><strong>{modal.item.days} days <small>11 hours · 24 minutes</small></strong></div>{registered ? <div className="success-state registration-success"><span className="success-mark"><Check size={28}/></span><h3>Registration confirmed!</h3><p>{registrationForm.name || 'Operator'} has secured a slot for {modal.item.name}.</p><span className="success-score">SEAT RESERVED</span></div> : <form className="registration-form" onSubmit={submitRegistration}><label><span>Full name</span><input type="text" value={registrationForm.name} onChange={(event) => handleRegistrationChange('name', event.target.value)} placeholder="Your name" required /></label><label><span>Email address</span><input type="email" value={registrationForm.email} onChange={(event) => handleRegistrationChange('email', event.target.value)} placeholder="you@example.com" required /></label><button type="submit" className="button-primary full-button">Confirm registration <ArrowRight size={15}/></button></form>}</div></Modal>}
      {modal?.type === 'competition' && <Modal title={modal.item.name} subtitle="Live competition briefing" onClose={() => setModal(null)}><div className="event-detail-body"><div className="event-detail-title"><span className="event-mark lime"><span>{modal.item.short}</span></span><div><h3>{modal.item.name}</h3><p><span className="live-dot"/> Live now <span className="divider-dot">·</span> Ends in {modal.item.remaining}</p></div></div><div className="event-facts"><EventFact icon={Crosshair} label="CHALLENGES" value={`${modal.item.challenges} available`}/><EventFact icon={Users} label="COMPETITORS" value={modal.item.participants.toLocaleString()}/><EventFact icon={Trophy} label="YOUR RANK" value={`#${modal.item.rank}`}/><EventFact icon={Activity} label="YOUR SCORE" value={`${modal.item.score.toLocaleString()} pts`}/></div><button className="button-primary full-button" onClick={() => navigate('Ongoing Events')}>Enter competition <ArrowRight size={15}/></button></div></Modal>}
      {modal?.type === 'result' && <Modal title="Competition results" subtitle={modal.item.name} onClose={() => setModal(null)}><div className="event-detail-body"><div className="result-highlight"><span className="result-medal"><Trophy size={23}/></span><div><span className="eyebrow">FINAL PLACEMENT</span><strong>#{modal.item.rank} <small>of {modal.item.participants.toLocaleString()}</small></strong></div><div className="result-score"><span>FINAL SCORE</span><b>{modal.item.score}</b></div></div><div className="event-facts"><EventFact icon={Flag} label="CHALLENGES SOLVED" value={`${modal.item.solved} / ${modal.item.total}`}/><EventFact icon={Activity} label="PERFORMANCE" value={`${modal.item.percent}%`}/><EventFact icon={Users} label="PARTICIPANTS" value={modal.item.participants.toLocaleString()}/><EventFact icon={CalendarDays} label="EVENT DATE" value={modal.item.date}/></div><div className="result-breakdown"><span className="eyebrow">CATEGORY PERFORMANCE</span>{[['Web exploitation',82],['Cryptography',70],['Digital forensics',63],['OSINT',48]].map(([name,value]) => <div key={name}><span>{name}</span><span className="progress-track"><i style={{width:`${value}%`}}/></span><b>{value}%</b></div>)}</div></div></Modal>}
      {toast && <div className="toast-container"><Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => setToast(null)} /></div>}
    </div>
  )
}

function EventFact({ icon: Icon, label, value }) { return <div className="event-fact"><Icon size={15}/><span><small>{label}</small><strong>{value}</strong></span></div> }
function SparkleIcon() { return <Crosshair size={14}/> }
function ArrowSubmit() { return <ChevronRight size={16}/> }

export default App

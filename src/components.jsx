import { useEffect, useState } from 'react'
import { Activity, ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, LoaderCircle, Medal, Search, X } from 'lucide-react'

export function SectionHeading({ eyebrow, title, detail, action }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{detail && <p>{detail}</p>}</div>{action}</div>
}

export function StatCard({ icon: Icon, label, value, change, tint = 'lime' }) {
  return <article className="stat-card"><div className="stat-top"><span className={`icon-tile ${tint}`}><Icon size={17} /></span><span className="stat-change"><ArrowUpRight size={13} />{change}</span></div><div className="stat-value">{value}</div><div className="stat-label">{label}</div></article>
}

export function ProgressBar({ value, tint = 'lime' }) {
  return <div className="progress-track" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"><span className={tint} style={{ width: `${Math.max(0, Math.min(value, 100))}%` }} /></div>
}

export function Countdown({ days }) {
  const [seconds, setSeconds] = useState(59)
  useEffect(() => { const timer = setInterval(() => setSeconds((current) => current === 0 ? 59 : current - 1), 1000); return () => clearInterval(timer) }, [])
  return <span className="countdown">{String(days).padStart(2, '0')}<i>d</i> 11<i>h</i> 24<i>m</i> {String(seconds).padStart(2, '0')}<i>s</i></span>
}

export function Difficulty({ value }) {
  return <span className={`difficulty ${value?.toLowerCase() || 'medium'}`}><span />{value || 'Medium'}</span>
}

export function Modal({ title, subtitle, onClose, children }) {
  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])
  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><section className="modal-panel" role="dialog" aria-modal="true" aria-label={title}><header className="modal-header"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div><button className="icon-button" onClick={onClose} aria-label="Close dialog"><X size={17} /></button></header>{children}</section></div>
}

export function SearchInput({ value, onChange, placeholder = 'Search challenges...' }) {
  return <label className="search-input"><Search size={16} /><input aria-label={placeholder} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} />{value && <button type="button" aria-label="Clear search" onClick={() => onChange('')}><X size={14} /></button>}</label>
}

export function SelectFilter({ label, value, onChange, options }) {
  return <label className="filter-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={14} /></label>
}

export function Toast({ message, type = 'success', onClose }) {
  useEffect(() => { const timer = setTimeout(onClose, 3400); return () => clearTimeout(timer) }, [message, onClose])
  return <div className={`toast ${type}`} role="status"><span className="toast-icon">{type === 'success' ? <Check size={15} /> : <Activity size={15} />}</span><span>{message}</span><button className="icon-button" onClick={onClose} aria-label="Dismiss notification"><X size={14} /></button></div>
}

export function EmptyState({ title, detail }) {
  return <div className="empty-state"><span><Medal size={19} /></span><h3>{title}</h3><p>{detail}</p></div>
}

export function LoadingState({ label = 'Loading...' }) {
  return <div role="status" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 120, color: '#a8b48f' }}><LoaderCircle className="animate-spin" size={17} /><span>{label}</span></div>
}

export function RankChange({ value }) {
  if (!value) return <span className="rank-neutral">—</span>
  return value > 0 ? <span className="rank-up"><ArrowUpRight size={14} />{value}</span> : <span className="rank-down"><ArrowDownRight size={14} />{Math.abs(value)}</span>
}

export function InlineArrow() { return <ArrowRight size={15} /> }

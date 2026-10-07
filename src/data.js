export const navigation = [
  { section: 'OPERATIONS', items: [
    { id: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'Upcoming Events', icon: 'CalendarDays' },
    { id: 'Ongoing Events', icon: 'Radio' },
    { id: 'Completed Events', icon: 'Archive' },
  ] },
  { section: 'COMPETE', items: [
    { id: 'Challenge Arena', icon: 'Crosshair' },
    { id: 'Leaderboard', icon: 'Trophy' },
  ] },
  { section: 'ACCOUNT', items: [
    { id: 'Profile', icon: 'UserRound' },
    { id: 'Settings', icon: 'Settings2' },
  ] },
]

export const upcomingEvents = [
  { name: 'Cyber Apocalypse 2026', short: 'CA', date: 'Oct 24, 2026', time: '09:00 UTC', duration: '48 hours', challenges: 40, participants: 2841, level: 'Intermediate', type: 'Open CTF', accent: 'lime', days: 18 },
  { name: 'Zero Day Challenge', short: 'ZD', date: 'Oct 30, 2026', time: '16:00 UTC', duration: '24 hours', challenges: 25, participants: 1460, level: 'Advanced', type: 'Open CTF', accent: 'cyan', days: 24 },
  { name: 'HackTheGrid', short: 'HG', date: 'Nov 04, 2026', time: '12:00 UTC', duration: '36 hours', challenges: 32, participants: 930, level: 'Beginner', type: 'University', accent: 'orange', days: 29 },
  { name: 'Dark Web Hunt', short: 'DW', date: 'Nov 12, 2026', time: '18:00 UTC', duration: '72 hours', challenges: 48, participants: 2120, level: 'Advanced', type: 'Open CTF', accent: 'pink', days: 37 },
]

export const ongoingEvents = [
  { name: 'Cyber Siege', short: 'CS', status: 'LIVE NOW', remaining: '18h 42m', challenges: 32, solved: 14, rank: 27, score: 4850, participants: 3120, accent: 'lime' },
  { name: 'Null Protocol', short: 'NP', status: 'LIVE NOW', remaining: '2d 06h', challenges: 24, solved: 9, rank: 81, score: 2675, participants: 1942, accent: 'cyan' },
]

export const completedEvents = [
  { name: 'Dark Web Hunt', date: 'Sep 12, 2026', score: '8,420', rank: 12, solved: 28, total: 40, participants: 2480, percent: 86 },
  { name: 'HackTheGrid', date: 'Aug 28, 2026', score: '6,175', rank: 34, solved: 19, total: 32, participants: 1840, percent: 71 },
  { name: 'Zero Day Challenge', date: 'Aug 02, 2026', score: '4,900', rank: 56, solved: 15, total: 30, participants: 3100, percent: 62 },
]

export const challenges = [
  { name: 'Hidden in Plain Sight', category: 'Digital Forensics', difficulty: 'Easy', points: 150, solves: 842, author: 'byte_mason', description: 'An unremarkable image made its way into the incident archive. The analyst who collected it missed something hiding in plain sight. Find the flag before the trail goes cold.', solved: true },
  { name: 'SQL Nightmare', category: 'Web Exploitation', difficulty: 'Hard', points: 450, solves: 126, author: 'nullcipher', description: 'A legacy query builder guards the archive. Its developer trusted every input that ever passed through it. Can you reach the restricted records?', solved: false },
  { name: 'Lost Packet', category: 'Networking', difficulty: 'Medium', points: 275, solves: 321, author: 'packetghost', description: 'Somewhere inside this capture, one client asked a question it should never have asked. Reconstruct the exchange and recover what was exfiltrated.', solved: false },
  { name: 'RSA Revenge', category: 'Cryptography', difficulty: 'Hard', points: 500, solves: 94, author: 'prime_suspect', description: 'Three messages, one repeated prime, and an operator who was a little too confident in their key generation. The ciphertexts tell the rest.', solved: false },
  { name: 'Memory Hunter', category: 'Digital Forensics', difficulty: 'Medium', points: 300, solves: 217, author: 'forensic_owl', description: 'The machine powered down in a hurry. The memory image did not. Trace the process tree to the last thing it wanted to hide.', solved: false },
  { name: 'Web Phantom', category: 'Web Exploitation', difficulty: 'Medium', points: 325, solves: 203, author: 'ghostinbrowser', description: 'A private endpoint never made it into the documentation. Fortunately, the frontend is doing a lot of the talking for us.', solved: false },
  { name: 'Crypto Vault', category: 'Cryptography', difficulty: 'Easy', points: 175, solves: 612, author: 'bitflipper', description: 'A locked vault and a handwritten note that says "the key is right in front of you." Inspect the encoding chain and see what the previous owner left behind.', solved: true },
  { name: 'Secret File', category: 'OSINT', difficulty: 'Easy', points: 125, solves: 941, author: 'open_source', description: 'A deleted post, an archived page, and a username that changed exactly once. Pull the threads together to locate the missing file.', solved: false },
  { name: 'Buffer Garden', category: 'Binary Exploitation', difficulty: 'Hard', points: 475, solves: 82, author: 'stacksmash', description: 'A small service offers a very generous buffer. Make sure its generosity works in your favor.', solved: false },
  { name: 'Quiet Signal', category: 'Steganography', difficulty: 'Medium', points: 250, solves: 178, author: 'spectral_fox', description: 'This audio recording was flagged as empty. Listen beyond what your headphones can reveal.', solved: false },
  { name: 'Night Shift', category: 'Malware Analysis', difficulty: 'Hard', points: 425, solves: 77, author: 'sandboxed', description: 'A suspicious process wakes only when the lights go out. Safely unpack its stages and find the beacon.', solved: false },
  { name: 'Dead Letter', category: 'Reverse Engineering', difficulty: 'Medium', points: 350, solves: 153, author: 'opcode7', description: 'The binary accepts a key, shrugs, and exits. Find out what it expected to hear.', solved: false },
]

export const leaderboard = [
  { name: 'ShadowX', avatar: 'SX', points: 12840, solved: 92, events: 14, change: 2 },
  { name: 'CyberWolf', avatar: 'CW', points: 11960, solved: 86, events: 11, change: -1 },
  { name: 'RootHunter', avatar: 'RH', points: 10725, solved: 79, events: 13, change: 4 },
  { name: 'NullByte', avatar: 'NB', points: 9840, solved: 68, events: 10, change: 0 },
  { name: 'PacketGhost', avatar: 'PG', points: 9210, solved: 63, events: 9, change: 6 },
  { name: 'HexMaster', avatar: 'HM', points: 8875, solved: 58, events: 12, change: -2 },
  { name: 'You', avatar: 'YK', points: 4850, solved: 32, events: 8, change: 3 },
]

export const activity = [
  { icon: 'Flag', title: 'Flag captured', detail: 'Hidden in Plain Sight · 150 pts', time: '12 min ago', color: 'lime' },
  { icon: 'Zap', title: 'New personal best', detail: 'Solved 4 challenges in one session', time: '2 hours ago', color: 'cyan' },
  { icon: 'Radio', title: 'Entered competition', detail: 'Cyber Siege · Live event', time: 'Yesterday', color: 'purple' },
  { icon: 'Trophy', title: 'Rank increased', detail: 'Climbed 3 places to #27', time: 'Oct 04, 2026', color: 'orange' },
]

export const categories = ['All categories', 'Web Exploitation', 'Cryptography', 'Digital Forensics', 'OSINT', 'Reverse Engineering', 'Binary Exploitation', 'Steganography', 'Networking', 'Malware Analysis']

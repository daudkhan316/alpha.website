export interface ModuleEntry {
  code: string;
  name: string;
  desc: string;
}
export interface ModuleGroup {
  id: string;
  title: string;
  tagline: string;
  hue: string; // tailwind/css gradient stops
  modules: ModuleEntry[];
}

export const moduleGroups: ModuleGroup[] = [
  {
    id: 'customer',
    title: 'Customer & Sales',
    tagline: 'Lifecycle, lead, contract, agent, segment.',
    hue: 'from-indigo-500/40 to-violet-500/30',
    modules: [
      { code: 'CR', name: 'Customer Relationship', desc: 'Customer master data and 360° view.' },
      { code: 'CM', name: 'Contract Management', desc: 'Contracts, products, partners, pricing.' },
      { code: 'LM', name: 'Lead Management', desc: 'Leads, qualification, conversion.' },
      { code: 'AM', name: 'Agent Management', desc: 'Agents, organizational hierarchies.' },
      { code: 'CT', name: 'Campaign Targeting', desc: 'A/B tests, propensity, audiences.' },
      { code: 'CA', name: 'Customer Assessment', desc: 'Scoring and risk evaluation.' },
      { code: 'AP', name: 'Customer Profiling', desc: 'Segments, behavioural analysis.' },
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    tagline: 'Billing, commissions, applications, tickets, workflow.',
    hue: 'from-violet-500/40 to-fuchsia-500/30',
    modules: [
      { code: 'BM', name: 'Billing Management', desc: 'SEPA, dunning, reconciliation.' },
      { code: 'CP', name: 'Commission Management', desc: 'Agent compensation rules.' },
      { code: 'CW', name: 'Case Wizard', desc: 'IDD-compliant applications.' },
      { code: 'TM', name: 'Ticket Management', desc: 'Cases, claims, generic tickets.' },
      { code: 'WF', name: 'Workflow Engine', desc: 'Configurable processes & escalation.' },
      { code: 'AS', name: 'Appointment Scheduling', desc: 'Slots, calendars, reminders.' },
      { code: 'JB', name: 'Job/Batch Processing', desc: 'CRON, mass jobs, billing runs.' },
      { code: 'SP', name: 'Sprint/Project', desc: 'Boards, sprints, agile.' },
    ],
  },
  {
    id: 'docs',
    title: 'Documents & Communication',
    tagline: 'PDFs, OCR, signatures, multi-channel notifications.',
    hue: 'from-fuchsia-500/40 to-pink-400/30',
    modules: [
      { code: 'DM', name: 'Document Management', desc: 'OCR, classification, versioning.' },
      { code: 'NS', name: 'Notification System', desc: 'Email, SMS, Push, Teams, WhatsApp.' },
      { code: 'TE', name: 'Template Engine', desc: 'FreeMarker dynamic PDF generation.' },
      { code: 'SM', name: 'Signature Management', desc: 'eIDAS-AES, providers (InSign).' },
      { code: 'CC', name: 'Collaboration', desc: 'Comments, mentions, digests.' },
      { code: 'OL', name: 'Outlet/CMS', desc: 'Content, blog, landing pages.' },
      { code: 'PC', name: 'Phone Calls', desc: 'Call logs, conversation docs.' },
    ],
  },
  {
    id: 'integration',
    title: 'Integration & Data',
    tagline: 'REST, SOAP, BiPRO, GDV, imports, search, geo.',
    hue: 'from-cyan-400/40 to-indigo-500/30',
    modules: [
      { code: 'HC', name: 'Core Integration', desc: 'REST/SOAP/HTTP adapters.' },
      { code: 'HB', name: 'BiPRO 420/430', desc: 'German insurance SOAP standard.' },
      { code: 'HA', name: 'Alpha Integration', desc: 'REST batch imports.' },
      { code: 'HG', name: 'GDV Processing', desc: 'GDV file parsing.' },
      { code: 'IM', name: 'Import Management', desc: 'Validation, error handling.' },
      { code: 'EM', name: 'Entity Mapping', desc: 'Field mapping, transforms.' },
      { code: 'EA', name: 'Entity Analysis', desc: 'Schema detection.' },
      { code: 'EI', name: 'Entity Import', desc: 'Conflict resolution.' },
      { code: 'SI', name: 'Search Index', desc: 'Full-text search.' },
      { code: 'AD', name: 'Address/Geo', desc: 'Validation, geocoding.' },
    ],
  },
  {
    id: 'logic',
    title: 'Logic & Configuration',
    tagline: 'Scripts, rules, calculations, metadata UI.',
    hue: 'from-emerald-400/30 to-cyan-400/30',
    modules: [
      { code: 'LG', name: 'Logic Module', desc: 'SpEL · Groovy · QL · FreeMarker.' },
      { code: 'CE', name: 'Condition Engine', desc: 'Comparators, rule evaluation.' },
      { code: 'CF', name: 'Calculation/Formula', desc: 'Frequency, amounts, formulas.' },
      { code: 'UI', name: 'UI Configuration', desc: 'Metadata-driven pages.' },
      { code: 'RP', name: 'Report Framework', desc: 'SQL/QL reports & exports.' },
    ],
  },
  {
    id: 'security',
    title: 'Security & Access',
    tagline: '5-level RBAC, OAuth 2.0/JWT, gateways.',
    hue: 'from-amber-400/30 to-rose-400/30',
    modules: [
      { code: 'UM', name: 'User Management', desc: 'Users, roles, 5-level RBAC.' },
      { code: 'EU', name: 'End User', desc: 'Customer portal, OTP login.' },
      { code: 'EX', name: 'External Gateway', desc: 'Customer portal API gateway.' },
      { code: 'IG', name: 'Integration Gateway', desc: 'Machine-to-machine auth.' },
      { code: 'au', name: 'Authentication Core', desc: 'OAuth 2.0 / JWT validation.' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Knowledge',
    tagline: 'Cognitive Backend · NL → QL · GPT-4o · RAG.',
    hue: 'from-pink-500/40 to-violet-500/30',
    modules: [
      { code: 'CB', name: 'Cognitive Backend', desc: 'Natural-language → QL via GPT-4o.' },
    ],
  },
];

export const allModuleCount = moduleGroups.reduce((sum, g) => sum + g.modules.length, 0);

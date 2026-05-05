// Deutsch — STUB.
//
// Only a handful of strings are translated here as a wiring demonstration.
// Anything missing falls back to English at runtime.
// All entries below are machine-drafted by Claude and need a native review
// (German B2B insurance terminology has subtle conventions that matter to
// the buyer; do not ship to production without a translator pass).

import type { en } from './en';

export const de: Partial<typeof en> = {
  // Nav — short and unambiguous, safe to ship after review.
  'nav.modules':       'Module',
  'nav.howItWorks':    'Funktionsweise',
  'nav.capabilities':  'Funktionen',
  'nav.ai':            'KI',
  'nav.useCases':      'Anwendungsfälle',
  'nav.architecture':  'Architektur',
  'nav.documentation': 'Dokumentation',
  'nav.requestDemo':   'Demo anfragen',
  'nav.menu':          'Menü',
  'nav.openMenu':      'Menü öffnen',
  'nav.closeMenu':     'Menü schließen',

  'locale.switch':     'Sprache wechseln',

  'hero.eyebrow':      'Plattform für Versicherungsverwaltung · Gehostet in Deutschland',
  'hero.cta.demo':     'Persönliche Demo anfragen',
  'hero.cta.seeHow':   'So funktioniert es',
  'hero.compliance':   'Compliance',

  'footer.imprint':    'Impressum',
  'footer.privacy':    'Datenschutz',
  'footer.copyright':  '© {year} Alpha Platform. Alle Rechte vorbehalten.',
  'footer.region':     'Region · Azure Deutschland West-Mitte · Frankfurt',

  // (intentionally untranslated — large body copy needs a translator)
};

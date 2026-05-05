// English — locked-in source of truth.
// Every string the site ever shows in another locale must have a key here.
// Locales other than English can leave entries undefined; the runtime falls back to en.

export const en = {
  // Nav
  'nav.modules':       'Modules',
  'nav.howItWorks':    'How it works',
  'nav.capabilities':  'Capabilities',
  'nav.ai':            'AI',
  'nav.useCases':      'Use cases',
  'nav.architecture':  'Architecture',
  'nav.documentation': 'Documentation',
  'nav.requestDemo':   'Request demo',
  'nav.menu':          'Menu',
  'nav.openMenu':      'Open menu',
  'nav.closeMenu':     'Close menu',

  // Locale toggle
  'locale.switch':     'Switch language',

  // Hero
  'hero.eyebrow':      'Insurance Management Platform · Hosted in Germany',
  'hero.cta.demo':     'Request a tailored demo',
  'hero.cta.seeHow':   'See how it works',
  'hero.compliance':   'Compliance',

  // Footer
  'footer.copyright':  '© {year} Alpha Platform. All rights reserved.',
  'footer.region':     'Region · Azure Germany West Central · Frankfurt',
  'footer.imprint':    'Imprint',
  'footer.privacy':    'Privacy',

  // Banner shown when DE locale is active and translation is incomplete
  'locale.deBeta':     'Deutsche Übersetzung in Arbeit · einige Inhalte sind vorerst auf Englisch',
} as const;

export type I18nKey = keyof typeof en;

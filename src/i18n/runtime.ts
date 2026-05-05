// Runtime locale switcher.
//
// Strategy: HTML is rendered in English at build time (the English content is
// the actual textContent of every element). When the user picks a locale the
// browser swaps `textContent` for any element marked with `data-i18n="key"`.
// Missing keys silently fall back to the English text already in the DOM.
//
// This keeps the static HTML universally readable for crawlers/bots and avoids
// any locale-specific routing or build duplication.

import { en } from './en';
import { de } from './de';

const dictionaries = { en, de } as const;

export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ['en', 'de'];
export const defaultLocale: Locale = 'en';
export const STORAGE_KEY = 'alpha-locale';

export function isLocale(v: string | null): v is Locale {
  return v === 'en' || v === 'de';
}

export function readSavedLocale(): Locale {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (isLocale(v)) return v;
  } catch { /* private mode */ }
  return defaultLocale;
}

export function applyLocale(locale: Locale) {
  document.documentElement.setAttribute('data-locale', locale);
  document.documentElement.lang = locale;

  const dict = dictionaries[locale] as Partial<typeof en>;
  const fallback = en;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n') as keyof typeof en | null;
    if (!key) return;
    const value = dict[key] ?? fallback[key];
    if (value !== undefined) el.textContent = formatTokens(value, el);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label') as keyof typeof en | null;
    if (!key) return;
    const value = dict[key] ?? fallback[key];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });
}

function formatTokens(value: string, el: HTMLElement): string {
  // Replace {year} with current year; extend later for other tokens.
  return value.replace(/\{year\}/g, String(new Date().getFullYear()));
}

export function persistLocale(locale: Locale) {
  try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* ignore */ }
}

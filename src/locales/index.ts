import pt from './pt.json';
import en from './en.json';
import it from './it.json';
import zh from './zh.json';
import es from './es.json';
import fr from './fr.json';

export const resources = {
  pt: { translation: pt },
  en: { translation: en },
  it: { translation: it },
  zh: { translation: zh },
  es: { translation: es },
  fr: { translation: fr },
};

export const languages = [
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
] as const;

export type LanguageCode = typeof languages[number]['code'];

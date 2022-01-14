import fr from './translations/fr.json';
import ar from './translations/ar.json';

export default {
  locales: [
    { code: 'fr', name: 'Français', dir: 'ltr', file: 'fr.json' },
    { code: 'ar', name: 'Arabe', dir: 'rtl', file: 'ar.json'},
  ],
  defaultLocale: 'fr',
  vueI18n: {
    fallbackLocale: 'fr',
    messages: { fr, ar }
  },
  vuex: {
    syncLocale: true,
    syncMessages: true,
  },
  lazy: true,
  seo: true,
  langDir: 'config/translations/'
}

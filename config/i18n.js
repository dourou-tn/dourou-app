import fr from './translations/fr.json';
import ar from './translations/ar.json';
console.log(fr)

export default {
  locales: [
    { code: 'fr', name: 'Français', dir: 'ltr', },
    { code: 'ar', name: 'Arabe', dir: 'rtl',},
  ],
  defaultLocale: 'fr',
  vueI18n: {
    fallbackLocale: 'fr',
    messages: { fr, ar }
  }
}

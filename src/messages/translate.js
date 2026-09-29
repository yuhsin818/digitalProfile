import zhTW from './zh-TW.json';
import en from './en.json';

const dictionaries = { 'zh-TW': zhTW, en };

export function getTranslator(locale) {
  const messages = dictionaries[locale] ?? zhTW;
  return (key, values = {}) => {
    const message = key.split('.').reduce((value, part) => value?.[part], messages);
    if (typeof message !== 'string') return key;
    return message.replace(/\{(\w+)\}/g, (placeholder, name) =>
      Object.prototype.hasOwnProperty.call(values, name) ? String(values[name]) : placeholder
    );
  };
}

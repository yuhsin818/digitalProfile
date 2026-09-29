'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getTranslator } from '@/messages/translate';

const LanguageContext = createContext(null);

export function LanguageProvider({ initialLocale = 'zh-TW', children }) {
  const [locale, setLocale] = useState(initialLocale);
  const t = useMemo(() => getTranslator(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t('content.site.yuHsinPanDigitalPortfolio');
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = `${t('content.site.userExperienceDesign')} · ${t('content.site.webDevelopmentAndInteractiveInstallations')}`;
    }
  }, [locale, t]);

  function changeLocale(nextLocale) {
    if (!['zh-TW', 'en'].includes(nextLocale)) return;
    setLocale(nextLocale);
    document.cookie = `portfolio-locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }

  return (
    <LanguageContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}

export function TranslatedText({ messageKey }) {
  const { t } = useLanguage();
  return t(messageKey);
}

export function ProfileIntro() {
  const { locale, t } = useLanguage();

  if (locale === 'en') {
    return (
      <>
        <p className="max-w-[380px] text-center">{t('content.site.educationSummary')}</p>
        <p className="max-w-[380px] text-center mt-1">{t('content.site.expertiseSummary')}</p>
      </>
    );
  }

  return (
    <>
      <p className="max-w-[380px] text-center"><TranslatedText messageKey="content.site.psychologyGraduateNccu" /></p>
      <p className="max-w-[380px] text-center"><TranslatedText messageKey="content.site.doubleMajorInDigitalContentMinorIn" /></p>
      <p className="max-w-[380px] text-center mt-1"><TranslatedText messageKey="content.site.userExperienceDesign" /></p>
      <p className="max-w-[380px] text-center"><TranslatedText messageKey="content.site.webDevelopmentAndInteractiveInstallations" /></p>
    </>
  );
}

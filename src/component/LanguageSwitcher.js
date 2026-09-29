'use client';

import { useLanguage } from '@/component/LanguageProvider';

export default function LanguageSwitcher() {
  const { locale, changeLocale, t } = useLanguage();

  return (
    <div role="group" aria-label={t('language.label')}
      className="inline-flex shrink-0 items-center rounded-full border border-[#00437B]/15 bg-white/60 p-1 text-sm font-semibold text-[#00437B] shadow-sm backdrop-blur-xl">
      {[['zh-TW', '中文'], ['en', 'English']].map(([value, label], index) => (
        <span key={value} className="inline-flex items-center">
          {index > 0 && <span aria-hidden="true" className="px-1 text-[#6B8795]">/</span>}
          <button type="button" lang={value} aria-pressed={locale === value}
            onClick={() => changeLocale(value)}
            className={`min-h-10 rounded-full px-3 sm:px-4 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008BBF] ${locale === value
              ? 'bg-gradient-to-br from-[#00538f] to-[#003766] text-white shadow-sm'
              : 'hover:bg-[#AAD2E4]/50'}`}>
            {label}
          </button>
        </span>
      ))}
    </div>
  );
}

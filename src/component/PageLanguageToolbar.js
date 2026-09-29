'use client';

import { usePathname } from 'next/navigation';
import LanguageSwitcher from '@/component/LanguageSwitcher';

export default function PageLanguageToolbar() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const isProjectDetail = segments[0] === 'project' && segments.length >= 3;
  if (isProjectDetail) return null;

  // These pages place the switcher alongside their own heading.
  if (pathname === '/' || pathname === '/project') return null;
  const isAboutPage = pathname === '/about';

  return (
    <div className={`flex shrink-0 justify-end px-4 ${isAboutPage ? 'pt-8 sm:pr-[60px] sm:pl-8' : 'pt-4 sm:px-8'}`}>
      <LanguageSwitcher />
    </div>
  );
}

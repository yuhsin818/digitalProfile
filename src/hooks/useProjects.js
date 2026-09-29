'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/component/LanguageProvider';
import { getProjects } from '@/app/data/projectData';

export function useProjects() {
  const { t } = useLanguage();
  return useMemo(() => getProjects(t), [t]);
}

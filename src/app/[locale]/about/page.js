import React from 'react';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About'); // ודאי שיש לך סקשן About ב-JSON של התרגום

  return (
    <div className="pt-32 pb-16 bg-black min-h-screen text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extralight italic mb-8">{t('title')}</h1>
        <p className="leading-relaxed font-light opacity-80">
          {t('description')}
        </p>
      </div>
    </div>
  );
}
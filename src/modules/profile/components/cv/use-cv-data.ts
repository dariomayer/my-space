// src/modules/profile/components/cv/use-cv-data.ts
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import experiencesIt from '@/modules/profile/content/experiences.it.json';
import experiencesEn from '@/modules/profile/content/experiences.en.json';
import educationIt from '@/modules/profile/content/education.it.json';
import educationEn from '@/modules/profile/content/education.en.json';
import skillsIt from '@/modules/profile/content/skills.it.json';
import skillsEn from '@/modules/profile/content/skills.en.json';
import profileIt from '@/modules/profile/content/profile.it.json';
import profileEn from '@/modules/profile/content/profile.en.json';
import certificationsIt from '@/modules/profile/content/certifications.it.json';
import certificationsEn from '@/modules/profile/content/certifications.en.json';

type Experience = {
  company: string;
  role: string;
  period: string;
  achievements: string[] | string;
};

type Education = {
  degree: string;
  institution: string;
  period: string;
};

type SkillCategory = {
  title: string;
  skills: string[];
};

type Certification = {
  title: string;
  institution: string;
  date: string;
};

type CvData = {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github?: string;
  website: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
  skills: SkillCategory[];
  certifications: Certification[];
};

export function useCvData(): CvData {
  const { i18n } = useTranslation();
  const [, forceUpdate] = useState({});
  
  // Forza aggiornamento quando la lingua cambia
  useEffect(() => {
    forceUpdate({});
  }, [i18n.language]); // Dipende da i18n.language

  const language: 'it' | 'en' = i18n.language?.toLowerCase().startsWith('en') ? 'en' : 'it';

  const experiences = language === 'en' ? experiencesEn : experiencesIt;
  const education = language === 'en' ? educationEn : educationIt;
  const skills = language === 'en' ? skillsEn : skillsIt;
  const profile = language === 'en' ? profileEn : profileIt;
  const certifications = language === 'en' ? certificationsEn : certificationsIt;

  const phone = import.meta.env.VITE_PHONE_NUMBER;

  return {
    name: profile.name,
    title: profile.role,
    email: profile.contact.email,
    phone: phone || undefined,
    location: profile.location,
    linkedin: `https://${profile.contact.linkedin}`,
    website: 'https://dariopratola.pages.dev/',
    summary: profile.description,
    experiences,
    education,
    skills,
    certifications,
  };
}
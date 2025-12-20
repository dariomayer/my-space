// src/modules/profile/components/cv/use-cv-data.ts
import { useTranslation } from 'react-i18next';
import experiencesIt from '@/modules/profile/content/experiences.it.json';
import experiencesEn from '@/modules/profile/content/experiences.en.json';
import educationIt from '@/modules/profile/content/education.it.json';
import educationEn from '@/modules/profile/content/education.en.json';
import skillsIt from '@/modules/profile/content/skills.it.json';
import skillsEn from '@/modules/profile/content/skills.en.json';
import profileIt from '@/modules/profile/content/profile.it.json';
import profileEn from '@/modules/profile/content/profile.en.json';

type Experience = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
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
};

export function useCvData(): CvData {
  const { i18n } = useTranslation();
  const language = i18n.language as 'it' | 'en';

  const experiences = language === 'it' ? experiencesIt : experiencesEn;
  const education = language === 'it' ? educationIt : educationEn;
  const skills = language === 'it' ? skillsIt : skillsEn;
  const profile = language === 'it' ? profileIt : profileEn;

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
  };
}
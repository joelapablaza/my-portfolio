import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import lmsImg from '@/public/LMS.png';
import digitalCapiImg from '@/public/digitalcapi.png';
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Computer Systems Analysts',
    location: 'Entre Ríos, Argentina',
    description:
      'Computer Science Fundamental, Software Programming and Development, Systems Analysis, Databases, User Interface Design, among others.',
    icon: React.createElement(LuGraduationCap),
    date: '2009 - 2013',
  },
  {
    title: 'Development & IT Solutions',
    location: 'Misiones, Argentina',
    description:
      'Development and maintenance of the online store. Key responsibilities include Integrated Inventory Manager, modernization, and optimization of content CEO.',
    icon: React.createElement(FaReact),
    date: '2016 - 2020',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Entre Rios, Argentina',
    description:
      'I embarked on a personal initiative with the goal of providing internet access to the most underserved areas, during the COVID-19 (online era).',
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2022',
  },
] as const;

export const projectsData = [
  {
    title: 'LearnIt',
    description:
      'It is a learning platform that features an administration panel (CMS) to manage content, analyze statistics and more. It also includes OTP verification via email.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Express'],
    imageUrl: lmsImg,
    link: 'https://lms-client-theta.vercel.app/',
  },
  {
    title: 'Digital-Capi',
    description:
      'It is a digital store focused on the regional audience to promote local market competition. It has a Content Management System (CMS) leveraging "Payload CMS."',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      ,
      'TRPC',
      'Express',
      'Tailwind',
      'MongoDB',
    ],
    imageUrl: digitalCapiImg,
    link: 'https://digital-capi.onrender.com/',
  },
] as const;

export const skillsData = [
  'JavaScript',
  'TypeScript',
  'Express',
  'Node.js',
  'Git',
  'CI/CD',
  'Jest',
  'React',
  'Next.js',
  'Tailwind',
  'MongoDB',
  'Redux',
  'PostgreSQL',
  'Python',
  'Framer Motion',
] as const;

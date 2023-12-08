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
      'Computer Science Fundamental | Software Programming and Development, Systems Analysis, Databases, User Interface Design, among others.',
    icon: React.createElement(LuGraduationCap),
    date: '2009 - 2013',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Development & IT Solutions',
    location: 'Misiones, Argentina',
    description:
      'Development and maintenance of the online store. Key responsibilities include Integrated Inventory Manager, modernization, and optimization of content CEO.',
    icon: React.createElement(FaReact),
    date: '2016 - 2020',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'It is a learning platform that features an administration panel (CMS) to manage content from the "hero," the "FAQ" section, "categories," and more, all in a visual manner for an enhanced user experience and to analyze statistics. It also includes email verification via OTP.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Express'],
    imageUrl: lmsImg,
  },
  {
    title: 'rmtDev',
    description:
      'It is a digital store focused on the regional audience to promote local market competition. It has a Content Management System (CMS) leveraging "Payload CMS."',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'MongoDB'],
    imageUrl: digitalCapiImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Framer Motion',
] as const;

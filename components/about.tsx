'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating as a{' '}
        <span className="font-medium">Computer Systems Analyst</span>, I decided
        to immerse myself in the hardware space, but gradually, I found myself
        falling more in love with the software. As a result, my journey as a
        developer became a <span className="font-medium">self-discovery</span>{' '}
        over the years.{' '}
        <span className="italic">I evolved into a full-stack developer</span> to
        provide myself with end-to-end solutions. My{' '}
        <span className="underline"> personal</span> development stack typically
        involves{' '}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . Having initially learned to program in{' '}
        <span className="font-medium">Java</span> and later{' '}
        <span className="font-medium">with C#</span>, I find great comfort
        working with <span className="font-medium">TypeScript</span>. Currently,
        I am actively seeking{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I&apos;m
        enjoying time with my children and wife, teaching my daughter to play
        the guitar and piano, watching movies and series, and above all,{' '}
        <span className="font-medium"> researching</span>—delving into whatever
        piques my curiosity. Currently, I&apos;m learning about the global{' '}
        <span className="font-medium">economics, philosophy and stoicism.</span>
      </p>
    </motion.section>
  );
}

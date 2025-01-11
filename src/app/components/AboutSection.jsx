'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2 font-extralight">
        <li>
          <span className="font-bold">Front-End Development</span> : HTML5 &
          CSS3 | Tailwind CSS | Bootstrap | React | JavaScript | Flutter
          (Mobile) | Angular
        </li>
        <li className="mt-2">
          <span className="font-bold">Back-End Development</span> : PHP | Java |
          Python | Firebase
        </li>
        <li className="mt-2">
          <span className="font-bold">Database Management</span> : MySQL |
          Firebase (Mobile)
        </li>
        <li className="mt-2">
          <span className="font-bold">Cloud Computing & Infrastructure</span> :
          AWS | Cloud Computing
        </li>
        <li className="mt-2">
          <span className="font-bold">Version Control System</span> : Git
        </li>
        <li className="mt-2">
          <span className="font-bold">Project Management Tools</span> : JIRA
        </li>
        <li className="mt-2">
          <span className="font-bold">UI/UX Designs</span> : Figma | Canva
        </li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2 font-extralight">
        <li>
          <span className="font-bold">University</span> : Uva Wellassa
          University of Sri Lanka
        </li>
        <li className="mt-2">
          <span className="font-bold">School</span> : B/Dharmapala Collage
          Bandarawela
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2 font-extralight">
        <li>
          <span className="font-bold">
            Java Complete Java Course: From Basics to Advanced.
          </span>{' '}
          (Udemy)
        </li>
        <li className="mt-2">
          <span className="font-bold">Angular Basics.</span> (Simplilearn)
        </li>
        <li className="mt-2">
          <span className="font-bold">Introduction to JIRA.</span> (Simplilearn)
        </li>
        <li className="mt-2">
          <span className="font-bold">
            Postman API Fundamentals Student Expert.
          </span>{' '}
          (Postman)
        </li>
        <li className="mt-2">
          <span className="font-bold">Introduction to Data Science.</span>{' '}
          (Cisco)
        </li>
        <li className="mt-2">
          <span className="font-bold">
            Introduction to Front-End Development.
          </span>{' '}
          (Meta)
        </li>
        <li className="mt-2">
          <span className="font-bold">
            Introduction to Digital Transformation with Google Cloud.
          </span>{' '}
          (Simplilearn)
        </li>
        <li className="mt-2">
          <span className="font-bold">Git for Beginners.</span> (Udemy)
        </li>
        <li className="mt-2">
          <span className="font-bold">Diploma in Web Engineering Course.</span>{' '}
          (Esoft Metro Campus)
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="./images/about-image.jpg" width={500} height={500} alt='about-image'/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-base font-extralight">
            I am an enthusiastic undergraduate. Driven by a curiosity to learn
            and grow, I thrive on crafting seamless user experiences and
            developing robust solutions for modern applications.<br/> With a keen eye
            for design and a dedication to mastering both the creative and
            technical aspects of development, I am eager to bring my skills to
            the real world. Currently, I am seeking an internship opportunity to
            further enhance my expertise, contribute to impactful projects, and
            collaborate with industry professionals.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-4">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

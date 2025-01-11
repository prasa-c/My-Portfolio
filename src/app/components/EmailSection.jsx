import React from 'react';
import GithubIcon from '../../../public/images/projects/github-icon.svg';
import LinkedinIcon from '../../../public/images/projects/linkedin-icon.svg';
import GmailIcon from '../../../public/images/projects/gmail-icon.svg';
import WhatsappIcon from '../../../public/images/projects/whatsapp-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className="my-5 md:my-5 py-10 gap-4 relative" id='contact'>
      
        <h5 className="text-2xl font-bold text-white my-2">Let Us Connect</h5>
        <p className="text-[#ADB7BE] mb-16 mx-w-md">
          {' '}
          I would love to hear from you! Whether you have a project idea, a question, or just want to say hello, feel free to reach out. You can connect with me directly via <span className='italic text-primary-400'>hmc.prasad999@gmail.com</span> or through my social media profiles:
        </p>
        <div className="socials flex flex-rows gap-8 justify-center">
          <Link href="https://github.com/prasa-c" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" className='w-16' />
          </Link>
          <Link href="https://www.linkedin.com/in/chathuranga-prasad-014857308/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className='w-16'/>
          </Link>
          <Link href="mailto:hmc.prasad999gmail.com" target="_blank">
            <Image src={GmailIcon} alt="Gmail Icon" className='w-16' />
          </Link>
          <Link href="https://wa.me/+94719634045" target="_blank">
            <Image src={WhatsappIcon} alt="Whatsapp Icon" className='w-16' />
          </Link>
        </div>
        <div className='my-5'>
 
        </div>
    </section>
  );
};

export default EmailSection;

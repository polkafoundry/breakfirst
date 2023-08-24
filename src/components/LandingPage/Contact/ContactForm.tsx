'use client';

import Image from 'next/image';
import LinkStyled from '@/components/Base/LinkStyled';
import Floating from '@/assets/images/LandingPage/contact-form.png';
import './styles.css';

// interface IFormInput {
//   name: string;
//   email: string;
//   projectName: string;
//   projectWebsite: string;
//   size: string;
//   message: string;
// }

const ContactForm = () => {
  return (
    <div className="z-20 bg-black px-8 xs:px-12 py-20 lg:grid lg:grid-cols-3 lg:px-15 xl:px-20">
      <div className="mx-auto mb-5 block max-w-[400px] lg:hidden">
        <Image src={Floating} alt="" />
      </div>
      <div className="lg:col-span-3 lg:pr-15 xl:col-span-2">
        <h3 className="mb-8 font-archivo text-22/28 xs:text-3xl font-bold uppercase lg:mb-14 lg:text-5xl">
          Don’t settle for mediocrity. If you think your product has the potential to disrupt the industry,{' '}
          <span className="contact-form-text-gradient">let’s talk</span>.
        </h3>
        <LinkStyled href="https://forms.gle/MXmNoPNY3hDSGC1H6" openInNewTab={true}>
          <button className="w-full bg-[#193DE7] py-3 font-archivo font-bold uppercase tracking-wider lg:w-auto lg:px-10 lg:text-lg">
            Apply Here
          </button>
        </LinkStyled>
      </div>

      {/* <div className="mb-7 grid grid-cols-2 gap-x-[60px] gap-y-9 pr-[540px]">
        <div>
          <input className="form-input" placeholder="Your full name" />
        </div>
        <div>
          <input className="form-input" placeholder="Email" />
        </div>
        <div>
          <input className="form-input" placeholder="Project name" />
        </div>
        <div>
          <input className="form-input" placeholder="Project website" />
        </div>
        <div className="col-span-2">
          <input className="form-input" placeholder="What is the round size you are targeting?" />
        </div>
        <div className="col-span-2">
          <textarea className="form-input" placeholder="Short message to us (max 200 words)" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" className="h-5 w-5" />
        <p>
          I accept the{' '}
          <span className="font-bold text-[#3155FF] underline">
            <a href="#" target="_blank" rel="noopener noreferrer">
              terms and conditions
            </a>
          </span>{' '}
          of personal data processing.
        </p>
      </div> */}
      <div className="hidden max-w-[400px] xl:block">
        <Image src={Floating} alt="" />
      </div>
    </div>
  );
};

export default ContactForm;

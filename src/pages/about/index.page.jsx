/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Aditya Shirsatrao - About',
  description: 'Learn about my journey, values, and commitment to quality full-stack and AI-driven solutions.',
  keywords: [
    'Aditya Shirsatrao',
    'About Aditya Shirsatrao',
    'About me',
    'Full Stack Developer Journey',
    'Developer Story',
    'Professional Web Development',
    'Software Engineering Expertise',
    'Web Development Services',
    'AI ML Development',
    'Developer Profile',
    'Quality Software Solutions',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;

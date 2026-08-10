/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Aditya Shirsatrao - Full Stack Developer Portfolio',
  description: 'Full Stack Developer and AI Engineer from India, crafting sleek web, desktop, and mobile apps. Building distributed systems, AI-powered products, and immersive digital experiences.',
  keywords: [
    'Aditya Shirsatrao',
    'Full Stack Developer',
    'Portfolio',
    'Web Development',
    'React Developer',
    'Machine Learning',
    'Data Science',
    'Developer',
    'Web Applications',
    'Responsive Design',
    'Distributed Systems',
    'Modern Web Development',
    'Next.js',
    'React',
    'Node.js',
    'Python',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;

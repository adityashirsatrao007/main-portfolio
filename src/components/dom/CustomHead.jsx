import NextHead from 'next/head';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import { A } from '@src/constants/assets';

const SITE_URL = 'https://adityashirsatrao007.github.io';
const SITE_URL_WITH_BASE = `${SITE_URL}/main-portfolio`;
const OG_IMAGE = `${SITE_URL_WITH_BASE}/og.png`;

const getSchema = () => ({
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Aditya Shirsatrao',
  jobTitle: 'Full Stack Developer',
  url: SITE_URL,
  image: OG_IMAGE,
  email: 'mailto:adityashirsatrao007@gmail.com',
  sameAs: ['https://www.linkedin.com/in/adityashirsatrao', 'https://github.com/adityashirsatrao007', 'https://leetcode.com/u/adityashirsatrao007'],
  alumniOf: [
    { '@type': 'Organization', name: 'N. K. Orchid College of Engineering & Technology' },
    { '@type': 'Organization', name: 'Unified Mentor Pvt. Ltd' },
  ],
});

function CustomHead({ title = '', description, keywords, path = '' }) {
  const pageUrl = `${SITE_URL_WITH_BASE}${path}`;
  return (
    <>
      <NextHead>
        {/* General Meta Tags */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta name="robots" content={process.env.NODE_ENV !== 'development' ? 'index,follow' : 'noindex,nofollow'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keywords && keywords.length ? keywords.join(',') : keywords} />
        <meta name="author" content="Aditya Shirsatrao" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Solapur, Maharashtra, India" />

        {/* Canonical and Title */}
        <link rel="canonical" href={pageUrl} />
        <title>{title}</title>

        {/* OpenGraph Meta Tags */}
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Aditya Shirsatrao" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:title" content={title} />

        {/* Favicons */}
        <link rel="icon" href={A('/favicon.ico')} />
        <link rel="apple-touch-icon" sizes="180x180" href={A('/apple-touch-icon.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={A('/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={A('/favicon-16x16.png')} />
        <link rel="manifest" href={A('/site.webmanifest')} />
        <link rel="mask-icon" href={A('/safari-pinned-tab.svg')} color="#333333" />
        <meta name="msapplication-TileColor" content="#f0f4f1" />
        <meta name="theme-color" content="#f0f4f1" />

        {/* Schema */}
        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }} />
      </NextHead>
      <NextSeo title={title} description={description} />
    </>
  );
}

CustomHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  path: PropTypes.string,
};

CustomHead.defaultProps = {
  keywords: [],
  path: '',
};

export default CustomHead;

import Document, { Head, Html, Main, NextScript } from 'next/document';
import { A } from '@src/constants/assets';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href={A('/fonts/NeueHaasDisplayBold.woff2')} as="font" type="font/woff2" />
          <link href={A('/fonts/NeueHaasDisplayLight.woff2')} as="font" type="font/woff2" />
          <link href={A('/fonts/NeueHaasDisplayLightItalic.woff2')} as="font" type="font/woff2" />
          <link href={A('/fonts/NeueHaasDisplayMedium.woff2')} as="font" type="font/woff2" />
          <link href={A('/fonts/NeueHaasDisplayRoman.woff2')} as="font" type="font/woff2" />
          <link href={A('/fonts/NeueHaasDisplayRomanItalic.woff2')} as="font" type="font/woff2" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

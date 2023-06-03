import Head from 'next/head.js';
import Script from 'next/script.js';
import { memo } from 'react';

const DATA_LAYER_SCRIPT =
  `window.dataLayer=window.dataLayer||[];` +
  `window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});`;

export interface GoogleTagManagerScriptProps {
  id: string;
}

export const GoogleTagManagerScript = memo<GoogleTagManagerScriptProps>(
  function GoogleTagManagerScript({ id }) {
    const src = `https://www.googletagmanager.com/gtm.js?id=${id}`;

    return (
      <>
        <Head>
          <link rel='preload' as='script' href={src} />
        </Head>
        {/* Load GTM */}
        <Script async={true} src={src} />
        {/* Initialize data layer */}
        <Script
          id='gtm'
          dangerouslySetInnerHTML={{
            __html: DATA_LAYER_SCRIPT,
          }}
        />
        {/* Fallback for JS disabled environment */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${id}`}
            height={0}
            width={0}
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          />
        </noscript>
      </>
    );
  }
);

import { GoogleTagManagerScript } from './GoogleTagManagerScript';
import { GTM_ID } from '@/lib/tracking/gtm';

export default function TrackerScript() {
  return (
    <>
      {GTM_ID && (
        <GoogleTagManagerScript id={GTM_ID} />
      )}
    </>
  );
}

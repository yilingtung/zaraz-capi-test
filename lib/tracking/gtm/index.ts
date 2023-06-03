import getWindowProp from "@/utils/getWindowProp";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

interface CustomEventVariables {
  [key: string]: unknown;
}

export class GoogleTagManager {
  /**
   * @see [Tag Manager Help/Custom event trigger](https://support.google.com/tagmanager/answer/7679219)
   */
  public fireCustomEvent(
    eventName: string,
    variables: CustomEventVariables = {}
  ): void {
    const dataLayer = getWindowProp('dataLayer');

    if (!dataLayer) return;

    dataLayer.push({
      ...variables,
      event: eventName,
    });
  }
}

export const gtm = new GoogleTagManager();

export const GTM_ID = 'GTM-MLSVH59';

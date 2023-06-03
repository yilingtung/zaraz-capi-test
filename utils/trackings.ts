import { gtm } from "@/lib/tracking/gtm"

export const trackPageView = (url: string) => {
  gtm.fireCustomEvent('page_view', {
	url
  })
}
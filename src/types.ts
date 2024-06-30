export const enum FacebookPixelEvent {
  AddPaymentInfo = 'AddPaymentInfo',
  AddToCart = 'AddToCart',
  AddToWishlist = 'AddToWishlist',
  CompleteRegistration = 'CompleteRegistration',
  Contact = 'Contact',
  CustomizeProduct = 'CustomizeProduct',
  Donate = 'Donate',
  FindLocation = 'FindLocation',
  InitiateCheckout = 'InitiateCheckout',
  Lead = 'Lead',
  PageView = 'PageView',
  Purchase = 'Purchase',
  Schedule = 'Schedule',
  Search = 'Search',
  StartTrial = 'StartTrial',
  SubmitApplication = 'SubmitApplication',
  Subscribe = 'Subscribe',
  ViewContent = 'ViewContent',
}

export interface FacebookConversionAPIOptions {
  accessToken: string
  pixelId: string
  actionSource:
    | 'email'
    | 'website'
    | 'app'
    | 'phone_call'
    | 'physical_store'
    | 'system_generated'
    | 'business_messaging'
    | 'other'
}

export interface UserData {
  emails: string[]
  phones: string[]
  clientIpAddress: string
  clientUserAgent: string
  fbc: string
  fbp: string
}

export interface SendEventOptions {
  eventName: FacebookPixelEvent | string
  eventId?: string
  customData?: Record<string, any>
  sourceUrl?: string
}

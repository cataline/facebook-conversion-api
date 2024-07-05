import { facebookConversionAPI } from '@/index'

facebookConversionAPI.init({
  accessToken: 'TOKEN',
  pixelId: 'PIXEL_ID',
  actionSource: 'website',
})

facebookConversionAPI.setUserData({
  emails: [],
  phones: [],
  clientIpAddress: '0.0.0.0',
  clientUserAgent: navigator.userAgent,
  fbc: 'fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890',
  fbp: 'fb.1.1558571054389.1098115397',
  country: 'br',
  firstName: 'John',
  lastName: 'Doe',
  city: 'São Paulo',
  state: 'SP',
  zip: '000-000',
  dateOfBirth: '01/01/2000',
  gender: 'm',
  facebookLoginId: '1234567890',
  externalId: '123456789',
})

facebookConversionAPI.trackEvent({
  name: 'CompleteRegistration',
  sourceUrl: 'https://example.com',
  id: '123456789',
  params: {
    currency: 'USD',
    value: 100,
  },
})

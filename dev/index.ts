import { facebookConversionAPI } from '@/index'

facebookConversionAPI.init({
  accessToken:
    'EAAGeZBZCoj014BOZBmJqtexjNh4xPupEoa5EbRz9mdTBJMY1Qg37SWI1mKfNfgySLMlK4qlgHtj3G4muoVm1Ff7SEf65HQhhsgjJOuPDXAEu8If02pdztAD9tDZByRM6YmPS76RLV9h6BnRIZBkTgCTynkcJhZBN6wm8N6Y6MZBj9rUbE1owZACvbGIZAiQANzVU4PwZDZD',
  pixelId: '438653592320316',
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

facebookConversionAPI.sendEvent({
  eventName: 'CompleteRegistration',
  sourceUrl: 'https://example.com',
  eventId: '123456789',
  customData: {
    currency: 'USD',
    value: 100,
  },
})

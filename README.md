# Facebook Conversion API

> Node.js wrapper for [Facebook's Conversion API](https://developers.facebook.com/docs/marketing-api/conversions-api/)

This JS/TS library allows you to track events with Facebook's Conversion API, whether on the **client-side** or **server-side**, helping you capture more accurate data for your Facebook ad campaigns.

## Install

```bash
npm install @cataline/facebook-conversion-api
```

## Usage

Set up the library with your credentials and settings.

```ts
import { facebookConversionAPI } from '@cataline/facebook-conversion-api'

facebookConversionAPI.init({
  accessToken: 'YOUR_ACCESS_TOKEN',
  pixelId: 'YOUR_PIXEL_ID',
  actionSource: 'website',
})
```

Read more on how to get your [access token](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started/#access-token).

## Setting User Data

The more user information you provide, the better the event attribution.

```ts
facebookConversionAPI.setUserData({
  emails: ['email_1@example.com', 'email_2@example.com'],
  phones: ['+1234567890', '+0987654321'],
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '19970216',
  gender: 'm',
  city: 'São Paulo',
  state: 'SP',
  zip: '01100000',
  country: 'br',
  clientIpAddress: '192.168.1.1',
  clientUserAgent: navigator.userAgent,
  fbc: 'fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890',
  fbp: 'fb.1.1558571054389.1098115397',
  facebookLoginId: '1234567890',
  externalId: '123456789',
})
```

Learn how to obtain [fbp/fpc identifiers](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/).

We will hash the required data using SHA-256, but you must provide the rest according to [Facebook’s documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters) to ensure accurate and effective event tracking.

## Sending Events

Send events to Facebook Conversion API. This method supports all standard Facebook pixel events and custom events.

```ts
facebookConversionAPI.trackEvent({
  eventName: 'Purchase', // Use standard event name or custom event name
  eventId: 'unique-event-id', // Optional: for deduplication
  sourceUrl: 'https://your-site.com/thank-you',
  customData: {
    currency: 'USD',
    value: 99.99,
    contents: [
      {
        id: 'product123',
        quantity: 1,
        delivery_category: 'home_delivery',
      },
    ],
  },
})
```

### Event Deduplication

Understand how [event deduplication](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events?locale=en_US) works using event IDs.

## License

This project is licensed under the MIT License.

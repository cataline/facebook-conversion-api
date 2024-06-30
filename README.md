# Facebook Conversion API

> Node.js wrapper for [Facebook's Conversion API](https://developers.facebook.com/docs/marketing-api/conversions-api/)

This JS/TS library allows you to track events with Facebook's Conversion API, whether on the `client-side` or `server-side`, helping you capture more accurate data for your Facebook ad campaigns.

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

Read more on how to get your [access token](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started/#access-token)

## Setting User Data

The more user information you provide, the better the event attribution.

```ts
facebookConversionAPI.setUserData({
  emails: ['email_1@example.com', 'email_2@example.com'], // or null
  phones: ['+1234567890', '+0987654321'], // or null
  clientIpAddress: '192.168.1.1',
  clientUserAgent: navigator.userAgent,
  fbc: 'fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890', // or null
  fbp: 'fb.1.1558571054389.1098115397', // or null
})
```

Learn how to obtain [fbp/fpc identifiers](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/).

## Sending Events

Send events to Facebook Conversion API. This method supports all standard Facebook pixel events and custom events.

```ts
facebookConversionAPI.sendEvent({
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

Understand how [event deduplication](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events?locale=en_US) works using event IDs.

## Using Enums for Standard Events

For better autocomplete and validation of standard event names, you can use the `FacebookPixelEvent` enum:

```ts
import { FacebookPixelEvent } from '@cataline/facebook-conversion-api'

facebookConversionAPI.sendEvent({
  eventName: FacebookPixelEvent.Donate,
})
```

## License

This project is licensed under the MIT License.

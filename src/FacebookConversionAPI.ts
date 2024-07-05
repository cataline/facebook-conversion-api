import { FacebookConversionAPIOptions, UserData, SendEventOptions } from '@/types'
import { hashUserData } from '@/utils'
import { ofetch } from 'ofetch'

class FacebookConversionAPI {
  private accessToken = ''
  private pixelId = ''
  private actionSource = ''
  private defaultUserData: Partial<UserData> = {}

  init(options: FacebookConversionAPIOptions) {
    this.accessToken = options.accessToken
    this.pixelId = options.pixelId
    this.actionSource = options.actionSource
  }

  setUserData(userData: Partial<UserData>) {
    this.defaultUserData = { ...this.defaultUserData, ...userData }
  }

  private getUserData() {
    const fieldsToHash: Record<string, string> = {
      emails: 'em',
      phones: 'ph',
      firstName: 'fn',
      lastName: 'ln',
      gender: 'ge',
      dateOfBirth: 'db',
      city: 'ct',
      state: 'st',
      zip: 'zp',
      country: 'country',
      externalId: 'external_id',
    }

    const hashedData: Record<string, any> = {}

    Object.keys(fieldsToHash).forEach((field) => {
      const value = this.defaultUserData[field as keyof UserData]
      if (Array.isArray(value)) {
        hashedData[fieldsToHash[field]] = value.map(hashUserData)
      } else if (value) {
        hashedData[fieldsToHash[field]] = hashUserData(value)
      }
    })

    return {
      ...hashedData,
      client_ip_address: this.defaultUserData.clientIpAddress,
      client_user_agent: this.defaultUserData.clientUserAgent,
      fbc: this.defaultUserData.fbc,
      fbp: this.defaultUserData.fbp,
      fb_login_id: this.defaultUserData.facebookLoginId,
    }
  }

  async sendEvent(options: SendEventOptions) {
    try {
      const response = await ofetch(`https://graph.facebook.com/v20.0/${this.pixelId}/events`, {
        method: 'post',
        body: {
          data: [
            {
              event_name: options.eventName,
              event_time: Math.floor(Date.now() / 1000),
              event_id: options.eventId,
              user_data: this.getUserData(),
              custom_data: options.customData,
              event_source_url: options.sourceUrl,
              action_source: this.actionSource,
            },
          ],
          access_token: this.accessToken,
        },
      })

      return response
    } catch (httpError: any) {
      if (httpError.data?.error) {
        console.error(httpError.data.error)
      }
    }
  }
}

export const facebookConversionAPI = new FacebookConversionAPI()

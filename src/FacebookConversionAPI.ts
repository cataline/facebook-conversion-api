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
    return {
      em: this.defaultUserData.emails?.map(hashUserData) || [],
      ph: this.defaultUserData.phones?.map(hashUserData) || [],
      client_ip_address: this.defaultUserData.clientIpAddress,
      client_user_agent: this.defaultUserData.clientUserAgent,
      fbc: this.defaultUserData.fbc,
      fbp: this.defaultUserData.fbp,
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

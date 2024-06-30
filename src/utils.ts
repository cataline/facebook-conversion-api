import { SHA256, enc } from 'crypto-js'

export function hashUserData(data: string): string {
  return SHA256(data).toString(enc.Hex)
}

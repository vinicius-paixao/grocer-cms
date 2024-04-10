export interface IClients {
  firstName: string,
  lastName: string,
  email: string,
  document: string,
  phoneNumber: string,
  birthDate: string,
  active: boolean,
  contractAccountId: string,
  contractAccount: string,
  id: string,
  userName: string,
  normalizedUserName: string,
  normalizedEmail: string,
  emailConfirmed: boolean,
  passwordHash: string,
  securityStamp: string,
  concurrencyStamp: string,
  phoneNumberConfirmed: boolean,
  twoFactorEnabled: boolean,
  lockoutEnd: any,
  lockoutEnabled: boolean,
  accessFailedCount: number
}

export interface IAdmin {
  firstName: string,
  lastName: string,
  email: string,
  document: string,
  phoneNumber: string,
  birthDate: any,
  active: boolean
  id?: string
}

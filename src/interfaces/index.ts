export interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

export interface ICreateCategory {
  name: string
}
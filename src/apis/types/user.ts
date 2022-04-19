export interface IUser {
  name: string
  age: number
  avatar_url: string
  permissions: string[]
}

export interface ILogin {
  user: IUser
  token: string
}

export interface ILoginForm {
  account: string
  password: string
}

//用户模型
interface UserModel {
  avatar: string
  permissions: string[]
  id: number
  name: string
  sex: number
  email: string
  real_name?: any
  home?: any
  weibo?: any
  wechat?: any
  github?: any
  qq?: any
  wakatime?: any
  email_verified_at: string
  mobile_verified_at?: any
  created_at: string
  updated_at: string
  lock?: any
  credit1?: any
  credit2?: any
  credit3?: any
  credit4?: any
  credit5?: any
  credit6?: any
  favour_count: number
  favorite_count: number
  is_super_admin: boolean
  roles: RoleModel[]
}

//角色模型
type RoleModel = {
  id: number
  title: string
  name: string
  site_id: number
  guard_name: string
  created_at: string
  updated_at: string
  permissions: PermissionModel[]
}

//权限模型
type PermissionModel = {
  id: number
  title: string
  name: string
  site_id: number
  module: string
  guard_name: string
  created_at: string
  updated_at: string
}
//模块模型
type ModuleModel = {
  id: number
  title: string
  name: string
  version: string
  author: string
  preview: string
  permissions: {
    title: string
    items: {
      title: string
      name: string
    }[]
  }[]
  pivot: {
    is_default: boolean
  }
}

//站点模型
type SiteModel = {
  id: number
  title: string
  url: string
  tel: string
  email: string
  address: string
  wechat: string
  qq: string
  icp: string
  copyright: string
  logo: string
  description: string
  keywords: string
  config?: any
  user_id: number
  created_at: string
  updated_at: string
  module_id: number
  master: UserModel
  module: ModuleModel
}

//系统模型
type SystemModel = {
  id: number
  title: string
  url?: any
  tel?: any
  email?: any
  address?: any
  wechat?: any
  qq?: any
  icp?: any
  copyright?: any
  logo?: any
  icon?: any
  description?: any
  keywords?: any
  created_at: string
  updated_at: string
  config: {
    code: {
      expire: string
      length: number
      timeout: number
    }
    aliyun: {
      access_key_id?: any
      sms_sign_name: string
      access_key_secret?: any
    }
    avatar: {
      width: string
      height: string
    }
    upload: {
      size: number
      mimes: string
    }
  }
}

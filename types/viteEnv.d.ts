/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_NAME: string
  VITE_API_URL: string
  VITE_MOCK_ENABLE: boolean
  VITE_ROUTER_AUTOLOAD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

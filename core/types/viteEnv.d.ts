/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

interface ImportMetaEnv {
  VITE_API_URL: string
  VITE_MOCK_ENABLE: boolean
  VITE_ROUTER_AUTOLOAD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

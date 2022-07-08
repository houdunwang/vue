/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

interface ImportMetaEnv {
  VITE_API_URL: string
  VITE_MOCK_ENABLE: boolean
  VITE_BUILD_CORE_ROUTE: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

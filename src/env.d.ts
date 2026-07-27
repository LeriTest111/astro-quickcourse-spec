/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SHOWCASE_MODE?: "working" | "approved";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

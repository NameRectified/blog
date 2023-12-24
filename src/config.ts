// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Master Of Universe";
export const SITE_DESCRIPTION =
  "This is the place where I will share my journey. It's more of a journal than a blog";
export const TWITTER_HANDLE = "@masterofuniverse";
export const MY_NAME = "Master Of Universe";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;

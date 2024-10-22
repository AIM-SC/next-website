import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#000',
            '--tw-prose-headings': '#000',
            '--tw-prose-lead': '#000',
            '--tw-prose-links': '#000',
            '--tw-prose-bold': '#000',
            '--tw-prose-counters': '#000',
            '--tw-prose-bullets': '#000',
            '--tw-prose-hr': '#000',
            '--tw-prose-quotes': '#000',
            '--tw-prose-quote-borders': '#000',
            '--tw-prose-captions': '#000',
            '--tw-prose-kbd': '#000',
            '--tw-prose-code': '#000',
            '--tw-prose-pre-code': '#000',
            '--tw-prose-pre-bg': '#fff',
            '--tw-prose-th-borders': '#000',
            '--tw-prose-td-borders': '#000',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;

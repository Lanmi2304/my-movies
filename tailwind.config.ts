import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      spacing: {
        header: "var(--header-height)",
        "header-navigation": "var(--header-navigation-height)",
      },

      colors: {
        /* --------------- Default background color of <body />...etc --------------- */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* -------------------------- Default border color -------------------------- */
        border: "hsla(var(--border))",

        /* --------- Border color for inputs such as Input, Select, Textarea -------- */
        input: "hsl(var(--input))",
        placeholder: "hsl(var(--placeholder))",

        /* --------------------------- Used for focus ring -------------------------- */
        ring: "hsl(var(--ring))",

        /* ------------------------ Primary colors for Button ----------------------- */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        /* ----------------------- Secondary colors for Button ---------------------- */
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        /* --------- Muted backgrounds such as TabsList, Skeleton and Switch -------- */
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        /* ------------------------ Background color for Card ----------------------- */
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* - Background color for popovers such as DropdownMenu, HoverCard, Popover - */
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        /* -- Used for accents, hover effects on DropdownMenuItem, SelectItem, etc -- */
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        /* ------------------------- Used for info messages ------------------------- */
        info: "hsl(var(--info))",
        warning: "hsl(var(--warning))",
        destructive: "hsl(var(--destructive))",
        success: "hsl(var(--success))",
      },

      /* -------------------------------------------------------------------------- */
      /*                                   Config                                   */
      /* -------------------------------------------------------------------------- */
      fontFamily: {
        heading: ["var(--font-mona-sans)"],
        body: ["var(--font-mona-sans)"],
        "titillium-web": "var(--font-titillium-web)",
      },

      /* ---------------- Border radius for card, input and buttons --------------- */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xs: "calc(var(--radius) - 12px)",
      },

      /* ------------------------ Keyframes and animations ------------------------ */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      /* ---------------------------- Box shadow styles --------------------------- */
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",

        "actions-primary": "var(--shadow-actions-primary)",
        "actions-primary-hover": "var(--shadow-actions-primary-hover)",
        "actions-primary-active": "var(--shadow-actions-primary-active)",
        "actions-secondary": "var(--shadow-actions-secondary)",
        "actions-secondary-hover": "var(--shadow-actions-secondary-hover)",
        "actions-secondary-active": "var(--shadow-actions-secondary-active)",

        card: "var(--shadow-card)",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
export default config;

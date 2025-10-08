/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // dark mode enable
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Ye sab CSS variables ke base par kaam karenge
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // Custom brand colors (variables already root me define hai)
        "heritage-brown": "hsl(var(--heritage-brown))",
        "traditional-gold": "hsl(var(--traditional-gold))",
        "spice-orange": "hsl(var(--spice-orange))",
        "royal-blue": "hsl(var(--royal-blue))",
      },

      // Agar fixed gradients chahiye to variables ka use karo
      backgroundImage: {
        "gradient-heritage": "var(--gradient-heritage)",
        "gradient-warm": "var(--gradient-warm)",
        "gradient-royal": "var(--gradient-royal)",
      },

      boxShadow: {
        warm: "var(--shadow-warm)",
        gold: "var(--shadow-gold)",
        elegant: "var(--shadow-elegant)",
      },

      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
};

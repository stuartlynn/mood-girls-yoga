import { defaultTheme } from "tailwindcss";

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#BACAC0",
                secondary: "#FDCBCA",
                tertiary: "#F4E7D4",
                highlight: "#CA9B8B",

                "accent-1": "#55717F",
                "accent-2": "#55717F",
                "accent-3": "#720F1D",
                "accent-4": "#C0C9FD",
                "accent-5": "#CBD390",
                success: "#0070f3",
                cyan: "#79FFE1",
                background: "#f9f0e6"
            },
            fontFamily: {
                sans: ["Dense Regular", "sans-serif"],
                serif: ["Dense Regular", "serif"]
            },
            spacing: {
                28: "7rem"
            },
            letterSpacing: {
                tighter: "-.04em"
            },
            lineHeight: {
                tight: 1.2
            },
            fontSize: {
                "5xl": "2.5rem",
                "6xl": "2.75rem",
                "7xl": "4.5rem",
                "8xl": "6.25rem"
            },
            boxShadow: {
                sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
                md: "0 8px 30px rgba(0, 0, 0, 0.12)"
            }
        }
    }
};

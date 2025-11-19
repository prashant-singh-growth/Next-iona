/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./modules/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          'secondary': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
         'lora': ['"Lora"', 'serif'],
        },
        colors: {
          background: "#F9FAFB",
          card: "#FFFFFF",
          primaryText: "#1A2040",
          secondaryText: "#5A6381",
          accent: "#4F46E5",
          brandBlue: "#4F46E5",
          brandRed: "#F43F5E",
          lightGray: "#EEF1F8",
          darkBlue: "#1A2040",
          glass: "rgba(255, 255, 255, 0.7)",
          highlight: "#E9D5FF",
          success: "#10B981",
          warning: "#FBBF24",
          error: "#EF4444",
          info: "#3B82F6",
          primary:"#2A2564",
          themeGray:"#f3f3f5",
          darkVoilet:"#160E38"
        },
        backgroundImage: {
          'main-gradient': 'linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%)',
          'blue-gradient': 'linear-gradient(90deg, #4F46E5 0%, #818CF8 100%)',
          'blue-red-gradient': 'linear-gradient(90deg, #4F46E5 0%, #F43F5E 100%)',
          'purple-gradient': 'linear-gradient(135deg, #9333EA 0%, #4F46E5 100%)',
          'mesh-gradient': 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(244, 63, 94, 0.1) 100%)',
          'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
        },
        boxShadow: {
          'custom': '0 4px 20px rgba(79, 70, 229, 0.1)',
          'hover': '0 8px 30px rgba(79, 70, 229, 0.15)',
          'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
          'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
          'glow': '0 0 20px rgba(79, 70, 229, 0.4)',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 4s infinite',
          'spin-slow': 'spin 8s linear infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
        },
        backdropBlur: {
          xs: '2px',
          sm: '4px',
          md: '6px',
          lg: '8px',
          xl: '12px',
          '2xl': '16px',
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
        },
        screens : {
         slg: { max: "1250px",min:'900px' },
         ssm: { max: "500px",min:'400px' },
        }
      },
    },
    plugins: [],
  }
  
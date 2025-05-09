import { defineConfig } from 'tailwindcss';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-medium': 'var(--primary-medium)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        'primary-lighter': 'var(--primary-lighter)',

        light: 'var(--light)',
        lighter: 'var(--lighter)',
        lightest: 'var(--lightest)',
        white: 'var(--white)',
        neutral: 'var(--neutral)',

        dark: 'var(--dark)',
        darker: 'var(--darker)',
        'dark-alt': 'var(--dark-alt)',
        'dark-medium': 'var(--dark-medium)',

        error: 'var(--error)',
        'error-light': 'var(--error-light)',
        'error-dark': 'var(--error-dark)',
        'error-medium': 'var(--error-medium)',

        success: 'var(--success)',
        'success-light': 'var(--success-light)',
        'success-dark': 'var(--success-dark)',
        'success-darker': 'var(--success-darker)',

        information: 'var(--information)',
        'information-light': 'var(--information-light)',
        'information-dark': 'var(--information-dark)',

        warning: 'var(--warning)',

        purple: 'var(--purple)',
        orange: 'var(--orange)',
        yellow: 'var(--yellow)',
      },

      fontSize: {
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
      },
      lineHeight: {
        14: '14px',
        16: '16px',
        18: '18px',
        22: '22px',
        24: '24px',
        26: '26px',
        32: '32px',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '32px',
      },
      textDecoration: {
        none: 'none',
        underline: 'underline',
      },
      textTransform: {
        uppercase: 'uppercase',
      },
    },
  },
  plugins: [],
};

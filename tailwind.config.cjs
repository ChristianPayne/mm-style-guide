const config = {
  // mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: 'class',

  variants: {
    extend: {
      ringWidth: ['hover'],
    }
  },

  theme: {
    minWidth: {
      '1/3': '33%',
      '1/4': '25%',
      '1/5': '20%',
    },
    maxWidth: {
      '1/3': '33%',
      '1/4': '25%',
      '1/5': '20%',
    },
    colors: {
      mm: {
        background: {
          DEFAULT:'#ffffff',
          dark:'#2d2d2d',
          trim: {
            DEFAULT: '#f2f2f2',
            dark: '#505050',
          }
        },
        selection: '#acacaf',
        text: {
          DEFAULT: '#505050',
          dark: '#ffffff',
          subtle: '#747678',
        },
        blue: {
          DEFAULT: '#4383a5',
          hover: '#52a1cb',
        },
        lightblue: {
          DEFAULT: '#52b4ff',
          hover: '#51a8ff',
        },
        green: {
          DEFAULT: '#598b72',
          hover: '#71b191',
        },
        cyan: {
          DEFAULT: '#6fb7bc',
          hover: '#85dce2',
        },
        pink: {
          DEFAULT: '#e2d6e7',
          hover: '#faecff',
        },
        purple: {
          DEFAULT: '#7c3aed',
          hover: '#923eff',
        },
        warn: {
          DEFAULT: '#FF3333',
          hover: '#ff0000',
        }, 
        disabled: {
          DEFAULT: '#d8d8d8',
        },
      },
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;

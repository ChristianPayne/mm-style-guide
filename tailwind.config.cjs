const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      mm: {
        background: {
          DEFAULT:'#ffffff',
          dark:'#2d2d2d',
        },
        trim: '#f2f2f2',
        selection: '#acacaf',
        text: {
          DEFAULT: '#505050',
          subtle: '#747678'
        },
        accent: {
          DEFAULT: '#4383a5',
          blue: '#52b4ff',
          green: '#598b72',
          cyan: '#6fb7bc',
          pink: '#e2d6e7',
          purple: '#7c3aed',
        },
        disabled: {
          DEFAULT: '#d8d8d8',
        },
        warn: '#ff0000', 
      },
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;

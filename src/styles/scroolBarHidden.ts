import { PluginAPI } from 'tailwindcss/types/config';

function scrollbarHidePlugin({ addUtilities }: PluginAPI) {
  addUtilities({
    '.scrollbar-hidden': {
      /* Firefox */
      'scrollbar-width': 'none',
      /* Safari and Chrome */
      '-ms-overflow-style': 'none',
      '::-webkit-scrollbar': {
        display: 'none',
      },
    },
  });
}

export default scrollbarHidePlugin;

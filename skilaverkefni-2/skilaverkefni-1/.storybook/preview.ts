import type { Preview } from '@storybook/react-vite';
import { withGlobalContext } from './decorators';

const preview: Preview = {
  decorators: [withGlobalContext],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
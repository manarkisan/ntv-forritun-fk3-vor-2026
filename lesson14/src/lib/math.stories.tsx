import type { Meta, StoryObj } from '@storybook/react-vite';

import { add } from './math';

const meta = {
  component: add,
} satisfies Meta<typeof add>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
import type { Meta, StoryObj } from '@storybook/react-vite';

import { QuoteCard } from './QuoteCard';

const meta = {
  component: QuoteCard,
} satisfies Meta<typeof QuoteCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
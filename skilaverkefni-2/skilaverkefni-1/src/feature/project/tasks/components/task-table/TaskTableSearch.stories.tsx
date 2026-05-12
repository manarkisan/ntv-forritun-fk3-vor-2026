import type { Meta, StoryObj } from '@storybook/react';
import { TaskTableSearch } from './TaskTableSearch';

const meta: Meta<typeof TaskTableSearch> = {
  component: TaskTableSearch,
  title: 'Tasks/TaskTableSearch',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TaskTableSearch>;

export const Empty: Story = {
  args: {
    value: '',
    onChange: () => {},
  },
};

export const WithValue: Story = {
  args: {
    value: 'fix login bug',
    onChange: () => {},
  },
};
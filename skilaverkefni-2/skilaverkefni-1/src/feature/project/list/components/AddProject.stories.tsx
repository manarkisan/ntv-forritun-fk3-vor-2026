import type { Meta, StoryObj } from '@storybook/react-vite';

import AddProject from './AddProject';

const meta: Meta<typeof AddProject> = {
  component: AddProject,
  title:'AddProject'
} satisfies Meta<typeof AddProject>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;
 
export const Primary = {
  args: {
    primary: true,
  },
} satisfies Story;

export const Default: Story = {};
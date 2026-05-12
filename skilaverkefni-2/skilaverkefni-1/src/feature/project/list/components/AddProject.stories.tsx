import type { Meta, StoryObj } from '@storybook/react';
import AddProject from './AddProject';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';

const meta: Meta<typeof AddProject> = {
  component: AddProject,
  title: 'Project/AddProject',
  decorators: [
    (Story) => (
      <Dialog>
        <Story />
        <DialogContent>
          Project form would appear here
        </DialogContent>
      </Dialog>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddProject>;

export const Default: Story = {};
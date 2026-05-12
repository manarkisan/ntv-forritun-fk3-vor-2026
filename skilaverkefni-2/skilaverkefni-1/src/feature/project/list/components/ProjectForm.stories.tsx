import type { Meta, StoryObj } from '@storybook/react';
import ProjectForm from './ProjectForm';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';

const meta: Meta<typeof ProjectForm> = {
  component: ProjectForm,
  title: 'Project/ProjectForm',
  decorators: [
    (Story) => (
      <Dialog open>
        <DialogContent>
          <Story />
        </DialogContent>
      </Dialog>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectForm>;

export const Default: Story = {
  args: {
    onClose: () => {},
  },
};
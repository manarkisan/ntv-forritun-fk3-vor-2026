import type { Meta, StoryObj } from '@storybook/react';
import TaskForm from './TaskForm';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';

const meta: Meta<typeof TaskForm> = {
  component: TaskForm,
  title: 'Tasks/TaskForm',
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
type Story = StoryObj<typeof TaskForm>;

export const AddMode: Story = {
  args: {
    taskToEdit: null,
    onClose: () => {},
  },
};

export const EditMode: Story = {
  args: {
    taskToEdit: {
      id: '1',
      title: 'Fix login bug',
      description: 'Users cannot log in with correct credentials',
      priority: 'high',
      completed: false,
      projectId: 'p1',
    },
    onClose: () => {},
  },
};

export const EditModeWithLowPriority: Story = {
  args: {
    taskToEdit: {
      id: '2',
      title: 'Update docs',
      description: '',
      priority: 'low',
      completed: true,
      projectId: 'p1',
    },
    onClose: () => {},
  },
};
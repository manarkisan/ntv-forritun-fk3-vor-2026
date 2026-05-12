import type { Decorator, Meta, StoryObj } from '@storybook/react';
import AddTask from './AddTask';
import { GlobalContext } from '@/shared/context/globalContextTypes';

const meta: Meta<typeof AddTask> = {
  component: AddTask,
  title: 'Tasks/AddTask',
  decorators: [
    (Story) => (
      <div style={{ padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddTask>;

const withActiveProject: Decorator = (Story) => (
  <GlobalContext.Provider
    value={{
      activeProject: {
        id: '1',
        name: 'My Project',
        description: '',
        tasksCount: 0,
      },
      removeProject: () => {},
      setActiveProject: () => {},
      clearActiveProject: () => {},
      addProject: () => {},
      addTask: () => {},
      removeTask: () => {},
      updateTask: () => {},
      updateProjectTasksCount: () => {},
      dispatch: () => {},
      projects: [],
      tasks: [],
    } as any}
  >
    <Story />
  </GlobalContext.Provider>
);

export const Enabled: Story = {
  decorators: [withActiveProject],
  args: {
    onOpen: () => {},
  },
};

export const Disabled: Story = {
  args: {
    onOpen: () => {},
  },
};


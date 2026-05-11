import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
  title: 'Project/ProjectCard',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    project: {
      id: '1',
      name: 'Website Redesign',
      description: 'Redesign the company website',
      tasksCount: 5,
    },
  },
};

export const NoDescription: Story = {
  args: {
    project: {
      id: '2',
      name: 'Quick Fix',
      description: '',
      tasksCount: 1,
    },
  },
};

export const ManyTasks: Story = {
  args: {
    project: {
      id: '3',
      name: 'Big Project',
      description: 'This project has a lot of tasks',
      tasksCount: 99,
    },
  },
};

export const ZeroTasks: Story = {
  args: {
    project: {
      id: '4',
      name: 'Empty Project',
      description: 'No tasks yet',
      tasksCount: 0,
    },
  },
};
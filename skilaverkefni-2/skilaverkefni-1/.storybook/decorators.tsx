import type { Decorator } from '@storybook/react';
import { GlobalContext } from '../src/shared/context/globalContextTypes';

const mockContextValue = {
  projects: [],
  tasks: [],
  activeProject: null,
  addProject: () => {},
  removeProject: () => {},
  setActiveProject: () => {},
  clearActiveProject: () => {},
  addTask: () => {},
  removeTask: () => {},
  updateTask: () => {},
  updateProjectTasksCount: () => {},
  dispatch: () => {},
} as any;

export const withGlobalContext: Decorator = (Story) => (
  <GlobalContext.Provider value={mockContextValue}>
    <Story />
  </GlobalContext.Provider>
);


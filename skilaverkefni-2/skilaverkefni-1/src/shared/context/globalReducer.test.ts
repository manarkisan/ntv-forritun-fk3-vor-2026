import { globalReducer, initialState } from "./globalReducer";
import type { GlobalState } from "./globalReducer";

const mockProject = {
  id: "1",
  name: "My Project",
  description: "",
  tasksCount: 0,
};

const mockTask = {
  id: "t1",
  title: "Fix bug",
  description: "",
  priority: "low" as const,
  completed: false,
  projectId: "1",
};

const stateWithProject: GlobalState = {
  ...initialState,
  projects: [mockProject],
};

describe("globalReducer", () => {
  it("ADD_PROJECT adds a project to the list", () => {
    const nextState = globalReducer(initialState, {
      type: "ADD_PROJECT",
      payload: { project: mockProject },
    });
    expect(nextState.projects).toHaveLength(1);
    expect(nextState.projects[0]).toEqual(mockProject);
  });

  it("ADD_TASK adds a task and increments project tasksCount", () => {
    const nextState = globalReducer(stateWithProject, {
      type: "ADD_TASK",
      payload: { task: mockTask, projectId: "1" },
    });
    expect(nextState.tasks).toHaveLength(1);
    expect(nextState.projects[0].tasksCount).toBe(1);
  });

  it("REMOVE_TASK removes the task and decrements project tasksCount", () => {
    const stateWithTask: GlobalState = {
      ...stateWithProject,
      tasks: [mockTask],
      projects: [{ ...mockProject, tasksCount: 1 }],
    };
    const nextState = globalReducer(stateWithTask, {
      type: "REMOVE_TASK",
      payload: { taskId: "t1" },
    });
    expect(nextState.tasks).toHaveLength(0);
    expect(nextState.projects[0].tasksCount).toBe(0);
  });

  it("UPDATE_TASK updates the correct task", () => {
    const stateWithTask: GlobalState = {
      ...stateWithProject,
      tasks: [mockTask],
    };
    const updatedTask = { ...mockTask, title: "Updated title" };
    const nextState = globalReducer(stateWithTask, {
      type: "UPDATE_TASK",
      payload: { taskId: "t1", task: updatedTask },
    });
    expect(nextState.tasks[0].title).toBe("Updated title");
  });

  it("REMOVE_PROJECT removes the project and clears activeProject if it was active", () => {
    const stateWithActive: GlobalState = {
      ...stateWithProject,
      activeProject: mockProject,
    };
    const nextState = globalReducer(stateWithActive, {
      type: "REMOVE_PROJECT",
      payload: { projectId: "1" },
    });
    expect(nextState.projects).toHaveLength(0);
    expect(nextState.activeProject).toBeNull();
  });

  it("SET_ACTIVE_PROJECT sets the active project", () => {
    const nextState = globalReducer(stateWithProject, {
      type: "SET_ACTIVE_PROJECT",
      payload: { project: mockProject },
    });
    expect(nextState.activeProject).toEqual(mockProject);
  });

  it("CLEAR_ACTIVE_PROJECT sets activeProject to null", () => {
    const stateWithActive: GlobalState = {
      ...stateWithProject,
      activeProject: mockProject,
    };
    const nextState = globalReducer(stateWithActive, {
      type: "CLEAR_ACTIVE_PROJECT",
    });
    expect(nextState.activeProject).toBeNull();
  });

  //🐛?
  it('UPDATE_PROJECT_TASKS_COUNT does not remove projects with 0 tasks', () => {
  const nextState = globalReducer(stateWithProject, {
    type: 'UPDATE_PROJECT_TASKS_COUNT',
    payload: { projectId: '1', tasksCount: 0 },
    
  });
  expect(nextState.projects).toHaveLength(1);
});


});

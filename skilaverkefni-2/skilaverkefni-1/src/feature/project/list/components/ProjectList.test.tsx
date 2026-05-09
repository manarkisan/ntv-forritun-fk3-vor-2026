import { render, screen } from "@testing-library/react";
import ProjectList from "./ProjectList";
import { useGlobalContext } from "@/shared/context/useGlobalContext";
import userEvent from "@testing-library/user-event";

vi.mock("@/shared/context/useGlobalContext");
vi.mock("@/feature/project/chart/components/Chart", () => ({
  ProjectTasksChart: () => <div>chart</div>,
}));
vi.mock("./ProjectCard", () => ({
  default: ({ project }: { project: { name: string } }) => (
    <div>{project.name}</div>
  ),
}));
vi.mock('./ProjectForm', () => ({
  default: () => <div>project form</div>,
}));


const mockClearActiveProject = vi.fn();

function mockContext(overrides = {}) {
  vi.mocked(useGlobalContext).mockReturnValue({
    projects: [],
    activeProject: null,
    clearActiveProject: mockClearActiveProject,
    ...overrides,
  } as any);
}

function renderProjectList() {
  return render(<ProjectList />);
}

describe("ProjectList", () => {
  beforeEach(() => {
    mockClearActiveProject.mockClear();
    mockContext();
  });

  it("renders the form with name and description inputs", () => {
    renderProjectList();
    expect(
      screen.getByText(/add a project to get started/i),
    ).toBeInTheDocument();
  });
  it("renders project cards when projects exist", () => {
    mockContext({
      projects: [
        { id: "1", name: "My Project", description: "", tasksCount: 0 },
      ],
    });
    renderProjectList();
    expect(screen.getByText("My Project")).toBeInTheDocument();
    expect(
      screen.queryByText(/add a project to get started'/i),
    ).not.toBeInTheDocument();
  });

it('shows AddProject button when there is no active project', () => {
    renderProjectList();
  expect(screen.getByRole('button', { name: /add project/i })).toBeInTheDocument();
});
it('shows back button and hides AddProject when there is an active project', () => {
  mockContext({
    activeProject: { id: '1', name: 'My Project', description: '', tasksCount: 0 },
  });
  renderProjectList();
  expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /add project/i })).not.toBeInTheDocument();
});
it('opens the project form dialog when AddProject is clicked', async () => {
  renderProjectList();
  await userEvent.click(screen.getByRole('button', { name: /add project/i }));
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
it('calls clearActiveProject when back button is clicked', async () => {
  mockContext({
    activeProject: { id: '1', name: 'My Project', description: '', tasksCount: 0 },
  });
  renderProjectList();
  await userEvent.click(screen.getByRole('button', { name: /back/i }));
  expect(mockClearActiveProject).toHaveBeenCalled();
});
});
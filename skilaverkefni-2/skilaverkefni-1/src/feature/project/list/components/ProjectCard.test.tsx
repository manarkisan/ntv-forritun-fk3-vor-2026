import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";
import { useGlobalContext } from "@/shared/context";
import userEvent from "@testing-library/user-event";

vi.mock("@/shared/context");

const mockRemoveProject = vi.fn();
const mockSetActiveProject = vi.fn();

const mockProject = {
  id: "1",
  name: "My Project",
  description: "A description",
  tasksCount: 3,
};

function mockContext(overrides = {}) {
  vi.mocked(useGlobalContext).mockReturnValue({
    removeProject: mockRemoveProject,
    setActiveProject: mockSetActiveProject,
    ...overrides,
  } as any);
}

function renderProjectCard() {
  return render(<ProjectCard project={mockProject} />);
}

describe("ProjectCard", () => {
  beforeEach(() => {
    mockRemoveProject.mockClear();
    mockSetActiveProject.mockClear();
    mockContext();
  });

  it("renders project name, description and task count", () => {
    renderProjectCard();
    expect(screen.getByText("My Project")).toBeInTheDocument();
    expect(screen.getByText("A description")).toBeInTheDocument();
    expect(screen.getByText("3 tasks")).toBeInTheDocument();
  });

it('calls setActiveProject when the card is clicked', async () => {
  renderProjectCard();
  await userEvent.click(screen.getByText('My Project'));
  expect(mockSetActiveProject).toHaveBeenCalledWith(mockProject);
});
  it("calls setActiveProject when the card is clicked", async () => {
    renderProjectCard();
    await userEvent.click(screen.getByText("My Project"));
    expect(mockSetActiveProject).toHaveBeenCalledWith(mockProject);
  });
  it("calls removeProject when the trash button is clicked", async () => {
    renderProjectCard();
    await userEvent.click(screen.getByRole("button"));
    expect(mockRemoveProject).toHaveBeenCalledWith(mockProject.id);
  });
  it("does not call setActiveProject when the trash button is clicked", async () => {
    renderProjectCard();
    await userEvent.click(screen.getByRole("button"));
    expect(mockRemoveProject).toHaveBeenCalledWith(mockProject.id);
    expect(mockSetActiveProject).not.toHaveBeenCalled();
  });
});

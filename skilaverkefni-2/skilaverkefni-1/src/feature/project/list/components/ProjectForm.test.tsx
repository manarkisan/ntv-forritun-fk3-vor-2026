import { render, screen } from "@testing-library/react";
import ProjectForm from "./ProjectForm";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { useGlobalContext } from "@/shared/context";
import { Dialog } from "@/shared/components/ui/dialog";

vi.mock("@/shared/context", () => ({
  useGlobalContext: vi.fn(),
}));
const addProject = vi.fn();
const onClose = vi.fn();
const user = userEvent.setup();

vi.mocked(useGlobalContext).mockReturnValue({
  addProject,
} as any);

function renderProjectForm(onClose = vi.fn()) {
  return render(
    <Dialog open>
      <ProjectForm onClose={onClose} />
    </Dialog>
  );
}

describe("ProjectForm", () => {
    beforeEach(() => {
    addProject.mockClear();
  });

it('renders the form with name and description inputs', () => {
    renderProjectForm();
    expect(screen.getByLabelText(/project name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  });
 
  it('renders Add project submit button and Cancel button', () => {
    renderProjectForm();
    expect(screen.getByRole('button', { name: /add project/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });
 
  it('does not call addProject when name is empty', async () => {
    renderProjectForm();
    await userEvent.click(screen.getByRole('button', { name: /add project/i }));
    expect(addProject).not.toHaveBeenCalled();
  });
 
  it('calls addProject with name and empty description when only name is filled', async () => {
    const onClose = vi.fn();
    renderProjectForm(onClose);
 
    await userEvent.type(screen.getByLabelText(/project name/i), 'My Project');
    await userEvent.click(screen.getByRole('button', { name: /add project/i }));
 
    expect(addProject).toHaveBeenCalled();
    expect(addProject).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'My Project', description: '', tasksCount: 0 }),
    );
    expect(onClose).toHaveBeenCalled();
  });
 
  it('calls addProject with both name and description when both are filled', async () => {
    renderProjectForm();
 
    await userEvent.type(screen.getByLabelText(/project name/i), 'My Project');
    await userEvent.type(screen.getByLabelText(/description/i), 'A description');
    await userEvent.click(screen.getByRole('button', { name: /add project/i }));
 
    expect(addProject).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'My Project', description: 'A description' }),
    );
  });
 
  it('trims whitespace from name and description before submitting', async () => {
    renderProjectForm();
 
    await userEvent.type(screen.getByLabelText(/project name/i), '  Trimmed  ');
    await userEvent.type(screen.getByLabelText(/description/i), '  Also trimmed  ');
    await userEvent.click(screen.getByRole('button', { name: /add project/i }));
 
    expect(addProject).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Trimmed', description: 'Also trimmed' }),
    );
  });
 
  it('does not submit when name is only whitespace', async () => {
    renderProjectForm();
 
    await userEvent.type(screen.getByLabelText(/project name/i), '   ');
    await userEvent.click(screen.getByRole('button', { name: /add project/i }));
 
    expect(addProject).not.toHaveBeenCalled();
  });
 
  it('resets the fields and calls onClose after successful submit', async () => {
    const onClose = vi.fn();
    renderProjectForm(onClose);
 
    await userEvent.type(screen.getByLabelText(/project name/i), 'My Project');
    await userEvent.click(screen.getByRole('button', { name: /add project/i }));
 
    expect(onClose).toHaveBeenCalled();
    
    expect(screen.getByLabelText(/project name/i)).toHaveValue('');
  });
});
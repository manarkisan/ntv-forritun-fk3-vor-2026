import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskForm from './TaskForm';
import { Dialog } from '@/shared/components/ui/dialog';
import { useGlobalContext } from '@/shared/context';

vi.mock('@/shared/context');

const mockAddTask = vi.fn();
const mockUpdateTask = vi.fn();

const mockActiveProject = {
  id: 'p1',
  name: 'My Project',
  description: '',
  tasksCount: 0,
};

function mockContext(overrides = {}) {
  vi.mocked(useGlobalContext).mockReturnValue({
    addTask: mockAddTask,
    updateTask: mockUpdateTask,
    activeProject: mockActiveProject,
    ...overrides,
  } as any);
}

function renderTaskForm(taskToEdit = null, onClose = vi.fn()) {
  return render(
    <Dialog open>
      <TaskForm taskToEdit={taskToEdit} onClose={onClose} />
    </Dialog>,
  );
}

describe('TaskForm', () => {
  beforeEach(() => {
    mockAddTask.mockClear();
    mockUpdateTask.mockClear();
    mockContext();
  });

  it('renders add task title when taskToEdit is null', () => {
    renderTaskForm();
    expect(screen.getByRole('heading', {name: /add task/i })).toBeInTheDocument();
  });

  it('renders edit task title when taskToEdit is provided', () => {
    const task = { id: '1', title: 'Fix bug', description: '', priority: 'low' as const, completed: false, projectId: 'p1' };
    renderTaskForm(task);
    expect(screen.getByText(/edit task/i)).toBeInTheDocument();
  });

  it('does not call addTask when title is empty', async () => {
    renderTaskForm();
    await userEvent.click(screen.getByRole('button', { name: /add task/i }));
    expect(mockAddTask).not.toHaveBeenCalled();
  });

  it('calls addTask with correct values when form is submitted', async () => {
    renderTaskForm();
    await userEvent.type(screen.getByLabelText(/task title/i), 'New Task');
    await userEvent.click(screen.getByRole('button', { name: /add task/i }));
    expect(mockAddTask).toHaveBeenCalledWith(
      expect.objectContaining({ title: 'New Task', projectId: 'p1' }),
      'p1',
    );
  });

  it('calls updateTask instead of addTask when editing', async () => {
    const task = { id: '1', title: 'Old title', description: '', priority: 'low' as const, completed: false, projectId: 'p1' };
    renderTaskForm(task);
    await userEvent.clear(screen.getByLabelText(/task title/i));
    await userEvent.type(screen.getByLabelText(/task title/i), 'Updated title');
    await userEvent.click(screen.getByRole('button', { name: /save changes/i }));
    expect(mockUpdateTask).toHaveBeenCalledWith('1',
      expect.objectContaining({ title: 'Updated title' }),
    );
    expect(mockAddTask).not.toHaveBeenCalled();
  });

  it('calls onClose after successful submit', async () => {
    const onClose = vi.fn();
    renderTaskForm(null, onClose);
    await userEvent.type(screen.getByLabelText(/task title/i), 'New Task');
    await userEvent.click(screen.getByRole('button', { name: /add task/i }));
    expect(onClose).toHaveBeenCalled();
  });
});
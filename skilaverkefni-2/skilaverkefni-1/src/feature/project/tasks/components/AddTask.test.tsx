import { render, screen } from '@testing-library/react';
import AddTask from './AddTask';
import { useGlobalContext } from '@/shared/context';
import userEvent from '@testing-library/user-event';

vi.mock('@/shared/context');

function mockContext(overrides = {}) {
  vi.mocked(useGlobalContext).mockReturnValue({
    activeProject: null,
    ...overrides,
  } as any);
}

function renderAddTask(onOpen = vi.fn()) {
  return render(<AddTask onOpen={onOpen} />);
}

describe('AddTask', () => {
  it('renders the add task button', () => {
    mockContext();
    renderAddTask();
    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
  });

  it('button is disabled when there is no active project', () => {
    mockContext({ activeProject: null });
    renderAddTask();
    expect(screen.getByRole('button', { name: /add task/i })).toBeDisabled();
  });

  it('calls onOpen when button is clicked', async () => {
    const onOpen = vi.fn();
    mockContext({
      activeProject: { id: '1', name: 'My Project', description: '', tasksCount: 0 },
    });
    renderAddTask(onOpen);
    await userEvent.click(screen.getByRole('button', { name: /add task/i }));
    expect(onOpen).toHaveBeenCalled();
  });
});
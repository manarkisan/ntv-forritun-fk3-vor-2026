import { render, screen } from '@testing-library/react';
import { TaskTableSearch } from './TaskTableSearch';
import userEvent from '@testing-library/user-event';

function renderTaskTableSearch(value = '', onChange = vi.fn()) {
  return render(<TaskTableSearch value={value} onChange={onChange} />);
}

describe('TaskTableSearch', () => {
  it('renders the search input', () => {
    renderTaskTableSearch();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
  it('displays the value passed in', () => {
  renderTaskTableSearch('hello');
  expect(screen.getByRole('searchbox')).toHaveValue('hello');
});

it('calls onChange when user types', async () => {
  const onChange = vi.fn();
  renderTaskTableSearch('', onChange);
  await userEvent.type(screen.getByRole('searchbox'), 'fix');
  expect(onChange).toHaveBeenCalled();
});
});
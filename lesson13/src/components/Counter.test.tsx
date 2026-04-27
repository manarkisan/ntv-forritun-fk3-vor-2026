import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from "./Counter";

describe('Counter', () => {
    it('increments the counter', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole('button', { name: 'Hækka'}))
    expect(screen.getByText('1')).toHaveTextContent('1');
    })
});

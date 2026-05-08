import { render, screen } from '@testing-library/react';
import AddProject from './AddProject';

describe('AddProject', () => {
    it('renders button', () => {
        render(<AddProject />)
        expect(screen.getByRole('button', { name: /add project/i })).toBeInTheDocument();
    })
})
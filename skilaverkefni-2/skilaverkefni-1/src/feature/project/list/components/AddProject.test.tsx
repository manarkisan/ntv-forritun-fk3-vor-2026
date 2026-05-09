import { render, screen } from '@testing-library/react';
import AddProject from './AddProject';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import userEvent from '@testing-library/user-event';

describe('AddProject', () => {
    it('renders button', () => {
        render(  <Dialog>
        <AddProject />
      </Dialog>)
        expect(screen.getByRole('button', { name: /add project/i })).toBeInTheDocument();
    });
    it('clicks button', async () => {
        render(   
        <Dialog>
            <AddProject />
        <DialogContent>
          Project dialog content
        </DialogContent>
      </Dialog>)
        await userEvent.click(screen.getByRole('button', { name: /add project/i }));
         expect(
      screen.getByText(/project dialog content/i)
    ).toBeInTheDocument();
    })
})
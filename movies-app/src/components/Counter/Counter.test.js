import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
    
    test('should render correctly', () => {
        const initialValue = 0;
        render(<Counter initialCounterValue={initialValue} />);
        // Text
        const textElement = screen.getByText(`Count: ${initialValue}`);
        expect(textElement).toBeInTheDocument();
    
        // Buttons
        const incrementBtnResult = screen.getByRole('button', {
            name: 'Increment'
        });
        expect(incrementBtnResult).toBeInTheDocument();
    
        const decrementBtnResult = screen.getByRole('button', {
            name: 'Decrement'
        });
        expect(decrementBtnResult).toBeInTheDocument();
    })

    test('should render a count of 1 if increment button is clicked', async() => {
        user.setup();
        const initialValue = 0;
        render(<Counter initialCounterValue={initialValue} />);

        const incrementBtnResult = screen.getByRole('button', {
            name: 'Increment'
        });
        await user.click(incrementBtnResult);
        
        const textElement = screen.getByText(`Count: ${initialValue + 1}`);
        expect(textElement).toBeInTheDocument();

    })

    test('should render a count of 2 if increment button is clicked twice', async() => {
        user.setup();
        const initialValue = 0;
        render(<Counter initialCounterValue={initialValue} />);

        const incrementBtnResult = screen.getByRole('button', {
            name: 'Increment'
        });
        await user.dblClick(incrementBtnResult);
        
        const textElement = screen.getByText(`Count: ${initialValue + 2}`);
        expect(textElement).toBeInTheDocument();
    })

    test('should render a count of -1 if decrement button is clicked', async() => {
        user.setup();
        const initialValue = 0;
        render(<Counter initialCounterValue={initialValue} />);

        const decrementBtnResult = screen.getByRole('button', {
            name: 'Decrement'
        });
        await user.click(decrementBtnResult);
        
        const textElement = screen.getByText(`Count: ${initialValue - 1}`);
        expect(textElement).toBeInTheDocument();
    })

    test('should render a count of -2 if decrement button is clicked twice', async() => {
        user.setup();
        const initialValue = 0;
        render(<Counter initialCounterValue={initialValue} />);

        const decrementBtnResult = screen.getByRole('button', {
            name: 'Decrement'
        });
        await user.dblClick(decrementBtnResult);
        
        const textElement = screen.getByText(`Count: ${initialValue - 2}`);
        expect(textElement).toBeInTheDocument();
    })


});



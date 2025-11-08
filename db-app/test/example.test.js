import React from 'react';
import { render, screen } from '@testing-library/react';
import Example from '../src/components/example';

describe('Example Component', () => {
    test('renders Example component', () => {
        render(<Example />);
        const element = screen.getByText(/example/i); // Adjust the text based on what the Example component renders
        expect(element).toBeInTheDocument();
    });
});
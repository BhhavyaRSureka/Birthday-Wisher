// ********RoostGPT********
// Test generated by RoostGPT for test ReactTest using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
// Import necessary testing utilities and the component to test
import React from 'react';
import { render, screen } from '@testing-library/react';
import Countdown from '../../src/Countdown';

// Describe the test suite for Countdown Component
describe('Countdown Component', () => {
  // Test case 1: Renders countdown timer correctly when it is not the birthday
  test('renders countdown timer when isItBday is false', () => {
    const countdownData = { isItBday: false, days: 10, hours: 5, minutes: 30, seconds: 15 };
    const name = "Alice";

    render(<Countdown countdownData={countdownData} name={name} />);
    
    expect(screen.getByText(/Countdown to Alice's Birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/10/i)).toBeInTheDocument();
    expect(screen.getByText(/Hours/i)).toBeInTheDocument();
    expect(screen.getByText(/Minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/Seconds/i)).toBeInTheDocument();
  });

  // Test case 2: Renders the Wish component when it is the birthday
  test('renders Wish component when isItBday is true', () => {
    const countdownData = { isItBday: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
    const name = "Alice";

    render(<Countdown countdownData={countdownData} name={name} />);
    
    expect(screen.getByText(/Happy Birthday Alice!/i)).toBeInTheDocument();
  });

  // Add more test cases for different props scenarios and edge cases
});


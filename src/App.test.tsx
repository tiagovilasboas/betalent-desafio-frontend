import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/App';

describe('App', () => {
  it('should render the main title', () => {
    render(<App />);

    const mainTitle = screen.getByText(/employees/i);

    expect(mainTitle).toBeInTheDocument();
  });
}); 
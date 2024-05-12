import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from '../routes/About';

describe('App', () => {
    it('renders headline', () => {
      render(<About />)
      const headline = screen.getByText(/About about/i)
      expect(headline).toBeInTheDocument()
    })
  })
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Rights from './Rights';

describe('Rights Component', () => {
  it('renders without crashing', () => {
    render(<Rights />);
  });
});
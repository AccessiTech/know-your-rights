import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Rights from './Rights';
import { ctaData, ctaTitle, ctaUrl, leftHeader, rightHeader } from './content';

describe('Rights Component', () => {
  it('renders without crashing', () => {
    render(<Rights />);
  });

  it('renders default headers', () => {
    const rights = render(<Rights />).container;
    const headers = rights.querySelectorAll('h2');
    expect(headers.length).toBe(2);
    expect(headers[0].textContent).toBe(leftHeader);
    expect(headers[1].textContent).toBe(rightHeader);
  });

  it('renders custom headers', () => {
    const left = 'Left Header';
    const right = 'Right Header';
    const rights = render(<Rights leftHeader={left} rightHeader={right} />).container;
    const headers = rights.querySelectorAll('h2');
    expect(headers.length).toBe(2);
    expect(headers[0].textContent).toBe(left);
    expect(headers[1].textContent).toBe(right);
  });

  it('renders accreditation', () => {
    const rights = render(<Rights />).container;
    const accredit = rights.querySelector('.credit');
    expect(accredit).toBeDefined();
  });

  it('renders the cta resource button', () => {
    const rights = render(<Rights />).container;
    const buttons = rights.querySelectorAll('.resource-btn');
    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe(ctaTitle);
    const result = ctaData.links?.length ? '' : ctaUrl;
    expect(buttons[0].href).toBe(result);
  });
});

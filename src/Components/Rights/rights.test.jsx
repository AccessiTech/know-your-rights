import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Rights from './Rights';
import { ctaTitle, ctaUrl, leftHeader, rightHeader } from './content';

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

  it('renders the default accreditation', () => {
    const rights = render(<Rights />).container;
    const button = rights.querySelector('.external-link');
    expect(button.textContent).toContain(ctaTitle);
    expect(button.href).toBe(ctaUrl);
  });

  it('renders the custom accreditation', () => {
    const url = 'https://example.com/';
    const title = 'Example';
    const rights = render(<Rights ctaUrl={url} ctaTitle={title} />).container;
    const button = rights.querySelector('.external-link');
    expect(button.textContent).toContain(title);
    expect(button.href).toBe(url);
  });
});

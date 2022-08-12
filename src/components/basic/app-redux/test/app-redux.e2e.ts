import { newE2EPage } from '@stencil/core/testing';

describe('app-redux', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-redux></app-redux>');

    const element = await page.find('app-redux');
    expect(element).toHaveClass('hydrated');
  });
});

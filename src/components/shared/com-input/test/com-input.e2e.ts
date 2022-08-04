import { newE2EPage } from '@stencil/core/testing';

describe('com-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<com-input></com-input>');

    const element = await page.find('com-input');
    expect(element).toHaveClass('hydrated');
  });
});

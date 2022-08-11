import { newSpecPage } from '@stencil/core/testing';
import { PageAbout } from '../page-about';

describe('page-about', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageAbout],
      html: `<page-about></page-about>`,
    });
    expect(page.root).toEqualHtml(`
      <page-about>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-about>
    `);
  });
});

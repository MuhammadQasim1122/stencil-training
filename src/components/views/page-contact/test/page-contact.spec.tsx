import { newSpecPage } from '@stencil/core/testing';
import { PageContact } from '../page-contact';

describe('page-contact', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageContact],
      html: `<page-contact></page-contact>`,
    });
    expect(page.root).toEqualHtml(`
      <page-contact>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-contact>
    `);
  });
});

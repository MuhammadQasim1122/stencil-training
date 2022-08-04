import { newSpecPage } from '@stencil/core/testing';
import { ComInput } from '../com-input';

describe('com-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComInput],
      html: `<com-input></com-input>`,
    });
    expect(page.root).toEqualHtml(`
      <com-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </com-input>
    `);
  });
});

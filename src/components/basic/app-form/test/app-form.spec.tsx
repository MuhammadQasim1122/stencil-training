import { newSpecPage } from '@stencil/core/testing';
import { AppForm } from '../app-form';

describe('app-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppForm],
      html: `<app-form></app-form>`,
    });
    expect(page.root).toEqualHtml(`
      <app-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-form>
    `);
  });
});

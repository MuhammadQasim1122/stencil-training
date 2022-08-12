import { newSpecPage } from '@stencil/core/testing';
import { AppRedux } from '../app-redux';

describe('app-redux', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppRedux],
      html: `<app-redux></app-redux>`,
    });
    expect(page.root).toEqualHtml(`
      <app-redux>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-redux>
    `);
  });
});

import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-about',
  styleUrl: 'page-about.scss',
  shadow: true,
})
export class PageAbout {

  render() {
    return (
      <h1>This is a About Page</h1>
    );
  }

}

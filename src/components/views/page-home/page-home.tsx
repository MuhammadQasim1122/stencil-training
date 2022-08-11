import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  shadow: true,
})
export class PageHome {

  render() {
    return (
      <h1>This is a Home page</h1>
    );
  }

}

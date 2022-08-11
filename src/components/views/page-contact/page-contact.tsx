import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-contact',
  styleUrl: 'page-contact.css',
  shadow: true,
})
export class PageContact {

  render() {
    return (
      <h1>This is a Contact page</h1>
    );
  }

}

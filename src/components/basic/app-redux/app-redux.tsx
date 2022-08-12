import { Component, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { configureStore } from '../../../store/index';
@Component({
  tag: 'app-redux',
  styleUrl: 'app-redux.scss',
})
export class AppRedux {
  componentWillLoad() {
    store.setStore(configureStore({}));
  }
  render() {
    return (
      <ion-app>
        <tabs-component></tabs-component>
      </ion-app>
    );
  }
}
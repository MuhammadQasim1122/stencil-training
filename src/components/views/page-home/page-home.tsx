import { Component, State, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { loadData } from '../../../actions/data';
@Component({
  tag: 'page-home',
  styleUrl: 'page-home.scss',
})
export class AppHome {
  @State() items: any;
  @State() loading: boolean;
  @State() error: any;
  loadData: (...args: any) => any;
  componentWillLoad() {
    store.mapStateToProps(this, (state) => {
      const {
        dataReducer: { items, loading, error },
      } = state;
      return {
        items,
        loading,
        error,
      };
    });
    store.mapDispatchToProps(this, {
      loadData,
    });
    this.loadData();
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color="danger">
          <ion-title>Ionic + StencilJS + Redux</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list lines="none">
          {this.items.map((item) => (
            <ion-item>
              <ion-label>{item}</ion-label>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>,
    ];
  }
}
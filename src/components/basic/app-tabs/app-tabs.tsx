import { Component, h } from '@stencil/core';

@Component({
  tag: 'tabs-component',
  styleUrl: 'app-tabs.css'
})
export class TabComponent {
  render() {
    return [
      <ion-tabs>
        <ion-tab tab="tab-home">
          <ion-nav>
            <page-home></page-home>
          </ion-nav>
        </ion-tab>
        <ion-tab tab="tab-about">
          <ion-nav>
            <page-about></page-about>
          </ion-nav>
        </ion-tab>

        <ion-tab tab="tab-contact">
          <ion-nav>
            <page-contact></page-contact>
          </ion-nav>
        </ion-tab>
        <ion-tab tab="tab-form">
          <ion-nav>
            <app-form></app-form>
          </ion-nav>
        </ion-tab>



        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-home">
            <ion-icon name="home-outline"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab-about">
            <ion-icon name="information-circle-outline"></ion-icon>
            <ion-label>About</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab-contact">
            <ion-icon name="person-add-outline"></ion-icon>
            <ion-label>Contact</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-form">
            <ion-icon name="document-outline"></ion-icon>
            <ion-label>Form</ion-label>
          </ion-tab-button>
        </ion-tab-bar>

      </ion-tabs>
    ];
  }
}
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'com-input',
  styleUrl: 'com-input.scss',
  shadow: true,
})
export class ComInput {
  @Prop() name : string;
  @Prop() label : string;
  @Prop() type : string;
  @Prop() onChangeValue: (e: MouseEvent) => void;
  render() {
    return (
      <div>
        <ion-item>
        <ion-label>{this.label}</ion-label>
        <ion-input onInput={(e: any) =>
            this.onChangeValue(e)} name = {this.name} type={this.type}></ion-input>
      </ion-item>
      </div>
    );
  }

}

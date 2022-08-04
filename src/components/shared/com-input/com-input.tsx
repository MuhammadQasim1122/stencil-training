import { Component,State, h, Prop } from '@stencil/core';

@Component({
  tag: 'com-input',
  styleUrl: 'com-input.scss',
  shadow: true,
})
export class ComInput {
  @Prop({mutable: true}) name : string;
  @State() formControls = {
    name: null
  };
  changeFormValue(controlName:string, value:any) {
    console.log(controlName, value);
    this.formControls = {
      ...this.formControls,
      [controlName]: value.value
    };
  }
  render() {
    return (
      <div>
        <label>{this.name}</label>
          <input onInput={(e: any) =>
            this.changeFormValue(this.name,
              e.target)
          } type='text'></input>
      </div>
    );
  }

}

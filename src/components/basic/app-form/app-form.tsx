import { Component, h, State } from '@stencil/core';
import Axios from 'axios';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.scss',
  shadow: true,
})

export class AppForm {
  public url = "https://webhook.site/9a8f33d8-4412-49d5-8f43-44d3b97d4d13";
  
  @State() formControls = {
    firstName: null,
    lastName: null,
    age: null,
    email: null,
    file: null
  };
  changeFormValue(controlName:string, value:any) {
    this.formControls = {
      ...this.formControls,
      [controlName]: value.value
    };
  }
  submitForm(e){
    console.log(this.formControls);
      e.preventDefault();
      Axios.post(this.url,
        this.formControls, {
          headers: {
            'Access-Control-Allow-Origin' : '*'
          }
         })
      .then(res =>{
        if(res.status === 200 ){
          alert("Submitted Succesfully");
        }
      }) 
  }
  render() {
    return (
      <div>
        
        <form onSubmit={(e)=>this.submitForm(e)}>
          <com-input onChangeValue = {(e) => this.changeFormValue('firstName',e.target)} name = "firstName" label='First Name' type='text'></com-input>
          <com-input onChangeValue = {(e) => this.changeFormValue('lastName',e.target)} name = "lastName" label='Last Name' type='text'></com-input>
          <com-input onChangeValue = {(e) => this.changeFormValue('age',e.target)} name = "age" label='Age' type='number'></com-input>
          <com-input onChangeValue = {(e) => this.changeFormValue('email',e.target)} name = "email" label='Email' type='email'></com-input>
          <com-input onChangeValue = {(e) => this.changeFormValue('file',e.target)} name = "file" label='Upload Image' type='file'></com-input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}
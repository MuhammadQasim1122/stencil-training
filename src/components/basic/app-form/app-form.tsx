import { Component,State, h } from '@stencil/core';
import Axios from 'axios';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.scss',
  shadow: true,
})

export class AppForm {
  public url = "https://webhook.site/9a8f33d8-4412-49d5-8f43-44d3b97d4d13";
  @State() formControls = {
    name : null
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
      <div class="app-home">
        <form onSubmit={(e)=>this.submitForm(e)}>
          <com-input name = 'First Name'></com-input>
          <com-input name = 'Last Name'></com-input>
          <com-input name = 'age'></com-input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}
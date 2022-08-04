import { Component,State, h } from '@stencil/core';
import Axios from 'axios';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})

export class AppHome {
  public url = "https://webhook.site/9a8f33d8-4412-49d5-8f43-44d3b97d4d13";
  @State() formControls = {
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
    file: null
  };
  changeFormValue(controlName:string, value:any) {
    console.log(controlName, value);
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
      <div class="app-home">
        <form onSubmit={(e)=>this.submitForm(e)}>
          <label>First Name</label>
          <input onInput={(e: any) =>
            this.changeFormValue('firstName',
              e.target)
          } type='text'></input>
          <br class="linebreakstyle"></br>
          <label>Last Name</label>
          <input onInput={(e: any) =>
            this.changeFormValue("lastName",
              e.target)
          } type='text'></input>
<br></br>
          <label>Age</label>
          <input onInput={(e: any) =>
            this.changeFormValue("age",
              e.target)
          } type='number'></input>
<br></br>
          <label>Gender</label>
          <select onInput={(e: any) =>
            this.changeFormValue("gender",
              e.target)
          }>
            <option >Male</option>
            <option >Female</option>
          </select>
          <br></br>
          <label>Upload Image</label>
          <input type="file" onInput={(e: any) =>
            this.changeFormValue("file",
              e.target)
          }></input>
          <br></br>
          <input type="submit" ></input>
        </form>
      </div>
    );
  }
}

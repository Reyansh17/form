import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
//   function changeHandler1(e){
//  console.log(e.target.value);
//   }
//   function changeHandler2(e){
//     console.log(e.target.value);
//      }

const[formData,SetFormData]=useState(
  {firstName:"", lastName:"",email:"", isVisible:false, mode:"", bestcollege:""}
);
console.log(formData);

function changeHandler(event){

  const{name,value,checked,type}=event.target;// desstructuring the object

  SetFormData(formData => ({
    ...formData,
    [name]:type==="checkbox"?checked:value

  }));
}


  return (
    <div className="App">
      <form >
        <input
          className='input'
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />
        <br></br>
         <input
          type='text'
          placeholder='last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />
         <input
          type='email'
          placeholder='enter your email here'
          onChange={changeHandler}
          name='email'
          value={formData.email}

        />


       <label>
       is visible
        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          checked={formData.isvisible}
        />
        </label>

        <br/>
        <br/>
   <fieldset>
   <legend>Mode:</legend>
    <label>
    online mode
     <input
      type='radio'
      onChange={changeHandler}
      value="On-linemode"
      checked={formData.mode==="On-linemode"}
      name='mode'
     /></label>

     <label>
    offline mode
     <input
      type='radio'
      onChange={changeHandler}
      value="Off-linemode"
      checked={formData.mode==="Off-linemode"}
      name='mode'
     /></label>
     </fieldset>



     <label>
     choose your college
     <select
      name='bestcollege'
      value={formData.bestcollege}
      onChange={changeHandler}>
      <option value='iit'>IIT</option>
      <option value='nit'>nit</option>
      <option value='iiit'>IIIT</option>
      <option value='thaoar'>Thapar</option>

     </select>
     </label>


      </form>
    </div>
  );
}

export default App;

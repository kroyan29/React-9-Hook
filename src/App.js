import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { func } from 'prop-types';


// function Login(){
//   const[username, setUsername] = useState('');
//   const[password, setPassword] = useState('');

//   return(
//     <div className='Login'>
//       <form>
//         <label>
//           Username: <input value={username} onChange={event => setUsername(event.target.value)}></input>
//           <br />
//           Password: <input value={password} type='password' onChange={event => setPassword(event.target.value)}></input><br />
//           <button className='perv'>Submit</button>
//         </label>
//       </form>
//     </div>
//   )
// }
// export default Login;


// function App() {
//   const[count1, setCount1] = useState(2);
//   const[count2, setCount2] = useState(1);
//     return (

// <div className='divik'>
//   <div>
//     <h1 className='text_h1'>Button clicked {count1} times!</h1><br />
//     <button onClick={() =>setCount1(count1 + 1)}>Click Me</button><br />
//     <button onClick={() =>setCount1(1)}>Reset Counter</button><br />
//     <br /><br />
//     <h1  className='text_h1'>Button clicked {count1-1} times!</h1><br />
//     <button onClick={() =>setCount2(count2 + 1)}>Click Me</button><br />
//     <button onClick={() =>setCount2(0)}>Reset Counter</button><br />
//   </div>
// </div>
//     );
// }
// export default App;



function App() {
  const[name, setName] = useState('Backbencher');
  const[age, setAge] = useState(23);

  const handleOnChangeName = event => {
    const { name, value } = event.target;
    setName({  [name]: value });
  };

  const handleOnChangeAge = event => {
    const { age, value } = event.target;
    setAge({ [age]: value });
  };

    return (
        <div className='divik'>
            <form>
             
                <input
                    type="text"
                    value={name}
                    onChange={handleOnChangeName}
                /><br />
                <input
                    type="number"
                    value={age}
                    onChange={handleOnChangeAge}
                />
                <h2 className='text_h1'>
                    Name: {name},<br />Age: {age}
                </h2>
                
            </form>
        </div>
    );

}
export default App;

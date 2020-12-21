import React, {Component} from 'react'
const axios = require('axios');

export default function SignupForm() {
      const [email, setEmail] = React.useState("");
      const [password, setPassword] = React.useState("");
      const [username, setUsername] = React.useState("");
      const [firstname, setFirstName] = React.useState("");
      const [lastname, setLastName] = React.useState("");
      const [password2, setPassword2] = React.useState("");

      const handleSubmit = (event) =>  {
            if(password == password2) {
                  axios.post('https:ponk-backend.herokuapp.com/createuser', {
                        firstName: firstname,
                        lastName: lastname,
                        username: username,
                        email: email,
                        password: password
                      })
                      .then(function (response) {
                        console.log(response.request.status);
                  })
            }
            else {
                  alert("Passwords do not match")
            }
            event.preventDefault();
      }
 
        return (
            <div>
                  <form onSubmit={handleSubmit}>
                  <label>
                        Email:
                        <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                  </label>

                  <label>
                        First Name:
                        <input
                        name="firstname"
                        type="text"
                        value={firstname}
                        onChange={e => setFirstName(e.target.value)}
                        required />
                  </label>

                  <label>
                        Last Name:
                        <input
                        name="lastname"
                        type="text"
                        value={lastname}
                        onChange={e => setLastName(e.target.value)}
                        required />
                  </label>

                  <label>
                        User Name:
                        <input
                        name="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required />
                  </label>

                  <label>
                        Password:
                        <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                  </label>

                  <label>
                        Confirm Password:
                        <input
                        name="password2"
                        type="password"
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        required />
                  </label>
                  <button>Submit</button>
                  </form>
            </div>
        );
      }
    
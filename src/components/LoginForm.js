import React from 'react'
const axios = require('axios')

export default function LoginForm() {
      const [usernameOrEmail, setusernameOrEmail] = React.useState("");
      const [password, setPassword] = React.useState("");

      const handleSubmit = (event) =>  {
            console.log(usernameOrEmail)
            console.log(password)
            try {
                  axios.get('https:ponk-backend.herokuapp.com/checkuser', {
                        params: {
                              usernameOrEmail: usernameOrEmail,
                              password: password
                        }
                      })
                      .then(function (response) {
                        if(response.request.status == 200) {
                              alert('COCK AND BALLS')
                        }
                  })
            } catch (err) {
                  alert('THAT THANG BLEEDING p')
            }
            
            event.preventDefault();
      }

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                  <label>
                        User Name or Email:
                        <input
                        name="usernameOrEmail"
                        type="text"
                        value={usernameOrEmail}
                        onChange={e => setusernameOrEmail(e.target.value)}
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
                  <button>Submit</button>
                  </form>
            </div>
      )
}


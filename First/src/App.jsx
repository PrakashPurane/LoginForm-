
import './App.css'

function App() {
  

  return (
    <>
      <div className="container">
        <header>Welcome Back!</header>
        <p>To get started,create your account.</p>
        <form action="#">
          <div className="input-field">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div className="input-field" >
            <input type="password" required />
            <label>Password</label>
          </div>
          <a href="#">Forget Password</a>
          <div className="button">
            <button>Sign up</button>
            </div>
        </form>
        <div className="auth">
          <hr/>
          <div className="auths">
          Or sign up with
          </div>
          </div>
      </div>
    </>
  )
}

export default App

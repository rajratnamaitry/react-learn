import { useState } from 'react'
import { app } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
function Login() {
    let auth = getAuth();
    const [data, setData] = useState({});
    const handleInput = (e) => {
        const input = { [e.target.name]: e.target.value };
        setData({ ...data, ...input });
    }
    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password).then(d => {
            console.log('d', d.user)
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Please Sign In</h3>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            placeholder="E-mail"
                                            name="email"
                                            type="email"
                                            onChange={(event) => handleInput(event)}
                                            autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            type="password"
                                            onChange={(event) => handleInput(event)}
                                        />
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input
                                                name="remember"
                                                type="checkbox"
                                                value="Remember Me"
                                                onClick={(event) => handleSubmit()}
                                            />Remember Me
                                        </label>
                                    </div>
                                    {/* <!-- Change this to a button or input when using this as a form --> */}
                                    <button className="btn btn-lg btn-success btn-block">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
import { useState } from "react"
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function login() {
    const [user, setUser] = useState({ username: '', password: '', logged_in: false })
    const [ isLogging, setIsLogging ] = useState(false)
    const navigate = useNavigate();
    if (isLogging) {
        loginUser()
    }


    async function loginUser() {
        const res = await fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
            navigate('/',{replace:true})
        }
        setIsLogging(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'));
        setUser(
            Object.fromEntries(loginForm)
        )
        setIsLogging(true)
    }

    return (
        <>
        { user && user.logged_in?
            <Navigate to="/Register" replace={true} />
            :
            <div>
            <h3>Login</h3>
            <form action="" id='Login-form' onSubmit={handleSubmit}>
                <label htmlFor="username"></label><br />
                <input type="text" name='username' /><br />
                <label htmlFor="password"></label><br />
                <input type="password" name={'password'} /><br />
                <input type="submit" value={'Login'} />
            </form>
            </div>
            }
        </>
    )
}

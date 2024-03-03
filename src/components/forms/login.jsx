import { useState, useContext, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function login() {
    const [user, setUser] = useState({ username: '', password: '', logged_in: false })
    // const [ isLogging, setIsLogging ] = useState(false)
    const navigate = useNavigate()
    const { updateUser, user: userState, updateLocalStorage } = useContext(UserContext)

    // if( isLogging ){
    //     console.log(user, 'user info');
    //     loginUser()
    // }

    useEffect(()=>{
        if(userState.username){
            navigate('/')
            return
        } 
        const localUser = JSON.parse(localStorage.getItem('user'))
        console.log(localUser, 'local user');
        if (localUser){
             if( localUser.username && !userState.username ){
            console.log('in if =========');
            updateUser(localUser)
            navigate('/')
            return
        }
        }
       
    },[])


    async function loginUser(username, password) {
        const res = await fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username, 
                password
            })
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
            updateUser({username: user.username})
            console.log(data.user)
            localStorage.setItem('user', JSON.stringify(data.user))
            navigate('/',{replace:true})
        }
        
    }

    function handleSubmit(e) {
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'));
        const username = loginForm.get('username')
        const password = loginForm.get('password')
        loginUser(username, password)
        
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

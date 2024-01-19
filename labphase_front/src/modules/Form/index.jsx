import Input from "../../components/inputs/index";
import Button from "../../components/Button/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const   Form = ({
    isSignInPage = true,
}) => {
    const [data,setData] = useState({
        ...(!isSignInPage && {
            fullName: ''
        }),
        email:'',
        password:'',
    })
    // console.log('data', data)
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        console.log('data :>> ', data);
        e.preventDefault()
        const res = await fetch(`http://localhost:8000/api/${isSignInPage ? 'login' : 'register'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(res.status === 400) {
            alert('Invalid credentials')
        }else{
            const resData = await res.json()
            if(resData.token) {
                localStorage.setItem('user:token', resData.token)
                localStorage.setItem('user:detail', JSON.stringify(resData.user))
                navigate('/')
            }
        }
    }


    return (
        <div className="bg-light h-screen flex items-center justify-center">
            <div className="bg-blue-300 h-[600px] w-[600px] flex flex-col items-center justify-center shadow-lg rounded">
                <div className="text-4xl font-extrabold">Welcome {isSignInPage && 'Back'} </div>
                <div className=" text-xl font-light mb-10">{isSignInPage ? 'Sign in to get explored' : 'Sign up to get started' } </div>
                <form className="flex flex-col items-center w-full" onSubmit={(e) => handleSubmit(e)}>
                    {!isSignInPage && <Input label='Full Name' name='name' placeholder='Enter your full name' className='mb-8 w-[50%]' value={data.fullName} 
                    onChange={(e) => setData({...data, fullName: e.target.value})}/>}
                    <Input label='Email Address' type="email" name='email' placeholder='Enter your email' className='mb-8 w-[50%]' value={data.email}
                    onChange={(e) => setData({...data, email: e.target.value})}/>
                    <Input label='Password' type="password" name='Password' placeholder='Enter your Password' className='mb-8 w-[50%]' value={data.password} 
                    onChange={(e) => setData({...data, password: e.target.value})}/>
                    <Button label={isSignInPage?'Sign up':'Sign up'} className='mt-8 mb-4 w-1/2' type="submit"/>
                </form>
                <div>{isSignInPage?"Didn't have an account ?":'Already have an account?'} <span className="text-primary cursor-pointer underline"
                onClick={()=>{navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'} `)} }>
                    {isSignInPage?'Sign up':'Sign in'}</span></div>
            </div>
        </div>
    )
}
export default Form;
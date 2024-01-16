
import { useState } from "react"

export default function Register() {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
		const data = await fetch( "http://localhost:4000/apichat/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify()
		})
			.then(res => res.json());
            setUsername([...username,data]);
            setPassword([...password,data]);
    }
    return (
        <div className="bg-blue-50  h-screen flex items-center">
       <form className="w-64 mx-auto" onSubmit={register}>
<input value={username} 
onChange={ev => setUsername(ev.target.value)}
type="text" placeholder="UserName"
 className="block w-full rounded-sm p-2 mb-2 border"/>
<input  value={password}
onChange={ev => setPassword(ev.target.value)}
 type="password" placeholder="Password" 
 className="block w-full rounded-sm p-2 mb-2 border"/>
<button className="bg-blue-500 block w-full rounded-sm text-white p-2 ">Login</button>
       </form>
        </div>
    )
}
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-1g shadow-md bg-gray-400 bg-clip-padding backdrop-filter
    backdrop-blur-sm bg-opacity-0 font-semibold'>
                <h1 className='text-3xl font-serif text-center text-[#a3d135] animate-bounce cursor-pointer'>
                    Login🪶 <span className='text-blue-500'> </span>    
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10 font-medium'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10 font-medium'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to='/signup' className='text-sm hover:underline hover:text-blue-700 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                            {loading ? <span className="loading loading-spinner "></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;

// STARTER CODE FOR THIS FILE:
// const Login = () => {
//   return (
//   <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-1g shadow-md bg-gray-400 bg-clip-padding backdrop-filter
//     backdrop-blur-sm bg-opacity-0'>
//       <h1 className='text-3xl font-serif text-center text-gray-300'>
//         Login
//         <span className='text-blue-500'> Connect Chat</span>
//       </h1>

//       <from>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//           </label>
//           <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//         </div>

//         <div>
//           <label className='label'>
//             <span className='text-base label-text'>Password</span>
//           </label>
//           <input
//             type='password'
//             placeholder='Enter Password'
//             className='w-full input input-bordered h-10'
//           />
//         </div>
//         <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//           {"Don't"} have an account?
//         </a>

//         <div>
//           <button className='btn btn-block btn-sm mt-2'>Login</button>
//         </div>
//       </from>
//     </div>
//   </div>
//   );
// };
// export default Login;
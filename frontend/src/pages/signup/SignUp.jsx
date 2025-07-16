// import { Link } from "react-router-dom";
// import GenderCheckbox from "./GenderCheckbox";
// import { useState } from "react";
// import useSignup from "../../hooks/useSignup";

// const SignUp = () => {

//     const [inputs, setInputs] = useState({
//         fullName: "",
//         username: "",
//         password: "",
//         confirmPassword: "",
//         gender: "",
//     });

//     const { loading, signup } = useSignup();

//     const handleCheckboxChange = (gender) => {
//         setInputs({ ...inputs, gender });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await signup(inputs);
//     };

//     return (<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
//     backdrop-blur-lg bg-opacity-0 font-semibold'>
//             <h1 className='text-3xl font-serif text-center text-[#a3d135] animate-bounce cursor-pointer'>
//                 Sign Up🪶 <span className='text-blue-500'> </span>
//             </h1>

//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type='text' placeholder='John Deo' className='w-full input input-bordered h-10 font-medium'
//                         value={inputs.fullName}
//                         onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
//                     />
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type='text' placeholder='johndeo' className='w-full input input-bordered h-10 font-medium'
//                         value={inputs.username}
//                         onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//                     />
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input
//                         type='password'
//                         placeholder='Enter Password'
//                         className='w-full input input-bordered h-10 font-medium'
//                         value={inputs.password}
//                         onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//                     />
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Confirm Password</span>
//                     </label>
//                     <input
//                         type='password'
//                         placeholder='Confirm Password'
//                         className='w-full input input-bordered h-10 font-medium'
//                         value={inputs.confirmPassword}
//                         onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
//                     />
//                 </div>

//                 <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

//                 <Link
//                     to={"/login"}
//                     className='text-sm hover:underline hover:text-blue-700 mt-2 inline-block'
//                     href='#'
//                 >
//                     Already have an account?
//                 </Link>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
//                         {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//     );
// };
// export default SignUp;



// STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black px-4">
            <div className="w-full max-w-sm sm:max-w-md px-6 py-8 bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg text-white font-semibold">

                {/* Logo and Heading */}
                <div className="flex flex-col items-center mb-6 gap-2">
                    <h1 className="text-center text-2xl sm:text-3xl font-bold text-lime-400 animate-bounce cursor-pointer">
                        Sign Up🪶
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-pretty cursor-pointer">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Deo"
                            className="w-full mb-1 px-4 py-2 rounded-md bg-black bg-opacity-30 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-pretty cursor-pointer">Username</label>
                        <input
                            type="text"
                            placeholder="johndeo"
                            className="w-full mb-1 px-4 py-2 rounded-md bg-black bg-opacity-30 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-pretty cursor-pointer">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full mb-1 px-4 py-2 rounded-md bg-black bg-opacity-30 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-pretty cursor-pointer">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full mb-1 px-4 py-2 rounded-md bg-black bg-opacity-30 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* Gender selection */}
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
                    
                    {/* Already have an account */}
                    <Link to="/login" className="text-sm hover:underline hover:text-blue-500 inline-block mt-1">
                        Already have an account?
                    </Link>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="btn btn-block btn-sm mt-2 border border-slate-700"
                        disabled={loading}
                    >
                        {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

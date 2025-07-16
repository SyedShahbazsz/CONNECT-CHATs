import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto pt-4'>
            {!loading ? (
                <BiLogOut
                    className='w-6 h-6 sm:w-7 sm:h-7 text-white cursor-pointer transition-transform hover:scale-105'
                    onClick={logout}
                />
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    );
};
export default LogoutButton;



// import React from "react";
// import { BiLogOut } from "react-icons/bi";
// import useLogout from "../../hooks/useLogout";

// const LogoutButton = () => {
//     const { loading, logout } = useLogout();

//     return (
//         <div className='mt-auto'>
//             {!loading ? (
//                 <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
//             ) : (
//                 <span className="loading loading-spinner"></span>
//             )}
//         </div>
//     );
// };
// export default LogoutButton;


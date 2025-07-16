import Conversations from "./Conversations";
import LogoutButton from './LogoutButton';
import SearchInput from "./SearchInput";

const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col w-full sm:w-[300px] max-w-full sm:max-w-[320px] h-full bg-black/40 backdrop-blur-md'>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
        </div>
    );
};
export default Sidebar;



// import Conversations from "./Conversations";
// import LogoutButton from './LogoutButton';
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
//     return (
//         <div className='border-r border-slate-500 p-4 flex flex-col'>
//             <SearchInput />
//             <div className='divider px-3'></div>
//             <Conversations />
//             <LogoutButton />
//         </div>
//     );
// };
// export default Sidebar;
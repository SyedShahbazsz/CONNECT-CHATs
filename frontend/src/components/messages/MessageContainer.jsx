import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className='flex flex-col flex-1 min-w-0 bg-black/30 backdrop-blur-md'>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className='bg-lime-400 px-4 py-2 mb-2 flex items-center gap-2'>
                        <img
                            src={selectedConversation.profilePic}
                            alt={`${selectedConversation.fullName}'s profile`}
                            className='w-10 h-10 rounded-full'
                        />
                        <span className='text-gray-900 font-bold text-sm sm:text-base'>
                            {selectedConversation.fullName}
                        </span>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <Messages />
                     </div>
                    <div className="mt-auto">
                      <MessageInput />
                    </div>
                </>
            )}
        </div>
    );
};
export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full px-4'>
            <div className='text-center text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p className='text-sm sm:text-lg md:text-xl'>Welcome 👋 {authUser.fullName} ❄</p>
                <p className='text-sm sm:text-base'>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};


// import { useEffect } from "react";
// import useConversation from "../../zustand/useConversation";
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";
// import { TiMessages } from "react-icons/ti";
// import { useAuthContext } from "../../context/AuthContext";

// const MessageContainer = () => {
//     const { selectedConversation, setSelectedConversation } = useConversation();

//     useEffect(() => {
//         // cleanup function (unmounts)
//         return () => setSelectedConversation(null);
//     }, [setSelectedConversation]);

//     return (
//         <div className='md:min-w-[850px] flex flex-col'>
//             {!selectedConversation ? (
//                 <NoChatSelected />
//             ) : (
//                 <>
//                     {/* Header */}
//                     <div className='bg-purple-500 px-4 py-2 mb-2 flex items-center'>
//                         <img
//                             src={selectedConversation.profilePic}
//                             alt={`${selectedConversation.fullName}'s profile`}
//                             className='w-10 h-10 rounded-full mr-2'
//                         />
//                         <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
//                     </div>
//                     <Messages />
//                     <MessageInput />
//                 </>
//             )}
//         </div>
//     );
// };
// export default MessageContainer;

// const NoChatSelected = () => {
//     const { authUser } = useAuthContext();
//     return (
//         <div className='flex items-center justify-center w-full h-full'>
//             <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//                 <p>Welcome 👋 {authUser.fullName} ❄</p>
//                 <p>Select a chat to start messaging</p>
//                 <TiMessages className='text-3xl md:text-6xl text-center' />
//             </div>
//         </div>
//     );
// };


// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;
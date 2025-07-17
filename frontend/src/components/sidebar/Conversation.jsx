import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div
            className={`flex gap-3 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer transition-all duration-200
            ${isSelected ? "bg-sky-500" : ""}
            `}
            onClick={() => {
            setSelectedConversation(conversation);

            if (window.innerWidth < 640) {
            setTimeout(() => {
                document.getElementById('message-container')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            }
            }}
            >

                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-10 sm:w-12 rounded-full'>
                        <img src={conversation.profilePic} alt="user avatar" className="object-cover" />
                    </div>
                </div>

                <div className='flex flex-col flex-1 truncate'>
                    <div className='flex gap-2 justify-between items-center'>
                        <p className='font-bold text-gray-200 text-sm sm:text-base truncate'>{conversation.fullName}</p>
                        <span className='text-lg sm:text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className="divider my-0 py-0 h-1" />}
        </>
    );
};

export default Conversation;







// import React from "react";
// import useConversation from "../../zustand/useConversation";
// import { useSocketContext } from "../../context/SocketContext";

// const Conversation = ({ conversation, lastIdx, emoji }) => {
//     const { selectedConversation, setSelectedConversation } = useConversation();

//     const isSelected = selectedConversation?._id === conversation._id;
//     const { onlineUsers } = useSocketContext();
//     const isOnline = onlineUsers.includes(conversation._id);

//     return (
//         <>
//             <div
//                 className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
//         ${isSelected ? "bg-sky-500" : ""}
//         `}
//                 onClick={() => setSelectedConversation(conversation)}
//             >
//                 <div className={`avatar ${isOnline ? "online" : ""}`}>
//                     <div className='w-12 rounded-full'>
//                         <img src={conversation.profilePic} alt="user avatar" />
//                     </div>
//                 </div>

//                 <div className='flex flex-col flex-1'>
//                     <div className='flex gap-3 justify-between'>
//                         <p className='font-bold text-gray-200'>{conversation.fullName}</p>
//                         <span className='text-xl'>{emoji}</span>
//                     </div>
//                 </div>
//             </div>

//             {!lastIdx && <div className="divider my-0 py-0 h-1" />}
//         </>
//     );
// };

// export default Conversation;

import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);

    return (
        <div className='px-4 flex-1 overflow-y-auto max-h-[calc(100vh-220px)] sm:max-h-[calc(100vh-240px)]'>
            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length === 0 && (
            <div className="flex justify-center items-center h-[calc(100vh-220px)] sm:h-[calc(100vh-240px)]">
                <p className="text-sm text-gray-400 text-center">
                    Send a message to start the conversation
                </p>
           </div>
            )}
        </div>
    );
};
export default Messages;








// import { useEffect, useRef } from "react";
// import useGetMessages from "../../hooks/useGetMessages";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import Message from "./Message";
// import useListenMessages from "../../hooks/useListenMessages";

// const Messages = () => {
//     const { messages, loading } = useGetMessages();
//     useListenMessages();
//     const lastMessageRef = useRef();

//     useEffect(() => {
//         setTimeout(() => {
//             lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     }, [messages]);

//     return (
//         <div className='px-4 flex-1 overflow-auto'>
//             {!loading &&
//                 messages.length > 0 &&
//                 messages.map((message) => (
//                     <div key={message._id} ref={lastMessageRef}>
//                         <Message message={message} />
//                     </div>
//                 ))}

//             {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
//             {!loading && messages.length === 0 && (
//                 <p className='text-center'>Send a message to start the conversation</p>
//             )}
//         </div>
//     );
// };
// export default Messages;


// STARTER CODE SNIPPET
// import Message from "./Message";

// const Messages = () => {
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 		</div>
// 	);
// };
// export default Messages;
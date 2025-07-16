import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    return (
        <div className='py-2 flex flex-col overflow-y-auto max-h-[calc(100vh-180px)] sm:max-h-[calc(100vh-160px)] scrollbar-thin scrollbar-thumb-slate-600'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}

            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
        </div>
    );
};
export default Conversations;




// import useGetConversations from "../../hooks/useGetConversations";
// import { getRandomEmoji } from "../../utils/emojis";
// import Conversation from "./Conversation";

// const Conversations = () => {
//     const { loading, conversations } = useGetConversations();
//     return (
//         <div className='py-2 flex flex-col overflow-auto'>
//             {conversations.map((conversation, idx) => (
//                 <Conversation
//                     key={conversation._id}
//                     conversation={conversation}
//                     emoji={getRandomEmoji()}
//                     lastIdx={idx === conversations.length - 1}
//                 />
//             ))}

//             {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
//         </div>
//     );
// };
// export default Conversations;
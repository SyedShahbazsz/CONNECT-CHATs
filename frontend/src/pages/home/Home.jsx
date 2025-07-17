import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      {/* Sidebar: Full width on mobile, fixed width on desktop */}
      <div className="w-full sm:w-[300px] h-[40%] sm:h-full overflow-y-auto border-r border-gray-700">
      <Sidebar />
      </div>

      {/* Message Container: Takes remaining height */}
      <div className="flex-1 h-[60%] sm:h-full">
      <MessageContainer />
      </div>
    </div>
  );
};

export default Home;


// import MessageContainer from "../../components/messages/MessageContainer";
// import Sidebar from "../../components/sidebar/Sidebar";

// const Home = () => {
//     return (
//         <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <Sidebar />
//             <MessageContainer />
//         </div>
//     );
// };
// export default Home;


// //import MessageContainer from "../../components/messages/MessageContainer";
// import Sidebar from "../../components/sidebar/Sidebar";

// const Home = () => {
//   return (
//     <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
//     backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <Sidebar />
//       {/*<MessageContainer/> */}
//     </div>
//   );
// };
// export default Home;

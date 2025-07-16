// import { Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/SignUp";
// import { Toaster } from "react-hot-toast";
// import { useAuthContext } from "./context/AuthContext";

// function App() {
//   const { authUser } = useAuthContext();
//   return (
//     <div className="p-4 h-screen flex items-center justify-center">
//       <Routes>
//         <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
//         <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
//         <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
//       </Routes>
//       <Toaster />
//     </div>
//   );
// };

// export default App;

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import VantaBackground from "./components/effects/VantaBackground";
// import StarryBackground from "./components/effects/StarryBackground";
import "animate.css";

function AppContent() {
  const { authUser } = useAuthContext();
  const location = useLocation();

  // Show logo only on login or signup page
  const showLogo = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="relative p-4 h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      {showLogo && (
        <> 
        {/* <StarryBackground /> */}
        <VantaBackground /> { /*✅ Show animated rays */}
        <img
          src="/logosz.png"
          alt="Logo"
          className="absolute top-4 left-4 w-36 h-auto z-50 cursor-pointer wiggle"
        />
        </> 
      )}

      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default AppContent;


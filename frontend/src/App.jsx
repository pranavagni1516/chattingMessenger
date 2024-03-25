import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home"
import { Navigate,Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App(){
  const {authUser} = useAuthContext();
  return (
    <div className="p-4 h-screen resize flex items-center justify-center">
      <Routes>
      {/* <Home/> */}
        <Route path="/" element={!authUser?<Navigate to={"/login"}/>:<Home/>} />
      {/* <Login/> */}
        <Route path="/login" element={authUser ? <Navigate to="/"/> :<Login/>} />
      {/* <SignUp/> */}
        <Route path="/signup" element={authUser ? <Navigate to="/"/>:<SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}
export default App;
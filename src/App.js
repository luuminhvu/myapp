import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignInComponent from "./pages/Auth/SignIn";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";

function App() {
  const username = useSelector((state) => state.auth.username);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInComponent />} />
        {username && <Route path="/profile" element={<Profile />} />}
      </Routes>
    </Router>
  );
}

export default App;

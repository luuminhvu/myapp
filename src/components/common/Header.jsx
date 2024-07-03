import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Logo from "../Icon/Logo";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../../stores/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await dispatch(logoutAsync());
      navigate("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex justify-between items-center max-w-[1120px] px-4 py-2">
      <Logo />
      {auth.username ? (
        <>
          <div>
            <button
              onClick={() => {
                navigate("/profile");
              }}
              className="bg-purple-500 text-sm text-white py-2 px-12 rounded-[50px]"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="bg-purple-500 ml-6 text-sm text-white py-2 px-12 rounded-[50px]"
              disabled={loading} // Vô hiệu hóa nút khi đang loading
            >
              {loading ? "Logging out..." : "Logout"}{" "}
              {/* Hiển thị trạng thái loading */}
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            navigate("/signin");
          }}
          className="bg-purple-500 text-sm text-white py-2 px-12 rounded-[50px]"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Header;

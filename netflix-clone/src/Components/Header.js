import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/");
      });
  };
  return (
    <div className="absolute w-screen px-8 bg-gradient-to-b from-black py-2 z-50 flex justify-between">
      <img
        className="w-44 brightness-150 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-4">
          <img className="w-10 h-10" src={user?.photoURL} />
          <button
            onClick={signOutHandler}
            className="font-bold text-white mx-1"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

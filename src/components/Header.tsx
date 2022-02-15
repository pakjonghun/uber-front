import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useMe from "../hooks/useMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import useLogout from "../hooks/useLogout";
import { getIsLoggedIn, getToken } from "../apollo";
import { TOKEN } from "../constants";

const Header = () => {
  const { data } = useMe();
  const logout = useLogout();
  const onClick = useCallback(() => {
    logout();
    localStorage.removeItem(TOKEN);
    getToken("");
    getIsLoggedIn(false);
  }, [logout]);

  return (
    <>
      {!data?.me?.isEmailVerified && (
        <div className="flex justify-center py-3 bg-red-400">
          <span className="text-sm text-red-50">Please Verify Email</span>
        </div>
      )}
      <div>
        <header className="flex item-center justify-between w-full max-w-screen-xl mx-auto py-3 px-5 xl:px-0">
          <h1>Uber Eats</h1>
          <ul className="flex space-x-5 text-xl">
            <li>
              <Link to="/profile">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={onClick}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </Link>
            </li>
          </ul>
        </header>
        <Outlet />
      </div>
    </>
  );
};

export default Header;

import { Dropdown, Avatar } from "@nextui-org/react";
import { NavLink, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "177264412292-61gchrb5v85ng2bop3om5k2kk1k0k97u.apps.googleusercontent.com"
var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

export default function DropDown(props: any) {
  var isLoggedin = localStorage.getItem("loginBool")

  interface AppUser {
    googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
  }
  const isValid = (value: string | null): value is string => [null, undefined, ""].includes(value)

  const userInfo = (): AppUser | undefined => {
    const value: string | null = localStorage.getItem("userInfo");
    if (value != null) {
      return JSON.parse(value);
    }
  }


  if (isLoggedin === "true") {
    var currentUser: AppUser | undefined = userInfo();
  }


  const navigate = useNavigate();
  const goLogin = () => {
    if (isLoggedin === "false") {
      navigate("/login")
    }
  }

  const logout = () => {
    localStorage.setItem("loginBool", "false")
    window.location.reload()
  }


  const setProfilePic = () => {
    // console.log("test", currentUser?.imageUrl)
    if (isLoggedin === "true") {
      if (currentUser?.imageUrl != undefined)
        return currentUser.imageUrl
    }
    return require("../images/profile_picture_default.jpg");
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        discoveryDocs: DISCOVERY_DOCS,
      })
    };

    gapi.load('client:auth2', start);


  });

  return (
    <Dropdown placement="bottom-right">
      <Dropdown.Trigger>
        <Avatar
          bordered
          size="lg"
          as="button"
          color="primary"
          src={setProfilePic()}
          referrerPolicy="no-referrer"
          onClick={goLogin}
        />
      </Dropdown.Trigger>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="Profile">
          <NavLink
            to="/profile"
            className="flex h-full w-full"
          >
            Profile
          </NavLink>
        </Dropdown.Item>

        <Dropdown.Item key="Account">
          <NavLink
            to="/profile"
            className="flex h-full w-full"
          >
            Account
          </NavLink>
        </Dropdown.Item>

        <Dropdown.Item key="Favorite">
          <NavLink
            to="/profile"
            className="flex h-full w-full"
          >
            Favorite
          </NavLink>
        </Dropdown.Item>

        <Dropdown.Item key="Setting">
          <NavLink
            to="/profile"
            className="flex h-full w-full"
          >
            Settings
          </NavLink>
        </Dropdown.Item>

        <Dropdown.Item key="Logout"
          withDivider color="error">
          <NavLink
            to="#"
            className="flex h-full w-full"
            onClick={logout}
          >
            Logout
          </NavLink>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
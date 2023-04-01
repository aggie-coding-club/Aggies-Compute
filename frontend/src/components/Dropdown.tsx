import { Dropdown, Avatar } from "@nextui-org/react";
import { NavLink } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "177264412292-61gchrb5v85ng2bop3om5k2kk1k0k97u.apps.googleusercontent.com"
var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

export default function DropDown(props: any) {
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
          src={require("../images/profile_picture_default.jpg")} referrerPolicy="no-referrer"
        />
      </Dropdown.Trigger>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="Profile">
          <NavLink
            to="/profile"
            className="flex h-full w-full bg-white"
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

        <Dropdown.Item key="Profile">
          <NavLink
            to="/profile"
            className="flex h-full w-full"
          >
            Logout
          </NavLink>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
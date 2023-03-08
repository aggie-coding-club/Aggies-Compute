import { Dropdown } from "@nextui-org/react";

export default function DropDown(props:any) {
    return (
        <Dropdown>
        <Dropdown.Button flat color="primary">Profile</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
          <Dropdown.Item key="Favorites">Favorites</Dropdown.Item>
          <Dropdown.Item key="Profile">Profile</Dropdown.Item>
          <Dropdown.Item key="Settings">Settings</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
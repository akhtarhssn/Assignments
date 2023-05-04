import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const NavigationBar = () => {
  return (
    <div className="border-b-2 border-gray-100">
      <Navbar className="max-w-7xl container mx-auto py-8 ">
        <Navbar.Brand href="/">
          <h2 className="text-2xl font-bold ">
            <span className="text-blue-500">CHEF</span>
            <span className="text-red-500">RECIPE</span>
          </h2>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="">About</Navbar.Link>
          <Navbar.Link href="">Chef</Navbar.Link>
          <Navbar.Link href="">Blog</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

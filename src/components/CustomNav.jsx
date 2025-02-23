import React from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { SiFusionauth } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';

const CustomNav = () => {
  const navigate = useNavigate();
  let isAuthenticated = false;
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img
         src="/favicon.svg"
         className="mr-3 h-6 sm:h-9"
         alt="Flowbite React Logo"
       /> */}
        <SiFusionauth className="text-2xl mr-2" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Auth
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {isAuthenticated ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
            </Dropdown>
            <Navbar.Toggle />
          </>
        ) : (
          <Button
            onClick={() => navigate('/login')}
            gradientDuoTone="tealToLime"
          >
            Login
            <IoMdLogIn className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    </Navbar>
  );
};

export default CustomNav;

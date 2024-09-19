
import React, { useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import { Link } from "react-router-dom";


const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
}, [dropdownRef]);


  return (
    <div ref={dropdownRef} className="relative">
      <Avatar alt="User Avatar" src={user?.picture} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
          {/* Dropdown items */}
          <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">profile</Link>
          {isAuthenticated && <LogoutButton />}
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;

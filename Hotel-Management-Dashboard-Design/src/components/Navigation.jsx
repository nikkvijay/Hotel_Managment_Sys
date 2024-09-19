import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Avatar from '@mui/joy/Avatar';
import { NavigationData } from './Data/Data';
import { UilSignout } from "@iconscout/react-unicons"; 
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
    const [selected, setSelected] = useState(0);
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

   

    return (
        <div className="bg-white text-black p-4 flex flex-col h-screen">
            <div className="flex items-center justify-center mb-8">
                <Avatar alt="brand_logo" src="/" className="w-12 h-12" />
            </div>
            
            <div className={`menu flex flex-col space-y-4  sm:block flex-grow`}>
                {NavigationData.map((item, index) => (
                    <Link
                        to={item.path}
                        className={`${selected === index ? 'bg-gray-100' : 'hover:bg-gray-200'} flex items-center gap-4 h-10 rounded-md px-3 transition duration-300 ease-in-out cursor-pointer`}
                        key={index}
                        onClick={() => setSelected(index)}
                    >
                        <item.icon className="w-6 h-6 text-gray-800" /> 
                        <span className="text-sm">{item.heading}</span>
                    </Link>
                ))}
            </div>
            <div className="mt-auto">
                <button onClick={handleLogout} to="/signout" className="flex items-center justify-center gap-4 h-10 w-full transition duration-300 ease-in-out cursor-pointer hover:bg-gray-200 rounded-md px-3">
                    <UilSignout className="w-6 h-6 text-gray-800"  />
                    <span className="text-sm">Sign Out</span>
                </button>
            </div>
        </div>
    );
}

export default Navigation;

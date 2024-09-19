import { Link } from "react-router-dom";
import { UilBell } from '@iconscout/react-unicons'
import AvatarDropdown from './components/AvatarDropdown';
import { useAuth0 } from "@auth0/auth0-react";




function Header() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <header className="  md:h-20 lg:h-24 justify-between ">
      < div className=' flex pt-4 mx-3 items-center  justify-between ' >

        <div>
          <h1 className="text-xl font-bold">Welcome, <strong>{isAuthenticated && user ? user.name : "Guest"}!</strong> </h1>
          <p className="text-sm">Don't forget to check your activity</p>

        </div>
        <div className='flex m-5  gap-2  '>
          {/* notification icon */}
          <Link to="/notifications">
            <UilBell className='flex items-center mr-9 w-10 cursor-pointer' />
          </Link>
          <div className='pr-4 text-end '>


          <h1>{isAuthenticated && user ? user.name : "Guest"}</h1>
            <p className="text-sm text-gray-500  ">Owner</p>
          </div>

          <div>
            <AvatarDropdown />
          </div>

        </div>

      </div>





    </header>


  );
}

export default Header;

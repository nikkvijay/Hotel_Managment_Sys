import {
  UilCreateDashboard,
  UilChartPie,
  UilHeartSign,
  UilInvoice,
  UilCalender,
  UilEnvelope,
  UilSetting,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom"; 


export const NavigationData = [
  {
    icon: UilCreateDashboard,
      heading: <Link to={"/dashboard"}>Dashboard</Link>

  },
  {
    icon: UilChartPie,
    heading: <Link to={"/dashboard"}>Analytics</Link>
  },
  {
    icon: UilHeartSign,
    heading: <Link to={"/services"}>Service</Link>

  },
  {
    icon: UilInvoice,
    heading: <Link to={"/dashboard"}>Billing</Link>
  },
  {
    icon: UilCalender,
    heading: <Link to={"/dashboard"}>Booking</Link>
   
  },
  {
    icon: UilEnvelope,
    heading: <Link to={"/dashboard"}>Mail</Link>
    
  },
  {
    icon: UilSetting,
    heading: <Link to={"/dashboard"}>Setting</Link>

  },
];

import { Outlet } from "react-router-dom";
import Dashboard from "./customs/dashboard";

const Profile = () => {
  return (
    <div className="w-[80%] m-auto mt-[60px] flex gap-[30px]">
      <Dashboard />
      <Outlet />
    </div>
  );
};

export default Profile;

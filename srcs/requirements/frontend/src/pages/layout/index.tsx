import { Outlet } from "react-router-dom";
import CustomInput from "../../components/common/CustomInput";
// import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg'
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import SideBar from "../../components/common/SideBar";
import { useEffect, useState } from "react";
import { GetAvatar } from "../../api/axios";
import { useGlobalContext } from "../../provider/AppContext";
import { Link } from "react-router-dom";
import DropDownMenu from "../../components/common/DropDownMenu";

const DropDown = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

const index = () => {
  const { userImg } = useGlobalContext();
  const LayoutStyle = styled.div`
    display: flex;
    height: 100vh;
    /* @media (max-width: 1200px) {
      height: 100%;
    } */
  `;

  

  const handelOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <LayoutStyle>
      {/* {JSON.stringify(userAvatar)} */}
      <div className="md:w-[5rem] ">
        <SideBar />
      </div>
      <div className="main-content  w-full px-4  flex  flex-col ">
        <div className="header py-4 flex justify-end  gap-8 items-center ">
          <div className="search hidden md:block">
            <CustomInput
              placeHolder="Search"
              type="text"
              onChange={handelOnchange}
              icon={<BiSearch className="text-[#1E1D19]" />}
            />
          </div>
          <div className="notification relative">
            <div className="notif-count absolute z-10 text-white bg-red-500 rounded-[50%] w-[15px] h-[15px] text-xs p-0 m-0 flex justify-center items-center top-0 right-0">
              1
            </div>
            <MdOutlineNotifications className="text-4xl text-white font-bold" />
          </div>
          <div className="user flex justify-center items-center  relative">
            {userImg && (
              <img
                src={userImg}
                alt="user"
                className="w-[40px] h-[40px] rounded-[50%]"
              />
            )}
            <DropDownMenu />
          </div>
        </div>
        <div className="content  flex-1">
          <Outlet />
        </div>
      </div>
    </LayoutStyle>
  );
};

export default index;

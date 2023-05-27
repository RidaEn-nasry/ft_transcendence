import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "/logo.svg";
import {
  Home,
  Chat,
  Game,
  Settings,
  Profile,
  Logout,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import instance, { GetAvatar } from "../../api/axios";
import { useGlobalContext } from "../../provider/AppContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

const Routes = [
  {
    name: "chat",
    icon: <Chat />,
    link: "/chat",
  },
  {
    name: "game",
    icon: <Game />,
    link: "/game",
  },
  {
    name: "profile",
    icon: <Profile />,
    link: "/profile",
  },
  {
    name: "settings",
    icon: <Settings />,
    link: "/settings",
  },
  {
    name: "logout",
    icon: <Logout />,
    link: "",
  },
];

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setUserStatus, setUserImg, setUserId, userId, setIsTfaEnabled } = useGlobalContext();
  const [menuIndex, setMenuIndex] = useState<number>(2);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  async function fetchData() {
    try {
      await instance
        .get("/me")
        .then((response) => {
          if (
            response?.data?.tfa == true &&
            response.data.otp_verified == false
          ) {
            // alert("Please enable two factor authentication");
            navigate("/login/two-factor-authentication");
          }
          if (response.statusText) {
          }
          Cookies.set("userid", response.data.id);
          setUserId(response.data.id);
          setIsTfaEnabled(response.data.tfa);
          setUserStatus(response.data.status.tolowoerCase());
        })
        .catch((error) => {
          if (error.response.status == 401 || error.response.status == 403) {
            navigate("/login");
          }
        });
    } catch (error) {
      console.log(error);
    }
    console.log("ppppppp", userId);
    const res = await GetAvatar(userId);
    setUserImg(res);
  }

  useEffect(() => {
    fetchData();
  }, [userId]);

  const handleLogout = () => {
    async function logout() {
      try {
        await instance.get("/logout").catch((error) => {
          if (error.response.status == 401) {
            navigate("/login");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    logout();
  };

  return (
    <div className=" ">
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } transition duration-500 ease-in-out shadow w-screen h-full backdrop-blur-sm bg-black/50 absolute top-0 left-0 z-40`}
      ></div>

      <div
        className={`sideBar   z-40 pt-5 px-4  h-full  fixed top-0 left-0   md:bg-[#434242] md:shadow-md md:shadow-white/30 ${
          isSidebarOpen
            ? "w-full bg-[#434242]  md:w-60 h-full   transition-all duration-300 ease-out "
            : "md:w-20   transition-all duration-300 ease-out "
        }`}
      >
        <div className="burger cursor-pointer text-white text-3xl  mb-10 flex justify-center ">
          {isSidebarOpen ? (
            <CgClose
              onClick={handleToggleSidebar}
              className="text-white fill-white"
            />
          ) : (
            <RxHamburgerMenu onClick={handleToggleSidebar} />
          )}
        </div>
        <div
          className={`routes mt- flex flex-col gap-5  relative ${
            isSidebarOpen ? "" : "md:flex flex-col gap-5 hidden "
          } `}
        >
          {Routes.map((route, index) => {
            return (
              <Link
                to={route.link}
                key={index}
                className={`${
                  isSidebarOpen
                    ? "flex justify-start items-center w-full h-12 px-4 rounded-md hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-out"
                    : "flex justify-center items-center w-full h-12 px-4 rounded-md hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-out"
                } ${index == menuIndex ? "bg-gray-600" : ""} `}
                onClick={() => {
                  setMenuIndex(index);
                  setIsSidebarOpen(false);
                  if (route.name == "logout") handleLogout();
                }}
              >
                <div className="icon">{route.icon}</div>
                {isSidebarOpen && <div className="text ml-4">{route.name}</div>}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

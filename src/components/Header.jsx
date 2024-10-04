import React, { useEffect, useState } from "react";
import {
  FacebookLogo,
  IconAvatar,
  IconGroup,
  IconHome,
  IconMenuGroup,
  IconMenuGroupActive,
  IconMenuHome,
  IconMenuHomeActive,
  IconMenuMarket,
  IconMenuMarketActive,
  IconMenuMini,
  IconMenuVideo,
  IconMenuVideoActive,
  IconMessenger,
  IconNotify,
  IconShop,
  IconVideo,
} from "../icons";
import { Link } from "react-router-dom";
import HeaderMenuItem from "./HeaderMenuItem";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";

function Header() {
  const logout = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);

  const [menuActive, setMenuActive] = useState({
    home: true,
    video: false,
    market: false,
    group: false,
  });

  const HdlMenuClick = (menu) => {
    // console.log(menu);
    setMenuActive({
      home: false,
      video: false,
      market: false,
      group: false,
    });
    setMenuActive((prev) => ({ ...prev, [menu]: true }));
    // console.log(menuActive);
  };

  useEffect(() => {
    console.log(menuActive);
  }, [menuActive]);

  return (
    <header className="h-14 w-full fixed top-0 z-10 flex justify-between px-2 shadow-lg bg-white">
      <div className="flex gap-2 flex-1 items-center">
        <FacebookLogo className="h-[3rem]" />
        <label className="input input-bordered flex items-center gap-2 h-10 w-64 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {/* Menu                       */}
      {/* Menu                       */}
      {/* Menu                       */}
      <div className="flex gap-2 flex-1 justify-center">
        {/* Home */}
        <div className="flex flex-col justify-center items-center h-full">
          {menuActive.home ? (
            <div
              onClick={() => HdlMenuClick("home")}
              className="flex justify-center items-center h-full border-b-4 border-[#0866FF]"
            >
              <Link
                to="/"
                className="flex justify-center items-center w-28 py-3 rounded-md"
              >
                {menuActive.home ? <IconMenuHomeActive /> : <IconMenuHome />}
              </Link>
            </div>
          ) : (
            <div
              onClick={() => HdlMenuClick("home")}
              className="flex justify-center items-center h-full"
            >
              <Link
                to="/"
                className="flex justify-center items-center w-28 py-3 rounded-md hover:bg-[#f2f2f2]"
              >
                {menuActive.home ? <IconMenuHomeActive /> : <IconMenuHome />}
              </Link>
            </div>
          )}
        </div>
        {/* Video */}
        <div className="flex flex-col justify-center items-center h-full">
          {menuActive.video ? (
            <div
              onClick={() => HdlMenuClick("video")}
              className="flex justify-center items-center h-full border-b-4 border-[#0866FF]"
            >
              <Link
                to="/"
                className="flex justify-center items-center w-28 py-3 rounded-md"
              >
                {menuActive.video ? <IconMenuVideoActive /> : <IconMenuVideo />}
              </Link>
            </div>
          ) : (
            <div
              onClick={() => HdlMenuClick("video")}
              className="flex justify-center items-center h-full"
            >
              <Link
                to="/"
                className="flex justify-center items-center w-28 py-3 rounded-md hover:bg-[#f2f2f2]"
              >
                {menuActive.video ? <IconMenuVideoActive /> : <IconMenuVideo />}
              </Link>
            </div>
          )}
        </div>
        {/*  */}
        <div className="flex flex-col justify-center items-center h-full">
          {menuActive.market ? (
            <div
              onClick={() => HdlMenuClick("market")}
              className="flex justify-center items-center h-full border-b-4 border-[#0866FF]"
            >
              <Link
                to="/"
                className="flex justify-center items-center w-28 py-3 rounded-md"
              >
                {menuActive.market ? (
                  <IconMenuMarketActive />
                ) : (
                  <IconMenuMarket />
                )}
              </Link>
            </div>
          ) : (
            <div
              onClick={() => HdlMenuClick("market")}
              className="flex justify-center items-center h-full"
            >
              <Link
                to="/"
                className="flex justify-center items-center w-28 py-3 rounded-md hover:bg-[#f2f2f2]"
              >
                {menuActive.market ? (
                  <IconMenuMarketActive />
                ) : (
                  <IconMenuMarket />
                )}
              </Link>
            </div>
          )}
        </div>
        {/*  */}
        <div className="flex flex-col justify-center items-center h-full">
          {menuActive.group ? (
            <div
              onClick={() => HdlMenuClick("group")}
              className="flex justify-center items-center h-full border-b-4 border-[#0866FF]"
            >
              <Link
                to="/friends"
                className="flex justify-center items-center w-28 py-3 rounded-md"
              >
                {menuActive.group ? <IconMenuGroupActive /> : <IconMenuGroup />}
              </Link>
            </div>
          ) : (
            <div
              onClick={() => HdlMenuClick("group")}
              className="flex justify-center items-center h-full"
            >
              <Link
                to="/friends"
                className="flex justify-center items-center w-28 py-3 rounded-md hover:bg-[#f2f2f2]"
              >
                {menuActive.group ? <IconMenuGroupActive /> : <IconMenuGroup />}
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2 flex-1 justify-end items-center">
        <div className="avatar">
          <div className="!flex justify-center items-center min-w-10 rounded-full bg-[#e4e6eb] hover:bg-[#d8dadf]">
            <IconMenuMini className="w-[18px]" />
          </div>
        </div>
        <div className="avatar">
          <div className="!flex justify-center items-center min-w-10 rounded-full bg-[#e4e6eb] hover:bg-[#d8dadf]">
            <IconMessenger className="w-5" />
          </div>
        </div>
        <div className="avatar">
          <div className="!flex justify-center items-center min-w-10 rounded-full bg-[#e4e6eb] hover:bg-[#d8dadf]">
            <IconNotify className="w-6" />
          </div>
        </div>
        {/* <div className="flex justify-center items-center w-[2rem] rounded-full">
          <IconAvatar />
        </div> */}

        {/* <div className="avatar hover:contrast-75">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div> */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="avatar hover:contrast-75">
            <Avatar
              imgSrc={user.profileImage}
              className="w-[40px]"
              menu={true}
            />
            {/* <div className="w-10 rounded-full">
              <img src={user.profileImage} />
            </div> */}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => logout()}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

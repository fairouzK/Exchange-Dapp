import React, {useContext} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import { TransactionContext } from "../context/TransactionContext";

const NavBarItem = ({ title, classProps }) => (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
    </li>
);

const Navbar = () => {
    const { connectWallet } = useContext(TransactionContext);
    
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer"></img>
            </div>
            <ul className="text-white hidden md:flex list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]" onClick={connectWallet}>Login</li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(false)}  />
                    :<HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(true)}  />}
                    {toggleMenu && (
                        <ul
                            className="z-10 fixed -top-0 -right-1 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
                                flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in
                                space-y-4"
                        >
                            <li className="text-xl w-full my-2 ">
                                <AiOutlineClose onClick={() => setToggleMenu(false)} />
                            </li>
                            {["Market", "Exchange"].map((item, index) => (
                                <NavBarItem key={item + index} title={item} />
                            ))}
                        </ul>
                    )}
            </div>
        </nav>
        
    );
}

export default Navbar;
import React from 'react';
import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from "recoil";

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const handleClick = () => {
      setAuthModalState((prev)=>({...prev, isOpen:true}));
    }
    return <div className="flex items-center justfiy-between sm:px-12 px-2 md:px-24">
        <a href="/" className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="LeetClone" className="h-full" />
      </a>
    <div className="flex items-center  ml-auto space-x-4">
    <button className="bg-brand-orange text-white px-2 py-2 sm:px-4 rounded-lg text-sm font-medium hover:text-brand-orange
     hover:bg-white hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out "
     onClick={handleClick}>
        SignIn  
        </button> </div>
    </div>
}
export default Navbar;
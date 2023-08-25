import React from 'react';
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";

import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import { BsList } from "react-icons/bs";

import { useRouter } from "next/router";


type TopbarProps = {
    problemPage?: boolean;
};

const Topbar:React.FC<TopbarProps> = ({problemPage}) => {
   
	const setAuthModalState = useSetRecoilState(authModalState);
	const router = useRouter();

	const handleProblemChange = (isForward: boolean) => {
		
	};
    return  (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
				<Link href='/' className='h-[22px] flex-1'>
					<img src='/logo-full.png' alt='Logo' className='h-full' />
				</Link>

				{problemPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							onClick={() => handleProblemChange(false)}
						>
							<FaChevronLeft />
						</div>
						<Link
							href='/'
							className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
						>
							<div>
								<BsList />
							</div>
							<p>Problem List</p>
						</Link>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							onClick={() => handleProblemChange(true)}
						>
							<FaChevronRight />
						</div>
					</div>
				)}

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<a
							href='https://www.buymeacoffee.com/burakorkmezz'
							target='_blank'
							rel='noreferrer'
							className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
						>
							Premium
						</a>
					</div>
					<Link href="/auth">
                        <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded'> Sign In</button>
                    </Link>
				</div>
			</div>
		</nav>
	);
};
  

export default Topbar;
"use client";
import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'


export const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-5 ">
            <Image src="/logo.svg" alt='logo' width={150} height={100}/>
            <div  className="hidden md:flex gap-5 text-white">
                <Link href='/' className={pathname === '/' ? 'text-[#fcb900] underline p-2 ' : 'hover:bg-[#fcb900] p-2 rounded-full hover:text-white '}>Home</Link>
                <Link href='/history' className={pathname === '/history' ? 'text-[#fcb900] underline p-2 ' : 'hover:bg-[#fcb900] p-2 rounded-full hover:text-white '}>History</Link>
                <Link href='/' className="hover:bg-[#fcb900] p-2 rounded-full hover:text-white">Contact Us</Link>
                
            </div>
        </div>
    </div>
  )
}

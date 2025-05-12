'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import NavSide from './navbar-sidebar'
import { MenuIcon } from 'lucide-react'


const poppins=Poppins({
    subsets: ['latin'],
    weight: ['700']
})
interface NavbarItemProps {
    href:string
    children: React.ReactNode
    isActive?: boolean
    
}

const NavbarItem =({href,children,isActive}:NavbarItemProps)=>{
    
    return (
        <Button asChild variant='outline'
        className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",isActive && "bg-black text-white hover:bg-black hover:text-white" )}
        >
            <Link href={href}>
           {children}
            </Link>
        </Button>
    )
}
const NavbarItems =[
    {href:'/',children:"Home"},
    {href:'/about',children:"About"},
    {href:'/features',children:"Features"},
    {href:'/pricing',children:"Pricing"},
    {href:'/contact',children:"Contact"}
]

const Navbar = () => {
    const pathname = usePathname()
    const [isSidebarOpen, setisSidebarOpen] =useState(false)
  return (
    <nav className='h-20 flex border-b justify-between font-medium bg-white items-center pl-6'>
         <NavSide open={isSidebarOpen} onOpenChange={setisSidebarOpen} items={NavbarItems} pathname={pathname} />
        <Link href='/' className=''>
        <span className={cn('text-5xl font-semibold', poppins.className)}>NEPKART</span>
        </Link>
       
        <div className='items-center gap-4 hidden lg:flex h-full'>
            {
                NavbarItems.map((item)=>(
                    <NavbarItem key={item.href}
                     isActive={pathname === item.href}
                    {...item} /> 
                       

                ))
            }
            <div className='hidden lg:flex h-full'>
           <Button
           asChild
           variant={'secondary'} className='border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-500 transition-colors text-lg '>
            <Link href='/sign-in'>
          Log in
            </Link>
           </Button>
           <Button asChild  className='border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black hover:bg-pink-500 hover:text-black transition-colors  text-lg '>
            <Link href='/sign-up'>
Start Selling
            </Link>
           </Button>
            </div>

        </div>
        <div className='flex lg:hidden items-center justify-center'>
            <Button variant={'ghost'} className='size-12 border-transparent bg-white' onClick={()=>setisSidebarOpen(pre=>!pre)} >

                <MenuIcon className='size-12'/>
            </Button>

        </div>
    </nav>
  )
}

export default Navbar
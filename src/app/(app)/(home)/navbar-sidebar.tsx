
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import Link from 'next/link';
import React from 'react'

interface NavbarItem{
    href: string;
    children:React.ReactNode;
}
interface NavbarProps{
    items: NavbarItem[];
    pathname:string;
    open:boolean;
    onOpenChange:(open:boolean)=>void;
}

const NavSide = ({
        items,
        open,
        pathname,
        onOpenChange
    }:NavbarProps
) => {
    
  return (
   <Sheet open={open} onOpenChange={onOpenChange}>
    <SheetContent side='left' className='p-0 transition-none'>
        <SheetHeader className='p-4 border-b'>
            
                <SheetTitle>
                    Menu
                </SheetTitle>
                

      
        </SheetHeader>
        <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2'>
            {
                items.map((item)=>{
                  return (
                    <Link onClick={()=>onOpenChange(false)} key={item.href} href={item.href} className={cn('w-full text-left p-4 hover:border  flex items-center text-base font-medium',pathname==item.href?'bg-black text-white':"")} >
                        {item.children}
                    </Link>
                  )  
                })
            }
            <div className='border-t'>
                <Link href={'/sign-in'} onClick={()=>onOpenChange(false)} className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium' >
                Login In
                </Link>
                <Link href={'/sign-up'} onClick={()=>onOpenChange(false)} className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'  >
                Start Selling
                </Link>
            </div>
        </ScrollArea>
    </SheetContent>
   </Sheet>
  )
}

export default NavSide
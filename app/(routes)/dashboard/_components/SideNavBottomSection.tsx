import { Button } from '@/components/ui/button'
import { Archive, Flag, Github } from 'lucide-react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import Constant from '@/app/_constant/Constant'
import PricingDialog from './PricingDialog'
import { Users,LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
function SideNavBottomSection({onFileCreate,totalFiles,user}:any) {
  
  const router = useRouter()
  const menu=[
    {
        id:1,
        name:'Create Team',
        path:'/teams/create',
        icon:Users
    },
];

  const [fileInput,setFileInput]=useState('');

  const onMenuClick=(item:any)=>{
    if(item.path)
    {
        router.push(item.path);
    }
}

  return (
    <div>
                      {/* Add New File Button  */}
                      <Dialog>
                  <DialogTrigger className='w-full' asChild>
                  <Button className='w-full bg-blue-600 
                      hover:bg-blue-700 justify-start mt-3'>New File</Button>
                  </DialogTrigger>
                  {totalFiles<Constant.MAX_FREE_FILE? 
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New File</DialogTitle>
                      <DialogDescription>
                          <Input placeholder='Enter File Name' 
                          className='mt-3'
                          onChange={(e)=>setFileInput(e.target.value)}
                          />
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="">
                          <DialogClose asChild>
                            <Button type="button" 
                            className='bg-blue-600
                            hover:bg-blue-700'
                            disabled={!(fileInput&&fileInput.length>3)}
                            onClick={()=>onFileCreate(fileInput)}
                            >
                              Create
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                  </DialogContent>:
                  <PricingDialog/>}
                </Dialog>
         <Separator className='mt-2 bg-slate-100'/>
                {/* Option Section  */}
                <div>
                    {menu.map((item,index)=>(
                        <h2 key={index} className='flex gap-2 items-center
                        p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm'
                        onClick={()=>onMenuClick(item)}>
                            <item.icon className='h-4 w-4'/>
                            {item.name}</h2>
                    ))}
                    <LogoutLink>
                    <h2 className='flex gap-2 items-center
                        p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm'>
                            <LogOut className='h-4 w-4'/>
                            Logout</h2>
                        </LogoutLink>
                </div>
                <Separator className='mt-2 bg-slate-100'/>

     
      
      {/* Progress Bar  */}
      <div className='h-4 w-full bg-gray-200 rounded-full mt-5'>
          <div className={`h-4  bg-blue-600 rounded-full`}
          style={{ width: `${(totalFiles/20)*100}%` }}
         >
          </div>
      </div>

      <h2 className='text-[12px] mt-3'>
        <strong>{totalFiles}</strong> out of <strong>{Constant.MAX_FREE_FILE}</strong> files used</h2>

        {user&& <div className='mt-2 flex gap-2 items-center'>
                    <Image src={user?.picture} alt='user'
                    width={30}
                    height={30}
                    className='rounded-full'
                    />
                    <div>
                        <h2 className='text-[14px] font-bold'>{user?.given_name} {user?.family_name}</h2>
                        <h2 className='text-[12px] text-gray-500'>{user?.email}</h2>

                    </div>
                </div>}
     </div>



     
  )
}

export default SideNavBottomSection
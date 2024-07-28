import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export interface TEAM{
    createdBy:String,
    teamName:String,
    _id:String
}
function SideNavTopSection({user,setActiveTeamInfo}:any) {
    const convex=useConvex();
    const [activeTeam,setActiveTeam]=useState<TEAM>();
    const [teamList,setTeamList]=useState<TEAM[]>();
    useEffect(()=>{
        user&&getTeamList();
    },[user])

    useEffect(()=>{
        activeTeam?setActiveTeamInfo(activeTeam):null
    },[activeTeam])
    const getTeamList=async()=>{
        const result=await convex.query(api.teams.getTeam,{email:user?.email})
        console.log("TeamList",result);
        setTeamList(result);
        setActiveTeam(result[0]);
    }
    return (
        <div>
        
                <div className='flex items-center gap-3
      hover:bg-slate-200 p-3 rounded-lg'>
                    <Image src='/logo.jpg' alt='logo'
                        width={100}
                        height={100} />
                    <h2 className='flex gap-2 
                    items-center
      font-bold text-[17px]
      '>{activeTeam?.teamName}
    
                    </h2>

                </div>
           

        {/* All File Button  */}
        <Popover>
                <PopoverTrigger asChild>
                    <Button variant='outline' className='w-full justify-start gap-2 font-bold mt-8 bg-gray-100'>
                        <LayoutGrid className='h-5 w-5' />
                        All Teams
                        <ChevronDown/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='ml-7 p-4'>
                    {teamList?.map((team, index) => (
                        <h2
                            key={index}
                            className={`p-2 hover:bg-slate-500 hover:text-white rounded-lg mb-1 cursor-pointer ${activeTeam?._id === team._id && 'bg-blue-500 text-white'}`}
                            onClick={() => setActiveTeam(team)}
                        >
                            {team.teamName}
                        </h2>
                    ))}
                </PopoverContent>
            </Popover>
        </div>

    )
}

export default SideNavTopSection
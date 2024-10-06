import { Button } from '@/components/ui/button'
import {  Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

function WorkspaceHeader({onSave}:any) {
  return (
    <div className='p-3 border-b flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <Link href='/dashboard'>
        <Image src={'/logo.jpg'}
          alt='logo'
          height={80}
          width={80} />
          </Link>
      </div>
      <div className='flex items-center '>
        <Button className='h-12 w-100 text-[12px]
        gap-2 bg-yellow-500 hover:bg-yellow-600'
        onClick={()=>onSave()}
        > 
        <Save className='h-4 w-4' /> Save </Button>

      </div>
    </div>
  )
}

export default WorkspaceHeader
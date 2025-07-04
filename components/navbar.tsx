import { auth, signIn, signOut } from '@/auth'
import { BadgePlus, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const navbar = async () => {

    const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src="/logo.png" alt='logo' width={144} height={30}></Image>
            </Link>

            <div className='flex items-center gap-5 text-black'>
                {session && session?.user?(
                    <>
                    <Link href="/blog/create">
                        <span className='max-sm:hidden'>Create</span>
                        <BadgePlus className='size-6 sm:hidden' />
                    </Link>

                    <form action={async()=>{
                        "use server";
                        await signOut({redirectTo:"/"})
                    }}>
                            <button type='submit'>
                                <LogOut className='size-6 sm:hidden text-red-500' />    
                                <span className='max-sm:hidden'>Log Out</span>
                            </button>
                                
                    </form>

                    <Link href={`/user/${session?.id}`}> 
                        <Avatar className='size-10'>
                            <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || ''}/>
                            <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                    </Link>
                    </>
                ) : (
                    <form action={async()=>{
                        "use server";
                        await signIn('github')
                    }}>
                        <button type='submit'>
                            Login
                        </button>
                    </form>
                )}
            </div>
        </nav>
    </header>
  )
}

export default navbar
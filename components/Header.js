import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Avatar from './Avatar';

function Header() {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(router.query.term);


    const search = (event) => {
        event.preventDefault();
        const term = searchTerm;
        if (!term) return;
        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-4 items-center'>
                <Image
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' height={40}
                    width={120}
                    className='cursor-pointer'
                    onClick={() => router.push('/')}
                    alt='google-logo'
                />
                <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                    <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='flex-grow w-4 focus:outline-none' />
                    <XIcon onClick={() => searchInputRef.current.value = ''} className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition hover:scale-125' />
                    <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                    <button onClick={search} hidden type='submit'>search</button>
                </form>
                <Avatar url='https://randomuser.me/api/portraits/men/36.jpg' className='ml-auto' />
            </div>
        </header>
    )
}

export default Header
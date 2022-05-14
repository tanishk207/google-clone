import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon } from '@heroicons/react/solid'
import { MicrophoneIcon, SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react';
import { useRouter } from 'next/router'

export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {/* header */}
      <header className='flex w-full justify-between p-5 text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Image</p>
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
          <Avatar url='https://randomuser.me/api/portraits/men/36.jpg' />
        </div>
      </header>
      <form className='flex flex-col mt-44 items-center flex-grow w-4/5'>
        <Image src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='google-logo' width={300} height={100} />

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input type="text" ref={searchInputRef} className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5 ml-3 text-blue-500' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}>Google Search</button>
          <a className='btn' href='https://www.google.com/doodles' target='_blank' rel='noreferrer'>I&apos;m Feeling Lucky</a>
        </div>

      </form>
      <Footer />
    </div>
  )
}

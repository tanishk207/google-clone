import Image from 'next/image'
import React from 'react'

function Avatar({ url, className }) {
    return (
        <img className={`h-10 rounded-full cursor-pointer transition hover:scale-110 ${className}`} loading='lazy' src={url} alt='profile-pic' />
    )
}

export default Avatar
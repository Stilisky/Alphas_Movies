import React from 'react'

function MobileMenu({ isVisible }) {
    if (!isVisible) {
        return null
    }
    return (
        <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800'>
            <div className='flex flex-col gap-4'>
                <div className='px-3 text-center uppercase text-white hover:underline'>
                    Home
                </div>
                <div className='px-3 text-center uppercase text-white hover:underline'>
                    MOVIES
                </div>
                <div className='px-3 text-center uppercase text-white hover:underline'>
                    SEARCH MOVIES
                </div>
                <div className='px-3 text-center uppercase text-white hover:underline'>
                    My Lists
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
"use client";

import { Icon } from '@iconify/react';
import Link from 'next/link';

const LinksCon = () => {

    const openPage = (link: string) => {
        window.open(link, '_blank');
    }



    return (
        <div className="h-screen w-full text-white flex justify-center items-center overflow-none z-[20]">
            <div className="max-w-[800px] w-full h-auto z-[20] mx-5">
                <div className="w-full h-[100px] flex justify-center items-center">
                    <h1 className="text-2xl font-bold text-center z-[20]">This project was made by Nathan Renner in order to showcase talent, this is a simple remake of theuselessweb.com!</h1>
                </div>

                <div className="w-full h-auto flex justify-between mt-10">
                    <div className="w-full h-full">
                        <p className="text-md font-semibold z-[20] p-2">Name: <a className='underline px-2'>Nathan Renner</a></p>
                        <p className="text-md font-semibold z-[20] p-2">Phone: <a className='underline px-1'>760-798-6550</a></p>
                        <p className="text-md font-semibold z-[20] p-2">Email: <a className='underline px-2'>nathanrenner1@gmail.com</a></p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p onClick={() => openPage('https://github.com/PrayRNGesus/')} className="text-md font-semibold z-[20] p-2 hover:underline">Github</p>
                        <p onClick={() => openPage('https://www.instagram.com/nathan_renner_/')} className="text-md font-semibold z-[20] p-2 hover:underline">Instagram</p>
                        <p onClick={() => openPage('https://www.spigotmc.org/members/prayrngesus.936190/')} className="text-md font-semibold z-[20] p-2 hover:underline">Spigot</p>
                    </div>

                </div>


                <div className="w-full h-auto flex items-center justify-center mt-12 text-xl">
                    <Link href="/">
                        <div className='w-[300px] h-auto flex items-center justify-center border rounded-xl transition shad'>
                            <button>Back</button>
                            <Icon icon="tabler:arrow-back" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LinksCon;
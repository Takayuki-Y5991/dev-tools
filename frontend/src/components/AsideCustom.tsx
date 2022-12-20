import React from 'react';
import { HiChevronDoubleLeft, HiChevronLeft } from 'react-icons/hi';
import { useState } from 'react';

function AsideCustom() {
    const [toggleMenu, setToggleMenu] = useState(true);
    return (
        <div className="border-right">
            <div
                className={`${
                    toggleMenu ? 'w-72' : 'w-20'
                } h-screen bg-dark-purple relative duration-300`}
            >
                <HiChevronLeft
                    className={`absolute cursor-pointer -right-4 top-9 w-7 h-6 border-2 rounded-full hover:rounded-lg bg-black ${
                        !toggleMenu && 'rotate-180'
                    }`}
                    onClick={() => setToggleMenu(!toggleMenu)}
                />
            </div>
        </div>
    );
}

export default AsideCustom;

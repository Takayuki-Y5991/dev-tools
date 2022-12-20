import wailsLogo from './assets/wails.png';
import './App.css';
import Aside from './components/Aside';
import Session from './components/Session';
import { useState } from 'react';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import AsideCustom from './components/AsideCustom';

function App() {
    const [menuToggle, setMenuToggle] = useState(true);
    return (
        <>
            <main className="flex text-slate-100">
                {/* <div className="relative">
                    <Aside />
                    <button className="ml-3 fixed top-4 left-1 right-3">
                        <HiChevronDoubleLeft />
                    </button>
                </div> */}
                <AsideCustom />
                <Session />
            </main>
        </>
    );
}

export default App;

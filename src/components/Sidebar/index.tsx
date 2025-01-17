"use client"

import * as React from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const pathName = usePathname();

    if (!mounted) {
        return null;
    }

    return (
        <nav className='dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2'>
            <div className='flex flex-col gap-8 items-center justify-center ' >
                <Link
                    href={'/'}
                    className='flex font-bold flex-row'
                >
                    AutomizeX
                </Link>
            </div>
        </nav>
    );
}

export default Sidebar;
import Link from "next/link"

const Header = () => {
    const links = [
        { href: '/posts', label: 'Posts' },
        { href: '/about', label: 'About' }
    ];

    return (
        <header id='header' className="px-5 py-3 flex justify-between items-center">
            <Link href='/' passHref>
                <a id='header-logo'>
                    <img src="/AMENDS-color.png" alt="" className='w-28'/>
                </a>
            </Link>
            <div id='header-links' className='text-base'>
                {links.map(({href, label}, i) => {
                    return (
                        <Link href={ href } key={ i } passHref>
                            <a className='underline-offset-2 hover:underline'>{ label }</a>
                        </Link>
                    )
                })}
            </div>
        </header>
    )
}

export default Header
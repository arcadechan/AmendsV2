import Link from "next/link"

const Header = () => {
    return (
        <header id='header' className="p-5 flex justify-between">
            <Link href='/' passHref>
                <a id='header-logo' className=''>
                    <img src="/AMENDS-color.png" alt="" className='w-28'/>
                </a>
            </Link>
            <div id='header-links' className='text-base'>
                <a href="/posts">Posts</a>
                <a href="/about">About</a>
            </div>
        </header>
    )
}

export default Header
const Header = () => {
    return (
        <header id='header' className="p-5 flex justify-between">
            <a href="/" id='header-logo' className=''>
                <img src="/AMENDS-white.png" alt="" className='w-28'/>
            </a>
            <div id='header-links' className='text-base'>
                <a href="/posts">Posts</a>
                <a href="/about">About</a>
            </div>
        </header>
    )
}

export default Header
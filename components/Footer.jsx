const Footer = () => {
    const originYear = 2022;
    const currentYear = new Date().getFullYear()
    const copyRightYear = originYear !== currentYear ? `${originYear} - ${currentYear}` : originYear;

    return (
        <footer id='footer' className='p-5'>
            <div id='badge-container' className='text-center py-5'>
                <div id='large-badges' className='mb-3'>
                    <img src='/badges/large/bestviewed.gif' alt='' />
                    <img src='/badges/large/bookmark_this_page.gif' alt='' />
                    <img src='/badges/large/css.gif' alt='' />
                    <img src='/badges/large/cuteanimegirls.gif' alt='' />
                    <a href='https://www.w3schools.com/' target='_blank' rel="noreferrer">
                        <img src='/badges/large/html.gif' alt='' />
                    </a>
                    <img src='/badges/large/i_use_ms_paint.gif' alt='' />
                    <img src='/badges/large/made_with_windows.gif' alt='' />
                    <img src='/badges/large/neocities.gif' alt='' />
                    <a href='https://www.youtube.com/watch?v=9Gj47G2e1Jc' target='_blank' rel='noreferrer'>
                        <img src='/badges/large/plastic_love_now.png' alt='' />
                    </a>
                    <a href='https://code.visualstudio.com/' target='_blank' rel="noreferrer">
                        <img src='/badges/large/vs_code.gif' alt='' />
                    </a>
                    <img src='/badges/large/www.gif' alt='' />
                </div>
                <div id='small-badges'>
                    <a href='https://github.com/arcadechan/AmendsV2' target='_blank' rel='noreferrer'>
                        <img src='/badges/small/on_github.png' alt='' />
                    </a>
                </div>
            </div>
            <div id='copyright' className='text-center'>
                <span>&copy; { copyRightYear } | <a href='' className='underline'>Amends</a></span>
            </div>
        </footer>
    )
}

export default Footer
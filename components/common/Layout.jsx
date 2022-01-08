import { Header, Main, Footer } from "."

const Layout = ({ children, heroBanner }) => {
    return (
        <div className='container mx-auto max-w-screen-lg'>
            <Header/>
            { heroBanner }
            <Main>{children}</Main>
            <Footer/>
        </div>
    )
}

export default Layout
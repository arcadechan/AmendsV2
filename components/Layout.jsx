import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className='container mx-auto max-w-screen-lg'>
            <Header/>
            <Main>{children}</Main>
            <Footer/>
        </div>
    )
}

export default Layout
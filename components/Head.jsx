import { default as NextHead } from "next/head";

const Head = ({ title, description }) => {
    return (
        <NextHead>
            <title>{ title || 'Amends' }</title>
            <meta name="description" content={ description || "Modifying the world's cultural palate one post at a time." } />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet"/> 
            <link rel="icon" href="/favicon.png" />
        </NextHead>
    )
}

export default Head
import { default as NextHead } from "next/head";

const Head = ({ title, description }) => {
    return (
        <NextHead>
            <title>{title || 'Amends'}</title>
            <meta name="description" content={description || "Modifying the world's cultural palate one post at a time."} />
        </NextHead>
    )
}

export default Head
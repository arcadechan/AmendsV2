import styles from '../styles/HeroBanner.module.scss'

const HeroBanner = ({image, text, background_size, backdrop }, props) => {
    console.log({props})
    const { headline, subtext } = text

    return (
        <div className={styles.herobanner} style={{ backgroundImage: `url(${image})`, backgroundSize: background_size }}>
            <div className={`${styles.text} font-['Eb_Garamond']`}>
                { !!headline && (<h1 className='text-5xl'>{ headline }</h1>)}
                { !!subtext && (<h3 className='text-3xl'>{ subtext }</h3>)}
            </div>
            { backdrop.enabled && (
                <div className={styles.backdrop} style={{ backgroundColor: backdrop.color }}></div>
            )}
        </div>
    )
}

export default HeroBanner
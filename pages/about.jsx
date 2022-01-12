import { Head, Layout } from '../components/common'
import { HeroBanner, PinkyPromise } from '../components'
import { attributes, react as AboutContent } from '../content/about.md'

const About = () => {
  let heroBanner = false;
  
  if(attributes?.hero_banner?.image){
    heroBanner = <HeroBanner {...attributes.hero_banner}/>
  }

  return (
    <Layout heroBanner={heroBanner}>
      <Head title='Amends - About'/>
      <div>
        <h1 className='page-title font-["Eb_Garamond"]'>About</h1>
        <AboutContent/>
        <PinkyPromise className='block mx-auto w-full max-w-[8rem] mt-5' />
      </div>
    </Layout>
  )
}

export default About
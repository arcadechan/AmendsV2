import { Head, Layout } from '../components/common';
import { HeroBanner, PinkyPromise } from '../components';
import { attributes, react as HomeContent } from '../content/home.md';

export default function Home() {
  let heroBanner = false;
  
  if(attributes.hero_banner.image){
    heroBanner = <HeroBanner {...attributes.hero_banner}/>;
  }
  
  return (
    <Layout heroBanner={heroBanner}>
      <Head />
      <div className='text-center'>
        <HomeContent/>
        <PinkyPromise className='block mx-auto w-full max-w-[8rem] mt-5'/>
      </div>
    </Layout>
  )
}

import HeroSlider from '../components/HeroSlider'
import TrendingSection from '../components/TrendingSection'
import OfferSection from '../components/OfferSection'

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <main className="flex-1 pt-24">
        <HeroSlider />
        <TrendingSection />
        <OfferSection />
      </main>
    </div>
  )
}

export default Home
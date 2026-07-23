import { Button } from '../components/ui/button'
import {
  Flame,
  ArrowRight,
  Timer,
  Zap,
} from 'lucide-react'
import CustomCard from './CustomCard'

const offerProducts = [
  {
    _id: 1,
    name: 'boAt Airdopes 141 TWS Earbuds',
    brand: 'boAt',
    badge: 'Audio',
    emoji: '🎵',
    originalPrice: '₹4,490',
    price: '₹1,099',
    discount: '76%',
    rating: 4.3,
    reviews: 32400,
    timeLeft: '2h 45m',
    tag: 'FLASH',
    freeDelivery: true,
  },
  {
    _id: 2,
    name: 'Campus Sneakers Running Shoes',
    brand: 'Campus',
    badge: 'Footwear',
    emoji: '👟',
    originalPrice: '₹2,995',
    price: '₹899',
    discount: '70%',
    rating: 4.1,
    reviews: 18900,
    timeLeft: '5h 20m',
    tag: 'DEAL',
    freeDelivery: true,
  },
  {
    _id: 3,
    name: 'Prestige Electric Kettle 1.7L',
    brand: 'Prestige',
    badge: 'Kitchen',
    emoji: '☕',
    originalPrice: '₹1,795',
    price: '₹649',
    discount: '64%',
    rating: 4.5,
    reviews: 9870,
    timeLeft: '8h 10m',
    tag: 'HOT',
    hot: true,
    freeDelivery: false,
  },
  {
    _id: 4,
    name: 'Fastrack Casual Watch for Men',
    brand: 'Fastrack',
    badge: 'Watches',
    emoji: '⌚',
    originalPrice: '₹2,995',
    price: '₹799',
    discount: '73%',
    rating: 4.2,
    reviews: 14300,
    timeLeft: '3h 15m',
    tag: 'SALE',
    hot: false,
    freeDelivery: true,
  },
  {
    _id: 5,
    name: 'Wildcraft 30L Backpack Laptop Bag',
    brand: 'Wildcraft',
    badge: 'Bags',
    emoji: '🎒',
    originalPrice: '₹3,499',
    price: '₹899',
    discount: '74%',
    rating: 4.4,
    reviews: 7600,
    timeLeft: '12h 0m',
    tag: 'MEGA',
    hot: true,
    freeDelivery: true,
  },
  {
    _id: 6,
    name: 'Lakme Eyeconic Kajal Twin Pack',
    brand: 'Lakme',
    badge: 'Beauty',
    emoji: '💄',
    originalPrice: '₹430',
    price: '₹189',
    discount: '56%',
    rating: 4.6,
    reviews: 21500,
    timeLeft: '1d 4h',
    tag: 'OFFER',
    hot: false,
    freeDelivery: false,
  },
  {
    _id: 7,
    name: 'Mi Smart Band 8 Fitness Tracker',
    brand: 'Xiaomi',
    badge: 'Wearables',
    emoji: '📊',
    originalPrice: '₹3,999',
    price: '₹2,199',
    discount: '45%',
    rating: 4.3,
    reviews: 28900,
    timeLeft: '6h 30m',
    tag: 'NEW',
    hot: true,
    freeDelivery: true,
  },
  {
    _id: 8,
    name: 'Bajaj 3-Speed Table Fan 400mm',
    brand: 'Bajaj',
    badge: 'Appliances',
    emoji: '🌀',
    originalPrice: '₹2,495',
    price: '₹999',
    discount: '60%',
    rating: 4.1,
    reviews: 5400,
    timeLeft: '2d 0h',
    tag: 'VALUE',
    hot: false,
    freeDelivery: false,
  },
]

const OfferSection = () => {
  return (
    <section className="bg-zinc-950 py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none border-t border-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Flame size={20} className="text-zinc-300" />
            <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Limited Time Offers</span>
            <Flame size={20} className="text-zinc-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Today's <span className="text-zinc-400">Hottest</span> Deals
          </h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">Simple discounts on essentials, fashion, home and more.</p>

          <div className="inline-flex items-center gap-4 mt-5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <Zap size={14} /> LIVE DEALS
            </span>
            <span className="text-zinc-500">|</span>
            <span className="flex items-center gap-1.5 text-zinc-400 text-xs">
              <Timer size={13} /> Refreshes daily at midnight
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {offerProducts.map((product) => (
            <CustomCard product={product} />
          ))}

        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-black border-0 hover:bg-zinc-200 gap-2 font-bold">
            <Flame size={16} /> View All Deals <ArrowRight size={14} />
          </Button>
          <p className="text-zinc-600 text-xs">
            ✅ Secure Payments &nbsp;•&nbsp; 🚚 Fast Shipping &nbsp;•&nbsp; 🔄 Easy Returns
          </p>
        </div>
      </div>
    </section>
  )
}

export default OfferSection

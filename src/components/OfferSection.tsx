import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter } from '../components/ui/card'
import {
  Tag,
  Star,
  ShoppingCart,
  Heart,
  Flame,
  ArrowRight,
  Timer,
  Zap,
  Truck,
} from 'lucide-react'

const offerProducts = [
  {
    id: 1,
    name: 'boAt Airdopes 141 TWS Earbuds',
    brand: 'boAt',
    category: 'Audio',
    emoji: '🎵',
    originalPrice: '₹4,490',
    salePrice: '₹1,099',
    discount: '76%',
    rating: 4.3,
    reviews: 32400,
    timeLeft: '2h 45m',
    tag: 'FLASH',
    hot: true,
    freeDelivery: true,
  },
  {
    id: 2,
    name: 'Campus Sneakers Running Shoes',
    brand: 'Campus',
    category: 'Footwear',
    emoji: '👟',
    originalPrice: '₹2,995',
    salePrice: '₹899',
    discount: '70%',
    rating: 4.1,
    reviews: 18900,
    timeLeft: '5h 20m',
    tag: 'DEAL',
    hot: false,
    freeDelivery: true,
  },
  {
    id: 3,
    name: 'Prestige Electric Kettle 1.7L',
    brand: 'Prestige',
    category: 'Kitchen',
    emoji: '☕',
    originalPrice: '₹1,795',
    salePrice: '₹649',
    discount: '64%',
    rating: 4.5,
    reviews: 9870,
    timeLeft: '8h 10m',
    tag: 'HOT',
    hot: true,
    freeDelivery: false,
  },
  {
    id: 4,
    name: 'Fastrack Casual Watch for Men',
    brand: 'Fastrack',
    category: 'Watches',
    emoji: '⌚',
    originalPrice: '₹2,995',
    salePrice: '₹799',
    discount: '73%',
    rating: 4.2,
    reviews: 14300,
    timeLeft: '3h 15m',
    tag: 'SALE',
    hot: false,
    freeDelivery: true,
  },
  {
    id: 5,
    name: 'Wildcraft 30L Backpack Laptop Bag',
    brand: 'Wildcraft',
    category: 'Bags',
    emoji: '🎒',
    originalPrice: '₹3,499',
    salePrice: '₹899',
    discount: '74%',
    rating: 4.4,
    reviews: 7600,
    timeLeft: '12h 0m',
    tag: 'MEGA',
    hot: true,
    freeDelivery: true,
  },
  {
    id: 6,
    name: 'Lakme Eyeconic Kajal Twin Pack',
    brand: 'Lakme',
    category: 'Beauty',
    emoji: '💄',
    originalPrice: '₹430',
    salePrice: '₹189',
    discount: '56%',
    rating: 4.6,
    reviews: 21500,
    timeLeft: '1d 4h',
    tag: 'OFFER',
    hot: false,
    freeDelivery: false,
  },
  {
    id: 7,
    name: 'Mi Smart Band 8 Fitness Tracker',
    brand: 'Xiaomi',
    category: 'Wearables',
    emoji: '📊',
    originalPrice: '₹3,999',
    salePrice: '₹2,199',
    discount: '45%',
    rating: 4.3,
    reviews: 28900,
    timeLeft: '6h 30m',
    tag: 'NEW',
    hot: true,
    freeDelivery: true,
  },
  {
    id: 8,
    name: 'Bajaj 3-Speed Table Fan 400mm',
    brand: 'Bajaj',
    category: 'Appliances',
    emoji: '🌀',
    originalPrice: '₹2,495',
    salePrice: '₹999',
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
            <Card key={product.id} className="group relative bg-black border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
              {product.hot && (
                <div className="absolute top-0 right-0 z-10 bg-white text-black text-[10px] font-black px-2 py-0.5 rounded-bl-xl flex items-center gap-0.5">
                  <Flame size={10} className="fill-black" /> HOT
                </div>
              )}

              <div className="relative h-36 flex items-center justify-center bg-zinc-900 border-b border-white/10">
                <span className="text-6xl">{product.emoji}</span>

                <Badge className="absolute top-3 left-3 bg-white text-black border-0 text-[10px] font-black tracking-wider">
                  {product.tag}
                </Badge>

                <button className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-colors border border-white/10">
                  <Heart size={12} />
                </button>
              </div>

              <CardContent className="p-3 space-y-2">
                <div className="flex items-center gap-1.5">
                  <Tag size={9} className="text-zinc-600 shrink-0" />
                  <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider truncate">
                    {product.brand} · {product.category}
                  </span>
                </div>

                <h3 className="text-white font-bold text-sm leading-snug line-clamp-2">{product.name}</h3>

                <div className="flex items-center gap-1 text-xs">
                  <div className="flex items-center gap-0.5">
                    <Star size={10} className="text-white fill-white" />
                    <span className="text-white font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-zinc-600">({(product.reviews / 1000).toFixed(1)}K)</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-zinc-400 bg-white/5 rounded-md px-2 py-1 border border-white/10">
                  <Timer size={10} className="shrink-0" />
                  <span className="font-bold">Ends in {product.timeLeft}</span>
                </div>

                {product.freeDelivery && (
                  <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                    <Truck size={10} className="shrink-0" />
                    Free Delivery
                  </div>
                )}
              </CardContent>

              <CardFooter className="px-3 pb-3.5 pt-0 flex items-end justify-between gap-2">
                <div>
                  <div className="text-white font-black text-lg leading-none">{product.salePrice}</div>
                  <div className="text-zinc-600 text-xs line-through mt-0.5">{product.originalPrice}</div>
                  <Badge className="bg-white text-black border-0 text-[10px] mt-1 h-4 px-1.5">
                    {product.discount} OFF
                  </Badge>
                </div>
                <Button size="sm" className="bg-white text-black border-0 text-xs gap-1 h-9 px-3 hover:bg-zinc-200 shrink-0">
                  <ShoppingCart size={11} /> Buy
                </Button>
              </CardFooter>
            </Card>
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

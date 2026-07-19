import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter } from '../components/ui/card'
import {
  Star,
  TrendingUp,
  ShoppingCart,
  Heart,
  ArrowRight,
  Zap,
  Eye,
} from 'lucide-react'

const trendingProducts = [
  {
    id: 1,
    name: 'Apple iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'Smartphones',
    emoji: '📱',
    price: '₹1,34,900',
    originalPrice: '₹1,59,900',
    discount: '16%',
    rating: 4.8,
    reviews: 12450,
    badge: 'Bestseller',
    sold: '5K+ sold',
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5 Headphones',
    brand: 'Sony',
    category: 'Audio',
    emoji: '🎧',
    price: '₹24,990',
    originalPrice: '₹34,990',
    discount: '29%',
    rating: 4.9,
    reviews: 8231,
    badge: 'Hot',
    sold: '3K+ sold',
  },
  {
    id: 3,
    name: "Levi's 501 Original Jeans",
    brand: "Levi's",
    category: 'Fashion',
    emoji: '👖',
    price: '₹2,999',
    originalPrice: '₹5,499',
    discount: '45%',
    rating: 4.7,
    reviews: 6789,
    badge: 'Trending',
    sold: '10K+ sold',
  },
  {
    id: 4,
    name: 'Samsung 55" QLED 4K Smart TV',
    brand: 'Samsung',
    category: 'TVs',
    emoji: '📺',
    price: '₹54,990',
    originalPrice: '₹89,990',
    discount: '39%',
    rating: 4.6,
    reviews: 4120,
    badge: 'Deal',
    sold: '1.5K+ sold',
  },
]

const TrendingSection = () => {
  return (
    <section className="bg-black py-20" id="trending">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} className="text-zinc-300" />
              <span className="text-zinc-400 text-sm font-semibold uppercase tracking-widest">This Week</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Best <span className="text-zinc-400">Trending</span> Products
            </h2>
            <p className="text-zinc-500 mt-1.5 text-sm">Top picks loved by thousands of shoppers</p>
          </div>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2 bg-transparent whitespace-nowrap">
            View All <ArrowRight size={14} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trendingProducts.map((product) => (
            <Card key={product.id} className="group relative bg-zinc-950 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 flex items-center justify-center bg-zinc-900 border-b border-white/10">
                <span className="text-8xl">{product.emoji}</span>

                <Badge className="absolute top-3 left-3 bg-white text-black border-0 text-xs font-bold">
                  {product.badge}
                </Badge>

                <div className="absolute top-3 right-3 bg-white text-black text-xs font-black px-2 py-0.5 rounded-md">
                  -{product.discount}
                </div>

                <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" className="flex-1 bg-white text-black border-0 text-xs h-8 gap-1 hover:bg-zinc-200">
                    <ShoppingCart size={11} /> Add
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0 border-white/20 text-white hover:bg-white/10 bg-transparent">
                    <Eye size={12} />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">{product.brand}</span>
                  <span className="text-zinc-700">·</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{product.category}</span>
                </div>

                <h3 className="text-white font-bold text-sm leading-snug line-clamp-2">{product.name}</h3>

                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className={i < Math.floor(product.rating) ? 'text-white fill-white' : 'text-zinc-700'} />
                    ))}
                  </div>
                  <span className="text-white text-xs font-semibold">{product.rating}</span>
                  <span className="text-zinc-600 text-xs">({product.reviews.toLocaleString()})</span>
                </div>

                <p className="text-[11px] text-zinc-600 flex items-center gap-1">
                  <Zap size={10} className="text-white" />
                  {product.sold} this month
                </p>
              </CardContent>

              <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between">
                <div>
                  <div className="text-white font-black text-lg leading-none">{product.price}</div>
                  <div className="text-zinc-600 text-xs line-through mt-0.5">{product.originalPrice}</div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                  <Heart size={14} />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="bg-white text-black border-0 hover:bg-zinc-200 gap-2">
            Explore All Trending <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TrendingSection

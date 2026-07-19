import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Separator } from '../components/ui/separator'
import {
  ShoppingCart,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Truck,
  Shield,
  RefreshCw,
  Tag,
  Gift,
} from 'lucide-react'
import { useState } from 'react'

const perks = [
  { icon: <Truck size={15} className="text-white" />, text: 'Free delivery on every first order' },
  { icon: <Tag size={15} className="text-white" />, text: 'Exclusive member-only deals & coupons' },
  { icon: <RefreshCw size={15} className="text-white" />, text: '30-day easy returns & exchanges' },
  { icon: <Shield size={15} className="text-white" />, text: 'Secure payments & buyer protection' },
  { icon: <Gift size={15} className="text-white" />, text: '₹200 welcome coupon on sign up' },
]

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 w-full max-w-4xl flex flex-col lg:flex-row gap-10 items-center">
        <div className="hidden lg:flex flex-col flex-1">
          <Link to="/" className="flex items-center gap-2.5 mb-10">
            <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center">
              <ShoppingCart size={20} />
            </div>
            <span className="text-white font-black text-xl tracking-tight">Shop<span className="text-zinc-400">Nova</span></span>
          </Link>

          <h2 className="text-4xl font-black text-white leading-tight mb-3">Shop smarter, <span className="text-zinc-400">save more.</span></h2>
          <p className="text-zinc-500 text-sm mb-8 leading-relaxed max-w-sm">Join over 10 million shoppers on ShopNova. Get access to simple deals, easy delivery and clear pricing.</p>

          <ul className="space-y-3.5 mb-10">
            {perks.map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">{p.icon}</div>
                <span className="text-sm text-zinc-300">{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="relative rounded-2xl border border-white/10 bg-zinc-950 p-4 flex items-center gap-4">
            <div className="text-4xl">🎁</div>
            <div>
              <div className="text-white font-black text-lg leading-none">₹200 OFF</div>
              <div className="text-zinc-500 text-xs mt-0.5">Applied on your first order automatically</div>
            </div>
            <div className="ml-auto text-[10px] text-zinc-400 border border-white/10 rounded-md px-2 py-1 font-bold tracking-wider">WELCOME200</div>
          </div>
        </div>

        <Card className="w-full lg:max-w-md bg-zinc-950 border border-white/10">
          <CardHeader className="pb-0 pt-8 px-8">
            <Link to="/" className="flex items-center gap-2 mb-5 lg:hidden">
              <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center">
                <ShoppingCart size={16} />
              </div>
              <span className="text-white font-black">Shop<span className="text-zinc-400">Nova</span></span>
            </Link>

            <h1 className="text-2xl font-black text-white">Create your account</h1>
            <p className="text-zinc-500 text-sm mt-1">Sign up and get <span className="text-white font-semibold">₹200 OFF</span> on your first order!</p>
          </CardHeader>

          <CardContent className="px-8 py-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm text-zinc-300 font-medium">Full Name</Label>
              <div className="relative">
                <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                <Input id="name" type="text" placeholder="Daksh Sharma" className="pl-9 bg-black border-white/10 text-white placeholder:text-zinc-500 h-11" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-zinc-300 font-medium">Email Address</Label>
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                <Input id="email" type="email" placeholder="you@example.com" className="pl-9 bg-black border-white/10 text-white placeholder:text-zinc-500 h-11" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm text-zinc-300 font-medium">Password</Label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="Create a strong password" className="pl-9 pr-10 bg-black border-white/10 text-white placeholder:text-zinc-500 h-11" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors">
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              <p className="text-[11px] text-zinc-600">Minimum 8 characters</p>
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" className="mt-0.5 accent-white w-4 h-4" />
              <span className="text-xs text-zinc-500 leading-relaxed">I agree to ShopNova's <a href="#" className="text-white hover:underline">Terms of Service</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a></span>
            </label>

            <Button type="submit" className="w-full bg-white text-black border-0 h-11 font-bold gap-2 hover:bg-zinc-200">
              Create Account & Get ₹200 OFF <ArrowRight size={15} />
            </Button>

            <Separator className="bg-white/10" />

            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: <CheckCircle2 size={12} />, text: 'Free Returns' },
                { icon: <Shield size={12} />, text: '100% Secure' },
                { icon: <Truck size={12} />, text: 'Fast Delivery' },
              ].map((b) => (
                <div key={b.text} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                  <span className="text-white">{b.icon}</span>
                  <span className="text-[10px] text-zinc-500">{b.text}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-zinc-500">Already have an account? <Link to="/login" className="text-white hover:text-zinc-300 font-bold">Sign In</Link></p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Signup
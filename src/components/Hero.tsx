/* eslint-disable @next/next/no-img-element */
import { Download, Droplets, Leaf, PlayCircle, Smartphone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="relative mx-auto py-20 md:py-32 px-6 max-w-7xl">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32  h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-32  h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full">
                <Droplets className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-800 font-medium">Smart Irrigation System</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                The future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">irrigation</span> is now!
              </h1>
              
              <p className="text-lg text-black">
                Hydrify is a revolutionary wireless precision irrigation automation system that helps you save water, time, and money while keeping your plants healthy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20">
                  <span>Watch Demo</span>
                  <PlayCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 bg-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                  <Download className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Download App</span>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-black">Water Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-black">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-black">Monitoring</div>
                </div>
              </div>
            </div>
            
            <div className="relative p-5">
              {/* Phone Frame */}
              <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] shadow-2xl p-4 ring-1 ring-gray-900/10">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                  <div className="w-40 h-6 bg-gray-900 rounded-b-3xl"></div>
                </div>
                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=800&q=80" 
                    alt="Smart Irrigation System" 
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute bottom-[20%] -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                <div className="p-3 bg-green-100 rounded-full">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Eco-Friendly</div>
                  <div className="text-xs text-black">Reduces water waste</div>
                </div>
              </div>
              
              <div className="absolute top-[30%] -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Smart Control</div>
                  <div className="text-xs text-black">Mobile app enabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
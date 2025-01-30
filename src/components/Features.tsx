import { Droplets, Smartphone, Leaf } from "lucide-react";

export default function Features() {
    return (
       <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-6">
                 <div className="text-center space-y-4 mb-16">
                   <h2 className="text-3xl font-bold text-gray-900">
                     Smart Features for Smarter Irrigation
                   </h2>
                   <p className="text-lg text-black max-w-2xl mx-auto">
                     Take control of your irrigation system with our intelligent features designed to save water and optimize plant health.
                   </p>
                 </div>
       
                 <div className="grid md:grid-cols-3 gap-8">
                   <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100">
                     <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                       <Droplets className="w-6 h-6 text-blue-600" />
                     </div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
                     <p className="text-black">Automatically adjusts watering schedules based on weather conditions and soil moisture levels.</p>
                   </div>
       
                   <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100">
                     <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                       <Smartphone className="w-6 h-6 text-purple-600" />
                     </div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote Control</h3>
                     <p className="text-black">Control your irrigation system from anywhere using our mobile app with real-time monitoring.</p>
                   </div>
       
                   <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-100">
                     <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                       <Leaf className="w-6 h-6 text-green-600" />
                     </div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Conservation</h3>
                     <p className="text-black">Save up to 95% water with our precision irrigation technology and smart sensors.</p>
                   </div>
                 </div>
               </div>
             </section>
    );
}
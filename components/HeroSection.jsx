"use client";
import { MonitorDown, Play, HardDrive, Zap, Shield, ArrowRight } from 'lucide-react';
import { FaWindows } from 'react-icons/fa';
import BuyNowModal from './BuyNowModal';
import { useState } from 'react';

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-white py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#073e89] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#073e89] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Clean Your PC,
            <br />
            <span className="text-[#073e89]">Boost Performance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Livexcellence automatically finds and removes duplicate files, freeing up valuable disk space and improving your system performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
            onClick={() => setOpen(true)}
            className="group cursor-pointer bg-[#073e89] text-white px-6 py-4 rounded font-bold text-lg hover:bg-[#052d66] transition-all duration-300 shadow-2xl hover:shadow-[#073e89]/50 flex items-center gap-3">
              <FaWindows className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Buy Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group cursor-pointer flex items-center gap-3 px-6 py-4 rounded text-[#073e89] font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-transparent hover:border-gray-200">
              <div className="w-8 h-8 bg-[#073e89] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-white ml-1" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>No Malware</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>No Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Instant Download</span>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white flex gap-4 justify-center items-center rounded-2xl px-8 py-4 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#073e89]/20 transition-all duration-300 hover:-translate-y-1">
            <div className=" bg-blue-50 rounded-xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-[#073e89]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Lightning Fast</h3>
            {/* <p className="text-gray-600 leading-relaxed">
              Scan millions of files in minutes with our advanced detection algorithm.
            </p> */}
          </div>

          {/* Card 2 */}
          <div className="bg-white flex gap-4 justify-center items-center rounded-2xl px-8 py-4 shadow-xl border hover:border-gray-100 hove:shadow-xl border-[#073e89]/20 transition-all duration-300 hover:-translate-y-1">
            <div className=" bg-blue-50 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#073e89]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">100% Secure</h3>
            {/* <p className="text-gray-600 leading-relaxed">
              Your files stay on your PC. We never upload or access your personal data.
            </p> */}
          </div>

          {/* Card 3 */}
          <div className="bg-white flex gap-4 justify-center items-center rounded-2xl px-8 py-4 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#073e89]/20 transition-all duration-300 hover:-translate-y-1">
            <div className=" bg-blue-50 rounded-xl flex items-center justify-center">
              <HardDrive className="w-8 h-8 text-[#073e89]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Free Up Space</h3>
            {/* <p className="text-gray-600 leading-relaxed">
              Reclaim gigabytes of storage by removing unnecessary duplicate files.
            </p> */}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-12 bg-[#073e89] rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200 text-sm">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10x</div>
              <div className="text-blue-200 text-sm">Faster Scanning</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50GB+</div>
              <div className="text-blue-200 text-sm">Avg. Space Saved</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5 Min</div>
              <div className="text-blue-200 text-sm">Avg. Scan Time</div>
            </div>
          </div>
        </div>
      </div>
      <BuyNowModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
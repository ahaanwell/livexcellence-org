"use client";
import { MonitorDown, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import BuyNowModal from './BuyNowModal';

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#073e89] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-[#073e89]" />
              <span>Most Trusted Duplicate File Finder</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Find & Remove
              <span className="block text-[#073e89] mt-2">Duplicate Files</span>
              <span className="block text-gray-900 mt-2">In Seconds</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Reclaim valuable storage space by identifying and removing duplicate files with lightning-fast scanning technology. Clean, simple, and powerful.
            </p>

            {/* Features List */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Fast Scanning</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">100% Safe</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Easy to Use</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
              onClick={() => setOpen(true)}
              className="bg-[#073e89] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#052d66] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105">
                <MonitorDown className="w-6 h-6" />
                <span className="text-lg">Download for Windows</span>
              </button>
              <button className="bg-white text-[#073e89] border-2 border-[#073e89] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300">
                View Features
              </button>
            </div>

            {/* System Requirements */}
            <p className="text-sm text-gray-500">
              Windows 10, 11 • 64-bit • 50MB Required
            </p>
          </div>

          {/* Right Content - Mockup/Visual */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#073e89] rounded-full opacity-10 blur-3xl"></div>
            
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-semibold text-gray-700">Livexcellence Scanner</span>
                </div>
              </div>

              {/* Scan Results */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Duplicates Found</span>
                    <span className="text-2xl font-bold text-[#073e89]">1,247</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#073e89] h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Space Recoverable</span>
                    <span className="text-2xl font-bold text-green-600">24.3 GB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-[#073e89]">542</div>
                    <div className="text-xs text-gray-600 mt-1">Images</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-[#073e89]">389</div>
                    <div className="text-xs text-gray-600 mt-1">Videos</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-[#073e89]">316</div>
                    <div className="text-xs text-gray-600 mt-1">Documents</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-[#073e89]" />
                <div>
                  <div className="text-xl font-bold text-gray-900">50K+</div>
                  <div className="text-xs text-gray-600">Active Users</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div>
                  <div className="text-xl font-bold text-gray-900">4.8/5</div>
                  <div className="text-xs text-gray-600">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuyNowModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
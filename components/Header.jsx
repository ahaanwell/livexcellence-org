"use client"
import { useState } from 'react';
import { Menu, X, MonitorDown, Search, Gauge, ShieldCheck } from 'lucide-react';
import { FaWindows } from "react-icons/fa";
import Link from 'next/link';
import BuyNowModal from './BuyNowModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#073e89] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-xs">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              <span>Fast Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWindows className="w-4 h-4" />
              <span>Windows Compatible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="ml-4">
                <h1 className="text-3xl font-bold text-[#073e89] tracking-tight">Livexcellence</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <Link href="/" className="text-gray-700 hover:text-[#073e89] transition-colors text-base font-medium relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#073e89] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-[#073e89] transition-colors text-base font-medium relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#073e89] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-[#073e89] transition-colors text-base font-medium relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#073e89] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#support" className="text-gray-700 hover:text-[#073e89] transition-colors text-base font-medium relative group">
                Support
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#073e89] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <button 
              onClick={() => setOpen(true)}
              className="bg-[#073e89] text-white cursor-pointer px-4 py-2 rounded font-semibold hover:bg-[#052d66] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105">
                <FaWindows className="w-4 h-4" />
                <span>Buy Now</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#073e89] p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-2">
              <Link
                href="/"
                className="block text-gray-700 hover:text-[#073e89] hover:bg-gray-50 transition-colors font-medium px-4 py-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#features"
                className="block text-gray-700 hover:text-[#073e89] hover:bg-gray-50 transition-colors font-medium px-4 py-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="block text-gray-700 hover:text-[#073e89] hover:bg-gray-50 transition-colors font-medium px-4 py-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#support"
                className="block text-gray-700 hover:text-[#073e89] hover:bg-gray-50 transition-colors font-medium px-4 py-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <button 
              onClick={() => setOpen(true)}
              className="w-full bg-[#073e89] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#052d66] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg mt-4">
                <MonitorDown className="w-5 h-5" />
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        )}
        <BuyNowModal isOpen={open} onClose={() => setOpen(false)} />
      </header>
    </>
  );
}
"use client";
import React, { useState } from 'react';
import { FolderOpen, Scan, Trash2, Sparkles } from 'lucide-react';
import BuyNowModal from './BuyNowModal';

const HowItWorksSection = () => {
  const [open, setOpen] = useState(false);
  const steps = [
    { icon: FolderOpen, title: "Select Folders", desc: "Choose folders to scan" },
    { icon: Scan, title: "Scan Files", desc: "AI finds duplicates instantly" },
    { icon: Trash2, title: "Remove Duplicates", desc: "Delete with one click" },
    { icon: Sparkles, title: "Done!", desc: "Enjoy your free space" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <p className="text-gray-600">Clean your system in 4 simple steps</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#073e89] via-[#073e89] to-[#073e89] opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="text-center relative">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 mx-auto bg-[#073e89] rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-sm z-20">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
          onClick={() => setOpen(true)}
          className="bg-[#073e89] hover:bg-[#05305e] cursor-pointer text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
      <BuyNowModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default HowItWorksSection;
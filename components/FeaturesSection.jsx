import React from 'react';
import { Zap, Shield, Search, Trash2, FolderOpen, Settings, BarChart3, Clock } from 'lucide-react';

export default function FeaturesSection() {
  const mainFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Scan millions of files in minutes with our optimized engine",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Search,
      title: "Smart Detection",
      description: "Find duplicates even if they're renamed or in different folders",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Shield,
      title: "100% Safe",
      description: "Your files are protected with backup and confirmation",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Trash2,
      title: "One-Click Clean",
      description: "Remove duplicates instantly and reclaim your storage",
      color: "from-red-400 to-pink-500"
    }
  ];

  const additionalFeatures = [
    { icon: FolderOpen, title: "Multi-Folder Scan", desc: "Scan multiple drives simultaneously" },
    { icon: BarChart3, title: "Detailed Reports", desc: "See what's taking up space" },
    { icon: Settings, title: "Custom Filters", desc: "Filter by type, size, or date" },
    { icon: Clock, title: "Auto Scheduling", desc: "Set it and forget it" }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#073e89] font-semibold text-sm uppercase tracking-wide">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Built for Speed & Simplicity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful duplicate detection that is incredibly easy to use
          </p>
        </div>

        {/* Main Features - Large Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="group relative">
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features - Compact List */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Plus More Amazing Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-5 h-5 text-[#073e89]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
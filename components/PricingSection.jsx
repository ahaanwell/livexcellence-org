"use client";
import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import BuyNowModal from './BuyNowModal';

const PricingSection = () => {
  const [open, setOpen] = useState(false);
  const plans = [
    {
      name: "Standred",
      price: "$4.00",
      period: "forever",
      description: "Perfect for personal use",
      features: [
        "Scan up to 1GB",
        "Basic duplicate detection",
        "Manual file removal",
        "Email support"
      ],
      unavailable: ["Advanced filters", "Scheduled scans", "Priority support"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "Best for professionals",
      features: [
        "Unlimited scanning",
        "Advanced AI detection",
        "Automatic cleanup",
        "Smart filters",
        "Scheduled scans",
        "Priority email support",
        "Lifetime updates"
      ],
      unavailable: [],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Lifetime",
      price: "$49.99",
      period: "one-time",
      description: "Pay once, use forever",
      features: [
        "Everything in Pro",
        "Lifetime access",
        "All future updates",
        "Premium support",
        "Commercial license",
        "5 device activations"
      ],
      unavailable: [],
      cta: "Buy Lifetime",
      popular: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-[#073e89] transform md:scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#073e89] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>

                <button
                onClick={() => setOpen(true)}
                  className={`w-full py-3 cursor-pointer rounded-lg font-semibold transition-all duration-300 mb-6 ${
                    plan.popular
                      ? 'bg-[#073e89] hover:bg-[#05305e] text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.unavailable.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-40">
                      <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All plans include 30-day money-back guarantee</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ No credit card required for Free plan</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payment</span>
          </div>
        </div>
      </div>
      <BuyNowModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default PricingSection;
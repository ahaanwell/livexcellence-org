"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "Is Livexcellence safe to use?",
      a: "Yes, completely safe. We never delete files without your confirmation and don't access your data."
    },
    {
      q: "What file types are supported?",
      a: "All file types - documents, images, videos, music, and more. Our tool works with any file format."
    },
    {
      q: "How does the duplicate detection work?",
      a: "We use advanced algorithms to compare file content, not just names. This ensures accurate duplicate detection."
    },
    {
      q: "Can I recover deleted files?",
      a: "Files are moved to your recycle bin first, so you can always restore them if needed."
    },
    {
      q: "Do I need to install anything?",
      a: "No installation required. Livexcellence works directly in your browser for maximum convenience."
    },
    {
      q: "Is there a file size limit?",
      a: "Free plan: 1GB. Pro and Lifetime plans have unlimited scanning capacity."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">Everything you need to know</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center gap-4 px-6 py-3 cursor-pointer rounded bg-[#073e89] hover:bg-[#073e89] text-white transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-[#073e89]" />
                </div>
                <span className="flex-1 text-left text-lg font-medium">
                  {faq.q}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === idx ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out bg-gray-50 ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
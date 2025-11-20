import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Photographer",
      rating: 5,
      text: "Freed up 80GB on my laptop! Super easy to use and saved me hours of manual work.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Developer",
      rating: 5,
      text: "Best duplicate finder I've used. Clean interface and incredibly fast scanning.",
      avatar: "MC"
    },
    {
      name: "Emma Williams",
      role: "Content Creator",
      rating: 5,
      text: "Finally organized my messy files! The automated cleanup is a game changer.",
      avatar: "EW"
    },
    
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Loved by Thousands
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-gray-600 ml-2">4.9/5 from 2,400+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Quote className="w-8 h-8 text-[#073e89] opacity-20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#073e89] text-white flex items-center justify-center font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
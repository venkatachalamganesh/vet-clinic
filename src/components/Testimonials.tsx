import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "/reviews/isaac-smith-Ij7h-m4nJ18-unsplash.jpg",
    text: "The care and attention our dog received was exceptional. The staff is incredibly knowledgeable and caring.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    image: "/reviews/john-FlPc9_VocJ4-unsplash.jpg",
    text: "Best veterinary clinic in the area! They took great care of our cat during an emergency situation.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    image: "/reviews/markus-winkler--fRAIQHKcc0-unsplash.jpg",
    text: "Professional, compassionate, and thorough. They make every visit comfortable for both pets and owners.",
    rating: 5,
  },
  {
    name: "David Wilson",
    image: "/reviews/testeur-de-cbd-UFb4LPahwHQ-unsplash.jpg",
    text: "We've been bringing our pets here for years. The level of care and expertise is unmatched.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients and their pets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
} 
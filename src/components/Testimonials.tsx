import Image from 'next/image'

const testimonials = [
  {
    name: 'John Smith',
    text: 'The care and attention our dog received was exceptional. The staff is incredibly professional and caring.',
    image: '/reviews/john-FlPc9_VocJ4-unsplash.jpg'
  },
  {
    name: 'Sarah Johnson',
    text: 'Best veterinary clinic in the area! They took great care of our cat during her surgery.',
    image: '/reviews/isaac-smith-Ij7h-m4nJ18-unsplash.jpg'
  },
  {
    name: 'Mike Brown',
    text: 'Very thorough and patient with our anxious pet. Would highly recommend to any pet owner.',
    image: '/reviews/markus-winkler--fRAIQHKcc0-unsplash.jpg'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our satisfied clients have to say about their experience with our veterinary services.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
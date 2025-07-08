import Image from 'next/image'

const services = [
  {
    title: 'Wellness Exams',
    description: 'Regular check-ups to keep your pet healthy and happy.',
    image: '/Images/markus-winkler-PcKhVNNyEio-unsplash.jpg'
  },
  {
    title: 'Vaccinations',
    description: 'Protection against common diseases and illnesses.',
    image: '/Images/cdc-uoYFqyvm6Bo-unsplash.jpg'
  },
  {
    title: 'Surgery',
    description: 'Advanced surgical procedures with expert care.',
    image: '/Images/anya-prygunova-u2H8mUzoF2Q-unsplash.jpg'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of veterinary services to keep your pets healthy and happy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
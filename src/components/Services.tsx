import Image from 'next/image';
import { HeartIcon, ShieldCheckIcon, AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Preventive Care",
    description: "Regular check-ups and vaccinations to keep your pet healthy",
    icon: ShieldCheckIcon,
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency care for your pets when they need it most",
    icon: HeartIcon,
  },
  {
    title: "Expert Diagnostics",
    description: "Advanced diagnostic tools and experienced veterinarians",
    icon: AcademicCapIcon,
  },
  {
    title: "Convenient Hours",
    description: "Flexible scheduling to fit your busy lifestyle",
    icon: ClockIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive veterinary care services to keep your pets healthy and happy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="relative h-64 md:h-full">
              <Image
                src="/Images/cdc-uoYFqyvm6Bo-unsplash.jpg"
                alt="Veterinarian examining a cat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                State-of-the-Art Facilities
              </h3>
              <p className="text-gray-600 mb-6">
                Our modern facilities are equipped with the latest technology to provide
                the best possible care for your beloved pets. From routine check-ups to
                complex procedures, we have everything needed to ensure your pet's health
                and comfort.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Tour Our Facility
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
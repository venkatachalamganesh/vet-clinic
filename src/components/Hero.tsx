import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/karsten-winegeart-loJL4ijUobg-unsplash.jpg"
          alt="Happy dog with veterinarian"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Caring for Your Pets Like Family
          </h1>
          <p className="text-xl mb-8">
            Professional veterinary care with a gentle touch. Your pet's health and happiness is our top priority.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
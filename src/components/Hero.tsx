import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[600px]">
        <Image
          src="/Images/karsten-winegeart-loJL4ijUobg-unsplash.jpg"
          alt="Veterinary care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Care for Your Beloved Pets
              </h1>
              <p className="text-lg mb-8">
                We provide comprehensive veterinary services with a gentle and caring approach.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
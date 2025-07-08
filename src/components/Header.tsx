import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📞 847.286.2500</span>
            <span>📍 3333 Beverly Road, Hoffman Estates, IL 60192</span>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Vet Clinic
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary">Home</a>
            <a href="#services" className="text-gray-600 hover:text-primary">Services</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
} 
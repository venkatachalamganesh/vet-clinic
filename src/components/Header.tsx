import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">Mon-Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 5:00 PM</p>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4" />
            <a href="tel:+1234567890" className="text-sm hover:text-blue-200">123-456-7890</a>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">PawCare Clinic</Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
} 
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
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
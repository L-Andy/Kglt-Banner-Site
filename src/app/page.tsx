'use client'
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Header />

      <section className='min-h-[calc(100vh-96px)] md:h-[calc(100vh-96px)] relative overflow-hidden'>
        <div className="absolute inset-0 bg-gradient-to-r from-[#D63384]/90 to-[#FFD700]/90 z-10"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white z-20 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6">Transform Your Beauty Journey</h1>
              <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-100 leading-relaxed">Discover KGLT - your all-in-one beauty companion. Book appointments instantly, connect with top stylists, and transform your look with our curated services. Join our community of beauty enthusiasts today.</p>
              <div className='flex flex-col md:inline-flex md:flex-row gap-4 justify-center md:justify-start'>
                <a href="#" className="inline-block py-2 md:py-3 text-white rounded-lg items-center gap-2 hover:scale-105 transition-all w-fit mx-auto md:mx-0">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="Play Store" width={160} height={40} className="w-[140px] md:w-[160px] lg:w-[180px]" />
                </a>
                <a href="#" className="inline-block py-2 md:py-3 text-white rounded-lg items-center gap-2 hover:scale-105 transition-all w-fit mx-auto md:mx-0">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" width={160} height={40} className="w-[140px] md:w-[160px] lg:w-[180px]" />
                </a>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] z-20 mt-8 md:mt-0">
              <Image src="/assets/mockup-straight.png" alt="Beauty Products Collection" fill className="object-contain scale-150 md:scale-165" />
            </div>
          </div>
        </div>
      </section>

      <section className='h-auto overflow-hidden bg-white py-12 md:py-16 lg:py-24'>
        <div className="inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] z-20 order-2 md:order-1">
              <Image src="/assets/mockup-slant.png" alt="Beauty Products Collection" fill className="object-cover scale-150 md:scale-165" />
            </div>
            <div className="text-gray-700 z-20 order-1 md:order-2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 leading-tight relative">
                Book Your Beauty Appointment
                <span className="block text-[#D63384] mt-2">From Home</span>
                <div className="absolute -bottom-3 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-gradient-to-r from-[#D63384] to-[#FFD700]"></div>
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-500 leading-relaxed">
                Schedule with your favorite salon experts at your convenience, all from the comfort of your couch.
                <span className="block mt-2 text-gray-600">No more waiting in lines or phone calls.</span>
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full bg-[#D63384]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#D63384]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Real-time availability</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full bg-[#D63384]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#D63384]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Instant confirmation</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full bg-[#D63384]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#D63384]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Reminder notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-12 lg:px-24 pb-8 md:pb-12 bg-white">
        <div className="w-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Left side - Working Hours */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl md:text-3xl text-[#D63384] mb-6 md:mb-8 font-serif font-bold">Working Hours</h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D63384]/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#D63384]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg text-gray-900/60 font-semibold">Monday - Friday</h3>
                    <p className="text-sm md:text-base text-gray-600">8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D63384]/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#D63384]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg text-gray-900/60 font-semibold">Saturday & Sunday</h3>
                    <p className="text-sm md:text-base text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D63384]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#D63384]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#D63384]">10K+</h3>
                <p className="text-sm md:text-base text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D63384]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#D63384]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#D63384]">500+</h3>
                <p className="text-sm md:text-base text-gray-600">Products</p>
              </div>
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D63384]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#D63384]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#D63384]">98%</h3>
                <p className="text-sm md:text-base text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D63384]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#D63384]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#D63384]">24/7</h3>
                <p className="text-sm md:text-base text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

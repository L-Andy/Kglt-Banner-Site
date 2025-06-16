'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export function Header() {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const overlayRef = useRef<HTMLDivElement>(null)

    const header = [
        { name: 'home', href: '/' },
        { name: 'privacy policy', href: '/privacy-policy' }
    ]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    return (
        <>
            <header className="py-4 md:py-6 lg:py-8 px-4 md:px-12 lg:px-24 w-full sticky h-16 md:h-20 lg:h-24 flex justify-center items-center bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <Image 
                        src="/assets/header-logo.png" 
                        alt="KGLT Logo" 
                        width={120} 
                        height={24} 
                        className="w-[120px] md:w-[135px] lg:w-[150px] hover:scale-105 transition-transform cursor-pointer" 
                    />
                    <nav className="hidden md:block">
                        <ul className="flex gap-4 md:gap-6 lg:gap-8">
                            {
                                header.map(({ href, name }, index) => <li key={index}>
                                    <button 
                                        onClick={() => router.push(href)} 
                                        className="text-gray-800 text-sm md:text-base font-medium cursor-pointer capitalize hover:text-[#D63384] transition-colors"
                                    >
                                        {name}
                                    </button>
                                </li>)
                            }
                        </ul>
                    </nav>
                    <button 
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Navigation */}
            <div 
                ref={overlayRef}
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4">
                        <button 
                            className="absolute top-4 right-4 p-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <nav className="mt-8">
                            <ul className="space-y-4">
                                {header.map(({ href, name }, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => {
                                                router.push(href)
                                                setIsMenuOpen(false)
                                            }}
                                            className="text-gray-800 text-base font-medium cursor-pointer capitalize hover:text-[#D63384] transition-colors w-full text-left"
                                        >
                                            {name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
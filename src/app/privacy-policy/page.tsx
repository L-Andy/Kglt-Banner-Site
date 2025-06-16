'use client'
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen relative">
            <Header />

            <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 bg-white">
                <h1 className="text-lg md:text-xl font-serif font-bold text-[#D63384] mb-6 md:mb-8">KGLT App Privacy Policy</h1>

                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">Your privacy is important to us. This Privacy Policy explains how we collect, use, share, and protect your personal data when you use the KGLT mobile application (the "App").</p>

                <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">By downloading or using the App, you agree to the terms of this Privacy Policy.</p>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 md:mb-4">1. Who We Are</h2>
                <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">KGLT is a mobile application that helps users in Uganda book beauty services, manage appointments, and stay connected with their preferred beauty professionals. We are committed to protecting your privacy and ensuring your data is handled responsibly.</p>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 md:mb-4">2. Legal Basis for Processing Your Data</h2>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">We process your data under:</p>
                <ul className="list-disc pl-6 mb-6 md:mb-8 text-gray-600 space-y-2 text-sm md:text-base">
                    <li><strong className="text-gray-800">Article 27 of the Constitution of Uganda</strong>, which guarantees your right to privacy.</li>
                    <li>General principles from the <strong className="text-gray-800">Data Protection and Privacy Act, 2019</strong> (Uganda), including consent, purpose limitation, and data minimization.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 md:mb-4">3. Information We Collect</h2>
                <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-700 mb-2 md:mb-3">a) Personal Information</h3>
                <ul className="list-disc pl-6 mb-4 md:mb-6 text-gray-600 space-y-2 text-sm md:text-base">
                    <li>Full name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Profile photo (optional)</li>
                    <li>Gender (optional)</li>
                </ul>

                <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-700 mb-2 md:mb-3">b) Appointment Data</h3>
                <ul className="list-disc pl-6 mb-4 md:mb-6 text-gray-600 space-y-2 text-sm md:text-base">
                    <li>Services booked</li>
                    <li>Appointment time, location, and status</li>
                    <li>History of past bookings</li>
                </ul>

                <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-700 mb-2 md:mb-3">c) Device & Technical Information</h3>
                <ul className="list-disc pl-6 mb-6 md:mb-8 text-gray-600 space-y-2 text-sm md:text-base">
                    <li>App version</li>
                    <li>Crash logs and diagnostics</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 md:mb-4">4. How We Use Your Data</h2>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">We use your data for the following purposes:</p>
                <ul className="list-disc pl-6 mb-6 md:mb-8 text-gray-600 space-y-2 text-sm md:text-base">
                    <li>To register and manage your user account</li>
                    <li>To help you discover, book, and manage beauty appointments</li>
                    <li>To send you confirmations, reminders, and service updates</li>
                    <li>To connect you with beauty professionals</li>
                    <li>To improve app functionality and user experience</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 md:mb-4">5. Data Sharing and Third Parties</h2>
                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">All data shared remains with us, doesn't go anywhere else</p>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 md:mb-4">6. Your Rights</h2>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">Under the Data Protection and Privacy Act, 2019, you have the right to:</p>
                <ul className="list-disc pl-6 mb-6 md:mb-8 text-gray-600 space-y-2 text-sm md:text-base">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to data processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 md:mb-4">7. Data Security</h2>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">We implement appropriate technical and organizational measures to protect your data, including:</p>
                <ul className="list-disc pl-6 mb-6 md:mb-8 text-gray-600 space-y-2 text-sm md:text-base">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Secure data storage practices</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 md:mb-4">8. Data Retention</h2>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">We retain your data only for as long as necessary to:</p>
                <ul className="list-disc pl-6 mb-6 md:mb-8 text-gray-600 space-y-2 text-sm md:text-base">
                    <li>Provide our services</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce our agreements</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 md:mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">We may update this privacy policy from time to time. We will notify you of any material changes through the app or via email. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
            </section>
            <Footer />
        </div>
    );
}

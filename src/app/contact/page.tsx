

export const metadata = {
  title: 'Contact Us | Ghana BlueFins Swim Club',
  description: 'Get in touch with Ghana BlueFins Swim Club. Contact information, locations, and inquiry form.',
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <div className="pt-24 pb-16"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions? We&rsquo;re here to help!
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#0A1738]">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-[#0A1738] mt-1 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Phone</h3>
                      <p className="text-gray-600">+233 XX XXX XXXX</p>
                      <p className="text-gray-600">+233 XX XXX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-[#0A1738] mt-1 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Email</h3>
                      <p className="text-gray-600">info@ghanabluefins.com</p>
                      <p className="text-gray-600">admin@ghanabluefins.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-[#0A1738] mt-1 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Locations */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-[#0A1738]">Our Locations</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#0A1738]">Spintex Location</h3>
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600">JMJ Sports Center</p>
                        <p className="text-gray-600">Spintex Road, Accra</p>
                        <p className="text-gray-600 mt-1">Located near Fiesta Royale Hotel</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#0A1738]">Sakumono Location</h3>
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600">Regimanuel Gray Estates</p>
                        <p className="text-gray-600">Sakumono, Tema</p>
                        <p className="text-gray-600 mt-1">Community pool inside Regimanuel Gray Estates</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="/locations" 
                    className="text-[#0A1738] font-semibold hover:underline inline-flex items-center"
                  >
                    View detailed location information
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 text-[#0A1738]">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#0A1738] text-white p-3 rounded-full hover:bg-[#0A1738]/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#0A1738] text-white p-3 rounded-full hover:bg-[#0A1738]/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#0A1738] text-white p-3 rounded-full hover:bg-[#0A1738]/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#0A1738] text-white p-3 rounded-full hover:bg-[#0A1738]/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-[#0A1738]">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <select 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="lessons">Swimming Lessons</option>
                    <option value="competitive">Competitive Team</option>
                    <option value="schedule">Schedule Information</option>
                    <option value="billing">Billing/Payment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div className="flex items-start mb-2">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-700">
                    I would like to receive newsletters and updates from Ghana BlueFins Swim Club
                  </span>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className="w-full bg-[#0A1738] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#0A1738]/90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-[#0A1738] text-center">Find Us</h2>
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              {/* This would be replaced with an actual map component in production */}
              <div className="w-full h-full bg-[url('/images/map-placeholder.jpg')] bg-cover bg-center"></div>
            </div>
          </div>
          
          {/* FAQ Quick Links */}
          <div className="mt-16 max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-[#0A1738]">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">
              Find answers to common questions about our programs, scheduling, and policies.
            </p>
            <div className="flex justify-center">
              <a 
                href="#" 
                className="inline-block bg-[#0A1738] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
              >
                View FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
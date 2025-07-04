import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg'; // Adjust the path if needed

const faqs = [
  {
    question: "What services does Genexcorp offer?",
    answer:
      "Genexcorp offers services in cloud solutions, DevOps, e-commerce development, and custom software engineering tailored to your business needs.",
  },
  {
    question: "How can I request a demo or consultation?",
    answer:
      "You can fill out the contact form on this page or email us at hr@genexcorp.com to schedule a consultation or product demo.",
  },
  {
    question: "Where is Genexcorp located?",
    answer:
      "Our corporate office is located in VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Telangana, India.",
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Contact Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#800000' }}>
                Contact Us
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="border p-3 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Designation*"
                  required
                  className="border p-3 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border p-3 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Industry Vertical"
                  className="border p-3 rounded-md"
                />
                <input
                  type="tel"
                  placeholder="Mobile No*"
                  required
                  pattern="\d{10}"
                  className="border p-3 rounded-md"
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="border p-3 rounded-md"
                />
                <textarea
                  placeholder="Message"
                  className="border p-3 rounded-md md:col-span-2"
                  rows={4}
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-md md:col-span-2 text-white"
                  style={{ backgroundColor: '#800000' }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#660000')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#800000')}
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <img
    src={logo}
    alt="GENEX CORPORATE PRIVATE LIMITED"
    className="w-20 object-contain"
  />
  <span className="font-bold text-[#800000] text-lg whitespace-nowrap">
    GENEX CORPORATE PRIVATE LIMITED
  </span>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#800000' }}>
                Corporate Office
              </h3>
              <div className="flex items-start mb-4">
                <MapPin className="mt-1" color="#800000" />
                <p className="ml-2 text-gray-700 text-sm">
                  VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Road # 1,
                  <br />
                  Hyderabad - 500085, Telangana, India
                </p>
              </div>

              <div className="flex items-start mb-4">
                <Phone className="mt-1" color="#800000" />
                <p className="ml-2 text-gray-700 text-sm">+91-9920779995</p>
              </div>

              <div className="flex items-start mb-4">
                <Mail className="mt-1" color="#800000" />
                <p className="ml-2 text-gray-700 text-sm">hr@genexcorp.com</p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2" style={{ color: '#800000' }}>
                  About Genexcorp
                </h4>
                <p className="text-sm text-gray-600">
                  Some believe in the power of numbers. Some believe in the power of technology.
                  We believe in the power of people, power of human touch which brings best out of the best and the impact people can have on technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#800000' }}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
                  style={{ color: '#800000' }}
                >
                  {faq.question}
                  <span
                    className="ml-4 transform transition-transform duration-200"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: '#800000',
                    }}
                  >
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 text-sm">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;

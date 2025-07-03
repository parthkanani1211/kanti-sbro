// src/pages/Contact.tsx

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  // Define contact details for easy reference and to avoid repetition
  const email = "gopinathjirholux@gmail.com";
  const phone = "+919712849208"; // Format for the 'tel:' link and WhatsApp logic
  const phoneDisplay = "+91 9712849208"; // Format for display
  const address = "2nd floor, Aval Complex, university Road, Rajkot, Gujarat, India 360005";
  const mapsQuery = encodeURIComponent(address);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission to open WhatsApp
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Remove '+' and any non-digit characters from the phone number for the WhatsApp URL
    const whatsappNumber = phone.replace(/\D/g, '');

    // Construct the message with details from the form
    const fullMessage = `
New Inquiry from Website:

*Name:* ${firstName} ${lastName}
*Email:* ${emailInput}
*Company:* ${company}
*Message:* ${message}
    `.trim();

    // URL-encode the message to be safely passed in the URL
    const encodedMessage = encodeURIComponent(fullMessage);

    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open the link in a new tab
    window.open(whatsappUrl, '_blank');
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our team of rhodium plating experts
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Send us a Message</h2>
                  {/* UPDATED: Added onSubmit handler to the form */}
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-yellow-400 font-medium mb-2">First Name</label>
                        <Input 
                          className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400" 
                          placeholder="John"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-yellow-400 font-medium mb-2">Last Name</label>
                        <Input 
                          className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400" 
                          placeholder="Doe"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-yellow-400 font-medium mb-2">Email</label>
                      <Input 
                        type="email" 
                        className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400" 
                        placeholder="john@example.com"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-yellow-400 font-medium mb-2">Company</label>
                      <Input 
                        className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400" 
                        placeholder="Your Company Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-yellow-400 font-medium mb-2">Message</label>
                      <textarea 
                        className="w-full min-h-[120px] bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-yellow-400 focus:outline-none resize-none"
                        placeholder="Tell us about your rhodium plating needs..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3"
                    >
                      Send Message via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Ready to experience the precision and quality of RHOLUX 108? Our team is here to help you with technical support, product inquiries, and custom solutions.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email Card */}
                <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6">
                    <a href={`mailto:${email}`} className="flex items-center space-x-4 group">
                      <div className="bg-yellow-400/20 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-gray-300 group-hover:text-yellow-400 group-hover:underline transition-colors">{email}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* Phone Card */}
                <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6">
                    <a href={`tel:${phone}`} className="flex items-center space-x-4 group">
                      <div className="bg-yellow-400/20 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Phone</h3>
                        <p className="text-gray-300 group-hover:text-yellow-400 group-hover:underline transition-colors">{phoneDisplay}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* Address Card */}
                <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6">
                    <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                      <div className="bg-yellow-400/20 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Address</h3>
                        <p className="text-gray-300 group-hover:text-yellow-400 group-hover:underline transition-colors">{address}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* Business Hours Card (no link needed) */}
                <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-yellow-400/20 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Business Hours</h3>
                        <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
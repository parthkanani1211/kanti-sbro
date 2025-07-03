// src/components/ui/Inquiry.tsx

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react"; // Using MessageSquare for WhatsApp

interface InquiryProps {
  onClose: () => void;
  productName?: string;
}

// Define your contact phone number
const CONTACT_PHONE = "+919712849208";

const Inquiry = ({ onClose, productName = "RHOLUX 108" }: InquiryProps) => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    contactNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // UPDATED: This function now sends the form data to WhatsApp
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Remove non-digit characters from the phone number for the URL
    const whatsappNumber = CONTACT_PHONE.replace(/\D/g, '');

    // Construct the message with details from the form
    const message = `
Hello, I'd like to inquire about *${productName}*.

*Name:* ${formData.name}
*Company:* ${formData.companyName}
*Email:* ${formData.email}
*Contact Number:* ${formData.contactNumber}

Please provide more information.
    `.trim();

    // URL-encode the message to be safely passed in the URL
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open the link in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset submission state and close the modal after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-yellow-500 focus:border-yellow-500 transition"
          />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-yellow-500 focus:border-yellow-500 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-yellow-500 focus:border-yellow-500 transition"
          />
        </div>
        <div>
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-300 mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            name="contactNumber"
            id="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-yellow-500 focus:border-yellow-500 transition"
          />
        </div>
        
        {/* UPDATED: This button now submits the form to WhatsApp */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 text-base flex items-center justify-center gap-2"
        >
          {isSubmitting ? "Redirecting..." : "Send Inquiry via WhatsApp"}
          <MessageSquare className="w-5 h-5" />
        </Button>
      </form>

      <div className="relative my-4 flex items-center">
        <hr className="w-full border-t border-gray-600" />
        <span className="absolute left-1/2 -translate-x-1/2 bg-gray-900 px-2 text-sm text-gray-400">OR</span>
      </div>

      {/* UPDATED: Kept "Call Us" as a secondary option, centered it */}
      <div className="flex justify-center">
        <a 
          href={`tel:${CONTACT_PHONE}`}
          className="flex-1 max-w-xs inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-4 py-2 text-white border-yellow-400 border hover:bg-yellow-400 hover:text-black transition-colors"
        >
          <Phone className="w-4 h-4 mr-2" /> Call Us Directly
        </a>
      </div>
    </div>
  );
};

export default Inquiry;
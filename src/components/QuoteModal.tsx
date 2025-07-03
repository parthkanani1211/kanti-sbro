// src/components/QuoteModal.tsx

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface QuoteModalProps {
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    transition: { duration: 0.2 }
  }
};

export const QuoteModal = ({ onClose }: QuoteModalProps) => {

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send to an API or email service
    console.log("Form submitted!");
    // You could show a success message before closing
    onClose(); 
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose} // Close modal if overlay is clicked
    >
      <motion.div
        className="bg-gray-900 border border-yellow-400/30 rounded-2xl p-8 w-full max-w-lg relative text-white"
        variants={modalVariants}
        exit="exit"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold font-playfair mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Request a Quote</h2>
        <p className="text-gray-400 mb-6">Fill out the form below and we'll get back to you shortly.</p>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input type="text" id="name" name="name" required className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company (Optional)</label>
            <input type="text" id="company" name="company" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(245, 197, 66, 0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};
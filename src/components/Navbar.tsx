
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-400/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              RHOLUX
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <motion.div
                  className={`relative px-2 lg:px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-400 hover:bg-yellow-400/10 p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? "block" : "hidden"}`}
          initial={{ height: 0, opacity: 0 }}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/50 backdrop-blur-sm border-t border-yellow-400/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

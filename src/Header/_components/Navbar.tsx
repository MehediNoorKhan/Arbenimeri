import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import english from "../../../public/images/home/uk.png";
import spanish from "../../../public/images/home/spain.png";
import french from "../../../public/images/home/france.png";


const languages = [
  { code: 'en', name: 'English', countryCode: 'en' },
  { code: 'es', name: 'Español', countryCode: 'es' },
  { code: 'fr', name: 'Français', countryCode: 'fr' },
  { code: 'de', name: 'Deutsch', countryCode: 'de' },
  { code: 'zh', name: '中文', countryCode: 'zh' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const navigate = useNavigate();
  // const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguage = () => setLangOpen(!langOpen);

  const handleLanguageSelect = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };

  return (
    <nav className="">
      {/* Full-width container */}
      <div className="w-full">
        {/* Centered content */}
        <div className="xl:px-[80px] py-[20px]">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className=" rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                {/* // N:\Ashraful\Task\arbenimeri2677_react\public\images\logos\logo.png */}
                <img
                  src="/images/logos/logo.png"
                  className="h-[46px] w-[131px]"
                  alt=""
                />
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-300 xl:text-[16px] relative group ${
                      isActive
                        ? 'text-primary'
                        : 'text-secondary hover:text-secondary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop buttons */}
             <div className="hidden md:flex items-center gap-3">
  {/* Register */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="
      px-5 py-2
      bg-primary
      text-white
      rounded-full
      text-sm
      font-medium
      transition-all
      duration-300
      cursor-pointer
    "
     onClick={() => navigate("/signup")}
  >
    Register
  </motion.button>

  {/* Log In */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="
      px-5 py-2
      border
      border-primary
      text-primary
      rounded-full
      text-sm
      font-medium
      transition-all
      duration-300
      cursor-pointer
      hover:bg-primary
      hover:text-white
    "
     onClick={() => navigate("/login")}
  >
    Log In
  </motion.button>

  {/* Language Selector */}
  <div className="relative">
    <button
      onClick={toggleLanguage}
      className="
        flex items-center gap-2
        px-4 py-2
        border
        border-priary
        rounded-full
        text-sm
        font-medium
        text-primary
        border-primary
        transition-all
        duration-300
        hover:bg-teal-50
      "
    >
      <img
        src="/images/home/uk.png"
        alt="English"
        className="h-4 w-4 rounded-full object-cover"
      />
      <span className="uppercase">EN</span>
      <ChevronDown
        size={16}
        className={`transition-transform duration-300 ${
          langOpen ? 'rotate-180' : ''
        }`}
      />
    </button>

    <AnimatePresence>
      {langOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          className="
            absolute right-0 mt-2
            w-44
            bg-white
            rounded-xl
            border
            border-gray-100
            shadow-lg
            overflow-hidden
            z-50
          "
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang)}
              className={`
                w-full px-4 py-2
                flex items-center gap-3
                text-sm
                transition-colors
                ${
                  selectedLang.code === lang.code
                    ? 'bg-teal-50 text-buttonprimarybg font-medium'
                    : 'text-secondary hover:bg-gray-50'
                }
              `}
            >
              <img
                src={
                  lang.code === 'en'
                    ? english
                    : lang.code === 'es'
                    ? spanish
                    : french
                }
                alt={lang.name}
                className="h-4 w-4 rounded-full"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</div>

            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden bg-white border-t border-gray-100"
              >
                <div className="px-4 py-4 space-y-3">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'text-buttonprimarybg font-medium'
                            : 'text-secondary hover:text-buttonprimarybg'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}

                  <div className="flex flex-col gap-2 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      className="px-6 py-2 bg-gradient-to-r from-buttonprimarybg to-buttonprimarybg text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Register
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      className="px-6 py-2 text-buttonprimarybg border-2 border-buttonprimarybg rounded-full font-medium hover:bg-teal-50 transition-all duration-300"
                    >
                      Sign In
                    </motion.button>

                    {/* Mobile Language Dropdown */}
                    <div className="relative">
                      <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 px-3 py-2 text-secondary hover:text-buttonprimarybg transition-colors duration-300 w-full justify-start"
                      >
                        <Globe size={18} />
                        <span>{selectedLang.name}</span>
                        <ChevronDown
                          size={16}
                          className={`ml-auto transition-transform duration-300 ${
                            langOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {langOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                          >
                            {languages.map((lang) => (
                              <button
                                key={lang.code}
                                onClick={() => handleLanguageSelect(lang)}
                                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-200 ${
                                  selectedLang.code === lang.code
                                    ? 'bg-teal-50 text-buttonprimarybg font-medium'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              >
                                <span>{lang.name}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

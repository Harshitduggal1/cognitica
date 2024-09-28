"use client"

import { AnimatePresence, Variant, motion } from 'framer-motion';
import { FaBars, FaChartBar, FaCloud, FaCode, FaCog, FaDatabase, FaDesktop, FaGamepad, FaGlobe, FaHandshake, FaMobile, FaRobot, FaSearch, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';
import React, { useState } from 'react';

import Image from "next/image";
import Link from 'next/link';
import { useUser } from "@clerk/nextjs";

// Types
type NavItem = {
  name: string;
  href: string;
  subItems?: Array<{
    name: string;
    icon: React.ElementType;
    href: string;
  }>;
};




// Animations
const itemVariants: { [key: string]: Variant } = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Utility function for gradient text
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => (
  <motion.span
    className={`bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-pink-600 ${className}`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.span>
);

// Logo Component
const Logo: React.FC = () => (
  <motion.div
    className="text-3xl font-bold"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <GradientText>COGNITICA</GradientText>
  </motion.div>
);


// NavItems Component
const NavItems: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { 
      name: 'Products', 
      href: '/products',
      subItems: [
        { name: 'Analytics', icon: FaChartBar, href: '/products/analytics' },
        { name: 'Cloud Services', icon: FaCloud, href: '/products/cloud-services' },
        { name: 'Developer Tools', icon: FaCode, href: '/products/developer-tools' },
        { name: 'Database Solutions', icon: FaDatabase, href: '/products/database-solutions' },
        { name: 'Desktop Apps', icon: FaDesktop, href: '/products/desktop-apps' },
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      subItems: [
        { name: 'Enterprise', icon: FaUser, href: '/solutions/enterprise' },
        { name: 'Startups', icon: FaRobot, href: '/solutions/startups' },
        { name: 'Gaming', icon: FaGamepad, href: '/solutions/gaming' },
        { name: 'Mobile', icon: FaMobile, href: '/solutions/mobile' },
        { name: 'Web', icon: FaGlobe, href: '/solutions/web' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { 
      name: 'Resources', 
      href: '/resources',
      subItems: [
        { name: 'Documentation', icon: FaCode, href: '/resources/documentation' },
        { name: 'API Reference', icon: FaCloud, href: '/resources/api-reference' },
        { name: 'Community', icon: FaUser, href: '/resources/community' },
        { name: 'Tutorials', icon: FaDesktop, href: '/resources/tutorials' },
        { name: 'Blog', icon: FaGamepad, href: '/resources/blog' },
      ]
    },
    { 
      name: 'Company', 
      href: '/company',
      subItems: [
        { name: 'About Us', icon: FaUser, href: '/company/about' },
        { name: 'Careers', icon: FaChartBar, href: '/company/careers' },
        { name: 'Press', icon: FaGlobe, href: '/company/press' },
        { name: 'Contact', icon: FaMobile, href: '/company/contact' },
        { name: 'Partners', icon: FaHandshake, href: '/company/partners' },
      ]
    },
  ];

  return (
    <nav className="hidden lg:flex space-x-1">
      {navItems.map((item) => (
        <motion.div
          key={item.name}
          className="relative group"
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
          whileHover={{ scale: 1.05 }}
        >
          <Link href={item.href} className="px-3 py-2 rounded-md text-sm font-medium text-white transition duration-300 flex items-center space-x-1 bg-gradient-to-r from-transparent to-transparent hover:from-purple-500 hover:to-pink-500">
            <motion.span className="relative overflow-hidden">
              {item.name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  whileHover={{ scale: 1.2, color: '#f687b3' }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </Link>
          <AnimatePresence>
            {item.subItems && hoveredItem === item.name && (
              <motion.div
                className="absolute z-10 -ml-4 mt-1 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <motion.div className="relative grid gap-6 bg-white text-black px-5 py-6 sm:gap-8 sm:p-8 grid-cols-2">
                    {item.subItems.map((subItem) => (
                      <motion.div key={subItem.name} variants={itemVariants}>
                        <Link href={subItem.href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gradient-to-b hover:from-purple-300 hover:to-pink-400 transition ease-in-out duration-150">
                          <subItem.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-slate-800">{subItem.name}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </nav>
  );
};


// Toolbar Component
const Toolbar: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <motion.button
        className="text-white hover:text-pink-400 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaSearch className="h-5 w-5" />
      </motion.button>
      <motion.button
        className="text-white hover:text-pink-400 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaShoppingCart className="h-5 w-5" />
      </motion.button>
      <motion.button
        className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-30 transition-all duration-300 backdrop-filter backdrop-blur-sm"
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        whileTap={{ scale: 0.95 }}
      >
        Sign Up
      </motion.button>
    </div>
  );
};

// Main Header Component
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  return (
    <header className='w-full sticky top-0 left-0 z-[999] border-b-2 border-purple-600 px-5 md:px-10 flex items-center justify-between h-[98px] md:h-[74px] bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl'>

    <motion.header
      className='w-full sticky top-0 left-0 z-[999] border-b border-white border-opacity-20 px-5 md:px-10 flex items-center justify-between h-[98px] md:h-[74px] bg-gradient-to-b from-purple-800 via-violet-900 to-indigo-800 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-70'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="transform hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={"/"}>
          <Logo />
        </Link>
      </motion.div>
      <NavItems />
      <div className='flex items-center gap-0 md:gap-3 ml-14 md:ml-0'>
        <Toolbar />
      </div>
      <div className="lg:hidden flex items-center justify-between px-1">
        <motion.button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-xl bg-white bg-opacity-20 text-white p-2 rounded-full transform hover:scale-110 transition-all duration-300 hover:bg-opacity-30 backdrop-filter backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute w-full left-0 top-full bg-gradient-to-b from-purple-900 to-indigo-800 text-white shadow-2xl py-6 px-5 backdrop-filter backdrop-blur-lg bg-opacity-90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
              {['Products', 'Solutions', 'Pricing', 'Resources', 'Company'].map((item) => (
                <motion.li key={item} variants={itemVariants} className="border-b border-white border-opacity-20 hover:border-opacity-100 transition-colors duration-300">
                  <Link href="#" className="block py-2 font-semibold hover:text-pink-400 transition-colors duration-300 items-center space-x-2">
                    <FaCog className="h-5 w-5" />
                    <span>{item}</span>
                  </Link>
                </motion.li>
              ))}
              {!user && (
                <motion.li variants={itemVariants} className="py-2 font-semibold">
                  <Link 
                    href="/sign-in" 
                    className="block w-full text-center bg-gradient-to-b from-purple-500 to-pink-500 py-2 rounded-lg transform hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
                  >
                    Login
                  </Link>
                </motion.li>
              )}
              {user && (
                <motion.li variants={itemVariants}>
                  <Link className="block" href="/dashboard">
                    <div className="flex justify-center cursor-pointer">
                      <Image
                        src={user.imageUrl || '/default-avatar.png'}
                        alt="User Profile"
                        width={50}
                        height={50}
                        className="rounded-full object-cover border-2 border-white hover:border-pink-400 transition-all duration-300 transform hover:scale-110"
                        style={{ aspectRatio: '1 / 1' }}
                      />
                    </div>
                  </Link>
                </motion.li>
              )}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </header>
  )
}

export default Header;














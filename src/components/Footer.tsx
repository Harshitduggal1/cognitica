"use client"

import { Box, Flex, Grid, keyframes } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

import { IconType } from 'react-icons';
import Image from 'next/image';
import React from 'react';
import githublogo from "@/public/images/githublogo.svg"
import { motion } from 'framer-motion';

// Define keyframes animation using Chakra UI's keyframes utility
const bgAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-white font-bold hover:text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
  >
    {children}
  </a>
);

interface LinkItem {
  href: string;
  text: string;
}

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <FooterLink href={link.href}>{link.text}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
);

interface SocialIconProps {
  Icon: IconType;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-6 h-6" />
  </a>
);

interface FooterSection {
  title: string;
  links: LinkItem[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "About Us",
      links: [
        { href: "/our-story", text: "Our Story" },
        { href: "/team", text: "Meet the Team" },
        { href: "/careers", text: "Careers" },
        { href: "/press", text: "Press Releases" },
        { href: "/blog", text: "Blog" },
        { href: "/contact", text: "Contact Us" },
      ],
    },
    {
      title: "Products",
      links: [
        { href: "/products/software", text: "Software Solutions" },
        { href: "/products/hardware", text: "Hardware" },
        { href: "/products/services", text: "Services" },
        { href: "/products/enterprise", text: "Enterprise" },
        { href: "/products/personal", text: "Personal" },
        { href: "/pricing", text: "Pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/resources/documentation", text: "Documentation" },
        { href: "/resources/tutorials", text: "Tutorials" },
        { href: "/resources/webinars", text: "Webinars" },
        { href: "/resources/case-studies", text: "Case Studies" },
        { href: "/resources/white-papers", text: "White Papers" },
        { href: "/resources/faq", text: "FAQ" },
      ],
    },
    {
      title: "Community",
      links: [
        { href: "/Community/forums", text: "Forums" },
        { href: "/community/events", text: "Events" },
        { href: "/community/developers", text: "Developers" },
        { href: "/community/partners", text: "Partners" },
        { href: "/community/affiliates", text: "Affiliates" },
        { href: "/Community/newsletter", text: "Newsletter" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/support/help-center", text: "Help Center" },
        { href: "/support/ticket", text: "Submit a Ticket" },
        { href: "/support/status", text: "System Status" },
        { href: "/support/security", text: "Security" },
        { href: "/support/compliance", text: "Compliance" },
        { href: "/support/accessibility", text: "Accessibility" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/legal/terms", text: "Terms of Service" },
        { href: "/legal/privacy", text: "Privacy Policy" },
        { href: "/legal/cookies", text: "Cookie Policy" },
        { href: "/legal/gdpr", text: "GDPR" },
        { href: "/legal/licenses", text: "Licenses" },
        { href: "/legal/trademark", text: "Trademark Policy" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-12 relative">
      <Box
        as={motion.div}
        initial="initial"
        animate="animate"
        h="100vh"
        bg="linear-gradient(120deg, #00008B 0%, #0000FF 20%, #8A2BE2 40%, #FF00FF 60%, #FF0000 80%)"
        bgSize="200% 200%"

        animation={`${bgAnimation} 20s ease-in-out infinite alternate`}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        px={2}
      >
        <div className="h-1 w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap={8} textAlign={{ base: 'center', md: 'left' }} mb={8}>
            {footerSections.map((section, index) => (
              <FooterColumn key={index} title={section.title} links={section.links} />
            ))}
          </Grid>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <img src="/logo_footer.png" alt="Logo" className="h-12 w-auto" />
              </div>
              <div className="flex space-x-6">
                <SocialIcon Icon={FaFacebook} href="#" />
                <SocialIcon Icon={FaTwitter} href="#" />
                <SocialIcon Icon={FaInstagram} href="#" />
                <SocialIcon Icon={FaLinkedin} href="#" />
                <SocialIcon Icon={FaYoutube} href="#" />
                <SocialIcon Icon={FaPinterest} href="#" />
                <SocialIcon Icon={FaTiktok} href="#" />
              </div>

              <div className="flex items-center space-x-4">
  <span className="font-extrabold text-5xl text-white">
    Follow us on GitHub
  </span>
  <a
    href="https://github.com/harshitduggal1"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2"
  >
    <Image
      src="/images/githublogo.svg" // Reference the path inside the 'public' directory
      alt="GitHub Logo"
      height={48} // Adjust the height and width as per your needs
      width={48}
    />
  </a>
</div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>© 2024 Firebee Technologies, Inc. All rights reserved.</p>
            <p className="mt-2">
              The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </Box>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
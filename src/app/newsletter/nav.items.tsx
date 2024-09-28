'use client';

import {
  FaBitcoin,
  FaBriefcase,
  FaBroadcastTower,
  FaBuilding,
  FaBusinessTime,
  FaCode,
  FaFutbol,
  FaGraduationCap,
  FaHandsHelping,
  FaHeartbeat,
  FaIndustry,
  FaInfoCircle,
  FaPizzaSlice,
  FaPodcast,
  FaQuestionCircle,
  FaRegNewspaper,
  FaRocket,
  FaShoppingCart,
  FaSitemap,
  FaTheaterMasks,
  FaTv,
  FaUniversity,
  FaUtensils
} from 'react-icons/fa';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '../../components/ui/navigation-menu';
import React, { useState } from 'react';

import Link from 'next/link';
import { cn } from "@/lib/utils";
import { navItems } from '../../lib/constants';
interface ListItemProps {
  href: string;
  title: string;
  description: string;
  icon: React.ElementType;
}
const ListItem = ({ href, title, description, icon: Icon }: ListItemProps) => (
  <li className="flex items-center gap-4 hover:bg-[#F7F5FF] px-[10px] py-[12px] rounded-lg">
    <div className="bg-[#F7F5FF] p-3 rounded-full">
      <Icon className="text-md text-[#3843D0]" style={{ fontSize: '1.2em' }} />
    </div>
    <Link href={href} className="flex flex-col">
      <h3 className='font-semibold'>{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Link>
  </li>
);

const NavItems = () => {
  const [path, setPath] = useState('#resources');

  return (
    <>
      <div className="w-full hidden md:flex items-center">
        {navItems.map((item, index) => (
          <Link key={index} href={item.path} className="px-5 text-md">
            {item.title}
          </Link>
        ))}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath('#network')}
              className={cn({
                'dark:text-white': path === '#network',
                'dark:text-white/40': path !== '#network',
                'font-normal': true,
                'text-md': true,
              })}
            >
              Ad Network
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-lg rounded-lg p-4">
              <ul className="grid gap-3 md:w-[400px] lg:w-[350px] lg:grid-cols-1">
              <ListItem href="#" title="For Publishers" description="Monetize your newsletter with premium sponsors." icon={FaRegNewspaper} />
                <ListItem href="#" title="For Advertisers" description="Reach millions of readers across top newsletters." icon={FaBusinessTime} />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath('#beeclone')}
              className={cn({
                'dark:text-white': path === '#beeclone',
                'dark:text-white/40': path !== '#beeclone',
                'font-normal': true,
                'text-md': true,
              })}
            >
              BeeClone for
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-lg rounded-lg p-4">
              <ul className="grid gap-3 md:w-[400px] lg:w-[680px] lg:grid-cols-[.75fr_1fr]">
              <ListItem
                href="#resources"
                title="Business"
                description="Explore the world of commerce and entrepreneurship."
                icon={FaBusinessTime}
              />
              <ListItem
                href="#resources"
                title="Content Creators"
                description="Discover talented creators shaping digital landscapes."
                icon={FaBroadcastTower}
              />
              <ListItem
                href="#resources"
                title="Web 3 and Crypto"
                description="Dive into the exciting realm of cryptocurrencies."
                icon={FaBitcoin}
              />
              <ListItem
                href="#resources"
                title="Health and Fitness"
                description="Achieve your health and fitness goals with expert guidance."
                icon={FaHeartbeat}
              />
              <ListItem
                href="#resources"
                title="Food"
                description="Savor culinary delights from around the globe."
                icon={FaUtensils}
              />
              <ListItem
                href="#resources"
                title="Pop Culture"
                description="Stay updated on the latest trends and entertainment."
                icon={FaTheaterMasks}
              />
              <ListItem
                href="#resources"
                title="Podcasters"
                description="Stay updated on the latest trends and entertainment."
                icon={FaPodcast}
              />
              <ListItem
                href="#resources"
                title="Sports"
                description="Embrace the thrill of athletic competition and achievement."
                icon={FaFutbol}
              />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath('#resources')}
              className={cn({
                'dark:text-white': path === '#resources',
                'dark:text-white/40': path !== '#resources',
                'font-normal': true,
                'text-md': true,
              })}
            >
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-lg rounded-lg p-4">
              <ul className="grid gap-3 md:w-[400px] lg:w-[680px] lg:grid-cols-[.75fr_1fr]">
                <ListItem
                  href="#business"
                  title="Business"
                  description="Explore the world of commerce and entrepreneurship."
                  icon={FaIndustry}
                />
                <ListItem
                  href="#content-creators"
                  title="Content Creators"
                  description="Discover talented creators shaping digital landscapes."
                  icon={FaTv}
                />
                <ListItem
                  href="#crypto"
                  title="Web 3 and Crypto"
                  description="Dive into the exciting realm of cryptocurrencies."
                  icon={FaRocket}
                />
                <ListItem
                  href="#health"
                  title="Health and Fitness"
                  description="Achieve your health and fitness goals with expert guidance."
                  icon={FaHeartbeat}
                />
                <ListItem
                  href="#food"
                  title="Food"
                  description="Savor culinary delights from around the globe."
                  icon={FaPizzaSlice}
                />
                <ListItem
                  href="#culture"
                  title="Pop Culture"
                  description="Stay updated on the latest trends and entertainment."
                  icon={FaPodcast}
                />
                <ListItem
                  href="#sports"
                  title="Sports"
                  description="Embrace the thrill of athletic competition and achievement."
                  icon={FaUniversity}
                />
                <ListItem
                  href="#support"
                  title="Support"
                  description="Product support, documentation, and assistance."
                  icon={FaHandsHelping}
                />
                <ListItem
                  href="#affiliates"
                  title="Affiliate"
                  description="Join our Partner Program and earn commissions."
                  icon={FaGraduationCap}
                />
                <ListItem
                  href="#company-info"
                  title="About"
                  description="Learn more about our mission and values."
                  icon={FaBuilding}
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath('#company')}
              className={cn({
                'dark:text-white': path === '#company',
                'dark:text-white/40': path !== '#company',
                'font-normal': true,
                'text-md': true,
              })}
            >
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-lg rounded-lg p-4">
              <ul className="grid gap-3 md:w-[400px] lg:w-[350px] lg:grid-cols-1">
              <ListItem
                href="#resources"
                title="Careers"
                description="Join the hiiv and be a part of the newsletter revolution."
                icon={FaBriefcase}
              />
              <ListItem
                href="#resources"
                title="About"
                description="The company behind your favorite newsletter tools."
                icon={FaInfoCircle}
              />
              <ListItem
                href="#resources"
                title="Shop"
                description="Warning: wearing beehiiv merch may lead to higher open rates."
                icon={FaShoppingCart}
              />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </>
  );
};

export default NavItems;

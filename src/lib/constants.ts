

import { atom } from "jotai";

// NavItem Interface
export interface NavItem {
  title: string;
  path: string;
}

// PartnersTypes Interface
export interface PartnersTypes {
  url: string;
}

// PlanType Interface
export interface PlanType {
  title: string;
}

// DashboardSideBarTypes Interface
export interface DashboardSideBarTypes {
  title: string;
  url: string;
  icon: string;
}

// subscribersDataTypes Interface
export interface subscribersDataTypes {
  _id: string;
  email: string;
  createdAt: string;
  source: string;
  status: string;
}

// Navigation Items
export const navItems: NavItem[] = [
  {
    title: "Features",
    path: "#features",
  },
  {
    title: "Pricing",
    path: "#pricing",
  },
  // {
  //   title: "Resources",
  //   path: "#resources",
  // },
  // {
  //   title: "Docs",
  //   path: "#docs",
  // },
];

// Partners Data
export const partners: PartnersTypes[] = [
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/resume-worded.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/clickhole.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/cre.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/rap-tv.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/awa.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/boston-globe-media.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/daily-drop.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/rarible.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/CosmicRX.svg",
  },
];

// Free Plan Data
export const freePlan: PlanType[] = [
  {
    title: "Up to 2,500 subscribers",
  },
  {
    title: "Unlimited sends",
  },
  {
    title: "Custom newsletter",
  },
  {
    title: "Newsletter analytics",
  },
];

// Grow Plan Data
export const GrowPlan: PlanType[] = [
  {
    title: "Up to 10,000 subscribers",
  },
  {
    title: "Custom domains",
  },
  {
    title: "API access",
  },
  {
    title: "Newsletter community",
  },
];

// Scale Plan Data
export const scalePlan: PlanType[] = [
  {
    title: "Up to 100,000 subscribers",
  },
  {
    title: "Referral program",
  },
  {
    title: "AI support",
  },
  {
    title: "Advanced support system",
  },
  {
    title: "Ad Network",
  },
];

// Jotai Atoms
export const sideBarActiveItem = atom<string>("/dashboard");
export const reportFilterActiveItem = atom<string>("Overview");
export const emailEditorDefaultValue = atom<string>("");
export const settingsActiveItem = atom<string>("Profile");

//
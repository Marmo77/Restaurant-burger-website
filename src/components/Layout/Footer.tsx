import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { siteData } from "../../data/siteData";
import { navigateToAddigital } from "../../lib/utils";

interface FooterProps {
  handleNavigation: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ handleNavigation }) => {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-1.5 rounded-lg bg-primary text-primary-foreground">
                <img
                  src={siteData.logo_full}
                  alt="Logo"
                  className="h-10 w-10"
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-2xl font-display font-bold tracking-wider text-white">
                  Bistro Burger
                </span>
                <span className="text-[0.5rem] font-bold tracking-[0.2em] text-primary uppercase w-full text-left">
                  Szczecin
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Prawdziwe rzemiosło, autentyczny smak. Miejsce, gdzie piwo spotyka
              się z pasją do jedzenia.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteData.socials.facebook}
                className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all"
                target="_blank"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteData.socials.instagram}
                className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-display text-xl mb-6 text-white tracking-wide">
              Nawigacja
            </h4>
            <ul className="space-y-4 text-white/60">
              {siteData.navItems.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={() => handleNavigation(item.id)}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-display text-xl mb-6 text-white tracking-wide">
              Znajdź Nas
            </h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>
                  {siteData.contact.address.street}
                  <br />
                  {siteData.contact.address.zip} {siteData.contact.address.city}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>{siteData.contact.phone}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-1">
            <h4 className="font-display text-xl mb-6 text-white tracking-wide">
              Otwarte
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {siteData.hours.display.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between border-b border-white/10 pb-2 last:border-0"
                >
                  <span>{item.day}</span>
                  <span
                    className={
                      item.hours === "Nieczynne" ? "text-red-400" : "text-white"
                    }
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {siteData.name}. Wszelkie prawa
            zastrzeżone.
          </div>
          <div className="flex justify-center items-end gap-1">
            <p>Strona stworzona przez</p>
            <span
              className="text-sm font-bold text-primary/80 cursor-pointer hover:underline underline-offset-3"
              onClick={navigateToAddigital}
            >
              Addigital
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Polityka Prywatności
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Regulamin
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

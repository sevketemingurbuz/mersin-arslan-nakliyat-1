"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";

const services = [
  { id: '1', title: 'Evden Eve Nakliyat' },
  { id: '2', title: 'Şehir İçi Nakliyat' },
  { id: '3', title: 'Şehir Dışı Nakliyat' },
  { id: '4', title: 'Ofis Taşımacılığı' },
  { id: '5', title: 'Fabrika Taşımacılığı' },
  { id: '6', title: 'Mağaza Taşımacılığı' },
  { id: '7', title: 'Eşya Depolama' },
];

const MyNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleToggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Toggle clicked, current isMenuOpen:', isMenuOpen);
    setIsMenuOpen(prev => !prev);
    setIsDropdownOpen(false);
  };

  const handleToggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Dropdown toggle clicked');
    setIsDropdownOpen(prev => !prev);
  };

  // Close dropdown when clicking outside (Desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (window.innerWidth >= 992) {
          setIsDropdownOpen(false);
        }
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Toggle button'a tıklandıysa, kapatma
      if (target.closest(`.${styles.toggle}`)) {
        return;
      }
      
      // Menu div'in dışında tıklandıysa, kapat
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand} onClick={handleLinkClick}>
          <Image
            src="/logo/goldMain.png"
            alt="Logo"
            width={300}
            height={180}
            className={styles.logo}
            priority
          />
        </Link>
        
        <button 
          className={styles.toggle}
          onClick={handleToggleMenu}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`} ref={menuRef}>
          <div className={styles.navLinks}>
            <Link 
              href="/" 
              className={`${styles.navLink} ${pathname === "/" ? styles.active : ''}`}
              onClick={handleLinkClick}
            >
              Anasayfa
            </Link>
            
            <div className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownActive : ''}`} ref={dropdownRef}>
              <button 
                className={styles.dropdownToggle}
                onClick={handleToggleDropdown}
                type="button"
                aria-expanded={isDropdownOpen}
              >
                Hizmetlerimiz
                <span className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.dropdownIconOpen : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownOpen : ''}`}>
                {services.map((service) => (
                  <Link 
                    key={service.id}
                    href={`/our-services/${service.id}`} 
                    className={styles.dropdownItem} 
                    onClick={handleLinkClick}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/about" 
              className={`${styles.navLink} ${pathname === "/about" ? styles.active : ''}`}
              onClick={handleLinkClick}
            >
              Hakkımızda
            </Link>
            <Link 
              href="/gallery" 
              className={`${styles.navLink} ${pathname === "/gallery" ? styles.active : ''}`}
              onClick={handleLinkClick}
            >
              Galeri
            </Link>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${pathname === "/contact" ? styles.active : ''}`}
              onClick={handleLinkClick}
            >
              İletişim
            </Link>
          </div>
          
          <a 
            href="https://wa.me/905385147597"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            onClick={handleLinkClick}
          >
            Whatsapp İletişim
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
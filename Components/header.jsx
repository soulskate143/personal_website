"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../app/page.module.css";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (!isMenuOpen) {
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <header
      className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}
    >
      <nav className={styles.nav}>
        {/* Branding outside mobile menu (visible on desktop) */}
        <div className={styles.branding}>
          <Link href="/" className={styles.logoLink}>
            <Image
              className={styles.logo}
              src="/mt.png"
              alt="My Portfolio Logo"
              width={120}
              height={100}
              unoptimized
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`${styles.navList} ${
            isMenuOpen ? styles.navOpen : styles.navClosed
          }`}
        >
          {/* Branding inside mobile menu (visible on mobile) */}
          <li className={styles.mobileBranding}>
            <Link
              href="/"
              className={styles.logoLink}
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                className={styles.logo}
                src="/mt.png"
                alt="My Portfolio Logo"
                width={120}
                height={100}
                unoptimized
              />
            </Link>
          </li>

          {/* Menu Items */}
          <li>
            <Link
              href="#hero"
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contacts"
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

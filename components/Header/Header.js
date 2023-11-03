"use client";
import React from "react";
import { Menu as IconMenu } from "react-feather";
import styles from "./Header.module.css";

import useToggle from "@/lib/hooks/use-toggle";

import TextForScreenReaders from "@/components/TextForScreenReaders";
import DrawerMenu from "@/components/DrawerMenu";
import Logo from "@/components/Logo";

function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <header className={styles.container}>
      <Logo />
      <nav className={styles.menu} role="navigation" aria-label="Main menu">
        <button
          aria-expanded={isMenuOpen}
          className={styles.menuButton}
          onClick={() => toggleIsMenuOpen(!isMenuOpen)}
        >
          <IconMenu aria-hidden="true" focusable="false" />
          <TextForScreenReaders>Open menu</TextForScreenReaders>
        </button>
        {isMenuOpen && <DrawerMenu handleDismiss={toggleIsMenuOpen} />}
      </nav>
    </header>
  );
}

export default Header;

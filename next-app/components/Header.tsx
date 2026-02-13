"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <header>
      <nav className="main-nav">
        <Link href="/" className="nav-logo" onClick={closeAll}>
          <Image
            src="/image/logo.jpg"
            alt="Bamboo Village Farm"
            className="nav-logo-img"
            width={48}
            height={48}
          />
          <span className="nav-logo-text">Bamboo Village Farm</span>
        </Link>
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-menu ${menuOpen ? "is-open" : ""}`}>
          <li className={`nav-item nav-dropdown ${openDropdown === "about" ? "is-open" : ""}`}>
            <button
              type="button"
              className="nav-link nav-dropdown-btn"
              aria-haspopup="true"
              aria-expanded={openDropdown === "about"}
              onClick={() => toggleDropdown("about")}
            >
              農園について
            </button>
            <ul className="nav-dropdown-menu">
              <li><Link href="/about" onClick={closeAll}>農園について</Link></li>
              <li><Link href="/philosophy" onClick={closeAll}>私たちの想い</Link></li>
              <li><Link href="/cultivation" onClick={closeAll}>栽培方法</Link></li>
            </ul>
          </li>
          <li className={`nav-item nav-dropdown ${openDropdown === "service" ? "is-open" : ""}`}>
            <button
              type="button"
              className="nav-link nav-dropdown-btn"
              aria-haspopup="true"
              aria-expanded={openDropdown === "service"}
              onClick={() => toggleDropdown("service")}
            >
              活動・サービス
            </button>
            <ul className="nav-dropdown-menu">
              <li><Link href="/sales" onClick={closeAll}>野菜販売</Link></li>
              <li><Link href="/events" onClick={closeAll}>イベント</Link></li>
              <li><Link href="/shops" onClick={closeAll}>取扱店舗</Link></li>
              <li><Link href="/media" onClick={closeAll}>メディア掲載</Link></li>
            </ul>
          </li>
          <li className={`nav-item nav-dropdown ${openDropdown === "contact" ? "is-open" : ""}`}>
            <button
              type="button"
              className="nav-link nav-dropdown-btn"
              aria-haspopup="true"
              aria-expanded={openDropdown === "contact"}
              onClick={() => toggleDropdown("contact")}
            >
              参加・連絡
            </button>
            <ul className="nav-dropdown-menu">
              <li><Link href="/recruit" onClick={closeAll}>採用情報</Link></li>
              <li><Link href="/contact" onClick={closeAll}>お問い合わせ</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

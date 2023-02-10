"use client";
import classNames from "classnames";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useScroll } from "../../hooks";
import { Route, routes } from "../../utils";
import IconHamburgerMenu from "../Icons/IconHamburgerMenu";
export default function Menu() {
  const [isHomepage, setHomepage] = useState<boolean>();
  const [open, setOpen] = useState<boolean>(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll();

  useEffect(() => {
    if (window.location.pathname === "/") {
      setHomepage(true);
    } else {
      setHomepage(false);
    }
  }, []);

  const mobileClass = classNames({
    hidden: !open,
    block: open,
  });

  useEffect(() => {
    if (isHomepage && window.screen.width >= 1024) {
      const opacity = scroll / 1000;
      if (opacity <= 0.5) {
        bgRef.current!.style.cssText += `background-color: rgba(0,0,0, 0)`;
        bgRef.current!.style.cssText = `color: black;`;
      }
      if (opacity > 0.5) {
        bgRef.current!.style.cssText = `color: rgba(0,0,0, ${opacity});`;
      }
      bgRef.current!.style.cssText += `background-color: rgba(241,245,249, ${opacity});`;
    }
  }, [scroll, isHomepage]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full fixed z-50 bg-opacity">
      <div
        className="flex items-center justify-between lg:justify-center p-2 bg-white"
        ref={bgRef}
      >
        <p className="text-2xl p-2 uppercase font-bold lg:hidden">HAVASI</p>
        <IconHamburgerMenu
          onClick={handleClick}
          className="text-5xl p-2 lg:hidden"
        />
        <div className="lg:flex hidden">
          <ul className="flex">
            {routes.map((r) => (
              <li key={r.href}>
                <MenuLink href={r.href} title={r.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={mobileClass + " lg:hidden text-xl text-center"}>
        <ul className="bg-white">
          {routes.map((r) => (
            <li key={r.href} className="text-4xl">
              <MenuLink href={r.href} title={r.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function MenuLink({ href, title }: Route) {
  return (
    <Link
      href={href}
      className="p-2 text-xl uppercase hover:text-zinc-600 transition-colors duration-150"
    >
      {title}
    </Link>
  );
}

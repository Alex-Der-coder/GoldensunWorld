"use client";
import { useEffect } from "react";

// Reproduit les window.open() d'origine pour les liens [data-popup="LxH"]
export default function PopupLinks() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-popup]");
      if (!a) return;
      e.preventDefault();
      const [w, h] = a.dataset.popup!.split("x");
      window.open(a.href, a.target || "_blank", `toolbar=0,location=0,status=0,scrollbars=1,resizable=1,menuBar=0,width=${w},height=${h}`);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

import { PackageOpen } from "lucide-react";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="brand-mark" aria-label="OffersBox home">
      <span className="brand-mark__icon"><PackageOpen aria-hidden="true" /></span>
      <span className={light ? "text-hero-foreground" : "text-foreground"}>OffersBox</span>
    </a>
  );
}
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";

interface NavbarProps {
  cartUrl?: string;
}

const Navbar = ({ cartUrl = "#" }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <nav
        className={`mx-auto max-w-5xl transition-all duration-300 rounded-full px-4 lg:px-6 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border border-border/50"
            : "bg-white/80 backdrop-blur-sm shadow-md border border-border/30"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo placeholder */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground hidden sm:block">
              LeadsPro
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#como-funciona"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Cómo funciona
            </a>
            <a
              href="#planes"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Planes
            </a>
            <a
              href="#glosario"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Glosario
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="gap-2 font-semibold rounded-full px-5 h-9 text-sm">
              <a href={cartUrl}>
                <ShoppingCart className="w-4 h-4" />
                Ir al carrito
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mx-auto max-w-5xl mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-border/50 animate-fade-in">
          <div className="flex flex-col gap-2 p-4">
            <a
              href="#como-funciona"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cómo funciona
            </a>
            <a
              href="#planes"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Planes
            </a>
            <a
              href="#glosario"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Glosario
            </a>
            <Button asChild className="gap-2 font-semibold mt-2 rounded-full">
              <a href={cartUrl}>
                <ShoppingCart className="w-4 h-4" />
                Ir al carrito
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
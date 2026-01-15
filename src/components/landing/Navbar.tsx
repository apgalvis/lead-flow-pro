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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo placeholder */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">L</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground hidden sm:block">
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
            <Button asChild className="gap-2 font-semibold">
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
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="#como-funciona"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cómo funciona
              </a>
              <a
                href="#planes"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Planes
              </a>
              <a
                href="#glosario"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Glosario
              </a>
              <Button asChild className="gap-2 font-semibold mt-2">
                <a href={cartUrl}>
                  <ShoppingCart className="w-4 h-4" />
                  Ir al carrito
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
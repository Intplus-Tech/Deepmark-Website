import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-dark.svg";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Service", path: "/service" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const SCROLL_THRESHOLD = 80; // px - change this to control when the header becomes dark

    const onScroll = () => {
      const shouldBeScrolled = window.scrollY > SCROLL_THRESHOLD;
      setIsScrolled(shouldBeScrolled);
    };

    // run once to set initial state (in case page loads scrolled)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = `fixed border-b top-0 left-0 right-0 z-50 transition-colors duration-300 ${
    isScrolled
      ? // ? "bg-[hsl(var(--header-bg))] backdrop-blur-md shadow-md"
        "bg-white"
      : "bg-white"
  }`;

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Deepmark Insight Data"
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground font-medium  underline underline-offset-8"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-white px-6"
            >
              Talk to Us
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="default"
                className="md:hidden bg-primary hover:bg-primary/90 text-white"
                size="sm"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-[hsl(var(--header-bg))] border-white/10"
            >
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base transition-colors ${
                      location.pathname === item.path
                        ? "text-white font-medium"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-white w-full mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Talk to Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

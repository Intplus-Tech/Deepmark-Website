import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollLink = ({ to, children, className }: ScrollLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const [path, hash] = to.split("#");
    navigate(path);

    // wait for route change, then scroll
    setTimeout(() => {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100); // give time for render
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

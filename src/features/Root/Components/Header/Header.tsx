import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "@tanstack/react-router";

const Header = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = React.useState<string>();

  useEffect(() => {
    if (document.getElementById("discover_page")) {
      setCurrentPage("discover");
    } else if (document.getElementById("liked_page")) {
      setCurrentPage("liked");
    } else if (document.getElementById("profile_page")) {
      setCurrentPage("profile");
    } else if (document.getElementById("cart_page")) {
      setCurrentPage("cart");
    }
  }, []);

  const handleDiscover = () => {
    switch (currentPage) {
      case "discover":
        return;
      case "liked":
        navigate({ from: "/liked", to: "/discover" });
        setCurrentPage("discover");
        break;
      case "profile":
        navigate({ from: "/profile", to: "/discover" });
        setCurrentPage("discover");
        break;
      case "cart":
        navigate({ from: "/cart", to: "/discover" });
        setCurrentPage("discover");
        break;
    }
  };

  const handleLiked = () => {
    switch (currentPage) {
      case "liked":
        return;
      case "discover":
        navigate({ from: "/discover", to: "/liked" });
        setCurrentPage("liked");
        break;
      case "profile":
        navigate({ from: "/profile", to: "/liked" });
        setCurrentPage("liked");
        break;
      case "cart":
        navigate({ from: "/cart", to: "/discover" });
        setCurrentPage("discover");
        break;
    }
  };
  const handleProfile = () => {
    switch (currentPage) {
      case "profile":
        return;
      case "liked":
        navigate({ from: "/liked", to: "/profile" });
        setCurrentPage("profile");
        break;
      case "discover":
        navigate({ from: "/discover", to: "/profile" });
        setCurrentPage("profile");
        break;
      case "cart":
        navigate({ from: "/cart", to: "/profile" });
        setCurrentPage("profile");
        break;
    }
  };
  const handleCart = () => {
    switch (currentPage) {
      case "cart":
        return;
      case "liked":
        navigate({ from: "/liked", to: "/cart" });
        setCurrentPage("cart");
        break;
      case "discover":
        navigate({ from: "/discover", to: "/cart" });
        setCurrentPage("cart");
        break;
      case "profile":
        navigate({ from: "/profile", to: "/cart" });
        setCurrentPage("cart");
        break;
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-16 bg-stone-200 flex justify-center items-center gap-5 z-10">
      <Button variant="link" onClick={handleDiscover}>
        Discover
      </Button>
      <Button variant="link" onClick={handleLiked}>
        Liked
      </Button>
      <div className="absolute top-0 bottom-0 right-10 flex items-center gap-5">
        <button onClick={handleCart}>
          <ShoppingCartIcon fontSize="medium" />
        </button>
        <button onClick={handleProfile}>
          <PersonIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default Header;

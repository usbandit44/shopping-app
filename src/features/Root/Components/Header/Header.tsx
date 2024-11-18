import { Button } from "@/components/ui/button";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
    
  return (
    <div className="fixed top-0 left-0 w-screen h-16 bg-stone-200 flex justify-center items-center gap-5">
      <Button variant="link">Discover</Button>
      <Button variant="link">Liked</Button>
      <div className="absolute top-0 bottom-0 right-10 flex items-center gap-5">
        <button>
          <ShoppingCartIcon fontSize="medium" />
        </button>
        <button>
          <PersonIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default Header;

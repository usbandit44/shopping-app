import { Button } from "@/components/ui/button";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "@tanstack/react-router";
import React from "react";

const SellerHeader = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = React.useState<string>();

  React.useEffect(() => {
    if (document.getElementById("shop_page")) {
      setCurrentPage("shop");
    } else if (document.getElementById("add_page")) {
      setCurrentPage("add");
    } else if (document.getElementById("seller_profile_page")) {
      setCurrentPage("seller_profile");
    }
  }, []);

  const handleShop = () => {
    switch (currentPage) {
      case "shop":
        return;
      case "add":
        navigate({ from: "/add", to: "/shop" });
        setCurrentPage("shop");
        break;
      case "seller_profile":
        navigate({ from: "/sellerprofile", to: "/shop" });
        setCurrentPage("shop");
        break;
    }
  };
  const handleAdd = () => {
    switch (currentPage) {
      case "add":
        return;
      case "shop":
        navigate({ from: "/shop", to: "/add" });
        setCurrentPage("add");
        break;
      case "seller_profile":
        navigate({ from: "/sellerprofile", to: "/add" });
        setCurrentPage("add");
        break;
    }
  };
  const handleProfile = () => {
    switch (currentPage) {
      case "seller_profile":
        return;
      case "shop":
        navigate({ from: "/shop", to: "/sellerprofile" });
        setCurrentPage("seller_profile");
        break;
      case "add":
        navigate({ from: "/add", to: "/sellerprofile" });
        setCurrentPage("seller_profile");
        break;
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-16 bg-stone-200 flex justify-center items-center gap-5 z-10">
      <Button variant="link" onClick={handleShop}>
        Shop
      </Button>
      <Button variant="link" onClick={handleAdd}>
        Add
      </Button>
      <div className="absolute top-0 bottom-0 right-10 flex items-center gap-5">
        <button onClick={handleProfile}>
          <PersonIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default SellerHeader;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { it } from "node:test";
import React from "react";

const ClothingItemDiscover = (props: { item_id: string }) => {
  interface Item {
    cl_name: string;
    cl_image: string | null;
    cl_price: string;
    cl_size: string;
    cl_status: string;
    // Add other properties of the item here
  }

  const [item, setItem] = React.useState<Item | null>(null);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:3000/specifiedItemForSale",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: props.item_id,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setItem(result.item);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    }
    fetchData();
  }, []);
  var element = document.getElementById(props.item_id);
  if (element) {
    element.style.cursor = "pointer";
    element.onclick = function () {
      console.log("Item Clicked");
    };
  }
  return (
    <Card
      className="w-[250px] h-[350px] flex flex-col items-end justify-between rounded-md"
      id={props.item_id}
      style={{
        backgroundImage: `url(${item?.cl_image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-lg font-semibold flex justify-center w-[250px]">
        {item?.cl_status}
      </div>
      <div className="w-full p-3 flex flex-row justify-between ">
        <div className="flex flex-col gap-2">
          <small className="text-sm font-medium leading-none w-full">
            {item?.cl_name}
          </small>
          <small className="text-sm font-medium leading-none w-full">
            Size: {item?.cl_size}
          </small>
        </div>

        <small className="text-sm font-medium leading-none ">
          Price: {item?.cl_price}
        </small>
      </div>
    </Card>
  );
};

export default ClothingItemDiscover;

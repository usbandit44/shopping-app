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
import React from "react";

const ClothingItemDiscover = (props: { item_id: string }) => {
  var element = document.getElementById(props.item_id);
  if (element) {
    element.style.cursor = "pointer";
    element.onclick = function () {
      console.log("Item Clicked");
    };
  }
  return (
    <Card
      className="w-[250px] h-[350px] flex items-end justify-between bg-cyan-100 rounded-md"
      id={props.item_id}
    >
      <div className="w-full m-3 flex flex-row justify-between ">
        <div className="flex flex-col gap-2">
          <small className="text-sm font-medium leading-none w-full">
            Item Name
          </small>
          <small className="text-sm font-medium leading-none w-full">
            Size: M
          </small>
        </div>

        <small className="text-sm font-medium leading-none ">Price: $100</small>
      </div>
    </Card>
  );
};

export default ClothingItemDiscover;

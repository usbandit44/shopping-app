import React from "react";
import { item_form } from "@/features/Add/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormDescription,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddItemForm = () => {
  const form = useForm<z.infer<typeof item_form>>({
    resolver: zodResolver(item_form),
    defaultValues: {
      name: "",
      desc: "",
      size: "",
      price: "",
      image: "",
    },
  });

  function onSubmit(values: z.infer<typeof item_form>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Card className="h-fit w-[60vw] p-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col"
        >
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Add Item
          </h2>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Shirt" {...field} />
                <FormDescription>This is your item's name.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <Input placeholder="Sample description" {...field} />
                <FormDescription>
                  This is your item's description.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Size</FormLabel>
                <Input placeholder="L" {...field} />
                <FormDescription>This is your item's size.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <Input placeholder="29.99" {...field} />
                <FormDescription>This is your item's price.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Link</FormLabel>
                <Input placeholder="www.samplelink.com" {...field} />
                <FormDescription>
                  This is the link to your item's image.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button className="w-fit self-end" type="submit">
            Add
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default AddItemForm;

import { Card } from "@/components/ui/card";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profile_form } from "@/features/Profile/schemas/schemas";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProfileForm = () => {
  const form = useForm<z.infer<typeof profile_form>>({
    resolver: zodResolver(profile_form),
    defaultValues: {
      name: "Temp",
      username: "Temp",
      password: "Temp",
      birthdate: "Temp",
      number: "Temp",
      address: "Temp",
    },
  });

  function onSubmit(values: z.infer<typeof profile_form>) {
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
            Profile
          </h2>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input placeholder="shadcn" {...field} />
                <FormDescription>This is your full name.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <Input placeholder="shadcn" {...field} />
                <FormDescription>
                  This is your public display name.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <Input placeholder="shadcn" {...field} />
                <FormDescription>
                  This is your password to sign in.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birthdate</FormLabel>
                <Input placeholder="shadcn" {...field} />
                <FormDescription>
                  This is your birthdate for age verification.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder="shadcn" {...field} />
                <FormDescription>
                  This is your phone number for verification.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <Input placeholder="shadcn" {...field} />
                <FormDescription>
                  This is your address for shipping.
                </FormDescription>
              </FormItem>
            )}
          />

          <Button className="w-fit self-end" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default ProfileForm;

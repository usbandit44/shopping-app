import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signup_form } from "@/features/Auth/scheamas/scheamas";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";

const SignUp = () => {
  const navigate = useNavigate({ from: "/signup" });

  function handle_signin_click() {
    navigate({ to: "/" });
  }

  const form = useForm<z.infer<typeof signup_form>>({
    resolver: zodResolver(signup_form),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      birthdate: "",
      number: "",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof signup_form>) {
    console.log(values);
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-3xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-12 text-base"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-12 text-base"
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-12 text-base"
                      placeholder="Password"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthdate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-12 text-base"
                      placeholder="Birthdate"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-12 text-base"
                      placeholder="Phone Number"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-12 text-base"
                      placeholder="Address"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                variant="link"
                className="px-0"
                onClick={handle_signin_click}
              >
                Sign In Here
              </Button>
              <Button type="submit">Sign Up</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignUp;

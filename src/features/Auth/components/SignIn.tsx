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
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signin_form } from "@/features/Auth/scheamas/scheamas";
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

const SignIn = () => {
  const navigate = useNavigate({ from: "/" });

  function handle_signup_click() {
    navigate({ to: "/signup" });
  }
  const form = useForm<z.infer<typeof signin_form>>({
    resolver: zodResolver(signin_form),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signin_form>) {
    console.log(values);
    navigate({ to: "/discover" });
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-3xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
            <div className="flex justify-between">
              <Button
                variant="link"
                className="px-0"
                onClick={handle_signup_click}
              >
                Create Account
              </Button>
              <Button type="submit">Sign In</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignIn;

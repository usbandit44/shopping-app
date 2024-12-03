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
  interface User {
    c_name: string;
    c_username: string;
    c_password: string;
    c_birthday: string;
    c_number: string;
    c_address: string;
  }
  interface Seller {
    s_name: string;
    s_username: string;
    s_password: string;
    s_birthday: string;
    s_number: string;
    s_address: string;
  }
  const [user, setUser] = React.useState<User | null>(null);
  const [seller, setSeller] = React.useState<Seller | null>(null);

  const form = useForm<z.infer<typeof profile_form>>({
    resolver: zodResolver(profile_form),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      birthdate: "",
      number: "",
      address: "",
    },
  });

  const { reset } = form;

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: localStorage.getItem("id"),
            type: localStorage.getItem("type"),
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result.user);
        if (localStorage.getItem("type") === "buyer") {
          setUser(result.user);
          reset({
            name: result.user.c_name,
            username: result.user.c_username,
            password: result.user.c_password,
            birthdate: result.user.c_birthday,
            number: result.user.c_number,
            address: result.user.c_address,
          });
        } else {
          setSeller(result.user);
          console;
          reset({
            name: result.user.s_name,
            username: result.user.s_username,
            password: result.user.s_password,
            birthdate: result.user.s_birthday,
            number: result.user.s_number,
            address: result.user.s_address,
          });
        }
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

  async function onSubmit(values: z.infer<typeof profile_form>) {
    console.log(values);
    if (localStorage.getItem("type") === "buyer") {
      try {
        const response = await fetch("http://localhost:3000/updateProfile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: localStorage.getItem("id"),
            type: localStorage.getItem("type"),
            name: values.name ? values.name : user?.c_name,
            username: values.username ? values.username : user?.c_username,
            password: values.password ? values.password : user?.c_password,
            birthday: values.birthdate ? values.birthdate : user?.c_birthday,
            number: values.number ? values.number : user?.c_number,
            address: values.address ? values.address : user?.c_address,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    } else if (localStorage.getItem("type") === "seller") {
      try {
        const response = await fetch("http://localhost:3000/updateProfile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: localStorage.getItem("id"),
            type: localStorage.getItem("type"),
            name: values.name ? values.name : seller?.s_name,
            username: values.username ? values.username : seller?.s_username,
            password: values.password ? values.password : seller?.s_password,
            birthday: values.birthdate ? values.birthdate : seller?.s_birthday,
            number: values.number ? values.number : seller?.s_number,
            address: values.address ? values.address : seller?.s_address,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    }
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
                <Input
                  placeholder={user ? user.c_name : seller?.s_name}
                  {...field}
                />
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
                <Input
                  placeholder={user ? user.c_username : seller?.s_username}
                  {...field}
                />
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
                <Input
                  placeholder={user ? user.c_password : seller?.s_password}
                  {...field}
                />
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
                <Input
                  placeholder={user ? user.c_birthday : seller?.s_birthday}
                  {...field}
                />
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
                <Input
                  placeholder={user ? user.c_number : seller?.s_number}
                  {...field}
                />
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
                <Input
                  placeholder={user ? user.c_address : seller?.s_address}
                  {...field}
                />
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  userId: z.string().min(1, {
    message: "Can't be empty.",
  }),
  password: z.string().min(1, {
    message: "Can't be empty",
  }),
  companyId: z.string().min(1, {
    message: "Can't be empty",
  }),
});

const Login = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password: "",
      companyId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/dashboard");
  }

  return (
    <section className="bg-[#FAFAFA] dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="mr-2 w-[140px] md:max-w-[150px]"
            src="/minehaul-logo.png"
            alt="logo"
          />
        </a>
        <Card className="w-full md:max-w-md">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                method="POST"
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="companyId"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel htmlFor="companyId">Company ID</FormLabel>
                      <FormControl>
                        <Input
                          id="companyId"
                          placeholder="Enter company id"
                          {...field}
                          error={!!fieldState.error}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userId"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel htmlFor="userId">User ID</FormLabel>
                      <FormControl>
                        <Input
                          id="userId"
                          placeholder="Enter user id"
                          error={!!fieldState.error}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field, fieldState }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormControl>
                          <Input
                            id="password"
                            placeholder="Enter password"
                            type="password"
                            error={!!fieldState.error}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button type="submit" className="w-full font-semibold">
                  Sign In
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Login;

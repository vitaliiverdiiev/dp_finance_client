"use client";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { useShoppingListForm } from "../model/use-shopping-list-form";

export const ShoppingListForm = () => {
  const { form, onSubmit, inputRef } = useShoppingListForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto"
      >
        <div className="grid gap-4 grid-cols-[8fr_4fr]">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Name</FormLabel>
                <FormControl ref={inputRef}>
                  <Input
                    placeholder="What do you need to buy..?"
                    type="text"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Pick the amount you need"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
};

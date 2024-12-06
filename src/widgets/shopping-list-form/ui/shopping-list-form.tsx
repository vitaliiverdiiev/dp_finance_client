'use client';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/shared/ui';
import { useShoppingListForm } from '../model/use-shopping-list-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import styles from '../styles/index.module.scss';

export const ShoppingListForm = () => {
  const { form, onSubmit, inputRef } = useShoppingListForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto"
      >
        <div className={styles.fields}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
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
         
          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Unit</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-[60px]">
                      <SelectValue placeholder="pc" {...field} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pc">pc</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Add</Button>
        </div>
        
      </form>
    </Form>
  );
};

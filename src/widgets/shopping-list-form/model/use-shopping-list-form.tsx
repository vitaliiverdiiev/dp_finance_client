import * as z from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@apollo/client";
import {
  CREATE_SHOPPING_LIST_ITEM,
  GET_SHOPPING_LIST_ITEMS,
} from "@/pages/shopping-list/model/schemas/shopping-list.gql";
import { useRef } from "react";

export const formSchema = z.object({
  name: z.string(),
  amount: z.preprocess(
    (value) => (value !== "" ? Number(value) : undefined),
    z.number().min(0, "Amount must be at least 0")
  ),
});

export const useShoppingListForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [createShoppingList] = useMutation(CREATE_SHOPPING_LIST_ITEM);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);

      const { data } = await createShoppingList({
        variables: { input: values },
        refetchQueries: [{ query: GET_SHOPPING_LIST_ITEMS }],
        onCompleted: () => {
          toast.success("Item added to the shopping list");
          form.reset();
          if (inputRef.current) {
            inputRef.current.focus();
          }
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return { form, onSubmit, inputRef };
};

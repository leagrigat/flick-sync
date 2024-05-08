"use client";

import { createGroup } from "@/lib/data-access/group";
import { z } from "zod";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { P } from "@/components/ui/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const CreateGroupFormSchema = z.object({
  name: z.string().min(1, { message: "Please enter a group name" }),
});

export type CreateGroupFormType = z.infer<typeof CreateGroupFormSchema>;

export default function CreateGroupForm() {
  const router = useRouter();
  const { handleSubmit, control } = useForm<CreateGroupFormType>({
    resolver: zodResolver(CreateGroupFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<CreateGroupFormType> = async (values) => {
    try {
      const { id, name } = await createGroup(values);
      router.push(`groups/${id}`);
      toast.success(`Your group ${name} has been successfully created`);
    } catch (error) {
      console.error("Failed to create group", error);
      toast.error("Unable to create group. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-secondary-light rounded-lg shadow-lg">
      <P className="text-lg font-semibold text-primary">Start a new group:</P>
      <div className="flex w-full max-w-md items-center space-x-2">
        <Form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter group name"
                      className="flex-1 p-2 border-2 border-accent-light outline-none rounded"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded shadow"
            >
              Create
            </Button>
          </form>
        </Form>
        {/* <Input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Enter group name"
          className="flex-1 p-2 border-2 border-accent-light outline-none rounded"
        />
        <Button
          onClick={handleGroupCreation}
          className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded shadow"
        >
          Create
        </Button> */}
      </div>
    </div>
  );
}

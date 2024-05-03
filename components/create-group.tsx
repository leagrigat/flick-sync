"use client";

import { createGroup } from "@/lib/data-access/group";
import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { P } from "@/components/ui/typography";

export default function CreateGroup() {
  const router = useRouter();
  const [input, setInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleGroupCreation = async () => {
    try {
      const { id, name } = await createGroup({ name: input });
      setInput("");
      console.log(id);
      router.push(`groups/${id}`);
      toast.success(`Your group ${name} has been successfully created`);
    } catch (error) {
      console.error("Failed to create group", error);
      toast.error("Unable to create group. Please try again.");
    }
  };

  // Button validation - don't work when input field empty

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-secondary-light rounded-lg shadow-lg">
      <P className="text-lg font-semibold text-primary">Start a new group:</P>
      <div className="flex w-full max-w-md items-center space-x-2">
        <Input
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
        </Button>
      </div>
    </div>
  );
}

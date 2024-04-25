'use client'

import { createGroup } from '@/lib/data-access/group';
import React, { ChangeEvent, useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateGroup() {
    const [input, setInput] = useState("");

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleAdd = async () => {
        createGroup({name: input});
        setInput("");
    }

    // Button validation - don't work when input field empty

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" value={input} onChange={handleInput} placeholder="Please enter a group name" />
      <Button onClick={handleAdd}>Create group</Button>
    </div>
  )
}
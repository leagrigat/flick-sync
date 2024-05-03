'use client'

import { createGroup } from '@/lib/data-access/group';
import React, { ChangeEvent, useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import {toast} from 'react-toastify';

export default function CreateGroup() {
    const router = useRouter();  
    const [input, setInput] = useState("");

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleGroupCreation = async () => {
      try {
        const {id} = await createGroup({name: input}); // i think we have a name and id issue here - mixed up somehow?
        setInput("");
        console.log(id)
        router.push(`groups/${id}`)
        toast.success(`Your group ${id} has been successfully created`)
      }
      catch(error) {
        console.error("Failed to create group", error);
        toast.error("Unable to create group. Please try again.")
      }
    }

    // Button validation - don't work when input field empty

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" value={input} onChange={handleInput} placeholder="Please enter a group name" />
      <Button onClick={handleGroupCreation}>Create group</Button>
    </div>
  )
}
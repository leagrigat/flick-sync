'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewGroup, createGroup } from "@/lib/data-access/group";
import { FC, useState } from "react";




export default function Home() {
  
  const AddGroup = () => {
    const [input, setInput] = useState("");
  
  
  const handleAdd = async () => {
      createGroup(input);
      setInput("")
    }
  }

  return (
    <>
    <h1>Welcome to FlickSync 🎞️🍿</h1>
    <div className="w-screen h-screen flex justify-center">
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" value="{input}" placeholder="Please enter a group name" />
      <Button onClick={handleAdd}>Create group</Button>
    </div>
    </div>
    </>
  )
}
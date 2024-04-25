'use client'

import CreateGroup from "@/components/create-group"

export default function Home() {

  return (
    <>
    <h1>Welcome to FlickSync 🎞️🍿</h1>
    <div className="w-screen h-screen flex justify-center">
    <CreateGroup/>
    </div>
    </>
  )
}
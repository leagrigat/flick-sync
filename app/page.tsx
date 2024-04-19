import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export default function Home() {
  return (
    <>
    <h1>Welcome to FlickSync 🎞️🍿</h1>
    <div className="w-screen h-screen flex justify-center">
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="groupName" placeholder="Please enter a group name" />
      <Button type="submit">Save</Button>
    </div>
    </div>
    </>
  )
}
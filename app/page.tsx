import CreateGroup from "@/components/create-group"

export default function Home() {

  return (
    <>
    <div className="flex flex-col">
    <h1 className="bg-secondary">Welcome to FlickSync 🎞️🍿</h1>
    <div className="w-screen h-screen flex justify-center">
    <CreateGroup/>
    </div>
    </div>
    </>
  )
}
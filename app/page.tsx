import CreateGroup from "@/components/create-group";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center py-16 gap-8">
        <h1 className="bg-secondary text-slate-900 text-6xl rounded-2xl p-2 font-semibold">Welcome to FlickSync 🎬🍿</h1>
        <p className="text-center text-l text-gray-700 leading-relaxed max-w-2xl px-4 font-medium">
          Your ultimate movie night companion. Create groups, announce
          screenings, track watched films, and share reviews—all in one place.
          Connect and enjoy cinema with friends like never before!
        </p>
        <CreateGroup />
      </div>
    </>
  );
}

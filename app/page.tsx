import CreateGroup from "@/components/create-group";
import { H1, P } from "@/components/ui/typography";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center py-16 gap-8">
        <H1>Welcome to FlickSync 🎬🍿</H1>
        <P className="font-light max-w-2xl text-center">
          Your ultimate movie night companion. Create groups, announce
          screenings, track watched films, and share reviews — all in one place.
          Connect and enjoy cinema with friends like never before!
        </P>
        <CreateGroup />
      </div>
      {/*  <div className="w-32 h-32 absolute top-0 left-24 animation"></div>
      <div className="w-8 h-8 absolute top-0 left-48 animation"></div>
      <div className="w-24 h-24 absolute top-0 left-60 animation"></div>
      <div className="w-32 h-32 absolute top-0 left-96 animation"></div> */}
    </>
  );
}

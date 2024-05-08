import { cn } from "@/lib/utils";

interface AddMovieSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AddingMovieSidebar({
  className,
}: AddMovieSidebarProps) {
  // do we need to fetch movies here as well?
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            ADD A FILM
          </h2>
          {/* Form
          Combobox
          Date Picker
          Submit Button */}
        </div>
      </div>
    </div>
  );
}

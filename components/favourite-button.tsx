"use client";

import { Star } from "lucide-react";
import { useFavourites } from "@/hooks/use-favourites";
import { cn } from "@/lib/utils";

interface FavouriteButtonProps {
  id: string;
  name: string;
  className?: string;
}

export function FavouriteButton({ id, name, className }: FavouriteButtonProps) {
  const { isFavourite, toggleFavourite } = useFavourites();
  const favourited = isFavourite(id);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavourite(id);
      }}
      aria-pressed={favourited}
      aria-label={favourited ? `Remove ${name} from favourites` : `Favourite ${name}`}
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-150",
        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
        favourited
          ? "text-amber-500 hover:bg-amber-500/10"
          : "text-muted-foreground hover:text-foreground hover:bg-accent/60",
        className,
      )}
    >
      <Star size={20} className={cn(favourited && "fill-amber-500")} strokeWidth={1.75} />
    </button>
  );
}

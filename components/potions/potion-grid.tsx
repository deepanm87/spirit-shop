import { PotionCard } from "./potion-card"
import { PotionGridProps } from "@/types/types"

export function PotionGrid({ potions }: PotionGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {potions.map((potion, index) => (
        <PotionCard {...potion} key={`${potion.name}-${index}`} />
      ))}
    </div>
  );
}
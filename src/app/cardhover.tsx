import { HoverEffect } from "../components/ui/card-hover-effect";




export function CardHoverEffectDemo({ items,
  className}: {
    items: {
      title: string;
      description: string;
      link: string;
    }[];
    className?: string;
  }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={items} />
    </div>
  );
}


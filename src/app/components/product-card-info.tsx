import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardInfoProps {
  name: string;
  price: number | string;
  image: string;
  className?: string;
  size?: "sm" | "lg";
}

export const ProductCardInfo: React.FC<ProductCardInfoProps> = ({
  name,
  price,
  image,
  className,
  size,
}) => {
  return (
    <Link
      className={cn(
        "relative flex justify-center overflow-hidden p-1 pl-5 rounded-xl items-center bg-background/50",
        className
      )}
      href={`/${name.toLowerCase().replace(/\s+/g, "-")}`}
      title={name}
      aria-label={`Ver detalhes do produto ${name}`}
    >
      <div>
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src={`/${image}`}
          alt={""}
          width={920}
          height={920}
          quality={100}
        />
      </div>

      <div
        className={cn(
          "absolute border-2 border-ring rounded-xl p-1 flex gap-2",
          {
            "absolute bottom-25": size === "sm",
            "absolute bottom-72": size === "lg",
          }
        )}
      >
        <span className="text-lg truncate font-semibold">{name}</span>
        <span className="whitespace-nowrap text-xl font-bold rounded-full px-2 bg-violet-600 border-transparent">
          {typeof price === "number" ? `R$ ${price}` : price}
        </span>
      </div>
    </Link>
  );
};

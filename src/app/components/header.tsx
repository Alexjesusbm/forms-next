"use client";

import React from "react";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href="/" className="text-2xl">
            devstore
          </Link>
          <form className="flex items-center rounded-full px-5 py-3 gap-3 bg-input">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              className="text-muted-foreground outline-none"
              placeholder="Buscar produtos..."
            />
          </form>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm">Cart (0)</span>
          </div>
          <div className="w-px h-4 bg-input" />
          <Link href={"/"} className="flex items-center gap-2">
            <span className="text-sm">Account</span>
            <Image src="/vercel.svg" width={24} height={24} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

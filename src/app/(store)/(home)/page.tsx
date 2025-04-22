import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="grid grid-cols-9 grid-rows-6 gap-5 py-4">
      <Link
        href={"/"}
        className=" group relative col-span-6 row-span-6 flex justify-center bg-muted rounded-lg overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src={"/moletom-never-stop-learning.png"}
          alt={""}
          width={920}
          height={920}
          quality={100}
        />
        <div className="flex absolute bottom-28 gap-2 max-w-2xs border-2 border-ring p-1 pl-5 rounded-xl items-center bg-background/50">
          <span className="text-lg truncate font-semibold">
            Moletom Never Stop Learning
          </span>
          <span className="whitespace-nowrap text-xl font-bold rounded-full px-2 bg-violet-600 border-transparent">
            R$ 20
          </span>
        </div>
      </Link>
      <Link
        href={"/"}
        className="group relative col-span-3 row-span-3 flex justify-center bg-muted rounded-lg overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src={"/moletom-ai-side.png"}
          alt={""}
          width={460}
          height={460}
          quality={100}
        />
        <div className="flex absolute bottom-14 gap-2 max-w-2xs border-2 border-ring p-1 pl-5 rounded-xl items-center bg-background/50">
          <span className="text-lg truncate font-semibold">
            Moletom AI Side
          </span>
          <span className=" whitespace-nowrap text-xl font-bold rounded-full px-2 bg-violet-600 border-transparent">
            R$ 20
          </span>
        </div>
      </Link>

      <Link
        href={"/"}
        className="group relative col-span-3 row-span-3 flex justify-center bg-muted rounded-lg overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src={"/camiseta-dowhile-2022.png"}
          alt={""}
          width={460}
          height={460}
          quality={100}
        />
        <div className="flex absolute bottom-14 gap-2 max-w-2xs border-2 border-ring p-1 pl-5 rounded-xl items-center bg-background/50">
          <span className="text-lg truncate font-semibold">
            Camiseta Expand Your Mind
          </span>
          <span className="whitespace-nowrap text-xl font-bold rounded-full px-2 bg-violet-600 border-transparent">
            R$ 20
          </span>
        </div>
      </Link>
    </div>
  );
}

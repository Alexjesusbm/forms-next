import { Header } from "@/app/components/header";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
   <div><Header /></div>
  );
}

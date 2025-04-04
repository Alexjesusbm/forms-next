'use client';

import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Card>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
        <CardFooter>Não Possui conta? <Link>Cadastre-se</Link></CardFooter>
      </Card> <div>aaaaaaaaaaaaaaaaaaaaa</div>
    </div>
  );
}
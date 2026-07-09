"use client"

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { products } from "./data/booksData";
import Link from "next/link";

export default function Home() {
  const router = useRouter()
  const test = ()=>{
    let success = true;
    if(success){
      router.push("/")
    }else{
      router.push("/hoome")
    }
  }
  

  return (
    <>
      <h1>this is home page </h1>
     
      {
        products.map((p) =>
          <Button
            key={p.id}
            onClick={() =>
              router.push(`/about/${p.author}`)
            }
          >{p.bookName}</Button>
        )
      }
    </>
  );
}

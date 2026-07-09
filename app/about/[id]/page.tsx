"use client"

import { Button } from "@/components/ui/Button";
import { useRouter, useParams, notFound } from "next/navigation";
import { products } from "@/app/data/booksData";

export default function Home() {

    const { id } = useParams<{ id: string }>()
    const router = useRouter()

    const decodeId = decodeURIComponent(id)

    const product = products.find((p) =>
        p.id === decodeId || p.author === decodeId || p.bookName === decodeId
    );

    if (!product) {
        notFound()
    }

    return (
        <>
            <h1><strong>{product.bookName}</strong> is book by <strong>{product.author}</strong></h1>
            <Button
                onClick={() =>
                    router.push("/")
                }
            >Go to Home Button</Button>
        </>
    );
}

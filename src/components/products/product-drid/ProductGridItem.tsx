'use client'

import { Product } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Props {
  product: Product;
}

function ProductGridItem({ product }: Props) {


  const [first, setImage] = useState(product.images[0])

  
  return (
    <div className="rounded-md overflow-hidden fade-in ">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${first}`}
          alt={product.title}
          height={20}
          className="w-full object-cover rounded-md"
          width={500}
          onMouseEnter={()=> setImage(product.images[1])}
          onMouseLeave={()=> setImage(product.images[0])}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" href={`/product/${product.slug}`}> {product.title}</Link>

        <span className="font-bold"> $ {product.price}</span>
      </div>
    </div>
  );
}

export default ProductGridItem;

"use client";
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product, priority = false }) => {
  return (
    <Link href={`/product/${product.id}`} className="group block w-full mb-10" dir="rtl">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image_url}
          alt={product.title}
          fill
          priority={priority}
         className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="text-right space-y-1">
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-900 font-light group-hover:text-[#cbad73] transition-colors">
          {product.title}
        </h3>
        <p className="text-[11px] font-serif italic text-gray-400">
          ₪{Number(product.price).toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
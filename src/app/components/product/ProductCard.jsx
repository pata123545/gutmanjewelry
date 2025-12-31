"use client";
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product, priority = false }) => {
  return (
    <Link href={`/product/${product.id}`} className="group block w-full mb-10" dir="rtl">
      <div className="relative aspect-[4/5] w-full overflow-hidden mb-6">
        <Image
          src={product.image_url}
          alt={product.title}
          fill
          priority={priority}
          className="object-contain transition-transform duration-[1.8s] ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105"
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
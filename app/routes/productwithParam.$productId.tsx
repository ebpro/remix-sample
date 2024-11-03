// File: app/routes/ProductWithParam.tsx
import { useParams } from "@remix-run/react";

export default function Product() {
  const { productId } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Product ID: {productId}</h1>
    </div>
  );
}
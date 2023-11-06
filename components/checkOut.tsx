"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";

export default function CheckOut() {
  const { addItem, handleCartClick } = useShoppingCart();
  return <Button variant="secondary">Check Out Now</Button>;
}

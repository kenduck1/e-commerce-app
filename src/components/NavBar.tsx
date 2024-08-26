'use client';

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Badge,
} from "@nextui-org/react";
import { LocalMall as BagIcon } from "@mui/icons-material";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const { cartCount } = useCart();

  return (
    <Navbar isBordered>
      <NavbarBrand as={Link} href="/" className="cursor-pointer">
        <span className="text-xl font-bold">Not Amazon</span>
      </NavbarBrand>
      <NavbarContent justify="flex-end">
        <NavbarItem>
          {cartCount > 0 && (
            <Badge
              content={cartCount.toString()}
              color="danger"
            >
              <div className="flex justify-center items-center">
                <BagIcon fontSize="large" />
              </div>
            </Badge>
          )}
          {cartCount === 0 && (
            <div className="flex justify-center items-center">
              <BagIcon fontSize="large" />
            </div>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
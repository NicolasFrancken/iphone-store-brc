import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Button,
  NavbarMenu,
} from "@nextui-org/react";
import { useState } from "react";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered={true}
      isBlurred={true}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className="fixed h-20 p-0 xl:px-20 "
      isMenuOpen={isMenuOpen}
    >
      <NavbarBrand as={Link} href={"#main"} className="rounded-full">
        <Image
          src={"/images/logo.jpg"}
          alt="logo"
          width={70}
          height={70}
          className="rounded-full"
        />
      </NavbarBrand>
      <NavbarItem>
        <Link
          isBlock
          color="foreground"
          className="font-bold text-lg hidden md:flex bg-transparent"
          href="#reparaciones"
        >
          Reparaciones
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          isBlock
          color="foreground"
          className="font-bold text-lg hidden md:flex bg-transparent"
          href="#horarios"
        >
          Horarios
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button
          size="lg"
          className="font-bold text-lg bg-[#14CBEA] hidden md:flex ml-2"
          as={Link}
          href="https://wa.me/+542944657773?text=Quiero%20comprar%20un%20producto,%20¿cómo%20hago?"
        >
          COMPRÁ
        </Button>
      </NavbarItem>
      <NavbarMenuToggle className="md:hidden" />
      <NavbarMenu className="flex flex-col items-center justify-center">
        <NavbarMenuItem>
          <Button
            size="lg"
            className="font-bold text-lg bg-[#14CBEA] mb-[10px]"
            as={Link}
            href="https://wa.me/+542944657773?text=Quiero%20comprar%20un%20producto,%20¿cómo%20hago?"
          >
            COMPRÁ
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            isBlock
            color="foreground"
            className="font-bold text-lg bg-transparent"
            href="#reparaciones"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Reparaciones
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            isBlock
            color="foreground"
            className="font-bold text-lg bg-transparent"
            href="#horarios"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Horarios
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

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
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    isOpen: isOpenUs,
    onOpen: onOpenUs,
    onOpenChange: onOpenChangeUs,
  } = useDisclosure();

  const handleUsClick = () => {
    setIsMenuOpen(!isMenuOpen);
    onOpenUs();
  };
  const handleEnviosClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar
      isBordered={true}
      isBlurred={true}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className="fixed h-20 p-0 lg:px-20 "
      isMenuOpen={isMenuOpen}
    >
      <NavbarBrand as={Link} href={"#main"} className="rounded-full">
        <Image
          src={"/logo.jpg"}
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
        <Button
          size="lg"
          className="font-bold text-lg bg-[#14CBEA] hidden md:flex "
          as={Link}
          href="https://wa.me/+542944959344?text=Quiero%20comprar%20un%20equipo!%20¿Cómo%20hago?"
        >
          COMPRÁ
        </Button>
      </NavbarItem>
      <NavbarMenuToggle className="md:hidden" />
      <NavbarMenu className="flex flex-col items-center justify-center">
        <NavbarMenuItem>
          <Button
            size="lg"
            className="font-bold text-lg bg-[#14CBEA] "
            as={Link}
            href={"#envios"}
            onClick={handleEnviosClick}
          >
            COMPRÁ
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            isBlock
            color="foreground"
            className="font-bold text-lg bg-transparent"
            as={Button}
            onPress={handleUsClick}
          >
            Reparaciones
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
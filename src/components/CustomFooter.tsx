import { Link } from "@nextui-org/react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function CustomFooter() {
  return (
    <footer className="w-full px-2 xl:px-[6.5rem] py-4 bg-black/70  flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <div className="flex justify-center items-center">
          <Link
            className="text-background gap-2 text-sm md:text-base hover:cursor-pointer pr-6 border-r-1 "
            href="https://www.instagram.com/iphone_store_brc/"
            isExternal
          >
            <BsInstagram className="" /> Nuestro Instagram
          </Link>
          <Link
            className="text-background gap-2 text-sm md:text-base hover:cursor-pointer border-l-1 pl-6"
            href="https://wa.me/+542944657773?text=Hola,%20tengo%20una%20consulta!"
          >
            <BsWhatsapp className="md:mb-0.5 ml-0.5" /> Nuestro WhatsApp
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-background text-center text-xs md:text-sm">
            ©2023 Iphone Store BRC <br />
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

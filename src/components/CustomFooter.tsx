import { Link } from "@nextui-org/react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function CustomFooter() {
  return (
    <footer className="w-full px-6 xl:px-[6.5rem] py-4 bg-black/70  flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-center items-center gap-1">
          <Link className="text-background gap-2 text-sm md:text-base hover:cursor-pointer">
            <BsInstagram className="" /> Nuestro Instagram
          </Link>
          <Link className="text-background gap-2 text-sm md:text-base hover:cursor-pointer">
            <BsWhatsapp className="md:mb-0.5 ml-0.5" /> Nuestro WhatsApp
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-background text-center text-xs md:text-sm">
            ©2023 TRANSPORTE MULTISERVICIOS <br />
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

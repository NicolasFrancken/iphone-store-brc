"use client";

import CustomNavbar from "@/components/CustomNavbar";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import { Button, Card, CardFooter, Link } from "@nextui-org/react";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Home() {
  return (
    <NextUIProvider>
      <CustomNavbar />
      <section
        id="main"
        className="background1 min-h-screen px-[6.5rem] py-40 flex justify-center items-center"
      >
        <h1 className="font-bold text-8xl text-center text-background">
          <span className="text-[#14CBEA]">REPARACIÓN </span>
          DE <br />
          EQUIPOS APPLE
        </h1>
        <Button
          className="fixed w-fit h-fit bg-transparent min-w-fit  gap-unit-0 p-3 lg:p-6 bottom-0 right-0 z-10"
          radius="full"
        >
          <Image
            src={"/WhatsApp.webp"}
            alt="WhatsApp"
            width={50}
            height={50}
            className="flex lg:hidden"
          />
          <Image
            src={"/WhatsApp.webp"}
            alt="WhatsApp"
            width={70}
            height={70}
            className="hidden lg:flex"
          />
        </Button>
      </section>

      <section
        id="reparaciones"
        className="background2 min-h-screen px-[12rem] py-32 pb-12 flex flex-col items-center justify-between"
      >
        <div className="w-full bg-black/70 py-2 rounded-large">
          <h2 className="font-bold text-6xl text-background text-center">
            Reparaciones
          </h2>
        </div>
        <div className="flex justify-between items-center w-full">
          <Card isFooterBlurred radius="lg" className="border-none h-fit">
            <Image
              alt="Cambiando una batería de un iphone"
              src="/battery-change.jpg"
              className="object-cover"
              width={300}
              height={200}
            />
            <CardFooter className="justify-center bg-black/75 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col">
              <h4 className="font-bold text-lg text-background">
                Cambios de Baterías
              </h4>
              <Link
                isBlock
                color="foreground"
                className="font-semibold text-xs bg-transparent text-background h-fit mt-1"
                as={Button}
                radius="sm"
              >
                Con condición de batería{" "}
                <HiOutlineExternalLink className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none h-fit">
            <Image
              alt="Cambiando una batería de un iphone"
              src="/screen-change.jpg"
              className="object-cover"
              width={300}
              height={200}
            />
            <CardFooter className="justify-center bg-black/75 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col">
              <h4 className="font-bold text-lg text-background">
                Cambios de Pantallas
              </h4>
              <Link
                isBlock
                color="foreground"
                className="font-semibold text-xs bg-transparent text-background h-fit mt-1"
                as={Button}
                radius="sm"
              >
                Todas las calidades disponibles{" "}
                <HiOutlineExternalLink className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none h-fit ">
            <Image
              alt="Cambiando una batería de un iphone"
              src="/cleanup.webp"
              className="object-cover h-[400px]"
              width={300}
              height={200}
            />
            <CardFooter className="justify-center bg-black/75 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col min-h-[90px]">
              <h4 className="font-bold text-lg text-background">
                Limpiezas de Equipos
              </h4>
              {/* <Link
                isBlock
                color="foreground"
                className="font-semibold text-xs bg-transparent text-background h-fit mt-1"
                as={Button}
                radius="sm"
              >
                Con condición de batería{" "}
                <HiOutlineExternalLink className="w-4 h-4" />
              </Link> */}
            </CardFooter>
          </Card>
        </div>
        <div className="w-fit bg-black/75 rounded-large py-4 px-8 flex flex-col justify-center items-center">
          <h4 className="text-background font-semibold w-fit">
            TRABAJAMOS CON MARCAS LÍDERES
          </h4>
          <div className="flex w-fit mt-2">
            <Image
              src="/ampsentrix.png"
              alt="ampsentrix logo"
              width={132}
              height={21}
              className="mr-4"
            />
            <Image
              src="/foxconn.png"
              alt="foxconn logo"
              width={132}
              height={21}
              className="ml-4"
            />
          </div>
        </div>
      </section>
    </NextUIProvider>
  );
}

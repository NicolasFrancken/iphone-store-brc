"use client";

import CustomNavbar from "@/components/CustomNavbar";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  NextUIProvider,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { Button, Card, CardFooter, Link } from "@nextui-org/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsFillPersonFill, BsArrowRightShort } from "react-icons/bs";

export default function Home() {
  const {
    isOpen: isOpenBattery,
    onOpen: onOpenBattery,
    onOpenChange: onOpenChangeBattery,
  } = useDisclosure();
  const {
    isOpen: isOpenScreen,
    onOpen: onOpenScreen,
    onOpenChange: onOpenChangeScreen,
  } = useDisclosure();
  return (
    <NextUIProvider>
      <CustomNavbar />
      <section
        id="main"
        className="background1 min-h-screen px-6 xl:px-[6.5rem] py-40 pb-10 md:py-80 md:pb-10 flex flex-col justify-between items-center relative"
      >
        <div>
          <h1 className="font-bold text-4xl md:text-7xl lg:text-8xl text-center text-background">
            <span className="text-[#14CBEA]">REPARACIÓN </span>
            DE <br />
            EQUIPOS APPLE
          </h1>
          <p className="font-bold text-xl md:text-3xl lg:text-4xl text-background text-center">
            +5 AÑOS REPARANDO EQUIPOS
          </p>
        </div>
        <Link
          isBlock
          color="foreground"
          className="font-medium text-lg bg-black/70 flex py-3 pb-2 px-4 hover:cursor-pointer rounded-large"
          href="https://www.instagram.com/iphone_store_brc/"
        >
          <p className="leading-[16px] text-center text-background">
            Nuestro Instagram <br />
            +6000 <BsFillPersonFill className="inline mb-1" />
          </p>

          <Image
            src="/insta.png"
            alt="Instagram logo"
            width={30}
            height={30}
            className="mb-1 ml-4"
          />
        </Link>
        <Button
          className="fixed w-fit h-fit bg-transparent min-w-fit gap-unit-0 p-3 lg:p-6 bottom-0 right-0 z-10"
          radius="full"
          as={Link}
          href="https://wa.me/+542944959344?text=Hola,%20tengo%20una%20consulta!"
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
        className="background2 min-h-screen px-6 xl:px-[6.5rem] py-32 pb-20 flex flex-col items-center justify-between gap-10 relative"
      >
        <div className="max-w-[1300px] w-full bg-black/70 py-2 rounded-large">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-background text-center">
            Reparaciones
          </h2>
        </div>
        <div className="max-w-[1300px] w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          <Card isFooterBlurred radius="lg" className="border-none h-fit">
            <Image
              alt="Cambio de batería de Iphone"
              src="/battery-change.jpg"
              className="object-cover h-[400px]"
              width={300}
              height={200}
            />
            <CardFooter className="justify-center bg-black/75 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col">
              <h4 className="font-bold text-lg sm:text-xl text-background">
                Cambios de Baterías
              </h4>
              <Link
                isBlock
                color="foreground"
                className="font-semibold text-xs bg-transparent text-background h-fit mt-1"
                as={Button}
                radius="sm"
                onClick={onOpenBattery}
              >
                Con condición de batería{" "}
                <HiOutlineExternalLink className="w-4 h-4" />
              </Link>
              <Modal
                isOpen={isOpenBattery}
                onOpenChange={onOpenChangeBattery}
                className="bg-black/70 mx-6"
                backdrop="blur"
                placement={"center"}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalBody className="py-7">
                        <p className="font-medium text-background">
                          Transplantamos el{" "}
                          <span className="text-[#14CBEA] font-bold">flex</span>{" "}
                          de la batería vieja a la batería nueva. Programamos
                          ese flex para que la condición se muestre al{" "}
                          <span className="text-[#14CBEA] font-bold">
                            100%.
                          </span>
                        </p>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none h-fit">
            <Image
              alt="Cambio de pantalla de Iphone"
              src="/screen-change.jpg"
              className="object-cover h-[400px]"
              width={300}
              height={200}
            />
            <CardFooter className="justify-center bg-black/75 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col">
              <h4 className="font-bold text-lg sm:text-xl text-background">
                Cambios de Pantallas
              </h4>
              <Link
                isBlock
                color="foreground"
                className="font-semibold text-xs bg-transparent text-background h-fit mt-1"
                as={Button}
                radius="sm"
                onClick={onOpenScreen}
              >
                Todas las calidades disponibles{" "}
                <HiOutlineExternalLink className="w-4 h-4" />
              </Link>
              <Modal
                isOpen={isOpenScreen}
                onOpenChange={onOpenChangeScreen}
                className="bg-black/70 mx-6"
                backdrop="blur"
                placement={"center"}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalBody className="py-7">
                        <p className="font-medium text-background">
                          Contamos con la{" "}
                          <span className="text-[#14CBEA] font-bold">
                            pantalla
                          </span>{" "}
                          que necesitas. Calidades premium importadas, premium
                          nacionales o chinas.
                        </p>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none h-fit ">
            <Image
              alt="Limpieza de Iphone"
              src="/cleanup.webp"
              className="object-cover h-[400px]"
              width={300}
              height={200}
            />
            <CardFooter className="justify-center bg-black/75 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col min-h-[90px]">
              <h4 className="font-bold text-lg sm:text-xl text-background">
                Limpiezas de Equipos
              </h4>
            </CardFooter>
          </Card>
        </div>
        <div className="w-fit bg-black/75 rounded-medium md:rounded-large py-2 sm:py-4 px-4 sm:px-8 flex flex-col justify-center items-center">
          <h4 className="text-background font-semibold w-fit text-center text-sm sm:text-base">
            TRABAJAMOS CON MARCAS LÍDERES
          </h4>
          <div className="flex gap-4  items-center justify-center w-full mt-2">
            <Image
              src="/ampsentrix.png"
              alt="ampsentrix logo"
              width={132}
              height={21}
              className="w-[88px] h-[14px] sm:w-[132px] sm:h-[21px]"
            />
            <Image
              src="/foxconn.png"
              alt="foxconn logo"
              width={132}
              height={21}
              className="w-[88px] h-[14px] sm:w-[132px] sm:h-[21px]"
            />
          </div>
        </div>
        <p className="text-xs lg:text-base absolute right-0 bottom-0 mr-[5rem] lg:mr-[8rem] mb-6 lg:mb-10 text-background bg-black/70 lg:py-1 pl-2 rounded-small">
          Consultá por otras reparaciones
          <BsArrowRightShort className="inline mb-[2px] w-6 h-6" />
        </p>
      </section>
    </NextUIProvider>
  );
}

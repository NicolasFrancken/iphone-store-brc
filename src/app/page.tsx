"use client";

import CustomNavbar from "@/components/CustomNavbar";
import {
  Button,
  Card,
  CardFooter,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  NextUIProvider,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsFillPersonFill, BsArrowDownShort } from "react-icons/bs";
import CustomFooter from "@/components/CustomFooter";

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
        className="background1 min-h-[calc(100vh-70px)] md:min-h-screen px-6 xl:px-[6.5rem] py-40 pb-[178px] flex flex-col relative justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-4xl md:text-7xl lg:text-8xl text-center text-background">
            <span className="text-[#14CBEA]">REPARACIÓN </span>
            DE <br />
            EQUIPOS APPLE
          </h1>
          <p className="font-bold text-xl md:text-3xl lg:text-4xl text-background text-center">
            +5 AÑOS EN EL RUBRO
          </p>
          <Button
            size="lg"
            as={Link}
            href="#reparaciones"
            className="w-fit h-fit py-2 md:py-3 px-4 md:px-6 pr-2 md:pr-4 mt-3 bg-[#14CBEA] font-bold text-sm md:text-lg gap-0 rounded-medium"
          >
            MEJORÁ YA TU EQUIPO
            <BsArrowDownShort className="w-6 h-6 mb-0.5 ml-1" />
          </Button>
        </div>
        <Link
          isBlock
          color="foreground"
          className="font-medium text-lg bg-black/70 flex py-3 pb-2 px-4 hover:cursor-pointer rounded-large hover:opacity-70 ease-linear duration-[0.07s] absolute bottom-0 mb-10 z-30"
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
          className="fixed w-fit h-fit bg-transparent min-w-fit gap-unit-0 m-2 lg:m-5 p-1 lg:p-1 bottom-0 right-0 z-50"
          radius="full"
          as={Link}
          href="https://wa.me/+542944959344?text=Hola,%20tengo%20una%20consulta!"
        >
          <Image
            src={"/WhatsApp.webp"}
            alt="WhatsApp"
            width={50}
            height={50}
            className="flex lg:hidden sm-[70px]"
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
      <div className="background2">
        <section
          id="reparaciones"
          className=" min-h-screen px-6 xl:px-[6.5rem] py-32 pb-20 flex flex-col items-center justify-between gap-10 md:gap-20 relative"
        >
          {/* <div className=" w-full bg-foreground py-2 px-8 ">
            <h2 className="font-bold text-3xl md:text-5xl lg:text-5xl text-background text-center">
              Dejamos tu Iphone como nuevo!
            </h2>
          </div> */}
          <div className="max-w-[700px] w-full flex flex-col justify-between items-center gap-10 md:gap-20 ">
            <div className="min-w-full">
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none h-fit w-full"
              >
                <Image
                  alt="Cambio de batería de Iphone"
                  src="/screen-change.jpg"
                  className="object-cover h-[400px] w-full"
                  width={300}
                  height={200}
                />
                <CardFooter className="justify-center bg-black/75 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col">
                  <h4 className="font-bold text-lg sm:text-xl text-background">
                    Reparaciones
                  </h4>
                  <Link
                    isBlock
                    color="foreground"
                    className="font-medium text-xs bg-transparent text-background h-fit mt-1 hover:opacity-70  ease-linear duration-[0.07s]"
                    as={Button}
                    radius="sm"
                    onClick={onOpenBattery}
                  >
                    Baterías, Pantallas, y más{" "}
                    <HiOutlineExternalLink className="w-4 h-4" />
                  </Link>
                  <Modal
                    isOpen={isOpenBattery}
                    onOpenChange={onOpenChangeBattery}
                    className="bg-black/80 mx-6"
                    backdrop="blur"
                    placement={"center"}
                  >
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalBody className="py-7">
                            <p className="font-medium text-background">
                              Realizamos{" "}
                              <span className="text-[#14CBEA] font-bold">
                                cambios de baterías
                              </span>{" "}
                              con condición de batería,{" "}
                              <span className="text-[#14CBEA] font-bold">
                                cambios de pantallas
                              </span>{" "}
                              y
                              <span className="text-[#14CBEA] font-bold">
                                {" "}
                                limpiezas
                              </span>{" "}
                              para que tu Iphone vuelva a sentirse como un
                              equipo nuevo!
                            </p>
                          </ModalBody>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </CardFooter>
              </Card>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-10 md:gap-20 justify-center items-center">
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none h-fit w-full lg:w-fit"
              >
                <Image
                  alt="Cambio de pantalla de Iphone"
                  src="/accesorio.jpg"
                  className="object-cover h-[400px] w-full lg:w-[300px]"
                  width={300}
                  height={200}
                />
                <CardFooter className="justify-center bg-black/75 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col">
                  <h4 className="font-bold text-lg sm:text-xl text-background">
                    Accesorios
                  </h4>
                  <Link
                    isBlock
                    color="foreground"
                    className="font-medium text-xs bg-transparent text-background h-fit mt-1 hover:opacity-70  ease-linear duration-[0.07s]"
                    as={Button}
                    radius="sm"
                    onClick={onOpenScreen}
                  >
                    Tenemos el accesorio que buscas!{" "}
                    <HiOutlineExternalLink className="w-4 h-4" />
                  </Link>
                  <Modal
                    isOpen={isOpenScreen}
                    onOpenChange={onOpenChangeScreen}
                    className="bg-black/80 mx-6"
                    backdrop="blur"
                    placement={"center"}
                  >
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalBody className="py-7">
                            <p className="font-medium text-background">
                              Contamos con{" "}
                              <span className="text-[#14CBEA] font-bold">
                                fundas
                              </span>{" "}
                              protectoras transparentes, de colores y con
                              diseños,{" "}
                              <span className="text-[#14CBEA] font-bold">
                                vidrios templados
                              </span>{" "}
                              9D, protectores de cámaras,{" "}
                              <span className="text-[#14CBEA] font-bold">
                                billeteras
                              </span>
                              ,{" "}
                              <span className="text-[#14CBEA] font-bold">
                                cables y cargadores
                              </span>{" "}
                              originales
                            </p>
                          </ModalBody>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none h-fit w-full lg:w-fit"
              >
                <Image
                  alt="Limpieza de Iphone"
                  src="/foto4.jpg"
                  className="object-cover object-left-bottom h-[400px] w-full lg:w-[300px]"
                  width={300}
                  height={200}
                />
                <CardFooter className="justify-center bg-black/75 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col min-h-[90px]">
                  <h4 className="font-bold text-lg sm:text-xl text-background">
                    Otros productos
                  </h4>
                  <Link
                    isBlock
                    color="foreground"
                    className="font-medium text-xs bg-transparent text-background h-fit mt-1 hover:opacity-70  ease-linear duration-[0.07s]"
                    href="https://wa.me/+542944959344?text=Quiero%20hacer%20una%20reparación!"
                  >
                    Consultá por WhatsApp
                    <HiOutlineExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="w-full max-w-[700px] bg-black/80 rounded-medium md:rounded-large py-2 sm:py-4 px-4 sm:px-8 flex flex-col justify-center items-center">
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
          {/* <p className="text-xs lg:text-base absolute right-0 bottom-0 mr-[5rem] lg:mr-[8rem] mb-6 lg:mb-10 text-background bg-black/70 lg:py-1 pl-2 rounded-small">
            Consultá por otras reparaciones
            <BsArrowRightShort className="inline mb-[2px] w-6 h-6" />
          </p> */}
        </section>
        <CustomFooter />
      </div>
    </NextUIProvider>
  );
}

import React from "react";
import doune from "../assets/doune.jpeg";
import cisse410 from "../assets/cisse410.jpg";
import mndiaye from "../assets/mndiaye.jpg";
import ad from "../assets/ad.jpg";
import ahmada from "../assets/ag.jpeg";
import lod from "../assets/lod.jpg";
import mba from "../assets/mba.jpg";
import mkk from "../assets/mkk.jpg";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

// bacground: rgb(0,138,168)
// background: linear-gradient(158deg, rgba(0,138,168,1) 0%, rgba(0,172,188,1) 54%);

function OurTeams() {
  return (
    <section className="">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-8 ">
        {/* En tete */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Les{" "}
            <span className="bg-cover bg-center px-4 text-[#0A1A44] bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')]">
              Membres
            </span>{" "}
            de l'équipe
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-[630px] md:mb-12 lg:mb-10">
            Voici les membres qui ont participé activement à l'aboutissement de
            ce site
          </p>
        </div>
        {/* Team div */}
        <div className="mx-auto grid max-w-[2000px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-5 md:gap-4 lg:gap-6">
          {/* Item 1 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={doune}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">Mouhamedoune FALL</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://www.github.com/pape-medoune"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221779509892"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/mouhamedoune-fall-99b79322b/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={mndiaye}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">Mouhamed NDIAYE</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://github.com/mnjaay"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221778429979"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/mouhamed-ndiaye-3bb8a6206/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={doune}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">Seydina I Laye Diagne</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="#"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221772964034"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/mamadou-ba-06324a247/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={lod}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">Laty Omar DIEDHIOU</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://www.github.com/LatyrOmar"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221784717646"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/latyr-diedhiou-17a290243/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
          {/* Item 5 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={mba}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">Mamadou BA</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://github.com/BaMamadou12"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221774350647"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/mamadou-ba-06324a247/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
          {/* Item 6 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={cisse410}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">Issakha CISSE</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://github.com/cisse410"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221771566763"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/issakha-cisse/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
          {/* Item 7 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={mkk}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">Mor Khoudia KEBE</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://github.com/morkebe"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221771095383"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/mor-khoudia-kebe-383808257/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
          {/* Item 8 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={doune}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">M Moukhtar DIALLO</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="#"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221778334272"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/mamadou-ba-06324a247/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
          {/* Item 9 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={ahmada}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">Mouhamed GAYE</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://github.com/Ahmada00"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221784532081"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/mamadou-ba-06324a247/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
          {/* Item 10 */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-blue-800 p-2 hover:scale-105 duration-300">
            <img
              src={ad}
              alt=""
              className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
            />
            <p className="mb-2 font-bold">Assane DIA</p>
            <p className="mb-2 text-sm ">Licence 3 Génie Logiciel</p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://github.com/sannassD"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaGithub className="inline-block h-full w-full text-black" />
              </a>
              <a
                href="https://wa.me/221772995716"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaWhatsapp className="inline-block h-full w-full text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/assane-dia-ba3b81273/"
                className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]"
              >
                <FaLinkedinIn className="inline-block w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeams;

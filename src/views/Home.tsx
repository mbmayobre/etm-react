import React from "react";
import PhoneMockup from "../components/PhoneMockup/PhoneMockup";
import DownloadButtons from "../components/Buttons/DownloadButtons";
import Navbar from "../components/Navbar/Navbar";
import Features from "./Sections/Features";
import MoneyWalletCredit from "../assets/img/Feaures/boba-dollar-bills-and-credit-card-in-wallet.png";

const Home: React.FunctionComponent = () => {
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  const features = [
    { text: "Feature 1", image: MoneyWalletCredit },
    { text: "Feature 2", image: MoneyWalletCredit },
    { text: "Feature 3", image: MoneyWalletCredit },
    { text: "Feature 4", image: MoneyWalletCredit },
    { text: "Feature 5", image: MoneyWalletCredit },
  ];

  return (
    <div className="bg-white">
      <Navbar navigation={navigation} />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 items-center justify-between"> */}
        <div className="flex md:flex-row flex-col items-center justify-between py-12 sm:py-16 lg:py-24">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> */}
          <div className="text-center px-10 py-12 sm:p-16 md:px-20 lg:px-32 lg:py-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl flex flex-wrap justify-center">
              <span>Inspired by Students</span>
              <span>Designed by a Teacher</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <DownloadButtons />
          </div>
          <div className="px-10 sm:px-12 lg:px-24">
            <PhoneMockup />
          </div>
        </div>
        <Features features={features} />
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

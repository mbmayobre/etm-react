import React from "react";
import PhoneMockup from "../components/PhoneMockup/PhoneMockup";
import DownloadButtons from "../components/Buttons/DownloadButtons";
import Header from "../components/Header/Header";
import Features from "./Sections/Features";
import Footer from "../components/Footer/Footer";
import MoneyWalletCredit from "../assets/img/Feaures/boba-dollar-bills-and-credit-card-in-wallet.png";
import EcoFriendly from "../assets/img/Features/ecofriendly.jpg";
import MoneyMangement from "../assets/img/Features/moneyManagement2.jpg";
import Tangible from "../assets/img/Features/tangible.jpg";

const Home: React.FunctionComponent = () => {
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  const features = [
    { text: "Teaches Financial Literacy", image: MoneyMangement },
    { text: "Green and Clean", image: EcoFriendly },
    { text: "Tangible and Portable", image: Tangible },
    // { text: "Easy to Use and Affordable", image: MoneyWalletCredit },
  ];

  return (
    <div className="bg-white">
      <Header navigation={navigation} />
      <div className="relative isolate pt-14">
        {/* <div
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
        </div> */}
        <div className="flex md:flex-row flex-col items-center justify-between py-12 sm:py-16 lg:py-24">
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
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu blur-3xl sm:top-[calc(100%-37rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

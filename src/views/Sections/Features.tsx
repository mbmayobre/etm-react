import React from "react";
import DownloadButtons from "../../components/Buttons/DownloadButtons";

type FeaturesProps = {
  features: {
    text: string;
    image: any;
  }[];
};

const Features: React.FunctionComponent<FeaturesProps> = ({ features }) => {
  return (
    <section>
      <div className="bg-gray-300 content-center">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center max-w-5xl mx-auto py-5">
          {features.map((feature, idx) => (
            <div key={idx} className="justify-self-center my-5 w-3/6 md:w-4/5">
              <div className="mx-3 rounded h-fit">
                <img
                  className="bg-green-300 rounded-full"
                  src={feature.image}
                />
                <h1 className="text-xl text-center mt-3">{feature.text}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row py-3">
          <p className="text-center px-3">
            The ETM Machine and ETM Card System replaces the current behavior
            rewards program with an affordable mobile application that uses a
            simulated credit card system. It has been helping educators teach
            real world money skills while managing student behavior. It can be
            accessed online or through the app. It works on all devices.
          </p>
        </div>
        <DownloadButtons />
      </div>
    </section>
  );
};

export default Features;

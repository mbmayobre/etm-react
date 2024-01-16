import React from "react";

type FeaturesProps = {
  features: {
    text: string;
    image: any;
  }[];
};

const Features: React.FunctionComponent<FeaturesProps> = ({ features }) => {
  return (
    <section className="my-10 h-screen bg-green-100 content-center">
      <div className="flex items-center flex-row flex-wrap md:flex-nowrap justify-center my-5 max-w-5xl">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col w-3/5 md:w-1/5">
            <div className="mx-3 rounded h-64 bg-green-300">
              <img src={feature.image} />
              <h1 className="text-xl text-center">{feature.text}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row my-5">
        <p>
          The ETM Machine and ETM Card System replaces the current behavior
          rewards program with an affordable mobile application that uses a
          simulated credit card system. It has been helping educators teach real
          world money skills while managing student behavior. It can be accessed
          online or through the app. It works on all devices.
        </p>
      </div>
    </section>
  );
};

export default Features;

import React from "react";

type FeaturesProps = {
  features: {
    text: string;
    image: any;
  }[];
};

const Features: React.FunctionComponent<FeaturesProps> = ({ features }) => {
  return (
    <section>
      <div className="flex flex-row flex-wrap md:flex-nowrap justify-center">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col w-4/5 md:w-1/5">
            <div className="mx-3 rounded bg-slate-400">
              <img src={feature.image} />
              <h1 className="text-xl text-center">{feature.text}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

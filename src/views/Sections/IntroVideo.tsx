import React from "react";

type IntroVideoProps = {
  url: string;
};

const IntroVideo: React.FunctionComponent<IntroVideoProps> = ({ url }) => {
  return (
    <section className="py-14 px-5">
      <h2 className="text-center text-2xl font-bold mb-5">
        How to Use the ETM App
      </h2>
      <div className="h-56 sm:h-72 md:h-96 max-w-3xl mx-auto">
        <iframe
          className="w-full h-full"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default IntroVideo;

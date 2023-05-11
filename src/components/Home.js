import React from "react";

import { WhatsappIcon, WhatsappShareButton } from "react-share";

import { Blog } from "../utilities/Blog";

const Home = () => {
  const dummyData = [
    {
      name: "Blog 1",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
    {
      name: "Blog 2",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
    {
      name: "Blog 3",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
  ];
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">My Blog</h1>
        <div className="grid grid-cols-3 gap-4">
          {dummyData.map((data, key) => (
            <Blog key={key} name={data.name} info={data.info} />
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <WhatsappShareButton
          url={"localhost:3000"}
          quote={"Dummy text!"}
          hashtag="#muo"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </>
  );
};

export default Home;

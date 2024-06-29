import React from "react";
// Set Default Props
Image.defaultProps = {
  name: 10,
  category: "Wuthering Waves",
  url: "https://cdn.discordapp.com/attachments/1237400116311228516/1256216400067039333/image.png?ex=66809ef1&is=667f4d71&hm=e8da03153ce33d4f6eff41cb99c440a5405991b26dddd74049db21d6f20eb73b&",
};
function Image(props) {
  return (
    <div className="">
      <div className="mx-4">
        <img src={props.url} alt="" className="h-[300px] w-[500px] " />
        <p className="text-xl">
          Gambar {props.name} <br /> Kategori {props.category}
        </p>
      </div>
    </div>
  );
}

export default Image;

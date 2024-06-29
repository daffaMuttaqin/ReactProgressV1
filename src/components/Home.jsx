import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex">
        <Image name={1} category={"Game"} />
        <Image
          name={2}
          url={
            "https://cdn.discordapp.com/attachments/1237400116311228516/1256217464002445404/image.png?ex=66809fee&is=667f4e6e&hm=9cff3a071c70cab58f45f3fa1f3094148f3a85ca5bd2df34ccbc7309ec0b0fb5&"
          }
        />
        <Image name={3} category={"Hobi"} />
        <Image
          url={
            "https://cdn.discordapp.com/attachments/1237400116311228516/1256220566487171165/image.png?ex=6680a2d2&is=667f5152&hm=13cb98d6cc5be3e899e99180537d68287a35eea1ee734a8cf08d4a29b3bf5005&"
          }
        />
      </div>
      <div className="mt-5">
        <Link to={"/aboutUs"} className="p-3 bg-blue-400 rounded-lg">
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Home;

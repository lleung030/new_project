import React from "react";
import profile_image from "../images/Image1.png";

const Images = () => {
  return (
    <>
<div className="text-center">
  <img
    src={profile_image}
    className="mx-auto mb-4 w-32 rounded-lg"
    alt="Avatar" />
  <h5 className="mb-2 text-xl font-medium leading-tight">Lucas Leung</h5>
  <p className="text-neutral-500 dark:text-neutral-400">Software Engineer</p>
</div>
    </>
  );
};

export default Images;

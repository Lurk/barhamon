import React from "react";

const NewHopePreview: React.FC = () => {
  return (
    <>
      <p>I want to write a blog as long as blogs exist. Now I'm doing it (hopefully).</p>
      <p>Let`s start from the beginning.</p>
      <p>My name Serhiy and I am a software developer.</p>
    </>
  )
}

export const new_hope = {
  pid: "new_hope",
  header: 'New Hope ;)',
  time: 1593538782006,
  image: "/img/avatar.jpg",
  description: "",
  tags: ['bio'],
  Preview: NewHopePreview,
  Full: NewHopePreview
};


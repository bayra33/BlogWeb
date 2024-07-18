"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Body3 } from "@/components/Body3";
import { ImSpinner6 } from "react-icons/im";

const PerPage = () => {
  const [blogs, setBlogs] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles/${id}`);

        const data = await res.json();

        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  if (!blogs)
    return (
      <>
        <div className="w-full h-screen justify-center flex items-center">
          <button
            type="button"
            class="bg-indigo-500 flex gap-2 text-center items-center rounded-xl px-4 py-1 text-white text-sm"
            disabled
          >
            <div className="flex items-center justify-center animate-spin">
              <ImSpinner6 />
            </div>
            Loading...
          </button>
        </div>
      </>
    );

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white h-full  text-xl text-center w-[1100px]">
        <Header></Header>
        <div className="mt-10 my-5 text-3xl">{blogs.title}</div>
        <div className="flex text-left w-full justify-center my-2">
          {blogs.user.name}
          {blogs.published_at}
        </div>
        <div className=" flex items-center flex-col">
          <img src={blogs.social_image}></img>
          <div
            className="my-24 w-full flex items-center flex-col gap-3"
            dangerouslySetInnerHTML={{ __html: blogs.body_html }}
          />
        </div>
        <Body3></Body3>
      </div>
    </div>
  );
};
export default PerPage;

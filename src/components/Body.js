import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const images = [
  "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qJ1YFEjPGxsF~nCqG1MvoseU8XBFcMpfGtxlklKgza7k8bdFk1NvdcWopLUO2QyU-7vdzKnSetucyf1Rlbd0To5m1QTWIVeBN5hlByC1ffnWuvD6NUbrHsBSDeK51keHfePvPExhfkqknzkqHLn90cRa0zVJWtUhl4BmX5sA6dDKdgCgTEShl3EgxL5lL0urD~KqAbyUoi2KuEylt1~EENLBSMayhVc~PW6EBXy6Rj7LIzvp3Wz4hzm0WfmqYafpAVYlRxmC3dOkIRaKb29w5iZ35VdLbLRxO~5Nqa~njV0PLhMzZFrJAQLidVD7Ktff7ebunXe9ri4y6xxvRoKRgw__",
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
"https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
"https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"
];

export const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const UmnuhSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const DaraSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full h-[400px] lg:w-[1100px] relative overflow-hidden ">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={images[currentIndex]}
          alt="Carousel"
        />
        <div className="p-4 bg-white absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg lg:end-1">
          <div className="w-auto bg-blue-500 rounded-lg px-4 py-1 mb-2 text-center">
            <h1 className="text-white text-sm">Technology</h1>
          </div>
          <p className="text-base md:text-lg">Grid system for better Design User Interface</p>
          <p className="text-gray-500 text-sm">August 20, 2022</p>
        </div>
      </div>
      <div className="flex gap-2 lg:w-[1100px] w-full justify-center text-2xl">
        <FaArrowCircleLeft onClick={UmnuhSlide} className="cursor-pointer" />
        <FaArrowCircleRight onClick={DaraSlide} className="cursor-pointer" />
      </div>
    </div>
  );
};

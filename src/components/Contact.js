export const Contact = () => {
  return (
    <div className="w-full flex justify-center my-20">
    <div className="flex flex-col items-center w-[643px]  gap-5">
      <h1 className="text-3xl left-0 mt-10 mb-5 text-start w-full">Contact us</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor{" "}
      </h2>
      <div className=" flex justify-between gap-5">
        <div className="= border-2 border-gray rounded-xl flex-col ">
          <h1 className="text-xl m-4">Address</h1>
          <h2 className="ml-4">1328 Oak Ridge Drive, Saint Louis, Missouri</h2>
        </div>
        <div className=" border-2 border-gray rounded-xl flex-col ">
          <h1 className="text-xl m-4">Address</h1>
          <h2 className="ml-4">1328 Oak Ridge Drive, Saint Louis, Missouri</h2>
        </div>
      </div>
      <div className=" bg-gray-100 rounded-lg w-full justify-center flex">
        <div className="flex flex-col gap-5 w-[478px]" >
          <h1 className="text-xl my-8">Leave message</h1>
         <div className="flex  gap-5 right-2  justify-between">
          <div className="w-[225px] h-[38px] border-2 bg-white rounded-md"></div>
          <div className="w-[225px] h-[38px] border-2 bg-white rounded-md"></div>

         </div>
         <div className="w-[478px] h-[35px] border-2 bg-white rounded-md">

         </div>
         <div className="w-[478px] h-[134px] border-2 bg-white rounded-md">

         </div>
         <div className="bg-blue-500 w-[130px] h-[40px] rounded-lg flex justify-center items-center my-10"> 
          <h1 className="text-white">Text message</h1>

         </div>
        </div>
      </div>
    </div>
   
    </div>
  );
};

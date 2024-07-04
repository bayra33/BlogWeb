import { MetaBlog, Nawbar } from "./MetaBlog";

export const Header = () => {
  return (
    <div className=" w-full flex justify-between bg-white lg:w-[1100px] m-auto">
    
        <MetaBlog width={"135px"} height={"35px"} />
    <Nawbar />

      
    </div>
  );
};

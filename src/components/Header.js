import { MetaBlog, Nawbar,} from "./MetaBlog";
import { Search } from "./Search";
import Link from "next/link";

export const Header = () => {
  return (
    <div id="adad" className="w-full flex flex-col lg:flex-row justify-between bg-white lg:w-[1100px] m-auto p-4 lg:p-0">
      <div className="flex justify-between w-full lg:w-auto">
        <Link href="/"><MetaBlog width={"135px"} height={"35px"} /></Link>
      </div>
      <div className="flex gap-5 text-gray-600 top-0">
        <Link href="/">
          <p className="dark:md:hover:text-cyan-600">Home</p>
        </Link>
        <Link href="/blogs">
          <p className="dark:md:hover:text-cyan-600 ">Blog</p>
        </Link>
        <Link href="/contact">
          <p className="dark:md:hover:text-cyan-600">Contact</p>
        </Link>
      </div>
      <Search></Search>
      {/* <Nawbar className="hidden lg:flex" /> */}
    </div>
  );
};

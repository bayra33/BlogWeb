import { FaSearch } from "react-icons/fa";
export const SearchTab = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center fixed z-[200] top-0 left-0">
      <div className="border-2 flex rounded-xl">
        <input
          className="w-[225px] h-[38px] rounded-lg border-2"
          type="text"
          placeholder="Spotlight search......"
        />
        <div className="flex justify-center items-center bg-gray-400 rounded-xl w-10">
          < FaSearch />
        </div>
      </div>
    </div>
  );
};

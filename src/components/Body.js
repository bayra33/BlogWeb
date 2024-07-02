import { CiSquareChevLeft } from "react-icons/ci";

export const Body = () => {
  return (
    <div className="flex justify-center w-full relative flex-col">
        <div>
      <img
        className="bg-cover rounded-lg"
        src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qJ1YFEjPGxsF~nCqG1MvoseU8XBFcMpfGtxlklKgza7k8bdFk1NvdcWopLUO2QyU-7vdzKnSetucyf1Rlbd0To5m1QTWIVeBN5hlByC1ffnWuvD6NUbrHsBSDeK51keHfePvPExhfkqknzkqHLn90cRa0zVJWtUhl4BmX5sA6dDKdgCgTEShl3EgxL5lL0urD~KqAbyUoi2KuEylt1~EENLBSMayhVc~PW6EBXy6Rj7LIzvp3Wz4hzm0WfmqYafpAVYlRxmC3dOkIRaKb29w5iZ35VdLbLRxO~5Nqa~njV0PLhMzZFrJAQLidVD7Ktff7ebunXe9ri4y6xxvRoKRgw__"
      />
      <div className="p-4 bg-white absolute rounded-lg bottom-1">
        <div className="w-[97px] h-[27px] bg-blue-500 rounded-lg ">
          <h1 className="text-white flex justify-center">Technology</h1>
        </div>
        <p className="text-lg">Grid system for better Design User Interface</p>
        <p className="text-gray-300">August 20, 2022</p>
      </div>
      </div>
      <div className="text-lg flex">
      <CiSquareChevLeft className=""/>
      </div>
    </div>
  );
};

export const Body1 = () => {
    return (
      <div className="p-4 lg:w-[1100px] m-auto">
        <h1 className="text-lg md:text-xl ">Trending</h1>
        <div className="flex overflow-hidden overflow-x-auto space-x-4 justify-center">
          <img className="w-1/2 md:w-1/3 lg:w-1/4" alt="Post 1 " src="/post-card-overlay.png"  />
          <img src="/post-card-overlay.png" className="w-1/2 md:w-1/3 lg:w-1/4" alt="Post 2" />
          <img src="/post-card-overlay.png" className="w-1/2 md:w-1/3 lg:w-1/4" alt="Post 3" />
          <img src="/post-card-overlay.png" className="w-1/2 md:w-1/3 lg:w-1/4" alt="Post 4" />
        </div>
      </div>
    );
  }
  
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/videos");
//   const data = await res.json();
//   console.log(data.videos);

//   return {
//     props: { videos: data.videos },
//   };
// };

// const getVideos = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/videos", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex justify-between lg:px-20 py-10 text-left bg-white text-black">
      <button className="border bg-gray-300 px-3">Sort By</button>
      <div className="flex items-center py-5">
        <input
          type="search"
          className="border-0"
          placeholder="Search Here"
        ></input>
        <button>
          <Image
            src="/searchIcon.jpg"
            alt="Search Icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

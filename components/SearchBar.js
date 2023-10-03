import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex justify-between lg:mx-20 my-10 text-left">
      <button className="border-2 pr-20 pl-2">Genre</button>
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

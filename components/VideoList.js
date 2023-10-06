"use client";

import React, { useEffect, useState } from "react";
import { TbCategory, TbPlayerPlay } from "react-icons/tb";
import DeleteVideo from "./DeleteVideo";
import SearchBar from "./SearchBar";
import Link from "next/link";

const formatDate = (date) => {
  const newDate = date.split("-");
  return newDate[2] + "-" + newDate[1] + "-" + newDate[0];
};

function convertToBillions(number) {
  return (number / 1e9).toFixed(2);
}

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Number of items to display per page

  useEffect(() => {
    // Fetch video data when the component mounts
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/videos", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setVideos(data.videos);
        setFilteredVideos(data.videos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchQuery) => {
    if (searchQuery) {
      const filter = videos.filter((video) => {
        return (
          video.song_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.singer_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredVideos(filter);
    } else {
      setFilteredVideos(videos);
    }
  };

  // Calculate index range for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredVideos.slice(indexOfFirstItem, indexOfLastItem);

  // Create a function to handle page changes
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredVideos.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <SearchBar searchFunc={handleSearch} />
      <div className="py-10 px-10 lg:px-20 bg-gray-800">
        <div className="mb-6 border-b-2 pb-8 pt-4 relative overflow-auto">
          <div className="static top-10 right-10 lg:right-20 z-10 border-2 rounded-2xl p-3  hover:bg-orange-600">
            <Link href={"/addVideos"}>
              <h1>Add a New Video</h1>
            </Link>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg ease-in-out duration-200">
            {currentItems.map((video) => (
              <li key={video._id} className="border-2 rounded-lg px-3 py-2">
                <div style={{ position: "relative", textAlign: "center" }}>
                  <img
                    src={video.thumbnail_url}
                    alt="Video Thumbnail"
                    style={{ width: "100%" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Link href={video.song_link} target="_blank">
                      <TbPlayerPlay size={60} />
                    </Link>
                  </div>
                </div>

                <h1 className="text-2xl">{video.song_title}</h1>
                <div className="flex justify-between">
                  <p>by {video.singer_name}</p>
                  <p>{formatDate(video.release_Date.split("T")[0])}</p>
                </div>
                <div className="flex justify-between">
                  <p className="flex items-center space-x-2">
                    <TbCategory />
                    {video.genre}
                  </p>
                  <p>{convertToBillions(video.views)}B</p>
                </div>
                <div>
                  <div className="flex justify-center space-x-4 mt-4">
                    <DeleteVideo id={video._id} />
                    <Link href={`/editVideo/${video._id}`}>
                      <button className="border rounded-xl p-2 bg-green-500 hover:bg-green-700">
                        UPDATE
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`${
                currentPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } rounded-full w-10 h-10 hover:bg-blue-700`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;

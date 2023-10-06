"use client";

import { useState } from "react";

import React from "react";

const UpdateVideo = () => {
  const [newSongTitle, setNewSongTitle] = useState(song_title);
  const [newSingerName, setNewSingerName] = useState(singer_name);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className=" px-10 py-10 bg-lime-300 text-gray-700">
      <h1>EditVideo</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="song_title" className="block text-sm font-medium ">
            Song Title
          </label>
          <input
            type="text"
            id="song_title"
            name="song_title"
            value={newSongTitle}
            onChange={(e) => setNewSongTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="singer_name" className="block text-sm font-medium ">
            Singer Name
          </label>
          <input
            type="text"
            id="singer_name"
            name="singer_name"
            value={newSingerName}
            onChange={(e) => setNewSingerName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateVideo;

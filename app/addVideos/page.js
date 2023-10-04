"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AddVideos = () => {
  const [formData, setFormData] = useState({
    song_title: '',
    singer_name: '',
    song_link: '',
    release_Date: '',
    genre: '',
    views: 0,
    lyrics: '',
    thumbnail_url: '',
    song_duration: '',
  });

  const [error, setError] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        setError('Please complete all fields');
        return; // Stop form submission
      }
    }

    setError('');

    try {
      const res = await fetch('http://localhost:3000/api/videos', {
        method: 'POST',
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(formData)
      })

      if(res.ok) {
        router.push('/')
      } else {
        throw new Error('There was an error while creating new video')
      }


    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };

  return (
    <div className=" px-10 py-10 bg-lime-300 text-gray-700">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Your New YouTube Video</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="song_title" className="block text-sm font-medium ">
            Song Title
          </label>
          <input
            type="text"
            id="song_title"
            name="song_title"
            value={formData.song_title}
            onChange={handleChange}
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
            value={formData.singer_name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="song_link" className="block text-sm font-medium ">
            Song Link
          </label>
          <input
            type="text"
            id="song_link"
            name="song_link"
            value={formData.song_link}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="release_Date" className="block text-sm font-medium ">
            Release Date
          </label>
          <input
            type="date"
            id="release_Date"
            name="release_Date"
            value={formData.release_Date}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block text-sm font-medium ">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="views" className="block text-sm font-medium ">
            Views
          </label>
          <input
            type="number"
            id="views"
            name="views"
            value={formData.views}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lyrics" className="block text-sm font-medium ">
            Lyrics
          </label>
          <textarea
            id="lyrics"
            name="lyrics"
            value={formData.lyrics}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="thumbnail_url" className="block text-sm font-medium ">
            Thumbnail URL
          </label>
          <input
            type="text"
            id="thumbnail_url"
            name="thumbnail_url"
            value={formData.thumbnail_url}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="song_duration" className="block text-sm font-medium ">
            Song Duration
          </label>
          <input
            type="text"
            id="song_duration"
            name="song_duration"
            value={formData.song_duration}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Add Videos
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVideos;

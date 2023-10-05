// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const getVideoById = async ({ id }) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/videos/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("failed to fetch video");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default async function EditVideo({ params }) {
//   const { id } = params;
//   const { video } = await getVideoById(id);
//   const { song_title, singer_name } = video;
//   console.log("testing update id", id);

//   const [newSongTitle, setNewSongTitle] = useState(song_title);
//   const [newSingerName, setNewSingerName] = useState(singer_name);

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`http://localhost:3000/api/videos/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ newSongTitle, newSingerName }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to update topic");
//       }

//       router.push("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className=" px-10 py-10 bg-lime-300 text-gray-700">
//       <h1>EditVideo</h1>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label htmlFor="song_title" className="block text-sm font-medium ">
//             Song Title
//           </label>
//           <input
//             type="text"
//             id="song_title"
//             name="song_title"
//             value={newSongTitle}
//             onChange={(e) => setNewSongTitle(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="singer_name" className="block text-sm font-medium ">
//             Singer Name
//           </label>
//           <input
//             type="text"
//             id="singer_name"
//             name="singer_name"
//             value={newSingerName}
//             onChange={(e) => setNewSingerName(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md"
//             required
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

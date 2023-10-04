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

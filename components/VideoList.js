import Link from "next/link";
import { TbCategory, TbPlayerPlay } from "react-icons/tb";

const getVideos = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/videos", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const formatDate = (date) => {
  const newDate = date.split("-");
  return newDate[2] + "-" + newDate[1] + "-" + newDate[0];
};

function convertToBillions(number) {
  return (number / 1e9).toFixed(2); 
}

export default async function VideoList() {
  const { videos } = await getVideos();

  return (
    <div className="py-10 px-10 lg:px-20 bg-gray-800 relative overflow-auto">
      <div className="mb-6 border-b-2 pb-8 pt-4 flex justify-between items-center">
        <div className="text-2xl">RECENT VIDEOS</div>
        <div className="absolute top-10 right-10 lg:right-20 z-10 border-2 rounded-2xl p-3 hover:bg-orange-600">
          <Link href={"/addVideos"}>
            <h1>Add a New Video</h1>
          </Link>
        </div>
      </div>
      <div>
        <ul className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
          {videos.map((video) => (
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
                  <button className="border p-2 bg-red-500">DELETE</button>
                  <Link href={`/editVideos/${video._id}`}>
                      <button className="border p-2 bg-green-500">UPDATE</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

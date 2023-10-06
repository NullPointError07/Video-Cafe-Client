import UpdateVideo from "@/components/UpdateVideo";
import { useRouter } from "next/navigation";

const getVideoById = async ({ id }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/videos/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch video");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditVideo({ params }) {
  const { id } = params;
  const { video } = await getVideoById(id);
  const { song_title, singer_name } = video;
  console.log("testing update id", id);

  const router = useRouter();

  try {
    const res = await fetch(`http://localhost:3000/api/videos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ newSongTitle, newSingerName }),
    });

    if (!res.ok) {
      throw new Error("Failed to update topic");
    }

    router.push("/");
  } catch (error) {
    console.log(error);
  }

  return <UpdateVideo />;
}

"use client";

import { useRouter } from "next/navigation";

const DeleteVideo = ({ id }) => {
  const router = useRouter();
  const handleDeleteVideo = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      console.log("Deleting video ID No:", id);

      try {
        const response = await fetch(
          `http://localhost:3000/api/videos?id=${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          router.refresh();
        }

        if (response.ok) {
          console.log("Video deleted successfully");
        } else {
          console.error("Failed to delete video");
        }
      } catch (error) {
        console.error("Error while deleting video:", error);
      }
    }
  };

  return (
    <>
      <button
        onClick={handleDeleteVideo}
        className="border rounded-xl p-2 bg-red-500 hover:bg-red-700"
      >
        DELETE
      </button>
    </>
  );
};

export default DeleteVideo;

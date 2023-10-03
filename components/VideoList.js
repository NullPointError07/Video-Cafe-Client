import Link from "next/link";
import DeleteBtn from "./deleteBtn";
import { HipencilAlt } from "react-icons/hi";

const VideoList = () => {
  return (
    <div>
      <div className="m-10">
        <h1>RECENT UPLOADS</h1>
      </div>

      <div>
        <DeleteBtn />
        {/* <Link href={"/editVideo/123"}>
          <HipencilAlt size={24} />
        </Link> */}
      </div>
    </div>
  );
};

export default VideoList;

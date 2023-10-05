import connectMongoDB from "@/libs/mongodb";
import video from "@/models/videosSchema";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  console.log("hello", params);
  // const id = request.nextUrl.searchParams.get("id");
  // console.log("id----", id);
  // await connectMongoDB();
  // await video.findByIdAndDelete(id);
  // return NextResponse.json({ message: "Video Deleted" }, { status: 200 });
  const id = params;
  await connectMongoDB();
  await video.findByIdAndDelete(id);
  return NextResponse.json({ message: "success" });
}

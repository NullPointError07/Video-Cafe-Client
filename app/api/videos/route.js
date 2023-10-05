import connectMongoDB from "@/libs/mongodb";
import video from "@/models/videosSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    song_title,
    singer_name,
    song_link,
    release_Date,
    genre,
    views,
    lyrics,
    thumbnail_url,
    song_duration,
  } = await request.json();
  await connectMongoDB();
  await video.create({
    song_title,
    singer_name,
    song_link,
    release_Date,
    genre,
    views,
    lyrics,
    thumbnail_url,
    song_duration,
  });
  return NextResponse.json(
    { message: "Video Created Successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const videos = await video.find();
  return NextResponse.json({ videos });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await video.findByIdAndDelete(id);
  return NextResponse.json({ message: "Video Deleted" }, { status: 200 });
}

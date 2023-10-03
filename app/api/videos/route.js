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

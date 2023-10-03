import connectMongoDB from "@/libs/mongodb";
import video from "@/models/videosSchema";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const id = params;
    const {newSongTitle = song_title, newSingerName = singer_name} = await request.json()
    await connectMongoDB();
    await video.findByIdAndUpdate(id, {song_title, singer_name});
    return NextResponse.json({message: "Update video"}, {status:200})
}
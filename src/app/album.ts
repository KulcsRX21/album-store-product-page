import { Track } from "./track";

export interface Album {
    name: string,
    releaseDate: Date,
    coverImage: string,
    tracks: Track[]
}
import { PostInterface } from "../../models/posts";
import { a, p } from "../../models/tree";

export async function getMusic(): Promise<PostInterface[]> {
  const albums = await import("./data.json");
  const result: PostInterface[] = albums.albums.map((album) => ({
    pid: `${album.artist.join(" & ")} - ${album.name}`,
    header: `${album.artist.join(" & ")} - ${album.name}`,
    description: `${album.artist.join(" & ")} - ${album.name}`,
    time: album.date,
    preview: [
      p([album.description]),
      p([
        " | ",
        ...Object.entries(album.links).flatMap(([text, url]) => [
          a({ url, text }),
          " | ",
        ]),
      ]),
    ],
    full: [
      p([album.description]),
      p([
        " | ",
        ...Object.entries(album.links).flatMap(([text, url]) => [
          a({ url, text }),
          " | ",
        ]),
      ]),
    ],
    image: album.image,
    tags: ["music", ...album.tags],
  }));
  return result;
}

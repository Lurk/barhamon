import { PostInterface } from "../../models/posts";
import { a, p, createMessage } from "../../models/tree";

function getLinkIcon(text: string) {
  switch (text) {
    case "iTunes":
      return "itunes";
    case "Spotify":
      return "spotify";
    case "Youtube":
    case "Youtube (live)":
      return "youtube";
    case "Bandcamp":
      return "bandcamp";
    case "Mixcloud":
      return "mixcloud";
    case "Soundcloud":
      return "soundcloud";
    default:
      return "linkify";
  }
}

export async function getMusic(): Promise<PostInterface[]> {
  const albums = await import("./data.json");
  const result: PostInterface[] = albums.albums.map((album) => ({
    pid: `${album.artist.join(" & ")} - ${album.name}`,
    header: `${album.artist.join(" & ")} - ${album.name}`,
    description: `${album.artist.join(" & ")} - ${album.name}`,
    time: album.date,
    preview: [],
    full: [
      p([album.description]),
      ...Object.entries(album.links)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([text, url]) =>
          createMessage({
            content: [
              p([
                a({
                  url,
                  text: `${album.artist.join(" & ")} - ${
                    album.name
                  } on ${text}`,
                }),
              ]),
            ],
            icon: getLinkIcon(text),
            warning: false,
          })
        ),
    ],
    image: album.image,
    tags: ["music", ...album.tags],
  }));
  return result;
}

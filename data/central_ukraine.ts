import { a, createDivider, createImageGallery, createYoutubeVideo, img, p } from "../models/tree";
import { PostInterface } from "../models/posts";

const firstSlider = new Array(8).fill(0).map((v, k) => img({
  src: `/img/central_ukraine/1/${k + 1}.jpg`,
  thumbnail: `/img/central_ukraine/1/${k + 1}_tn.jpg`,
  alt: `800 km along the roads of central Ukraine. Day 1. #${k}`
}));
const secondSlider = new Array(10).fill(0).map((v, k) => img({
  src: `/img/central_ukraine/2/${k + 1}.jpg`,
  thumbnail: `/img/central_ukraine/2/${k + 1}_tn.jpg`,
  alt: `800 km along the roads of central Ukraine. Day 2. #${k}`
}));
const thirdSlider = new Array(5).fill(0).map((v, k) => img({
  src: `/img/central_ukraine/3/${k + 1}.jpg`,
  thumbnail: `/img/central_ukraine/3/${k + 1}_tn.jpg`,
  alt: `Trakhtemyrivsʹkyy Pivostriv on a motorcycle. #${k}`
}))

export const central_ukraine: PostInterface = {
  pid: "central_ukraine",
  header: "800 km along the roads of central Ukraine in 2 days",
  time: 1601794437385,
  image: 'https://res.cloudinary.com/barhamon/image/upload/c_scale,q_auto,w_600/v1609664480/header/header_utwb5w.jpg',
  tags: ['motorcycle', 'adventure'],
  description: "Solo road trip on a old Africa Twin motorcycle",
  preview: [p("I`ve made another short trip — two days of tarmac, gravel, and sand roads.")],
  full: [
    p("I`ve made another short trip — two days of tarmac, gravel, and sand roads. I deliberately avoid highways, as much as I can, because all the fun and beauty are on small and hidden trails. It always amazed me where people can live. To some villages, the only path is through deep sand trails."),
    createDivider(),
    createImageGallery(firstSlider),
    p([
      "Here are tracks for the ",
      a({url:"https://scenicapp.space/ride/UHlOhOsM", text:"first"}),
      " and ",
      a({url:"https://scenicapp.space/ride/nurKKyQl", text:"second"}),
      " days"
    ]),
    p([
      "I did not bring a tent with this time but got a hammock and slept with a terrific view ",
      a({url:"https://www.google.com/maps/@49.36566,32.7349795,149m/data=!3m1!1e3", text:"in the middle of nowhere"}),
      "."
    ]),
    createImageGallery(secondSlider),
    p("On the way back, I found a gem - Trakhtemyrivsʹkyy Pivostriv. It is near Kyiv (100 km), and I will come back there to explore."),
    createImageGallery(thirdSlider),
    p("Recorded almost six hours of video, then condense it to 13 minutes, and here it is: "),
    createYoutubeVideo("FAYoL7WzHaE"),
    p("A big one for me - it is possible to do 500 km in one day with offroad parts in it. But it is physically challenging. Next time I plan a trip should take this into account")
  ]
}

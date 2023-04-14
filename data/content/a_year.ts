import { img, p, a, createMessage } from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";

const preview = "And moving here was the second-best decision in my life.";

export const a_year: PostInterface = {
  pid: "a_year",
  header: "A year has passed since we moved to Munich",
  time: 1650025630626,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1650027203/header/a_year_in_munich.jpg",
  tags: ["blog", "relocation"],
  description:
    "We have lived in Munich for a year, and moving here was the second-best decision in my life.",
  preview: [p([preview])],
  full: [
    p([
      preview,
      "The first one was moving from Moscow to Kyiv in December of 2013. A lot of people said back then that we were crazy. And to be honest, I also had doubts at that time. It looked like we were abandoning rich Moscow for no reason. Then Russia annexed Crimea. Then tried to annex Donbas and Luhansk regions. And now 8, years later, it launched a full-scale assault against Ukraine.",
    ]),
    img({
      ...prepareImgProps({
        file: "a_year/fishing_with_granddad.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1650031459/a_year/fishing_with_granddad.jpg",
      alt: "My granddad is the best fishing partner",
    }),
    p([
      "My mom and grandparents are still in Ukraine. Fortunately, there is nothing important in the area where they live, so there are no fights. And I hope it will stay that way. Even though on every call, my mom says everything is okay, life in the war-torn country is still tough. But at least banks are working, so money is not a problem.",
    ]),
    img({
      ...prepareImgProps({
        file: "a_year/waiting_for_a_plane_to_kyiv.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1650031788/a_year/waiting_for_a_plane_to_kyiv.jpg",
      alt: "Waiting for plane in Moscow Domodedovo airport",
    }),
    p([
      "A year ago, we thought that after a year of living here, we would decide if we like to stay or we will come back to Kyiv. To be fair, Mari has been living here for only half a year, but now that does not matter. Russia proved once again that you could not be far enough. So yeah, we are staying. Good thing that before moving, we had time to consider all the options, and we still did not change our minds. We like Munich. Yes, it is an expensive place to live, but comfortable, safe, and cozy.",
    ]),
    img({
      ...prepareImgProps({
        file: "a_year/german_course_schedule.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1650032133/a_year/german_course_schedule.jpg",
      alt: "Everything you do in Germany involves beer",
    }),
    p([
      "I started to learn German. I cannot say that it is a huge success, but there are some. The main problem is vocabulary, and I do not have the mental capacity to do something about it. I know I should. Check24 pays for it, so I did not choose the school. Because of that, I can not say if Goethe institute is the best choice. But I like it. The teachers are good. The group is small. And by happy coincidence, the class I am attending is 10 minutes walking distance from home.",
    ]),
    createMessage({
      content: [
        p([
          "Some days ago, during a pause between learning sessions, we went to the kitchen to drink water. Small talk, usual subjects like weather, sports, and the stock market. My turn to say something about my investment strategy.",
        ]),
        p([
          "- I do not have one. Every time I get a long-term life plan - Russia invades.",
        ]),
        p(["Dude from Syria:"]),
        p(["- I feel you, bro. I feel you."]),
      ],
      icon: "meh",
    }),
    p([
      "In January, finally I bought a bicycle. Since then, it has been my primary way of commuting. I feel like I am fitter and happier than before. One downside is I usually write my blog posts on the way to/from work, and you know, it is hard to write while you are cycling.",
    ]),
    img({
      ...prepareImgProps({
        file: "a_year/bicycle.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1650032311/a_year/bicycle.jpg",
      alt: "Cycling is fun",
    }),
    p([
      "While I still like motorcycling more than cycling, I do not think I will be riding a motorcycle anytime soon. My driver's license was valid only first six months, and there is no easy way to exchange a driver's license issued in Ukraine for a German one. The process is time-consuming, and this year's priority is the language. So yeah, I accepted no motorcycle reality and started to plan cycling trips.",
    ]),
    img({
      ...prepareImgProps({
        file: "a_year/team.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1650032501/a_year/team.jpg",
      alt: "We actually a big team",
    }),
    p([
      "There are no big work-related changes. My productivity dropped significantly because it is hard to pull yourself from the doom scrolling. But management is supportive, and I am grateful for that. I did a big presentation on why functional React matters. I want to turn it into a blog post, but I can not find the time. Also, we are trying to come up with migration to typescript strategy. The big picture looks like that: The first step is to write all the new stuff using TS, which we do already. Next is to convert all our internal packages, which we will start soon. And then convert all our applications. Sounds easier than it is. ",
    ]),
    img({
      ...prepareImgProps({
        file: "a_year/the_flat.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1650032671/a_year/the_flat.jpg",
      alt: "view from the balcony",
    }),
    p([
      "We are living in the same flat. Maybe twice a month I check ",
      a({ text: "immoscout", url: "https://www.immobilienscout24.de/" }),
      " for a new potential flat/house. But now, with the language courses so close to our current apartment, it is even harder to find a good enough substitute to justify the hustle of moving. Also, we spent a weekend in the mountain cabin. And now we want that instead apartment in the city, which is even harder to find in our budget. Living outside the city will mean that we need a car, which is not possible for now because of the driver's license issue. So I think we will live in that flat for some foreseeable future. Ah. The “housemaster” finally replaced our paper doorbell tags with a proper ones. But they misspelled our surnames. I am not sure how big of an issue that is, but since there is no moving out, I think that we should do something about that.",
    ]),
    img({
      ...prepareImgProps({
        file: "a_year/social_life.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1650032745/a_year/social_life.jpg",
      alt: "almost all social interactions outside workplace looks like that",
    }),
    p([
      "Social life is getting better. Since COVID restrictions are dropped, more people socialize within the office. We even go to Creta. I mean the insurance part of the company, which are 100+ people. Also, I met some lovely people in my German course. And we are planning some hikes and beer drinking activities.",
    ]),
    img({
      ...prepareImgProps({
        file: "a_year/cant_believe_i_have_to_protest_this_shit.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1650032862/a_year/cant_believe_i_have_to_protest_this_shit.jpg",
      alt: "can't believe i have to protest this shit",
    }),
    p([
      "A big part of life now is helping refugees to find a way to live everyday life and participating in anti-war/Russia protests. What amazes me the most is how many people care. Every day I meet a random person who does something good. I thought that there were more good people than bad people, and now I have proof.",
    ]),
    createMessage({
      content: [
        p(["The next big anniversary post will be in a year."]),
        p([
          "The previous one you can read here: ",
          a({
            text: "Half a year",
            as: "/post/half_a_year",
            url: "/post/[pid]",
          }),
          ".",
        ]),
        p([
          "The next one you can read here: ",
          a({
            text: "Two years in Munich",
            as: "/post/two_years",
            url: "/post/[pid]",
          }),
          ".",
        ]),
      ],
      icon: "birthday cake",
    }),
  ],
};

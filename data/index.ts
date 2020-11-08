import { Posts } from "../models/posts";
import { How_to_serve_sitemap_xml_with_Next_JS } from "./sitemap";
import { new_hope } from "./new_hope";
import { Typescript_Nextjs_Prismjs } from "./the_code";
import { the_rain_the_river_and_the_sunset } from "./the_rain_the_river_and_the_sunset";
import { this_blog } from "./this_blog";
import { this_year_i_changed_the_motorcycle_class } from "./this_year_i_changed_the_motorcycle_class";
import { why } from "./why";
import { rust_cheatsheet } from "./rust_cheatsheet";
import { the_plan } from "./the_plan";
import { pamir } from "./pamir";
import { rtw_trip } from "./rtw_trip";
import { central_ukraine } from "./central_ukraine";
import { burned_out } from "./burned_out";

export const posts = new Posts();

posts.addPost(burned_out);
posts.addPost(central_ukraine);
posts.addPost(rtw_trip);
posts.addPost(pamir);
posts.addPost(the_plan);
posts.addPost(rust_cheatsheet);
posts.addPost(this_year_i_changed_the_motorcycle_class);
posts.addPost(How_to_serve_sitemap_xml_with_Next_JS);
posts.addPost(the_rain_the_river_and_the_sunset);
posts.addPost(Typescript_Nextjs_Prismjs);
posts.addPost(why);
posts.addPost(this_blog);
posts.addPost(new_hope);


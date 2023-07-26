import { getPostMeta } from "../components/post_meta";
import { format } from "date-fns";

test("date format when post was published 10 minutes ago", () => {
  expect(getPostMeta(Date.now() - 10 * 60 * 1000)).toBe("10 minutes ago");
});

test("date format when post was published about 1 hour ago", () => {
  expect(getPostMeta(Date.now() - 70 * 60 * 1000)).toBe("about 1 hour ago");
});

test("date format when post was published about 23 hours ago", () => {
  expect(getPostMeta(Date.now() - 23 * 60 * 60 * 1000)).toBe(
    "about 23 hours ago",
  );
});

test("date format when post was published 1 day ago", () => {
  expect(getPostMeta(Date.now() - 24 * 60 * 60 * 1000)).toBe("1 day ago");
});

test("date format when post was published 7 days ago", () => {
  expect(getPostMeta(Date.now() - 7 * 24 * 60 * 60 * 1000)).toBe("7 days ago");
});

test("date format when post was published more than 7 days ago", () => {
  const date = Date.now() - 8 * 24 * 60 * 60 * 1000;
  expect(getPostMeta(date)).toBe(format(date, "MMMM d, yyyy"));
});

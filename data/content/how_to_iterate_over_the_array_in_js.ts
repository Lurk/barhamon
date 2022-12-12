import {
  a,
  code,
  createMessage,
  h3,
  p,
  img,
  ul,
  li,
  b,
} from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils/";

const interfaces = `export interface Entity {
  groupId: number;
  value: number;
}

export interface SuperEntity {
  groupId: number;
  value: number;
  groupLength: number;
}`;

const getEntities = `export function getEntities(size: number): Entity[] {
  const result: Entity[] = new Array(size);
  for (let i = 0; i < size; i++) {
    result[i] = {
      groupId: getRandomInt(0, Math.ceil(size / 100)),
      value: getRandomInt(0, 100),
    };
  }
  return result;
}`;

const createLookupMap = `export function createLookupMap(entities: Entity[]): Map<number, Entity[]> {
  let result: Map<number, Entity[]> = new Map();
  for (let i = 0; i < entities.length; i++) {
    const entity = entities[i];
    const val = result.get(entity.groupId);
    if (val) {
      val.push(entity);
    } else {
      result.set(entity.groupId, [entity]);
    }
  }
  return result;
}`;

const convertToSuperEntities = `export function convertToSuperEntities(
  lookup: Map<number, Entity[]>,
  entities: Entity[]
): SuperEntity[] {
  const groupSizeFilter = isEntityGroupBig.bind(null, lookup, entities.length);
  return entities
    .filter(isValueGreaterThatTwo)
    .filter(groupSizeFilter)
    .map((entity) => mapToSuperEntity(lookup, entity))
    .filter(isSuperEntity);
}`;

const convertToSuperEntitiesWithLoop = `export function convertToSuperEntitiesWithLoop(
  lookup: Map<number, Entity[]>,
  entities: Entity[]
): SuperEntity[] {
  const result: SuperEntity[] = new Array(entities.length);
  const groupSizeFilter = isEntityGroupBig.bind(null, lookup, entities.length);
  let j = 0;
  for (let i = 0; i < entities.length; i++) {
    const entity = entities[i];
    if (isValueGreaterThatTwo(entity) && groupSizeFilter(entity)) {
      const superEntity = mapToSuperEntity(lookup, entity);
      if (isSuperEntity(superEntity)) {
        result[j] = superEntity;
        j++;
      }
    }
  }
  return result.slice(0, j);
}`;

const map = `export function* map<Input, Output>(
  functor: (args: Input) => Output,
  entries: Iterable<Input>
): Iterable<Output> {
  for (const entry of entries) {
    yield functor(entry);
  }
}`;

const filter = `type TypeguardPredicate<InputType, OutputType extends InputType> = (
  value: InputType
) => value is OutputType;
type BooleanPredicate<InputType> = (value: InputType) => boolean;
type Predicate<InputType, OutputType extends InputType> =
  | TypeguardPredicate<InputType, OutputType>
  | BooleanPredicate<InputType>;

export function* filter<InputType, OutputType extends InputType>(
  predicate: Predicate<InputType, OutputType>,
  entries: Iterable<InputType>
): Iterable<OutputType> {
  for (const entry of entries) {
    if (predicate(entry)) {
      yield entry;
    }
  }
}`;

const convertToSuperEntitiesWithGenerators = `export function convertToSuperEntitiesWithGenerators(
  lookup: Map<number, Entity[]>,
  entities: Entity[]
): SuperEntity[] {
  const groupSizeFilter = isEntityGroupBig.bind(null, lookup, entities.length);
  const greaterThanTwoIterable = filter(isValueGreaterThatTwo, entities);
  const andHasABigGroupIterable = filter(groupSizeFilter, greaterThanTwoIterable);
  const mappedIterable = map(
    (entity) => mapToSuperEntity(lookup, entity),
    andHasABigGroupIterable
  );
  return [...filter(isSuperEntity, mappedIterable)];
}`;

const run1 = `async function run(n: number) {
  const entities = getEntities(n);
  const lookup = createLookupMap(entities);
  return suite(
    \`Entity(\${n}) to SuperEntity transformer\`,
    add("array methods", () => {
      return convertToSuperEntities(lookup, entities);
    }),
    add("for loop", () => {
      return convertToSuperEntitiesWithLoop(lookup, entities);
    }),
    add("generators", () => {
      return convertToSuperEntitiesWithGenerators(lookup, entities);
    }),
    cycle()
  );
}`;

const result1 = `# npx ts-node src/benchmark.ts
Running "Entity(100000) to SuperEntity transformer" suite...
Progress: 100%

  array methods:
    4.5 ops/s, ±20.12%   | 6.25% slower

  for loop:
    4.8 ops/s, ±20.66%   | fastest

  generators:
    3.9 ops/s, ±18.90%   | slowest, 18.75% slower
`;

const iteratorMap = `export function map<InputType, OutputType>(
  functor: (arg: InputType) => OutputType,
  iterable: Iterable<InputType>
): Iterable<OutputType> {
  return {
    [Symbol.iterator]() {
      const iterator = iterable[Symbol.iterator]();
      return {
        next() {
          const { value, done } = iterator.next();
          if (done) {
            return { value: undefined, done: true };
          } else {
            return { value: functor(value), done: false };
          }
        },
      };
    },
  };
}`;

const iteratorFilter = `type TypeguardPredicate<InputType, OutputType extends InputType> = (
  value: InputType
) => value is OutputType;
type BooleanPredicate<InputType> = (value: InputType) => boolean;
type Predicate<InputType, OutputType extends InputType> =
  | TypeguardPredicate<InputType, OutputType>
  | BooleanPredicate<InputType>;

export function filter<InputType, OutputType extends InputType>(
  predicate: Predicate<InputType, OutputType>,
  iterable: Iterable<InputType>
): Iterable<OutputType> {
  return {
    [Symbol.iterator]() {
      const iterator = iterable[Symbol.iterator]();
      return {
        next() {
          let { value, done } = iterator.next();
          while (done === false && !predicate(value)) {
            const result = iterator.next();
            value = result.value;
            done = result.done;
          }
          if (done) {
            return { value: undefined, done: true };
          } else {
            return { value, done };
          }
        },
      };
    },
  };
}`;

const convertToSuperEntitiesWithIterators = `export function convertToSuperEntitiesWithIterators(
  lookup: Map<number, Entity[]>,
  entities: Entity[]
): SuperEntity[] {
  const groupSizeFilter = isEntityGroupBig.bind(null, lookup, entities.length);
  const greaterThanTwoIterable = filter(isValueGreaterThatTwo, entities);
  const andHasABigGroupIterable = filter(groupSizeFilter, greaterThanTwoIterable);
  const mappedIterable = map(
    (entity) => mapToSuperEntity(lookup, entity),
    andHasABigGroupIterable
  );
  return [...filter(isSuperEntity, mappedIterable)];
}`;

const run2 = `async function run(n: number) {
  const entities = getEntities(n);
  const lookup = createLookupMap(entities);
  return suite(
    \`Entity(\${n}) to SuperEntity transformer\`,
    add("array methods", () => {
      return convertToSuperEntities(lookup, entities);
    }),
    add("for loop", () => {
      return convertToSuperEntitiesWithLoop(lookup, entities);
    }),
    add("generators", () => {
      return convertToSuperEntitiesWithGenerators(lookup, entities);
    }),
    add("iterators", () => {
      return convertToSuperEntitiesWithIterators(lookup, entities);
    }),
    cycle()
  );
}`;

const result2 = `# npx ts-node src/benchmark.ts
Running "Entity(100000) to SuperEntity transformer" suite...
Progress: 100%

  array methods:
    4.8 ops/s, ±17.19%   | 2.04% slower

  for loop:
    4.9 ops/s, ±21.21%   | fastest

  generators:
    4 ops/s, ±19.09%     | slowest, 18.37% slower

  iterators:
    4.4 ops/s, ±12.05%   | 10.2% slower`;

const preview = p(["I will start with an anecdote."]);

export const how_to_iterate_over_the_array_in_js: PostInterface = {
  pid: "how_to_iterate_over_the_array_in_js",
  header:
    "How to iterate over the array in JavaScript and the root of all evil",
  time: 1670885546116,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1670707612/iterations_in_js/root_of_all_evil.jpg",
  tags: ["software", "js", "ts", "benchmark"],
  description:
    "benchmarking array methods vs for loop vs iterators vs generators",
  preview: [preview],
  full: [
    preview,
    p([
      "At my work, I am responsible for building a service. It's not important what exactly it does. What is important is that to fulfill the business requirements, it should crunch the ever-growing array of data. And by crunch, I mean iterate over this array multiple times on every run.",
    ]),
    p([
      "Here is a very simplified version of that business requirement: convert Entity to SuperEntity, where SuperEntity is an Entity that has value > 2, has more than 1% of all entities in the group, and has the groupLength property.",
    ]),
    p(["Here are the types of both Entity and SuperEntity:"]),
    code({
      content: interfaces,
      lang: "typescript",
    }),
    p([
      "Again this is a very simplified version. In the real world, we also need MegaEntity and TurboDieselEntity.",
    ]),
    p(["So, our input is an array of Entities. Here is how we generate it:"]),
    code({
      content: getEntities,
      lang: "typescript",
    }),
    p([
      "And because we will need to access group length, let’s build a lookup map beforehand.",
    ]),
    code({
      content: createLookupMap,
      lang: "typescript",
    }),
    p([
      "Now we are ready to write our Entity to SuperEntity transformer. The naive approach would look like this:",
    ]),
    code({
      content: convertToSuperEntities,
      lang: "typescript",
    }),
    p([
      "It looks nice and tidy. But remember the part of the task where input will constantly grow? That means, at some point, input will become so big that we will notice performance penalties from creating intermediate arrays on each step and iterating over them. Let's rewrite it with for loop.",
    ]),
    code({
      content: convertToSuperEntitiesWithLoop,
      lang: "typescript",
    }),
    p([
      "Performance wise it should be much better. No intermediate arrays, no array resizes, and no extra iterations. What I do not like is the decreased readability. Our nice flat eleven-line function became longer and curvier. Let's fix the readability issue with generators.",
    ]),
    p([
      "Generators are a special function that, instead of computing everything in one go and returning a result, returns an iterator that will compute the next chunk when you request it. This means that we can write the map and filter using generators.",
    ]),
    p(["The map is straightforward."]),
    code({
      content: map,
      lang: "typescript",
    }),
    p([
      "The filter is a bit complex because of the type definition of the predicate. We want to use type guards and functions that return a boolean as a predicate.",
    ]),
    code({
      content: filter,
      lang: "typescript",
    }),
    p([
      "Okay. Now we got everything we need. Let's write our transformer once more with helpers from above.",
    ]),
    code({
      content: convertToSuperEntitiesWithGenerators,
      lang: "typescript",
    }),
    p([
      "We are flat again. We do some extra work in the end because we need to convert our iterable to the array. Performance-wise this version should be slower than for loop version because generators should have some cost, but faster than the first attempt because we iterate only once and do not create any intermediate arrays.",
    ]),
    p([
      "At this point, I was so proud of myself. I thought, why nobody speaks about generators? And I should publish those small helper functions as a library. But then my teammate asked if I was sure the generator approach was that fast. I was sure, but *spoiler alert* I was wrong. Don’t be like me. Always write benchmarks when performing performance optimizations.",
    ]),
    p([
      "Benchmarking is hard to do, so if your aim is not a new benchmarking framework, use an existing one. I chose ",
      a({ url: "https://www.npmjs.com/package/benny", text: "benny" }),
      ". Why? It was first in Google results. So no actual research there, but it does everything I need and even can create an HTML page with nice visualization. Here is  the benchmark code:",
    ]),
    code({
      content: run1,
      lang: "typescript",
    }),
    p(["And here is the result:"]),
    code({
      content: result1,
      lang: "bash",
    }),
    p([
      "I expected a more significant difference between array methods and for-loop. But let's get back to our elephant in the room. Why are generators so slow?",
    ]),
    p([
      "I went to the V8 source code to find the answer to this question. But it is surprisingly hard to read and navigate. So I went on a googling quest. Nobody seems to be concerned about whole generators being slow situation. All the info I found was from 2013-2015, and the conclusion is that generators are slow. That was no news to me. I am interested In finding out why. Last resort, the spec. I fell asleep multiple times while reading it, but it looks like I know the answer.",
    ]),
    p([
      "TLDR: It is slow because the generator function will manipulate the call stack on every iteration. ",
    ]),
    p([
      "The spec says that the generator should create an alternative call stack, and on every iteration, it will insert this call stack into the program call stack and execute it until the yield statement. Yield will update the call stack of this generator and remove it from the program call stack. This is what makes generators slow.",
    ]),
    p([
      "If that explanation does not help, imagine my handwaving. You are welcome. And if you want to check everything by yourself, here is the link to the ",
      a({
        url: "https://262.ecma-international.org/13.0/#sec-generator-abstract-operations",
        text: "ECMA-262 27.5.3",
      }),
      " in full glory",
    ]),
    p([
      "But! But we can create iterators by ourselves, right? Generators are excellent when you want to make any arbitrary function return an iterator, and we need only two functions.",
    ]),
    p(["Here is the map function:"]),
    code({
      content: iteratorMap,
      lang: "typescript",
    }),
    p(["Here is the filter:"]),
    code({
      content: iteratorFilter,
      lang: "typescript",
    }),
    p([
      "Yeah, I remember that we are solving the readability problem of the for-loop version. And with helpers like that, it makes the readability problem even worse. But since we are already here, let's benchmark it anyway.",
    ]),
    p(["Guess how our transformer function looks?"]),
    code({
      content: convertToSuperEntitiesWithIterators,
      lang: "typescript",
    }),
    p(["Here is the updated benchmark:"]),
    code({
      content: run2,
      lang: "typescript",
    }),
    p(["And here is the result:"]),
    code({
      content: result2,
      lang: "bash",
    }),
    p([
      "Here we are. I will use this post as proof that any performance optimization made upfront is useless. I mean, there is no sense in using generators for performance optimization. And I think we can agree that there is no sense in using iterators to solve the readability and performance problems. So we left with array methods and for-loop, where the difference is around 5%.",
    ]),
    p([
      "When you are in the measuring contest, it’s hard to stop. And I have a few questions to ask. For example, how different are the results for different input sizes? ",
    ]),
    img({
      ...prepareImgProps({
        file: "iterations_in_js/ops_rvye5j.png",
        username: "barhamon",
        version: 1670670143,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1670884694/iterations_in_js/ops_rvye5j.png",
      alt: "operations per second array methods vs for loop vs generators vs iterators",
    }),
    p([
      "There is nothing visible on a linear scale, so this is a logarithmical one. And even though I was expecting for-loop to be a winner with a big margin, in reality, things are different.",
    ]),
    img({
      ...prepareImgProps({
        file: "iterations_in_js/diff_p4cxq8.png",
        username: "barhamon",
        version: 1670670143,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1670884709/iterations_in_js/diff_p4cxq8.png",
      alt: "difference in performance array methods vs for loop vs generators vs iterators",
    }),
    p([
      "Do you see? Something strange happens around 20_000 and 65_000 input sizes. I rerun the whole thing multiple times on different machines, and it is still there. If you know what it is and why it is there, drop me a message, I would also like to know.",
    ]),
    createMessage({
      content: [
        p([
          "I also wanted to add a nodejs vs deno vs bun comparison. But deno does not have JSON output from the benchmarking tool ",
          a({
            url: "https://github.com/denoland/deno/issues/14385",
            text: "yet",
          }),
          ", and I am too lazy to parse console output.",
        ]),
      ],
      icon: "info circle",
    }),
    p([
      "But let's get back to generators. Why may you still want to use them? You may want to use generators when you get data in chunks, and those chunks are arriving slower than you can process them. Imagine any IO operation, reading from the filesystem, network, etc. Instead of waiting till all the chunks are received, you can start processing the data while waiting for the next chunk. You can do that with streams or generators. I find stream API hard to make type-safe and compose. This leaves only one real option - generators. If you want an example, check out ",
      a({
        url: "https://nodejs.org/api/readline.html#rlsymbolasynciterator",
        text: "readline API",
      }),
      ", and imagine how easily you can apply map and filter helpers from the above.",
    ]),
    p([
      "Let's stop here. I hope that you had fun reading this. I had fun writing it. And I feel it lacks some bullet points in the end, so here we go.",
    ]),
    p([b("Mandatory bullet points at the end:")]),
    ul({
      content: [
        li(["Newer do a performance optimization without benchmarks."]),
        li(["Generators in javascript are slow."]),
        li(["Array methods in Javascript are surprisingly fast."]),
      ],
      type: "number",
    }),
    createMessage({
      icon: "lightbulb",
      header: "specs and links",
      content: [
        p([
          "I ran all those benchmarks on the cheapest Hetzner server (CX11), which has one vCPU and 2GB of RAM. With Ubuntu 22.04.1 LTS and NodeJS 18.12.1 on top.",
        ]),
        p([
          "You can find all the code, including benchmarks and Jupiter notebook, in ",
          a({
            url: "https://github.com/Lurk/generators_js",
            text: "the GitHub repo",
          }),
          ".",
        ]),
      ],
    }),
  ],
};

/**
 * memoization function for functions with one argument
 * uses shallow comparison
 */
export function memoize<T, R>(f: (data: T) => R): (data: T) => R {
  const cache = new Map<T, R>();
  return (data) => {
    let res = cache.get(data);
    if (!res) {
      res = f(data);
      cache.set(data, res);
    }
    return res;
  };
}

export interface CloudinaryImageUrl {
  username: string;
  version: number;
  file: string;
  size?: number;
}

const scale = (s?: number) => (s ? `c_scale,w_${s}/` : "");
const url = ({ username, version, file, size }: CloudinaryImageUrl) =>
  `https://res.cloudinary.com/${username}/${scale(size)}v${version}/${file}`;

interface prepareImgPropsArguments {
  file: string;
  version: number;
  username: string;
}

export function prepareImgProps({
  file,
  username,
  version,
}: prepareImgPropsArguments) {
  return {
    original: url({ username, version, file }),
    thumbnail: url({
      file,
      username,
      version: version,
      size: 150,
    }),
    srcSet: `${url({
      file,
      username,
      version: version,
      size: 1000,
    })}  1000w,${url({
      file,
      username,
      version: version,
      size: 600,
    })}  600w,${url({
      file,
      username,
      version: version,
      size: 150,
    })}  150w`,
    sizes:
      "(min-width: 1000px) calc(50.8vw - 92px), (min-width: 780px) calc(87.5vw - 100px), (min-width: 340px) calc(81.43vw - 101px), calc(-100vw + 480px)",
  };
}

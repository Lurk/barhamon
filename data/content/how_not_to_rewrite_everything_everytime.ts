import { code, createDivider, p } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const webpackConfig = `module.exports = {
  entry: {
    admin: './src/admin.js',
    user: './src/user.js',
  },
  output: {
    filename: '[name].[contenthash:6].js',
    path: resolve(__dirname, 'public'),
  },
  optimization: { ...  },
  module: { ... },
  plugins: [
    new HtmlWebpackPlugin({
      // path where new template with injected links will be stored
      filename: '../views/dist/admin.ejs',
      // path to old template
      // notise !!raw-loader! before path thats where magic is happened
      template: '!!raw-loader!./views/admin.ejs',
      // public path where our assets will be avalable
      publicPath: "/",
      // in order to add chunks only for the required entry points
      chunks: ['admin'],
    }),
    new HtmlWebpackPlugin({
      filename: '../views/dist/user.ejs',
      template: '!!raw-loader!./views/user.ejs',
      publicPath: "/",
      chunks: ['user'],
    })
  ],
};`;

const preview = p([
  "Recently I had a task - add cache busters in the existing React project.",
]);

export const HowNotToRewriteEverythingEverytime: PostInterface = {
  pid: "HowNotToRewriteEverythingEverytime",
  header: "How not to rewrite everything everytime :)",
  time: 1607367668704,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,q_auto,w_600/v1609664695/header/how_not_to_rewrite_everything_everytime_fevxnv.png",
  tags: ["webpack", "ejs", "HtmlWebpackPlugin", "raw-loader"],
  description:
    "Did you know that webpack can inject assets to your Ejs template without touching the template part?",
  preview: [preview],
  full: [
    preview,
    p([
      "It is pretty straightforward - open webpack config, add [contenthash(:number)] to output.filename, and that's it.",
    ]),
    p(["Give me a sec, I said, and open my IDE."]),
    p([
      "But that was not so easy because links to resulting js files were hardcoded to ejs templates. ExpressJS serve those templates because some variables should be inserted there on request time.",
    ]),
    p([
      "My first thought was to throw everything out and rewrite it with proper SSR. But that would take more time than I can afford on that task.",
    ]),
    p([
      "o what I need is to somehow add links to templates by Webpack. And HtmlWebpackPlugin, with the help of raw-loader, can do that.",
    ]),
    createDivider(),
    p([
      "First of all, make sure that HtmlWebpackPlugin and raw-loader are installed in the project.",
    ]),
    code({
      content: "npm install html-webpack-plugin raw-loader --save-dev",
      lang: "bash",
    }),
    p([
      "Then we will tell HtmlWebpackPlugin to get our existing templates, add there links to assets, live rest as it is, and save as new templates for the ExpressJS server.",
    ]),
    code({ content: webpackConfig, lang: "typescript" }),
    p([
      "I hope it helps you next time you feel the urge to rewrite everything.",
    ]),
  ],
};
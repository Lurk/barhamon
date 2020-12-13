import React from "react";
import { Code } from "../components/code";
import { Icon, Message } from "semantic-ui-react";

const code = `interface CloudinaryTagResponse {
  resources: Array<{
    "public_id": string,
    "version": number,
    "format": string,
    "width": number,
    "height": number,
    "type": string,
    "created_at": string,
  }>,
  "updated_at": string,
}`;


const CloudinaryPreview: React.FC = () => {
  return (
    <p>As you can see in my previous posts, I like photography.</p>
  )
}

const CloudinaryFull: React.FC = () => {
  return (
    <>
      <CloudinaryPreview/>
      <p>Not like I am particularly good at that, but I enjoy seeing those moments later. That brings me to CDN's
        because those photos should be stored and delivered.</p>
      <p>After some googling, I choose Cloudinary because it has some nice features and a decent free plan - 25000
        transformations or 25 GB storage or 25 GB bandwidth monthly.</p>
      <Message
        info
        icon
        size="small"
        onClick={
          () => window.open('https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/hqd3swadmblfw3ivxjmv', '_blank')
        }
      >
        <Icon name='linkify' />
        <Message.Content>
          <Message.Header>More free stuff for me</Message.Header>
          <p>I will receive more free services for every registered user. So if you like my photos, go on, click on
            this message, and register.</p>
        </Message.Content>
      </Message>
      <p>Cloudinary has a react library, but I did not find any image gallery. So here is how I did it.</p>
      <p>After uploading images to Cloudinary servers, I tag them. After that, I fetch the list of photos by this URL: </p>
      <Code language={"typescript"}>{`\`https://res.cloudinary.com/\${your_username}/image/list/\${tag}.json\``}</Code>
      <p>response type:</p>
      <Code language={"typescript"}>{code}</Code>
      <p>Here is source code <a target='_blank'
                                href="https://github.com/Lurk/barhamon/blob/master/components/cloudinary.tsx">cloudinary.tsx</a>  how
        I use it with<br/> <a target='_blank' href="https://github.com/xiaolin/react-image-gallery">React Carousel Image Gallery</a>
      </p>
      <p>If you look at lines 64 and 65, you will notice the <b>srcSet</b> and <b>sizes</b> field. You may ask how I calculate those params?<br/>I did not :)</p>
      <p>I used the excellent <a target='_blank' href="https://github.com/ausi/respimage">RespImageLint</a> tool by
        Martin Auswöger.</p>
    </>
  )
}

export const cloudinary = {
  pid: "cloudinary",
  header: "Image gallery with Cloudinary",
  time: 1607893775602,
  image: '/img/cloudinary.png',
  tags: ['blog', 'cdn', 'images'],
  description: "Here's how I build an image gallery with Cloudinary",
  Preview: CloudinaryPreview,
  Full: CloudinaryFull,
};

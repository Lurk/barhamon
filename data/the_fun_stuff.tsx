import Link from "next/link";
import React from "react";
import ImageGallery from 'react-image-gallery';
import { Divider } from "semantic-ui-react";


const TheFunStuffPreview: React.FC = () => {
  return (
    <>
      <p>This post is about the good stuff I have done during my sabbatical.</p>
    </>
  )
}

const cloudinaryBase = 'https://res.cloudinary.com/barhamon/image/upload/';
const cloudinaryResize = 'c_scale,w_150';


const firstSlider = [
  '1_-_1_hcj573.jpg', '1_-_5_gr6yil.jpg',
  '1_-_4_lpalov.jpg', '1_-_6_vjetlj.jpg',
  '1_-_3_biuiyb.jpg', '1_-_2_vmiqpu.jpg',
  '1_-_18_eyygvu.jpg', '1_-_22_dbzepj.jpg',
  '1_-_23_iqntbs.jpg', '1_-_24_x43efc.jpg',
  '1_-_21_cbaatp.jpg', '1_-_15_vydeku.jpg',
  '1_-_14_bk4vkd.jpg', '1_-_20_ndtqti.jpg',
  '1_-_11_x4b4do.jpg', '1_-_19_sgkcoq.jpg',
  '1_-_17_mmkcid.jpg', '1_-_16_nmsqwd.jpg',
  '1_-_7_brarle.jpg', '1_-_13_ci1bkt.jpg',
  '1_-_12_fe4fji.jpg', '1_-_4_qsosds.jpg',
  '1_-_3_qo1yrj.jpg', '1_-_10_ffhh0m.jpg',
  '1_-_9_dlxjux.jpg', '1_-_2_ueesmj.jpg',
  '1_-_5_msxdwd.jpg', '1_-_8_oe7yng.jpg',
  '1_-_6_hu4xbe.jpg', '1_-_1_ov1gg9.jpg'
].map(a => ({
  original: `${cloudinaryBase}v1607017946/short_motorcycle_adventures_2020/${a}`,
  thumbnail: `${cloudinaryBase}${cloudinaryResize}/v1607017946/short_motorcycle_adventures_2020/${a}`,
}));


const secondSlider = [
  '1_-_15_be2sud.jpg', '1_-_16_i2zhzr.jpg',
  '1_-_9_rnck8b.jpg', '1_-_17_ruj5ai.jpg',
  '1_-_10_czzh7t.jpg', '1_-_14_s9az4z.jpg',
  '1_-_11_tam0qw.jpg', '1_-_13_duyhph.jpg',
  '1_-_12_csmxpu.jpg', '1_-_5_mh45so.jpg',
  '1_-_8_kyfxhy.jpg', '1_-_6_gflq9s.jpg',
  '1_-_7_tdgtmv.jpg', '1_-_3_o41ve1.jpg',
  '1_-_2_zdgqpx.jpg', '1_-_4_mdnt7r.jpg',
  '1_-_1_sjdaxq.jpg'
].map(a => ({
  original: `${cloudinaryBase}v1607026328/fishing_october_2020/${a}`,
  thumbnail: `${cloudinaryBase}${cloudinaryResize}/v1607026328/fishing_october_2020/${a}`,
}));

const thirdSlider = [
  '1_-_26_ge6eca.jpg', '1_-_29_kfizhx.jpg',
  '1_-_32_s6dlof.jpg', '1_-_28_mxoltx.jpg',
  '1_-_30_k6d5sk.jpg', '1_-_31_rfkaxc.jpg',
  '1_-_27_sfatle.jpg', '1_-_23_eyg95n.jpg',
  '1_-_25_avhh1n.jpg', '1_-_12_i7hnjc.jpg',
  '1_-_21_jrbsnm.jpg', '1_-_24_zvrofu.jpg',
  '1_-_6_mtja9o.jpg', '1_-_22_qrxylg.jpg',
  '1_-_20_x7uepb.jpg', '1_-_14_e0ipmx.jpg',
  '1_-_19_hepies.jpg', '1_-_15_hciznz.jpg',
  '1_-_17_pjweit.jpg', '1_-_18_cqxeh8.jpg',
  '1_-_16_fzgh7f.jpg', '1_-_8_xw03zm.jpg',
  '1_-_13_cjxrpa.jpg', '1_-_5_i8yzup.jpg',
  '1_-_10_xgvhgq.jpg', '1_-_2_yy7fo5.jpg',
  '1_-_4_rgzbq6.jpg', '1_-_9_vdanma.jpg',
  '1_-_7_sqx1kj.jpg', '1_-_1_xdtpin.jpg',
  '1_-_3_vdtzkk.jpg'
].map(a => ({
  original: `${cloudinaryBase}v1607027307/carpathian_mountains_2020/${a}`,
  thumbnail: `${cloudinaryBase}${cloudinaryResize}/v1607027307/carpathian_mountains_2020/${a}`,
}));


const TheFunStuffFull: React.FC = () => {
  return (
    <>
      <TheFunStuffPreview/>
      <p>I wrote already about my <Link as={`/post/central_ukraine`} href={`/post/[pid]`}><a>two-day motorcycle trip</a></Link>.
        Also, I`ve made many short one-day trips about which I did not write. They are still fun and exciting. The thing
        I like the most about adventure motorcycling is the freedom to choose the way. You can go wherever you want,
        even if there are no roads. Time is the only constraint, but you can go pretty far and see a lot on a
        motorcycle.</p>
      <p>Here some pictures I took during those one-day trips:</p>
      <ImageGallery items={firstSlider} lazyLoad={true}/>
      <Divider/>
      <p>I also went fishing with my friends. We lived almost a week in tents on a border between Ukraine and Belarus.
        It was terrific. Our home was a small island between Dnepr and Starik rivers, with nobody around. We caught enough
        fish to cook it every day, and mushrooms grew just behind our tents.</p>
      <p>We are very fortunate with the weather. Have no rain, and some days were so sunny, I even think of swimming,
        but the river was icy. And that was the end of October.</p>
      <p>One night, we go for a walk around our island. It was a little bit scary, and also very beautiful. You know,
        trees in the light of flashlights, the shadows, sounds of birds and animals, found some plants that glowed in
        the dark. Unfortunately, no photo can convey what it was. So you have to take my word for it.</p>
      <p>Here some photos from that week:</p>
      <ImageGallery items={secondSlider} lazyLoad={true}/>
      <Divider/>
      <p>Also, for the first time in my life, I hiked to the mountain summit. It was not something like Everest, only
        1500 height. But that was awesome, and I think I got a new hobby :)</p>

      <p>My wife Mari and I spend ten days in the Carpathian mountains. Almost every day we go on a hike. Drank water
        from mountain streams, cooked food on our small gas stove. Even found a new friend, a little doggo with no name,
        but we call it Palkan. </p>
      <p>And here some foto as well: </p>
      <ImageGallery items={thirdSlider} lazyLoad={true}/>
      <Divider/>
      <p>We even shot a short clip on the way home because what can be better than mountains?</p>
      <p>Plug your headphones, make it 4k and fullscreen</p>
      <iframe style={{ width: "100%", height: "300px" }} src="https://www.youtube.com/embed/OmiYnAqKotM" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      <Divider/>
      <p>This is not a full list of activities, but you should get the idea of what makes me happy :)</p>
    </>
  )
}

export const the_fun_stuff = {
  pid: "the_fun_stuff",
  header: "The fun stuff",
  time: 1607029309563,
  image: '/img/the_fun_stuff.jpeg',
  tags: ['blog', 'adventure', 'mountains'],
  description: "You can do all sorts of things while unemployed. Here is a list of what I`ve done",
  Preview: TheFunStuffPreview,
  Full: TheFunStuffFull
}

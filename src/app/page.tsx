import { groq } from "next-sanity";
import HeroImage from "../components/HeroImage/HeroImage";
import { client, imageUrlBuilder } from "../utils";
import { HeroImageResponse } from "../types";

const heroQuery = groq`*[_type == "heroimage"][0]`;
export async function getHero() {
  const hero = await client.fetch<HeroImageResponse>(heroQuery);
  return hero;
}

export default async function Home() {
  const hero = await getHero();
  const img = imageUrlBuilder(hero.heroimage.asset._ref).url();
  return (
    <div>
      <HeroImage imageUrl={img} title={hero.herotitle} />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((p, i) => (
        <p key={i + 1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis porro
          omnis earum dolorum officia veniam error, recusandae voluptatum
          tenetur libero iure deserunt natus, possimus rem hic id, dolorem
          quaerat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nobis porro omnis earum dolorum officia veniam error, recusandae
          voluptatum tenetur libero iure deserunt natus, possimus rem hic id,
          dolorem quaerat aliquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nobis porro omnis earum dolorum officia veniam
          error, recusandae voluptatum tenetur libero iure deserunt natus,
          possimus rem hic id, dolorem quaerat aliquam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nobis porro omnis earum dolorum
          officia veniam error, recusandae voluptatum tenetur libero iure
          deserunt natus, possimus rem hic id, dolorem quaerat aliquam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nobis porro omnis
          earum dolorum officia veniam error, recusandae voluptatum tenetur
          libero iure deserunt natus, possimus rem hic id, dolorem quaerat
          aliquam.
        </p>
      ))}
    </div>
  );
}

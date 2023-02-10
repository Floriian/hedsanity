import Image from "next/image";
import { Allison } from "@next/font/google";

const allison = Allison({
  weight: "400",
});

type Props = {
  imageUrl: string;
  title: string;
};

export default function HeroImage({ imageUrl, title }: Props) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={imageUrl}
        alt="Hero image"
        width={1920}
        height={1080}
        className="max-h-[840px] w-full rounded-b-xl object-cover"
      />
      <h1
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center uppercase text-black text-2xl tracking-widest"
        }
      >
        The art of
        <span
          className={
            allison.className + " font-bold text-4xl tracking-[0.15em]"
          }
        >
          Photography
        </span>
      </h1>
    </div>
  );
}

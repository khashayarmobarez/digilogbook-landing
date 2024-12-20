import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { brands } from "@/utils/FakeApiBackup";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

const ReviewCard = ({name,id,image}) => {

    return (
      <figure className=" w-[40vw] h-40 md:w-[30vw] md:h-60 border border-neutralDark flex flex-col justify-between items-center -mx-2 py-6 text-center md:py-16">
            {
                image?.path &&
                <Image src={image.path} alt={image.name} width={100} height={100} className="rounded-full" />
            }
            <figcaption className="text-xs font-medium dark:text-white md:text-sm justify-self-end">{name}</figcaption>
      </figure>
    );
  };

export default function BrandsMarquee() {
  return (
    <div className="relative flex h-[200px] md:h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-primaryLight my-6">
      <Marquee pauseOnHover className="[--duration:25s]">
        {brands.data.map((brand) => (
          <ReviewCard key={brand.id} {...brand} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primaryLight dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primaryLight dark:from-background"></div>
    </div>
  );
}

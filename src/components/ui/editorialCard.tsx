import Image from "next/image";
import { Card } from "./card";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Button } from "./button";
import { Heading } from "./heading";

type EditorialCardProps = {
  prefix?: string;
  image?: boolean;
  title: string;
  author?: string;
  date?: string;
  company?: string;
  href: string;
};

export function EditorialCard({
  href,
  title,
  author,
  company,
  date,
  image,
  prefix = "Getting Started",
}: EditorialCardProps) {
  return (
    <Card
      className={cn(
        "group transition-all duration-200 gap-8 sm:min-h-79 rounded-[18px]",
        image ? "col-span-2" : "",
      )}
    >
      {image && (
        <div className="flex w-1/2">
          <Image
            src={"/sections/images/cards/cardImage.webp"}
            width={295}
            height={267}
            alt="cardImage"
            className="rounded-lg min-h-66.75"
          />
        </div>
      )}
      <div
        className={cn(
          "flex flex-col justify-between p-2",
          image ? "w-1/2" : "w-full",
        )}
      >
        <div className="flex flex-col gap-3">
          <div className="font-mono text-xs text-[#2490BB]">{prefix}</div>
          <Heading level={3} className="text-[27px] leading[1.2] text-wrap">
            {title}
          </Heading>
          {(author || date) && (
            <div className="flex items-center gap-3 text-sm text-[#64A8C4]">
              {author && <span>{author}</span>}
              {date && <span>{date}</span>}
            </div>
          )}
          {company && (
            <Image
              src={company}
              alt={"company"}
              height={24}
              width={30}
              className="h-10 w-30 object-contain"
            />
          )}
        </div>

        <Button variant="secondary" className="opacity-50 py-2.5">
          <Link href={href}>READ MORE</Link>
        </Button>
      </div>
    </Card>
  );
}

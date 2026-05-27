import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/utils/cn";

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
        "group flex h-full w-full flex-col gap-6 rounded-[18px] transition-all duration-200 lg:flex-row",
        image ? "lg:col-span-2" : "",
      )}
    >
      {image ? (
        <div className="relative min-h-48 w-full overflow-hidden rounded-[14px] lg:min-h-full lg:w-1/2">
          <Image
            src="/sections/images/cards/cardImage.webp"
            alt="cardImage"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      ) : null}

      <div
        className={cn(
          "flex min-h-60 sm:min-h-80 w-full flex-1 flex-col justify-between p-2",
          image ? "lg:w-1/2" : "w-full",
        )}
      >
        <div className="flex flex-col gap-3">
          <div className="font-mono text-xs text-[#2490BB]">{prefix}</div>
          <Heading level={3} className="text-[27px] leading-[1.2] text-wrap">
            {title}
          </Heading>
          {author || date ? (
            <div className="flex items-center gap-3 text-sm text-[#64A8C4]">
              {author ? <span>{author}</span> : null}
              {date ? <span>{date}</span> : null}
            </div>
          ) : null}
          {company ? (
            <Image
              src={company}
              alt="company"
              height={24}
              width={30}
              className="h-10 w-30 object-contain"
            />
          ) : null}
        </div>

        <Button variant="secondary" className="w-fit opacity-50 py-2.5">
          <Link href={href}>READ MORE</Link>
        </Button>
      </div>
    </Card>
  );
}

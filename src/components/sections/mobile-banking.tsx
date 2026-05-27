import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "./cta-banner";

type PhoneComponentProps = {
  src: string;
  title: string;
  description: string;
  list: string[];
};

const phoneContentList = [
  {
    src: "/sections/images/mobileBanking/mobileBanking-1.webp",
    title: "All-in-one digital banking",
    description:
      "N7's digital banking solution provides a comprehensive suite of features that enable financial institutions to offer a seamless and personalized banking experience to their customers.",
    list: [
      "Pre-integrated Security System.",
      "Pre-integrated Security System.",
      "Pre-integrated Security System.",
    ],
  },
  {
    src: "/sections/images/mobileBanking/mobileBanking-2.webp",
    title: "All-in-one digital banking",
    description:
      "N7's digital banking solution provides a comprehensive suite of features that enable financial institutions to offer a seamless and personalized banking experience to their customers.",
    list: [
      "Pre-integrated Security System.",
      "Pre-integrated Security System.",
      "Pre-integrated Security System.",
    ],
  },
  {
    src: "/sections/images/mobileBanking/mobileBanking-3.webp",
    title: "All-in-one digital banking",
    description:
      "N7's digital banking solution provides a comprehensive suite of features that enable financial institutions to offer a seamless and personalized banking experience to their customers.",
    list: [
      "Pre-integrated Security System.",
      "Pre-integrated Security System.",
      "Pre-integrated Security System.",
    ],
  },
];

const PhoneComponent = ({
  src,
  title,
  description,
  list,
}: PhoneComponentProps) => {
  return (
    <div className="z-10 flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
      <Image
        src={src}
        width={268}
        height={543}
        alt={title}
        className="h-auto w-full max-w-[18rem] min-w-0 lg:w-auto lg:min-h-135.75 lg:min-w-67"
      />
      <div className="flex w-full flex-col gap-6 lg:gap-11">
        <div className="flex flex-col gap-4 text-base leading-[1.3] lg:gap-6">
          <Heading level={3} className="font-medium">
            {title}
          </Heading>
          <div className="opacity-70">{description}</div>
        </div>
        <ul className="flex flex-col gap-2 lg:gap-3">
          {list.map((item, index) => (
            <li key={index} className="flex items-center gap-2 font-medium">
              <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-[#00B4FD] to-[#003ACE]">
                <Check height={10} width={10} className="text-foreground" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileBanking = () => {
  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[25%] top-[5%] z-0 overflow-hidden opacity-50"
      >
        <Image
          src={"/sections/images/mobileBanking/bg-1.webp"}
          alt=""
          height={396}
          width={680}
          className=" object-contain"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[20%] z-0 overflow-hidden opacity-50"
      >
        <Image
          src={"/sections/images/mobileBanking/bg-2.webp"}
          alt=""
          height={1246}
          width={480}
          className=" object-contain"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 overflow-hidden opacity-50"
      >
        <Image
          src={"/sections/images/mobileBanking/bg-3.webp"}
          alt=""
          height={1048}
          width={491}
          className=" object-contain"
        />
      </div>
      <div className="flex items-center gap-6 overflow-hidden bg-white py-6 text-5xl font-medium leading-[1.2] text-background">
        <Image
          src={"/sections/svgs/mobileBanking/star.svg"}
          alt=""
          width={44}
          height={44}
        />
        <span className="bg-linear-to-r from-[#00B4FD] to-[#003ACE] bg-clip-text text-transparent">
          N7
        </span>
        <Image
          src={"/sections/svgs/mobileBanking/star-full.svg"}
          alt=""
          width={58}
          height={58}
        />
        <div className="text-nowrap font-semibold">
          Say 👋 to the new way of banking
        </div>
        <Image
          src={"/sections/svgs/mobileBanking/star-full.svg"}
          alt=""
          width={58}
          height={58}
        />
        <span className="bg-linear-to-r from-[#00B4FD] to-[#003ACE] bg-clip-text text-transparent">
          CB7
        </span>
        <Image
          src={"/sections/svgs/mobileBanking/star-full.svg"}
          alt=""
          width={58}
          height={58}
        />
        <div className="text-nowrap font-semibold">
          Say 👋 to the new way of banking
        </div>
      </div>
      <Container className="bg-foreground flex flex-col gap-16 py-16 md:py-20 lg:gap-40 lg:py-25">
        <div className="z-10 flex w-full flex-col gap-12 text-[#000D12] lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col gap-9 lg:w-1/4">
            <div className="flex flex-col gap-4">
              <Heading
                level={2}
                className="text-3xl font-medium leading-[1.2] md:text-4xl lg:text-4xl"
              >
                Digital banking out-of-the-box
              </Heading>
              <div className="text-wrap leading-[1.3] opacity-70">
                N7 helps your financial institution improve the client
                experience, automate and optimize procedures
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 sm:w-1/2 lg:w-1/2">
              <Button variant="primary" className="text-foreground">
                REQUEST DEMO
              </Button>
              <div className="flex items-center gap-2 bg-linear-to-r from-[#00B4FD] to-[#003ACE] bg-clip-text font-mono text-sm text-transparent">
                <span className="underline">LEARN</span> MORE
                <ArrowRight height={14} width={14} className="text-[#003ACE]" />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-16 lg:w-1/2 lg:gap-27.5">
            {phoneContentList.map((content, index) => (
              <PhoneComponent key={index} {...content} />
            ))}
          </div>
        </div>
        <CtaBanner
          variant="n7"
          title="Take the full advantage of going paper-less now."
          description="N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations "
          primaryLabel="REQUEST DEMO"
          secondaryLabel="CONTACT US"
        />
      </Container>
    </Section>
  );
};

export default MobileBanking;

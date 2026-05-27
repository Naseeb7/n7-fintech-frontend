import React from "react";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import Image from "next/image";
import { Heading } from "../ui/heading";
import { Button } from "../ui/button";
import { ArrowRight, Check } from "lucide-react";
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
    <div className="flex justify-between items-center gap-20 z-10">
      <Image
        src={src}
        width={268}
        height={543}
        alt={title}
        className="h-auto w-auto min-h-135.75 min-w-67"
      />
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-6 text-base leading-[1.3]">
          <Heading level={3} className="font-medium">
            {title}
          </Heading>
          <div className="opacity-70">{description}</div>
        </div>
        <ul className="flex flex-col gap-3">
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
        className="pointer-events-none absolute overflow-hidden  top-[5%] left-[25%] opacity-50 z-0"
      >
        <Image
          src={"/sections/images/mobileBanking/bg-1.webp"}
          alt=""
          height={396}
          width={680}
          className={"object-contain"}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute overflow-hidden  top-[20%] left-0 opacity-50 z-0"
      >
        <Image
          src={"/sections/images/mobileBanking/bg-2.webp"}
          alt=""
          height={1246}
          width={480}
          className={"object-contain"}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute overflow-hidden  bottom-0 right-0 opacity-50 z-0"
      >
        <Image
          src={"/sections/images/mobileBanking/bg-3.webp"}
          alt=""
          height={1048}
          width={491}
          className={"object-contain "}
        />
      </div>
      <div className="bg-white py-6 flex items-center gap-6 text-5xl font-medium leadig-[1.2] text-background overflow-hidden">
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
        <div className="font-semibold text-nowrap">
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
        <div className="font-semibold text-nowrap">
          Say 👋 to the new way of banking
        </div>
      </div>
      <Container className="bg-foreground flex flex-col py-25 gap-40">
        <div className="text-[#000D12] flex w-full justify-between z-10">
          <div className="flex flex-col gap-9 w-1/4">
            <div className="flex flex-col gap-4">
              <Heading level={2} className="text-4xl font-medium leading-[1.2]">
                Digital banking out-of-the-box
              </Heading>
              <div className="leading-[1.3] opacity-70 text-wrap">
                N7 helps your financial institution improve the client
                experience, automate and optimize procedures
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
              <Button variant="primary" className="text-foreground">
                REQUEST DEMO
              </Button>
              <div className="flex gap-2 bg-linear-to-r from-[#00B4FD] to-[#003ACE] bg-clip-text text-transparent items-center font-mono text-sm">
                <span className="underline">LEARN</span> MORE
                <ArrowRight height={14} width={14} className="text-[#003ACE]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-27.5 w-1/2">
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

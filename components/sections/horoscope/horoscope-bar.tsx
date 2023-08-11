import { IFetchData } from "@/interface/ICommon";
import { Sign } from "@/src/component/calculator/confirmBirthCard";
import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import Paragraph from "@/src/component/paragraph";
import Text from "@/src/component/text";
import { findComponent } from "@/utils/arrayFunc";
import Link from "next/link";
import { Key, useState } from "react";

interface Props {
  data: IFetchData;
  extra?: string;
}

export default function HoroscopeBarCardCalculator({ data, extra }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant!].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);
  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const cardComponent = findComponent("CARDS", components);

  return (
    <div style={styles} className={`md:py-20 py-14 w-full ${extra}`}>
      <div className={` flex flex-col gap-14`}>
        <div
          className={`flex px-5 max-w-3xl mx-auto text-center flex-col gap-5 w-full`}
        >
          {allowedComponents.includes("HEADLINE") && headlineComponent && (
            <Text
              size={headlineComponent?.props?.size?.value || "5xl"}
              variant={headlineComponent?.props?.variant?.value || "h2"}
              weight={headlineComponent?.props?.weight?.value || "bold"}
              color={headlineComponent?.props?.color?.value}
            >
              {headlineComponent?.props.content.value}
            </Text>
          )}
          {allowedComponents.includes("CONTENT") && paragraphComponent && (
            <Paragraph
              extra="max-w-3xl"
              size={paragraphComponent?.props?.size?.value || "lg"}
            >
              {paragraphComponent?.props?.content?.value}
            </Paragraph>
          )}
        </div>
        <div className="w-full border-t border-b border-third">
          {allowedComponents.includes("CONTENT") && paragraphComponent && (
            <div
              className={`mx-auto max-w-7xl  grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 w-full `}
            >
              {cardComponent?.props?.zodiac_signs?.value?.map(
                (item: any, i: Key | null | undefined) => (
                  <BarIconHoroscopeCard data={item} key={i} />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BarIconHoroscopeCard({ data }: { data: any }) {
  return (
    <>
      <Link
        href={
          "/horoscope/" +
          data?.label?.toLowerCase() +
          "-" +
          "daily" +
          "-horoscope"
        }
        legacyBehavior
      >
        <a
          className={`flex  text-white hover:text-zinc-800  flex-col items-center hover:bg-third group py-7`}
        >
          <div className="w-full text-third group-hover:text-zinc-800 flex items-center justify-center">
            <Sign
              size="md:text-[50px]  text-[40px]"
              name={data?.label}
              color={`currentcolor`}
            />
          </div>

          <p className="block mt-1 text-current capitalize">
            {data?.props?.text?.value}
          </p>
        </a>
      </Link>
    </>
  );
}

import { IFetchData } from "@/interface/ICommon";
import { horoscopeDate } from "@/jsondata/horoscopeSign";
import { Sign } from "@/src/component/calculator/confirmBirthCard";
import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import Paragraph from "@/src/component/paragraph";
import Text from "@/src/component/text";
import { findComponent } from "@/utils/arrayFunc";
import Link from "next/link";
import { useRouter } from "next/router";
import { Key, useState } from "react";

interface Props {
  data: IFetchData;
  extra?: string;
}

function getGridLayoutStyleFunc(name: string) {
  let object: any = {};
  switch (name) {
    case "horoscope_style_two":
    case "horoscope_style_four":
      object["content_flex"] = "items-start justify-start text-left";
      object["layout_width"] = "max-w-6xl mx-auto";
      object["layout"] =
        "gap-3 sm:grid-cols-3 grid-cols-2 md:grid-cols-6 max-w-6xl";
      break;
    case "horoscope_style_three":
      object["custom_border"] = "border-b border-third pb-4";
      object["content_flex"] = "items-start justify-start text-left";
      object["layout_width"] = "max-w-7xl mx-auto";
      object["layout"] =
        "gap-10 sm:grid-cols-3 grid-cols-2 md:grid-cols-4 max-w-7xl";
      break;
    default:
      object["layout_width"] = "max-w-6xl mx-auto";
      object["content_flex"] = "items-center text-center";
      object["layout"] = "gap-5 grid-cols-2 md:grid-cols-4 max-w-6xl";
      break;
  }
  return object;
}

export default function HoroscopeCardCalculator({ data, extra }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant!].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);
  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const cardComponent = findComponent("CARDS", components);

  const getGridLayoutstyle = getGridLayoutStyleFunc(data?.currentVariant!);
  const currentVariant = data?.currentVariant;
  return (
    <div style={styles} className={`md:py-20 py-14 px-5  w-full ${extra}`}>
      <div
        className={`${getGridLayoutstyle?.layout_width} flex flex-col gap-14`}
      >
        <div
          className={`flex ${getGridLayoutstyle?.custom_border} ${getGridLayoutstyle?.content_flex} flex-col gap-5 w-full`}
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
        <div>
          {allowedComponents.includes("CONTENT") && paragraphComponent && (
            <div
              className={`mx-auto grid w-full ${getGridLayoutstyle?.layout}`}
            >
              {cardComponent?.props?.zodiac_signs?.value?.map(
                (item: any, i: Key | null | undefined) => (
                  <>
                    {currentVariant == "horoscope_style_three" ? (
                      <HoroscopeImageCard data={item} key={i} />
                    ) : (
                      <>
                        {currentVariant == "horoscope_style_four" ? (
                          <ImageHoroscopeCard data={item} key={i} />
                        ) : (
                          <IconHoroscopeCard data={item} key={i} />
                        )}
                      </>
                    )}
                  </>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function IconHoroscopeCard({ data }: { data: any }) {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() =>
          router.push(
            `/horoscope/${data?.label?.toLowerCase()}-daily-horoscope`
          )
        }
        className="p-5 text-white hover:text-secondary cursor-pointer hover:border-secondary duration-100 ease-in text-center border border-third flex flex-col items-center w-full"
      >
        <Sign
          size="md:text-[50px] text-[40px]"
          name={data?.label}
          color="#E8E0C0"
        />
        <div className="flex flex-col gap-2">
          <h5 className="dark:text-white text-zinc-800">
            {data?.props?.text?.value}
          </h5>
          <p className="dark:text-zinc-300 text-zinc-600 text-sm">
            {(horoscopeDate as any)[data?.label]}
          </p>
        </div>
      </div>
    </>
  );
}

function ImageHoroscopeCard({ data }: { data: any }) {
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
          className={`flex mb-3 mx-2 md:mx-3 text-white  gap-2 flex-col items-center group`}
        >
          <img
            src={`/zodiac/${data?.label.toLowerCase()}-zodiac.png`}
            className="w-full h-full object-cover"
            loading="lazy"
            alt={data?.label}
          />

          <h6 className="block mt-1 group-hover:uderline text-current capitalize">
            {data?.props?.text?.value}
          </h6>
        </a>
      </Link>
    </>
  );
}

export function HoroscopeImageCard({ data }: { data: any }) {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(`/horoscope/${data?.label?.toLowerCase()}-daily-horoscope`)
      }
      className=" w-full group cursor-pointer flex items-center gap-5"
    >
      <span className=" w-[80px] h-[80px] rounded-full overflow-hidden text-white">
        <img
          src={`/zodiac/${data?.label.toLowerCase()}-zodiac.png`}
          className="w-full h-full object-cover"
          loading="lazy"
          alt={data?.label}
        />
      </span>
      <div className="flex flex-col gap-1 items-start">
        <h2 className="text-lg duration-100 ease-in group-hover:underline md:text-xl text-white flex gap-2 items-center">
          {data?.props?.text?.value}
        </h2>
        <p className="text-sm w-full text-zinc-300">
          {" "}
          {(horoscopeDate as any)[data?.label]}
        </p>
      </div>
    </div>
  );
}

import React from "react";
import dynamic from "next/dynamic";
import { IFetchData } from "@/interface/ICommon";

// Dynamically import sections. These won't be loaded until they're used.
const sectionsMap: any = {
  grids: {
    default: dynamic(
      () => import("@/components/sections/calculators/grid-card-calculator")
    ),
    gridCardsStyleTwo: dynamic(
      () =>
        import("@/components/sections/calculators/grid-icon-card-calculator")
    ),
  },
  cta: {
    color: dynamic(
      () =>
        import("../../components/sections/callToAction.tsx/callToActionStyle1")
    ),
    CTAStyleFour: dynamic(
      () =>
        import("../../components/sections/callToAction.tsx/callToActionStyle1")
    ),
  },
  "split-section": {
    ContentImageRight: dynamic(
      () => import("@/components/sections/image-text")
    ),
    ContentImageLeft: dynamic(() => import("@/components/sections/image-text")),
    HeadlineContentImageRight: dynamic(
      () => import("@/components/sections/image-text")
    ),
    HeadlineContentImageLeft: dynamic(
      () => import("@/components/sections/image-text")
    ),
    HeadlineContentButtonImageRight: dynamic(
      () => import("@/components/sections/image-text")
    ),
    HeadlineContentButtonImageLeft: dynamic(
      () => import("@/components/sections/image-text")
    ),
  },
  "birth-chart": dynamic(
    () => import("@/components/sections/forms/birthChart")
  ),
  synastry_chart: dynamic(
    () => import("../../src/component/forms/synastryCalculator")
  ),
  zodiac_compatibility: dynamic(
    () => import("@/src/component/zodiac-compatibility")
  ),
  yes_no_tarot: dynamic(() => import("@/src/component/tarot/yes-no-tarot")),
  "9_spread_tarot": dynamic(() => import("@/src/component/tarot/9SpreadTarot")),
  tarot_prediction: dynamic(
    () => import("@/src/component/tarot/tarot-prediction")
  ),
};

export default function SectionList({ data }: { data: IFetchData }) {
  const sectionId = data?.id;

  let SectionComponent;
  const { currentVariant } = data;

  if (currentVariant) {
    // If a currentVariant is provided in the JSON, fetch the component for that style
    const sectionStyles = sectionsMap[sectionId];
    if (!sectionStyles) return <div>Section not found</div>;
    SectionComponent = sectionStyles[currentVariant];
  } else {
    // If no currentVariant is provided, get the primary section component
    SectionComponent = sectionsMap[sectionId];
  }

  if (!SectionComponent) {
    return <div>Section not found</div>;
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <SectionComponent data={data} />
    </React.Suspense>
  );
}

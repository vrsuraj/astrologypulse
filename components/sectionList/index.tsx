import React from "react";
import dynamic from "next/dynamic";
import { IFetchData } from "@/interface/ICommon";

// Dynamically import sections. These won't be loaded until they're used.
const sectionsMap: any = {
  "split-section": {
    split_section_style_one: dynamic(
      () => import("@/components/sections/image-text")
    ),
    split_section_style_two: dynamic(
      () => import("@/components/sections/image-text")
    ),
    split_section_style_three: dynamic(
      () => import("@/components/sections/image-text")
    ),
    split_section_style_four: dynamic(
      () => import("@/components/sections/image-text")
    ),
    split_section_style_five: dynamic(
      () => import("@/components/sections/image-text")
    ),
    split_section_style_six: dynamic(
      () => import("@/components/sections/image-text")
    ),
    split_section_style_seven: dynamic(
      () => import("@/components/sections/image-text")
    ),
    split_section_style_eight: dynamic(
      () => import("@/components/sections/image-text")
    ),
  },
  horoscope: {
    horoscope_style_one: dynamic(
      () =>
        import("@/components/sections/horoscope/horoscope-grid-card-with-icon")
    ),
    horoscope_style_two: dynamic(
      () =>
        import("@/components/sections/horoscope/horoscope-grid-card-with-icon")
    ),
    horoscope_style_three: dynamic(
      () =>
        import("@/components/sections/horoscope/horoscope-grid-card-with-icon")
    ),
    horoscope_style_four: dynamic(
      () =>
        import("@/components/sections/horoscope/horoscope-grid-card-with-icon")
    ),
    horoscope_style_five: dynamic(
      () => import("@/components/sections/horoscope/horoscope-bar")
    ),
  },
  "synastry-chart": {
    synastry_chart_style_one: dynamic(
      () => import("@/src/component/forms/synastryCalculator")
    ),
    synastry_chart_style_two: dynamic(
      () => import("@/src/component/forms/synastryCalculator")
    ),
    synastry_chart_style_three: dynamic(
      () => import("@/src/component/forms/synastryCalculator")
    ),
    synastry_chart_style_four: dynamic(
      () => import("@/src/component/forms/synastryCalculator")
    ),
  },
  "birth-chart": {
    birth_chart_style_one: dynamic(
      () => import("@/components/sections/forms/birthChart")
    ),
    birth_chart_style_two: dynamic(
      () => import("@/components/sections/forms/birthChart")
    ),
    birth_chart_style_three: dynamic(
      () => import("@/components/sections/forms/birthChart")
    ),
  },
  "solar-return-chart": {
    solar_return_chart_style_one: dynamic(
      () => import("@/components/sections/forms/solarReturn")
    ),
    solar_return_chart_style_two: dynamic(
      () => import("@/components/sections/forms/solarReturn")
    ),
    solar_return_chart_style_three: dynamic(
      () => import("@/components/sections/forms/solarReturn")
    ),
    solar_return_chart_style_four: dynamic(
      () => import("@/components/sections/forms/solarReturn")
    ),
  },
  "transit-chart": {
    transit_chart_style_one: dynamic(
      () => import("@/components/sections/forms/transitForm")
    ),
    transit_chart_style_two: dynamic(
      () => import("@/components/sections/forms/transitForm")
    ),
    transit_chart_style_three: dynamic(
      () => import("@/components/sections/forms/transitForm")
    ),
    transit_chart_style_four: dynamic(
      () => import("@/components/sections/forms/transitForm")
    ),
  },
  cta: {
    cta_style_one: dynamic(
      () => import("@/components/sections/callToAction.tsx/callToActionStyle1")
    ),
    cta_style_two: dynamic(
      () => import("@/components/sections/callToAction.tsx/callToActionStyle1")
    ),
  },
  "tarot-prediction": {
    tarot_prediction_style_one: dynamic(
      () => import("@/src/component/tarot/tarot-prediction")
    ),
    tarot_prediction_style_two: dynamic(
      () => import("@/src/component/tarot/tarot-prediction")
    ),
    tarot_prediction_style_three: dynamic(
      () => import("@/src/component/tarot/tarot-prediction")
    ),
  },
  "yes-no-tarot": {
    yes_no_tarot_style_one: dynamic(
      () => import("@/src/component/tarot/yes-no-tarot")
    ),
    yes_no_tarot_style_two: dynamic(
      () => import("@/src/component/tarot/yes-no-tarot")
    ),
    yes_no_tarot_style_three: dynamic(
      () => import("@/src/component/tarot/yes-no-tarot")
    ),
  },
  "9-spread-tarot": {
    nine_spread_tarot_style_one: dynamic(
      () => import("@/src/component/tarot/9SpreadTarot")
    ),
    nine_spread_tarot_style_two: dynamic(
      () => import("@/src/component/tarot/9SpreadTarot")
    ),
    nine_spread_tarot_style_three: dynamic(
      () => import("@/src/component/tarot/9SpreadTarot")
    ),
  },
  featured: {
    featured_style_one: dynamic(
      () => import("@/components/sections/featuredCard/feturedCardstyle1")
    ),
    featured_style_two: dynamic(
      () => import("@/components/sections/featuredCard/feturedCardstyle1")
    ),
    featured_style_three: dynamic(
      () => import("@/components/sections/featuredCard/feturedCardstyle1")
    ),
    featured_style_four: dynamic(
      () => import("@/components/sections/featuredCard/feturedCardstyle1")
    ),
  },
  "zodiac-compatibility": {
    zodiac_compatibility_style_one: dynamic(
      () => import("@/src/component/zodiac-compatibility")
    ),
    zodiac_compatibility_style_two: dynamic(
      () => import("@/src/component/zodiac-compatibility")
    ),
    zodiac_compatibility_style_three: dynamic(
      () => import("@/src/component/zodiac-compatibility")
    ),
  },
  numerology: {
    numerology_style_one: dynamic(
      () => import("@/components/sections/forms/numerology")
    ),
    numerology_style_two: dynamic(
      () => import("@/components/sections/forms/numerology")
    ),
    numerology_style_three: dynamic(
      () => import("@/components/sections/forms/numerology")
    ),
    numerology_style_four: dynamic(
      () => import("@/components/sections/forms/numerology")
    ),
    numerology_style_five: dynamic(
      () => import("@/components/sections/forms/numerology")
    ),
  },
  "lifepath-number-calculator": {
    lifepath_number_style_one: dynamic(
      () => import("@/components/sections/forms/lifePathNumber")
    ),
    lifepath_number_style_two: dynamic(
      () => import("@/components/sections/forms/lifePathNumber")
    ),
    lifepath_number_style_three: dynamic(
      () => import("@/components/sections/forms/lifePathNumber")
    ),
    lifepath_number_style_four: dynamic(
      () => import("@/components/sections/forms/lifePathNumber")
    ),
    lifepath_number_style_five: dynamic(
      () => import("@/components/sections/forms/lifePathNumber")
    ),
  },
  "personality-number-calculator": {
    personality_number_style_one: dynamic(
      () => import("@/components/sections/forms/personalityNumber")
    ),
    personality_number_style_two: dynamic(
      () => import("@/components/sections/forms/personalityNumber")
    ),
    personality_number_style_three: dynamic(
      () => import("@/components/sections/forms/personalityNumber")
    ),
    personality_number_style_four: dynamic(
      () => import("@/components/sections/forms/personalityNumber")
    ),
    personality_number_style_five: dynamic(
      () => import("@/components/sections/forms/personalityNumber")
    ),
  },
  "expression-calculator": {
    expression_calculator_style_one: dynamic(
      () => import("@/components/sections/forms/expressionNumber")
    ),
    expression_calculator_style_two: dynamic(
      () => import("@/components/sections/forms/expressionNumber")
    ),
    expression_calculator_style_three: dynamic(
      () => import("@/components/sections/forms/expressionNumber")
    ),
    expression_calculator_style_four: dynamic(
      () => import("@/components/sections/forms/expressionNumber")
    ),
    expression_calculator_style_five: dynamic(
      () => import("@/components/sections/forms/expressionNumber")
    ),
  },
  video: {
    video_stlye_one: dynamic(
      () => import("@/components/sections/video/centerVideo")
    ),
    video_stlye_two: dynamic(
      () => import("@/components/sections/video/centerVideo")
    ),
  },

  "hero-section": {
    hero_style_one: dynamic(
      () => import("@/components/sections/header/centerContentHeader")
    ),
    hero_style_two: dynamic(
      () => import("@/components/sections/header/centerContentHeader")
    ),
    hero_style_three: dynamic(
      () => import("@/components/sections/header/centerContentHeader")
    ),
  },
  grids: {
    grids_style_one: dynamic(
      () => import("@/components/sections/calculators/grid-card-calculator")
    ),
    //"@/components/sections/calculators/grid-card-calculator",
    grids_style_two: dynamic(
      () => import("@/components/sections/calculators/grid-card-calculator")
    ),
    grids_style_three: dynamic(
      () =>
        import("@/components/sections/calculators/grid-icon-card-calculator")
    ),
  },
};

export function SectionMapFunc(mainKey: string, subKey: string) {
  const importPath = sectionsMap[mainKey]?.[subKey];
  if (!importPath) {
    // throw new Error(`Invalid keys: ${mainKey}, ${subKey}`);
  }
  // return dynamic(() =>
  //   import(importPath).catch((err) => {
  //     console.error(`Failed to import module at path: ${importPath}`, err);
  //     return {};
  //   })
  // );
  return importPath;
}

export default function SectionList({ data }: { data: IFetchData }) {
  const sectionId = data?.id;
  let SectionComponent: any;
  const { currentVariant } = data;

  if (currentVariant) {
    SectionComponent = SectionMapFunc(sectionId, currentVariant);
  } else {
    // If no currentVariant is provided, get the primary section component
    SectionComponent = <div>Section not found</div>;
  }

  if (!SectionComponent) {
    return <div>Section not found</div>;
  }

  // console.log(SectionComponent);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <SectionComponent data={data} />
    </React.Suspense>
  );
}

// export default function SectionList({ data }: { data: IFetchData }) {
//   const sectionId = data?.id;

//   let SectionComponent;
//   const { currentVariant } = data;

//   if (currentVariant) {
//     // If a currentVariant is provided in the JSON, fetch the component for that style
//     const sectionStyles = (SectionMapFunc as any)(sectionId, currentVariant);
//     SectionComponent = sectionStyles;
//   }
//   if (!SectionComponent) {
//     return <div>Section not found</div>;
//   }

//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <SectionComponent data={data} />
//     </React.Suspense>
//   );
// }

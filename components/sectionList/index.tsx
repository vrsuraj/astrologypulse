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
    birth_chart_style_four: dynamic(
      () => import("@/components/sections/forms/birthChart")
    ),
    birth_chart_style_five: dynamic(
      () => import("@/components/sections/forms/birthChart")
    ),
  },
  "synastry-chart": {
    synastry_chart_style_one: dynamic(
      () => import("../../src/component/forms/synastryCalculator")
    ),
    synastry_chart_style_two: dynamic(
      () => import("../../src/component/forms/synastryCalculator")
    ),
    synastry_chart_style_three: dynamic(
      () => import("../../src/component/forms/synastryCalculator")
    ),
    synastry_chart_style_four: dynamic(
      () => import("../../src/component/forms/synastryCalculator")
    ),
  },
  "zodiac-compatibility": {
    default: dynamic(() => import("@/src/component/zodiac-compatibility")),
  },
  "yes-no-tarot": {
    default: dynamic(() => import("@/src/component/tarot/yes-no-tarot")),
    TarotCardWithoutContent: dynamic(
      () => import("@/src/component/tarot/yes-no-tarot")
    ),
    OnlyTarotCards: dynamic(() => import("@/src/component/tarot/yes-no-tarot")),
  },
  "9-spread-tarot": {
    default: dynamic(() => import("@/src/component/tarot/9SpreadTarot")),
  },
  "tarot-prediction": {
    default: dynamic(() => import("@/src/component/tarot/tarot-prediction")),
    TarotCardWithoutContent: dynamic(
      () => import("@/src/component/tarot/tarot-prediction")
    ),
    OnlyTarotCards: dynamic(
      () => import("@/src/component/tarot/tarot-prediction")
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
  "expression-number-calculator": {
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

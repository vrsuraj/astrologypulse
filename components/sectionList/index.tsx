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
  numerology: {
    default: dynamic(() => import("@/components/sections/forms/numerology")),
    NumerologyStyleThree: dynamic(
      () => import("@/components/sections/forms/numerology")
    ),
    NumerologyWithoutContent: dynamic(
      () => import("@/components/sections/forms/numerology")
    ),
    NumerologyStyleTwo: dynamic(
      () => import("@/components/sections/forms/numerology")
    ),
  },
  "lifepath-number-calculator": {
    default: dynamic(
      () => import("@/components/sections/forms/lifePathNumber")
    ),
    LifePathNumberCalculatorStyleTwo: dynamic(
      () => import("@/components/sections/forms/lifePathNumber")
    ),
    LifePathNumberCalculatorStyleThree: dynamic(
      () => import("@/components/sections/forms/lifePathNumber")
    ),
    LifePathNumberCalculatorWithoutContent: dynamic(
      () => import("@/components/sections/forms/lifePathNumber")
    ),
  },
  "personality-number-calculator": {
    default: dynamic(
      () => import("@/components/sections/forms/personalityNumber")
    ),
    PersonalityNumberCalculatorWithoutContent: dynamic(
      () => import("@/components/sections/forms/personalityNumber")
    ),
    PersonalityNumberCalculatorStyleTwo: dynamic(
      () => import("@/components/sections/forms/personalityNumber")
    ),
    PersonalityNumberCalculatorStyleThree: dynamic(
      () => import("@/components/sections/forms/personalityNumber")
    ),
  },
  "expression-number-calculator": {
    default: dynamic(
      () => import("@/components/sections/forms/expressionNumber")
    ),
    ExpressionNumberCalculatorWithoutContent: dynamic(
      () => import("@/components/sections/forms/expressionNumber")
    ),
    ExpressionNumberCalculatorStyleTwo: dynamic(
      () => import("@/components/sections/forms/expressionNumber")
    ),
    ExpressionNumberCalculatorStyleThree: dynamic(
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

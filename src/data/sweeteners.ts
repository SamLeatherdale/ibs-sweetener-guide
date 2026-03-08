import type { Sweetener } from "@/src/types";

export const sweeteners: Sweetener[] = [
  {
    id: "1",
    name: "Aspartame",
    code: "951",
    type: "Artificial",
    ibsStatus: "Safe",
    description:
      "A low-calorie artificial sweetener approximately 200 times sweeter than sugar. It is not a FODMAP and does not cause fermentation in the gut, making it generally tolerated by those with IBS.",
    alsKnownAs: "NutraSweet, Equal",
    commonUses: "Diet soft drinks, sugar-free gum, tabletop sweeteners",
  },
  {
    id: "2",
    name: "Sorbitol",
    code: "420",
    type: "Sugar Alcohol",
    ibsStatus: "Trigger",
    description:
      "A sugar alcohol (polyol) classified as a high-FODMAP ingredient. It is poorly absorbed in the small intestine, passes to the large intestine where gut bacteria ferment it, producing gas and causing bloating, cramps, and diarrhoea in IBS sufferers.",
    alsKnownAs: "D-glucitol",
    commonUses: "Sugar-free confectionery, chewing gum, stone fruits (apricots, peaches, plums)",
  },
  {
    id: "3",
    name: "Erythritol",
    code: "968",
    type: "Sugar Alcohol",
    ibsStatus: "Caution",
    description:
      "A sugar alcohol that is unique because it is mostly absorbed in the small intestine and excreted in urine before reaching the colon. Low doses are generally well tolerated, but large amounts can still cause digestive upset in sensitive individuals.",
    alsKnownAs: "Meso-erythritol",
    commonUses: "Stevia-blend sweeteners, keto products, sugar-free beverages",
  },
  {
    id: "4",
    name: "Stevia",
    code: "960",
    type: "Natural",
    ibsStatus: "Safe",
    description:
      "A natural, plant-derived sweetener extracted from the leaves of Stevia rebaudiana. It has zero calories, does not raise blood sugar, and is not a FODMAP. Pure stevia extract is considered safe for IBS sufferers.",
    alsKnownAs: "Steviol glycosides, Rebiana",
    commonUses: "Tabletop sweeteners, beverages, yoghurt, health foods",
  },
  {
    id: "5",
    name: "Sucralose",
    code: "955",
    type: "Artificial",
    ibsStatus: "Safe",
    description:
      "A zero-calorie artificial sweetener made from sugar through a chlorination process. It passes through the body largely undigested and is not classified as a FODMAP. Generally considered safe for people with IBS at normal consumption levels.",
    alsKnownAs: "Splenda",
    commonUses: "Baked goods, beverages, tabletop sweeteners",
  },
  {
    id: "6",
    name: "Mannitol",
    code: "421",
    type: "Sugar Alcohol",
    ibsStatus: "Trigger",
    description:
      "A polyol with poor absorption in the small intestine — even worse than sorbitol. It is a well-established high-FODMAP trigger and is known to cause significant osmotic laxative effects, bloating, and abdominal pain in IBS patients.",
    alsKnownAs: "Manna sugar",
    commonUses: "Sugar-free confectionery, some vegetables (mushrooms, cauliflower, celery)",
  },
  {
    id: "7",
    name: "Xylitol",
    code: "967",
    type: "Sugar Alcohol",
    ibsStatus: "Trigger",
    description:
      "A polyol with relatively low intestinal absorption, making it a moderate-to-high FODMAP. Regular or large intake can cause osmotic diarrhoea and gut fermentation symptoms. Common in dental products, where even residual amounts from gum can affect sensitive individuals.",
    alsKnownAs: "Wood sugar",
    commonUses: "Sugar-free chewing gum, mints, oral care products",
  },
  {
    id: "8",
    name: "Acesulfame K",
    code: "950",
    type: "Artificial",
    ibsStatus: "Safe",
    description:
      "A calorie-free artificial sweetener that is approximately 200 times sweeter than table sugar. It is not fermented by gut bacteria and is not a FODMAP. Often blended with other sweeteners to improve taste profiles.",
    alsKnownAs: "Acesulfame potassium, Ace-K, Sunett, Sweet One",
    commonUses: "Soft drinks, protein powders, baked goods, tabletop sweeteners",
  },
  {
    id: "9",
    name: "Saccharin",
    code: "954",
    type: "Artificial",
    ibsStatus: "Safe",
    description:
      "One of the oldest artificial sweeteners, saccharin is calorie-free and approximately 300–500 times sweeter than sugar. It is not a FODMAP and passes through the gut largely unmetabolised, making it generally safe for IBS sufferers.",
    alsKnownAs: "Sweet'N Low",
    commonUses: "Diet drinks, tabletop sweeteners, some medications",
  },
  {
    id: "10",
    name: "Maltitol",
    code: "965",
    type: "Sugar Alcohol",
    ibsStatus: "Trigger",
    description:
      "A sugar alcohol commonly used as a bulk sweetener in 'sugar-free' chocolate and confectionery. It has significant FODMAP content due to poor absorption in the small intestine and can cause considerable osmotic distress and fermentation symptoms in IBS sufferers.",
    alsKnownAs: "Hydrogenated maltose",
    commonUses: "Sugar-free chocolate, confectionery, ice cream",
  },
  {
    id: "11",
    name: "Thaumatin",
    code: "957",
    type: "Natural",
    ibsStatus: "Safe",
    description:
      "A natural protein extracted from the West African katemfe fruit. It is one of the most intensely sweet substances known, approximately 2,000–3,000 times sweeter than sugar. As a protein, it is digested normally and has no known FODMAP activity.",
    alsKnownAs: "Talin",
    commonUses: "Flavour modifier, chewing gum, pharmaceuticals",
  },
  {
    id: "12",
    name: "Isomalt",
    code: "953",
    type: "Sugar Alcohol",
    ibsStatus: "Caution",
    description:
      "A sugar alcohol derived from sucrose with about half the sweetness of sugar. It has lower FODMAP potential than sorbitol or mannitol, but large quantities can still ferment in the colon and cause digestive symptoms. Low-dose tolerance varies between individuals.",
    alsKnownAs: "Palatinit",
    commonUses: "Hard candies, sugar-free chocolates, decorative sugar work",
  },
];

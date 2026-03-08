import type { Sweetener } from "@/src/types";

export const sweeteners: Sweetener[] = [
  {
    id: "1",
    name: "Aspartame",
    code: "951",
    type: "artificial",
    ibsStatus: "safe",
    description: [
      "A low-calorie artificial sweetener approximately 200 times sweeter than sugar. It is composed of two amino acids (aspartic acid and phenylalanine) and is broken down during digestion.",
      "It is not a FODMAP and does not cause fermentation in the gut, making it generally well tolerated by those with IBS.",
      "People with phenylketonuria (PKU) must avoid it. Approved by FSANZ for use in Australia and New Zealand.",
    ],
    alsoKnownAs: "NutraSweet, Equal, E951",
    commonUses:
      "Diet soft drinks, sugar-free gum, tabletop sweeteners, flavoured water, sugar-free yoghurt, protein bars",
  },
  {
    id: "2",
    name: "Sorbitol",
    code: "420",
    type: "alcohol",
    ibsStatus: "trigger",
    description: [
      "A sugar alcohol (polyol) classified as a high-FODMAP ingredient by Monash University. It is poorly absorbed in the small intestine and passes to the large intestine where gut bacteria ferment it, producing gas and drawing water into the bowel.",
      "This causes bloating, cramps, and diarrhoea in IBS sufferers. Naturally present in many stone fruits.",
      "Even small amounts (as low as 5 g) can provoke symptoms in sensitive individuals.",
    ],
    alsoKnownAs: "D-glucitol, D-sorbitol, E420",
    commonUses:
      "Sugar-free confectionery, chewing gum, stone fruits (apricots, peaches, plums, cherries), sugar-free cough syrups, diet jams, dried fruit",
  },
  {
    id: "3",
    name: "Erythritol",
    code: "968",
    type: "alcohol",
    ibsStatus: "caution",
    description: [
      "A sugar alcohol that is unique among polyols because roughly 90% is absorbed in the small intestine and excreted unchanged in urine, meaning very little reaches the colon for fermentation.",
      "At low doses (up to about 0.5 g/kg body weight) it is generally well tolerated, but larger amounts can still cause nausea, borborygmi (stomach rumbling), and digestive upset in sensitive individuals.",
      "It provides roughly 70% of the sweetness of sugar with virtually zero calories.",
    ],
    alsoKnownAs: "Meso-erythritol, E968",
    commonUses:
      "Stevia-blend and monk fruit-blend sweeteners (e.g. Natvia, Lakanto), keto and low-carb products, sugar-free beverages, sugar-free chocolate, baking mixes",
  },
  {
    id: "4",
    name: "Stevia",
    code: "960",
    type: "natural",
    ibsStatus: "safe",
    description: [
      "A natural, plant-derived sweetener extracted from the leaves of Stevia rebaudiana, native to South America. The active sweet compounds are steviol glycosides (including stevioside and rebaudioside A).",
      "It has zero calories, does not raise blood sugar, and is not a FODMAP. Pure stevia extract (steviol glycosides) is considered safe for IBS sufferers.",
      "Note: some commercial stevia blends contain inulin, FOS, or sugar alcohols as bulking agents, which may be high-FODMAP — always check labels.",
    ],
    alsoKnownAs: "Steviol glycosides, Rebiana, Rebaudioside A, Reb A, E960",
    commonUses:
      "Tabletop sweeteners (e.g. Natvia, Stevia In The Raw), beverages, yoghurt, health foods, protein powders, sugar-free cordials",
  },
  {
    id: "5",
    name: "Sucralose",
    code: "955",
    type: "artificial",
    ibsStatus: "safe",
    description: [
      "A zero-calorie artificial sweetener made from sugar (sucrose) by selectively replacing three hydroxyl groups with chlorine atoms, making it approximately 600 times sweeter than sugar.",
      "It passes through the body largely undigested and unabsorbed, and is not classified as a FODMAP. Generally considered safe for people with IBS at normal consumption levels.",
      "Some granulated forms (e.g. Splenda) use maltodextrin as a bulking agent, which is low-FODMAP in typical amounts.",
    ],
    alsoKnownAs: "Splenda, E955",
    commonUses:
      "Baked goods, diet soft drinks, iced teas, tabletop sweeteners, protein shakes, sugar-free syrups, canned fruits",
  },
  {
    id: "6",
    name: "Mannitol",
    code: "421",
    type: "alcohol",
    ibsStatus: "trigger",
    description: [
      "A polyol with very poor absorption in the small intestine — even worse than sorbitol. Monash University classifies it as a high-FODMAP trigger.",
      "It has significant osmotic laxative effects, drawing water into the bowel, and is rapidly fermented by colonic bacteria, causing bloating, gas, abdominal pain, and diarrhoea in IBS patients.",
      "It occurs naturally in some foods like mushrooms, cauliflower, and celery, which is why these whole foods can also be problematic for IBS sufferers.",
    ],
    alsoKnownAs: "Manna sugar, Mannite, E421",
    commonUses:
      "Sugar-free confectionery, dusting powder for chewing gum, pharmaceutical tablets, naturally present in mushrooms, cauliflower, celery, and snow peas",
  },
  {
    id: "7",
    name: "Xylitol",
    code: "967",
    type: "alcohol",
    ibsStatus: "trigger",
    description: [
      "A five-carbon sugar alcohol with relatively low intestinal absorption, making it a moderate-to-high FODMAP. It provides a similar sweetness to sugar with about 40% fewer calories.",
      "Regular or large intake can cause osmotic diarrhoea and gut fermentation symptoms. Widely used in dental products for its anti-cariogenic (cavity-preventing) properties, where even residual amounts swallowed from gum can affect sensitive individuals.",
      "Extremely toxic to dogs.",
    ],
    alsoKnownAs: "Wood sugar, Birch sugar, E967",
    commonUses:
      "Sugar-free chewing gum, mints, oral care products (toothpaste, mouthwash), sugar-free confectionery, nasal sprays",
  },
  {
    id: "8",
    name: "Acesulfame K",
    code: "950",
    type: "artificial",
    ibsStatus: "safe",
    description: [
      "A calorie-free artificial sweetener approximately 200 times sweeter than table sugar. It is not metabolised by the body — it is absorbed and excreted unchanged — and is not fermented by gut bacteria. It is not a FODMAP.",
      "Often blended with aspartame or sucralose to improve taste and mask its slight bitter aftertaste.",
      "Approved by FSANZ for use in Australia.",
    ],
    alsoKnownAs: "Acesulfame potassium, Ace-K, Sunett, Sweet One, E950",
    commonUses:
      "Soft drinks, protein powders, baked goods, tabletop sweeteners, flavoured milk, sugar-free ice cream, chewing gum",
  },
  {
    id: "9",
    name: "Saccharin",
    code: "954",
    type: "artificial",
    ibsStatus: "safe",
    description: [
      "One of the oldest artificial sweeteners, discovered in 1879. Saccharin is calorie-free and approximately 300–500 times sweeter than sugar, with a noticeable metallic or bitter aftertaste at high concentrations.",
      "It is not a FODMAP and passes through the gut largely unmetabolised, making it generally safe for IBS sufferers. Often blended with other sweeteners to improve flavour.",
      "Approved for use in Australia by FSANZ.",
    ],
    alsoKnownAs: "Sweet'N Low, Hermesetas, E954",
    commonUses:
      "Diet drinks, tabletop sweeteners, some medications and toothpastes, canned goods, salad dressings",
  },
  {
    id: "10",
    name: "Maltitol",
    code: "965",
    type: "alcohol",
    ibsStatus: "trigger",
    description: [
      "A sugar alcohol commonly used as a bulk sweetener in 'sugar-free' chocolate and confectionery because its taste and mouthfeel closely resemble sugar.",
      "However, it has significant FODMAP content: approximately 40% is absorbed in the small intestine, meaning a large proportion reaches the colon where it is fermented by bacteria.",
      "This can cause considerable osmotic distress, bloating, flatulence, and diarrhoea in IBS sufferers, even in moderate amounts.",
    ],
    alsoKnownAs: "Hydrogenated maltose, Maltitol syrup (E965ii), E965",
    commonUses:
      "Sugar-free chocolate, confectionery, ice cream, baked goods, sugar-free syrups, pharmaceutical coatings",
  },
  {
    id: "11",
    name: "Thaumatin",
    code: "957",
    type: "natural",
    ibsStatus: "safe",
    description: [
      "A natural protein extracted from the arils (fruit coating) of the West African katemfe fruit (Thaumatococcus daniellii). It is one of the most intensely sweet substances known, approximately 2,000–3,000 times sweeter than sugar, with a lingering liquorice-like aftertaste.",
      "As a protein, it is digested normally by proteolytic enzymes and has no known FODMAP activity.",
      "Used in very small quantities primarily as a flavour enhancer rather than a bulk sweetener.",
    ],
    alsoKnownAs: "Talin, E957",
    commonUses:
      "Flavour modifier and enhancer, chewing gum, pet food, pharmaceuticals, some dairy products",
  },
  {
    id: "12",
    name: "Isomalt",
    code: "953",
    type: "alcohol",
    ibsStatus: "caution",
    description: [
      "A sugar alcohol derived from sucrose (via the intermediate isomaltulose) with about half the sweetness of sugar. It has lower FODMAP potential than sorbitol or mannitol because a slightly larger proportion is absorbed, but it is still only partially absorbed.",
      "Large quantities can ferment in the colon and cause bloating, gas, and diarrhoea. Monash University suggests tolerance varies between individuals and small amounts may be acceptable.",
      "Popular in confectionery because it does not absorb moisture and has good heat stability.",
    ],
    alsoKnownAs: "Palatinit, Decomalt, E953",
    commonUses:
      "Hard candies, sugar-free chocolates, decorative sugar work, cough drops, lozenges, pan-coated confectionery",
  },
  {
    id: "13",
    name: "Sucrose",
    code: "Su",
    type: "sugar",
    ibsStatus: "safe",
    description: [
      "Ordinary table sugar — a disaccharide composed of glucose and fructose in a 1:1 ratio. Because the fructose is bound to glucose (and the enzyme sucrase efficiently cleaves the bond), sucrose is well absorbed and is classified as low-FODMAP by Monash University at standard serving sizes.",
      "It is generally safe for IBS sufferers. However, very large amounts in a single sitting may contribute to osmotic symptoms in some individuals.",
      "Sucrose provides 4 calories per gram and raises blood sugar, so it should still be consumed in moderation for general health.",
    ],
    alsoKnownAs: "Table sugar, White sugar, Caster sugar, Raw sugar, Cane sugar",
    commonUses:
      "Baking, hot drinks, soft drinks, breakfast cereals, sauces, confectionery, desserts — virtually all processed foods",
  },
  {
    id: "14",
    name: "Glucose",
    code: "Gl",
    type: "sugar",
    ibsStatus: "safe",
    description: [
      "A simple monosaccharide and the body's primary energy source. Glucose is rapidly and efficiently absorbed in the small intestine via active transport (SGLT1), so it does not reach the colon and is not a FODMAP.",
      "It can actually help improve fructose absorption when consumed alongside fructose (the glucose–fructose co-transport effect), which is why Monash University suggests pairing excess fructose with glucose.",
      "Safe for IBS sufferers.",
    ],
    alsoKnownAs: "Dextrose, Grape sugar, Blood sugar, Corn sugar",
    commonUses:
      "Sports drinks, glucose tablets, confectionery, brewing, intravenous drips, commercial baking",
  },
  {
    id: "15",
    name: "Fructose",
    code: "Fr",
    type: "sugar",
    ibsStatus: "trigger",
    description: [
      "A monosaccharide that is a key FODMAP. Fructose is absorbed in the small intestine via the GLUT5 transporter, but this mechanism has limited capacity.",
      "When fructose is present in excess of glucose (as in honey, apples, pears, agave, and high-fructose corn syrup), the surplus fructose is malabsorbed, passes to the colon, and is fermented by bacteria — causing gas, bloating, cramps, and diarrhoea. Monash University classifies excess free fructose as a high-FODMAP trigger.",
      "When fructose is balanced with glucose (as in sucrose), it is generally well absorbed.",
    ],
    alsoKnownAs: "Fruit sugar, Laevulose, Levulose, D-fructose",
    commonUses:
      "Naturally in fruits (especially apples, pears, mangoes, watermelon), honey, agave syrup, high-fructose corn syrup, fruit juices, commercial sauces and dressings",
  },
  {
    id: "16",
    name: "Lactose",
    code: "La",
    type: "sugar",
    ibsStatus: "trigger",
    description: [
      "A disaccharide composed of glucose and galactose, found naturally in mammalian milk. It requires the enzyme lactase for digestion.",
      "Many adults — particularly those of East Asian, African, or Indigenous Australian descent — produce insufficient lactase (lactose malabsorption), allowing undigested lactose to reach the colon where it is fermented. Monash University classifies lactose as a high-FODMAP in standard dairy serves.",
      "Symptoms include bloating, cramps, gas, and diarrhoea. Low-lactose and lactose-free products, as well as hard cheeses, are generally well tolerated.",
    ],
    alsoKnownAs: "Milk sugar",
    commonUses:
      "Milk, ice cream, soft cheeses (ricotta, cottage cheese), yoghurt, cream, some breads, processed meats, pharmaceutical excipient",
  },
  {
    id: "17",
    name: "Agave Syrup",
    code: "Ag",
    type: "sugar",
    ibsStatus: "trigger",
    description: [
      "A liquid sweetener derived from the agave plant, primarily produced in Mexico. Despite being marketed as a 'natural' and 'low-GI' alternative to sugar, agave syrup is very high in free fructose (typically 70–90% fructose), making it one of the highest-FODMAP sweeteners available.",
      "The large excess of fructose over glucose means it is very poorly absorbed and is highly likely to trigger IBS symptoms including bloating, gas, abdominal pain, and diarrhoea. Monash University rates it as high-FODMAP.",
      "Best avoided by IBS sufferers.",
    ],
    alsoKnownAs: "Agave nectar, Agave sweetener, Maguey syrup",
    commonUses:
      "Health food products, vegan baking, cocktails and beverages, breakfast cereals, granola bars, salad dressings, some Australian health-food cafés",
  },
  {
    id: "18",
    name: "Monk Fruit Extract",
    code: "Mk",
    type: "natural",
    ibsStatus: "safe",
    description: [
      "A natural, zero-calorie sweetener derived from the monk fruit (Siraitia grosvenorii, also called luo han guo), a small melon native to southern China. The sweetness comes from antioxidant compounds called mogrosides (primarily mogroside V), which are 150–300 times sweeter than sugar.",
      "Monk fruit extract is not a FODMAP, is not fermented in the gut, and does not raise blood sugar. It is considered safe for IBS sufferers.",
      "As with stevia, check that commercial blends do not contain high-FODMAP bulking agents like inulin or FOS. Increasingly available in Australian supermarkets and health food stores.",
    ],
    alsoKnownAs: "Luo han guo, Swingle fruit, Mogroside, Lo han kuo",
    commonUses:
      "Tabletop sweeteners (e.g. Lakanto), keto and low-carb baking, beverages, protein powders, sugar-free confectionery, monk fruit–erythritol blends",
  },
  {
    id: "19",
    name: "Allulose",
    code: "Al",
    type: "sugar",
    ibsStatus: "caution",
    description: [
      "A rare monosaccharide (C-3 epimer of fructose) found naturally in small quantities in figs, raisins, and wheat. It provides about 70% of the sweetness of sugar but only ~0.4 calories per gram because it is mostly absorbed in the small intestine and excreted unchanged in urine, with very little being metabolised. It does not raise blood sugar or insulin significantly.",
      "Monash University has not yet formally classified it, but available evidence suggests it is generally well tolerated by IBS sufferers at moderate doses (up to about 0.4 g/kg body weight). Higher doses may cause mild bloating or nausea.",
      "Not yet widely available in Australia as FSANZ approval is still progressing, but it can be found in imported products.",
    ],
    alsoKnownAs: "D-psicose, D-allulose, Psicose, Rare sugar",
    commonUses:
      "Keto and low-carb baking, sugar-free ice cream, beverages, confectionery, some imported health foods",
  },
  {
    id: "20",
    name: "Honey",
    code: "Hn",
    type: "sugar",
    ibsStatus: "trigger",
    description: [
      "A natural sweetener produced by bees from flower nectar. Honey typically contains more fructose than glucose (roughly 40% fructose, 30% glucose), meaning it has excess free fructose — a key FODMAP. Monash University classifies honey as high-FODMAP.",
      "The excess fructose is malabsorbed in the small intestine and fermented in the colon, causing bloating, gas, and diarrhoea in IBS sufferers. All varieties (Manuka, raw, commercial) have similar fructose profiles and should be treated equally for IBS purposes.",
      "Small amounts (e.g. half a teaspoon) may be tolerated by some individuals.",
    ],
    alsoKnownAs: "Bee honey, Raw honey, Manuka honey, Australian bush honey",
    commonUses:
      "Spread, baking, marinades, salad dressings, teas, cereals, muesli bars, traditional remedies",
  },
  {
    id: "21",
    name: "High-Fructose Corn Syrup",
    code: "Hf",
    type: "sugar",
    ibsStatus: "trigger",
    description: [
      "An industrial sweetener made by converting corn starch to glucose and then enzymatically isomerising some of that glucose to fructose. Common forms are HFCS-42 (42% fructose) and HFCS-55 (55% fructose).",
      "Because fructose is present in excess of glucose, it is classified as high-FODMAP and is a known IBS trigger.",
      "Less commonly used in Australian-made products than in the US, but it appears in imported foods (soft drinks, confectionery, sauces). Check labels for 'glucose-fructose syrup' or 'isoglucose' as alternative names.",
    ],
    alsoKnownAs: "HFCS, Glucose-fructose syrup, Isoglucose, Corn sugar, High fructose maize syrup",
    commonUses:
      "Imported soft drinks, confectionery, commercial sauces and dressings, baked goods, cereals, flavoured yoghurts",
  },
  {
    id: "22",
    name: "Maple Syrup",
    code: "Ma",
    type: "sugar",
    ibsStatus: "safe",
    description: [
      "A natural sweetener made by boiling down the sap of sugar maple trees. Its sugar composition is primarily sucrose (about 60–66%), with only small amounts of free fructose and glucose.",
      "Because the fructose does not significantly exceed glucose, Monash University classifies maple syrup as low-FODMAP at standard serves (about 2 tablespoons).",
      "It is generally well tolerated by IBS sufferers and is recommended by FODMAP-trained dietitians as a safer natural sweetener alternative to honey or agave.",
    ],
    alsoKnownAs: "Pure maple syrup, Canadian maple syrup",
    commonUses:
      "Pancakes, waffles, baking, marinades, salad dressings, porridge, granola, desserts",
  },
  {
    id: "23",
    name: "Golden Syrup",
    code: "Go",
    type: "sugar",
    ibsStatus: "safe",
    description: [
      "A thick amber-coloured syrup made from cane sugar by acid hydrolysis or enzymatic inversion of sucrose. Its composition is roughly equal parts glucose, fructose, and sucrose — meaning fructose does not significantly exceed glucose.",
      "Monash University classifies golden syrup as low-FODMAP at standard serves (about 1 tablespoon).",
      "It is widely used in Australian baking and is generally well tolerated by IBS sufferers.",
    ],
    alsoKnownAs: "Treacle (light), Inverted sugar syrup, CSR Golden Syrup",
    commonUses:
      "Baking (Anzac biscuits, treacle tart), porridge, desserts, glazes, traditional Australian recipes",
  },
  {
    id: "24",
    name: "Rice Malt Syrup",
    code: "Rm",
    type: "sugar",
    ibsStatus: "safe",
    description: [
      "A sweetener produced by fermenting cooked rice with enzymes that break down its starches into sugars, primarily maltose and maltotriose (glucose-based sugars) with minimal fructose.",
      "Because it is essentially fructose-free, it is classified as low-FODMAP by Monash University. It is a popular sweetener in Australian health-food circles and is often recommended by FODMAP-trained dietitians as a safe alternative for IBS sufferers.",
      "It is less sweet than sugar (roughly 50% as sweet) and has a mild butterscotch flavour.",
    ],
    alsoKnownAs: "Brown rice syrup, Rice syrup, Maltose syrup",
    commonUses:
      "Health food baking, muesli bars, bliss balls, smoothies, sauces, fructose-free recipes, IBS-friendly cooking",
  },
  {
    id: "25",
    name: "Coconut Sugar",
    code: "Co",
    type: "sugar",
    ibsStatus: "caution",
    description: [
      "Made from the sap of coconut palm flower buds, coconut sugar is composed of roughly 70–80% sucrose with small amounts of free fructose and glucose, plus some inulin (a fructan and FODMAP).",
      "Because of the inulin content, Monash University classifies coconut sugar as moderate-FODMAP, meaning small amounts (about 1 teaspoon) are generally tolerated but larger serves may trigger symptoms in sensitive individuals.",
      "It has a caramel-like flavour and is increasingly popular in Australian health-food products.",
    ],
    alsoKnownAs: "Coconut palm sugar, Coconut nectar sugar, Coco sugar",
    commonUses:
      "Health-food baking, raw desserts, paleo recipes, coffee sweetener, granola, energy bars",
  },
  {
    id: "26",
    name: "Neotame",
    code: "961",
    type: "artificial",
    ibsStatus: "safe",
    description: [
      "An extremely potent artificial sweetener, approximately 7,000–13,000 times sweeter than sugar. It is a derivative of aspartame but is far more stable.",
      "Unlike aspartame, it is safe for people with phenylketonuria (PKU) because it is not significantly metabolised to phenylalanine. It is not a FODMAP and is used in very tiny quantities.",
      "Considered safe for IBS sufferers. Approved by FSANZ for use in Australia.",
    ],
    alsoKnownAs: "E961",
    commonUses:
      "Commercial beverages, baked goods, chewing gum, confectionery (used by manufacturers rather than as a consumer tabletop sweetener due to extreme potency)",
  },
  {
    id: "27",
    name: "Advantame",
    code: "969",
    type: "artificial",
    ibsStatus: "safe",
    description: [
      "One of the newest and most potent artificial sweeteners approved for use, approximately 20,000 times sweeter than sugar.",
      "Like neotame, it is derived from aspartame but is safe for people with PKU. It is not a FODMAP and is metabolically inert at the tiny doses required.",
      "Approved by FSANZ for use in Australia. Considered safe for IBS sufferers.",
    ],
    alsoKnownAs: "E969",
    commonUses:
      "Commercial food manufacturing, beverages, dairy products, confectionery (primarily industrial use due to extreme potency)",
  },
  {
    id: "28",
    name: "Polydextrose",
    code: "1200",
    type: "artificial",
    ibsStatus: "caution",
    description: [
      "A synthetic polymer of glucose used as a low-calorie bulking agent and fibre supplement. It is only partially fermented in the colon and provides about 1 calorie per gram.",
      "While not classified under the traditional FODMAP sugars, it can still cause gas, bloating, and laxative effects in large amounts (above ~50 g/day) because of its partial fermentation.",
      "Most people with IBS tolerate small amounts, but sensitivity varies. Listed in Australia as food additive 1200.",
    ],
    alsoKnownAs: "E1200, Litesse",
    commonUses:
      "Sugar-free and reduced-calorie baked goods, fibre-enriched products, ice cream, confectionery, meal replacement bars",
  },
  {
    id: "29",
    name: "Inulin & FOS",
    code: "In",
    type: "natural",
    ibsStatus: "trigger",
    description: [
      "Inulin and fructo-oligosaccharides (FOS) are naturally occurring fructans — chains of fructose molecules — extracted from chicory root, Jerusalem artichoke, onion, and garlic. They are classified as prebiotics and are added to many 'gut health' products.",
      "However, fructans are one of the key FODMAP groups and are high-FODMAP triggers for IBS. They are rapidly and extensively fermented by colonic bacteria, producing large amounts of gas. Even small amounts can cause severe bloating, pain, and altered bowel habits in IBS sufferers.",
      "Often added as hidden ingredients in fibre-enriched products, stevia blends, and protein bars — always check labels carefully.",
    ],
    alsoKnownAs:
      "Fructo-oligosaccharides, Oligofructose, Chicory root fibre, Chicory root extract, FOS",
    commonUses:
      "Fibre supplements, 'gut health' products, some stevia/sweetener blends, protein bars, yoghurt, prebiotic drinks, inulin-enriched bread",
  },
  {
    id: "30",
    name: "Glycyrrhizin",
    code: "958",
    type: "natural",
    ibsStatus: "caution",
    description: [
      "A natural sweetener derived from liquorice root (Glycyrrhiza glabra), approximately 50 times sweeter than sugar. It is not a FODMAP in itself.",
      "However, liquorice root and its extracts can have a laxative effect and may worsen reflux or interact with medications (particularly for blood pressure). Some people with IBS tolerate small amounts, but it is best approached with caution.",
      "Excessive consumption can cause fluid retention and elevated blood pressure. Used in Australia primarily in confectionery and traditional remedies.",
    ],
    alsoKnownAs: "Glycyrrhizic acid, Liquorice extract, E958",
    commonUses:
      "Liquorice confectionery, herbal teas, traditional medicines, some soy sauces, tobacco flavouring",
  },
];

export type SweetenerType = "Natural Sweetener" | "Artificial" | "Sugar Alcohol" | "Sugar";
export type IBSStatus = "Safe" | "Caution" | "Trigger";

export interface Sweetener {
  id: string;
  name: string;
  code: string;
  type: SweetenerType;
  ibsStatus: IBSStatus;
  description: string[];
  alsoKnownAs?: string;
  commonUses?: string;
}

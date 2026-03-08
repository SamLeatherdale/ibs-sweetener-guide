export type IBSStatus = "safe" | "caution" | "trigger";
export type SweetenerType = "natural" | "artificial" | "alcohol" | "sugar";

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

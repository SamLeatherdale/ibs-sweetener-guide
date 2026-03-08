export type SweetenerType = "Natural" | "Artificial" | "Sugar Alcohol";
export type IBSStatus = "Safe" | "Caution" | "Trigger";

export interface Sweetener {
  id: string;
  name: string;
  code: string;
  type: SweetenerType;
  ibsStatus: IBSStatus;
  description: string;
  alsKnownAs?: string;
  commonUses?: string;
}

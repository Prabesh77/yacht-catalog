export type Yacht = {
  id: string | number;
  name: string;
  type: string;
  length: string;
  maxPassengers: number;
  maxPassengersCruising: number | null;
  bedrooms: number;
  maxCrew: number;
  url: string;
  weeklyLowAhoy: string;
  weeklyLowRetail: string;
  currency: string | null;
  acceptsWeeklyCharters: boolean;
  acceptsDayCharters: boolean;
  toys?: string;
};

import { Yacht } from '@/types/yacht';

interface ApiYacht {
  id: number;
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
}

interface ApiResponse {
  data: {
    yachtsWithInfos: {
      nodes: ApiYacht[];
    };
  };
}

export async function fetchYachts(): Promise<Yacht[]> {
  try {
    const response = await fetch('https://pub-c204b30aa1fc4cf795de75e4b73955f1.r2.dev/yachts.json', {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch yachts');
    }
    
    const data: ApiResponse = await response.json();
    
    return data.data.yachtsWithInfos.nodes.map((yacht): Yacht => ({
      id: yacht.id,
      name: yacht.name,
      type: yacht.type,
      length: yacht.length,
      maxPassengers: yacht.maxPassengers,
      maxPassengersCruising: yacht.maxPassengersCruising,
      bedrooms: yacht.bedrooms,
      maxCrew: yacht.maxCrew,
      url: (() => {
        try {
          return decodeURIComponent(yacht.url);
        } catch {
          return yacht.url;
        }
      })(),
      weeklyLowAhoy: yacht.weeklyLowAhoy,
      weeklyLowRetail: yacht.weeklyLowRetail,
      currency: yacht.currency || 'USD',
      acceptsWeeklyCharters: yacht.acceptsWeeklyCharters,
      acceptsDayCharters: yacht.acceptsDayCharters,
      toys: yacht.toys,
    }));
  } catch (error) {
    console.error('Error fetching yachts:', error);
    return [];
  }
}

export async function fetchYachtById(id: string | number): Promise<Yacht | null> {
  try {
    if (!id) {
      return null;
    }
    
    const yachts = await fetchYachts();
    const yacht = yachts.find(y => y && y.id && y.id.toString() === id.toString());
    return yacht || null;
  } catch (error) {
    console.error('Error fetching yacht:', error);
    return null;
  }
}

import { GuestDataRow, GuestI, GuestTypeE, GuestTypeT } from '../models/Models';

const ageInfoToGuestTypeMap: { [ageInfo: string]: GuestTypeT } = {
  '-5 years': GuestTypeE.Child0To5,
  '5-10 years': GuestTypeE.Child5To10,
  '10+ years': GuestTypeE.Child10Plus,
};

export const determineGuestType = (ageInfo: string): GuestTypeT => {
  return ageInfoToGuestTypeMap[ageInfo] || GuestTypeE.Adult;
};

export const convertToBoolean = (value: string): boolean => value === '✅';

export const addGuestsData = (data: GuestDataRow[]): GuestI[] => {
  return data.map((row: GuestDataRow) => ({
    name: row.Name,
    family: row.Family,
    type: determineGuestType(row.Children),
    attending: {
      lunch: convertToBoolean(row.Lunch),
      kart: convertToBoolean(row.Karts),
      dinner: convertToBoolean(row.Dinner),
      party: convertToBoolean(row.Party),
    },
  }));
};

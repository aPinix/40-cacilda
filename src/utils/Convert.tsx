import { GuestFamilyI, GuestI } from '../models/Models';
import { convertToBoolean, determineGuestType } from './Guests';

export const getJsonData =(data: string): string => {
  const csvRows: string[] = data.split('\n');
  const guestFamilies: GuestFamilyI[] = [];

  for (let i = 1; i < csvRows.length; i++) {
    const row: string[] = csvRows[i].split(',');
    const familyName: string = row[1];
    const loginCode: string = row[2];

    let guestFamily = guestFamilies.find((family) => family.family === familyName);

    if (!guestFamily) {
      guestFamily = {
        family: familyName,
        loginCode: loginCode,
        people: [],
      };
      guestFamilies.push(guestFamily);
    }

    const guest: GuestI = {
      name: row[0],
      family: familyName,
      type: determineGuestType(row[10]),
      attending: {
        lunch: convertToBoolean(row[4]),
        kart: convertToBoolean(row[5]),
        dinner: convertToBoolean(row[6]),
        party: convertToBoolean(row[7]),
      },
    };

    guestFamily.people.push(guest);
  }

  return JSON.stringify(guestFamilies, null, 2);
}

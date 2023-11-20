// routes --------------------

export const RoutePathsE = {
  Home: '/',
  Login: '/login',
} as const;
export type RoutePathsT = (typeof RoutePathsE)[keyof typeof RoutePathsE];

// guests --------------------
export const GuestTypeE = {
  Adult: 'adult',
  Child0To5: 'child-0-5',
  Child5To10: 'child-5-10',
  Child10Plus: 'child-10-plus',
} as const;
export type GuestTypeT = (typeof GuestTypeE)[keyof typeof GuestTypeE];

export interface GuestAttendanceI {
  lunch: boolean;
  kart: boolean;
  dinner: boolean;
  party: boolean;
}

export interface GuestDataRow {
  Name: string;
  Family: string;
  Lunch: string;
  Karts: string;
  Dinner: string;
  Party: string;
  Musicians: string;
  SpecialFood: string;
  Children: string;
}

export interface GuestI {
  name: string;
  family: string;
  type: GuestTypeT;
  attending: GuestAttendanceI;
}

export interface GuestFamilyI {
  family: string;
  loginCode: string;
  people: GuestI[];
}

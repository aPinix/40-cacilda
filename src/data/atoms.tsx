import { atom } from 'jotai';
import { GuestFamilyI } from '../models/Models';

export const isUserDataFetched = atom<boolean>(false);
export const guestsData = atom<GuestFamilyI[] | null>(null);
export const guestFamilyData = atom<GuestFamilyI | null>(null);

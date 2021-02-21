import { Between, getRepository } from 'typeorm';
import KickBoard from '../Entities/kickBoard/KickBoard';
import Users from '../Entities/user/User';

const LATITUDE_5KM = 0.045;
const LONGITUDE_5KM = 0.056;

interface kickboardBaseInput {
  unLockPrice?: number;
  freeTime?: number;
  latitude?: number;
  longitude?: number;
}

export interface kickboardCreateInput extends kickboardBaseInput {
  name: string;
  price: number;
}

export interface kickboardUpdateInput extends kickboardBaseInput {
  name?: string;
  price?: number;
  lastLatitude: number;
  lastLongitude: number;
}

const kickboardCreateService = (data: kickboardCreateInput) =>
  KickBoard.create(data).save();

const kickboardUpdateService = (
  data: kickboardUpdateInput,
  kickboardId: number,
) => {
  return KickBoard.update({ id: kickboardId }, data);
};

const findKickboardService = (user: Users) => {
  const { latitude, longitude } = user;
  return getRepository(KickBoard).find({
    isRiding: false,
    latitude: Between(latitude - LATITUDE_5KM, latitude + LATITUDE_5KM),
    longitude: Between(longitude - LONGITUDE_5KM, longitude + LONGITUDE_5KM),
  });
};

export default {
  kickboardCreateService,
  kickboardUpdateService,
  findKickboardService,
};

import { ID } from './id.type';
import { Timestamp } from './timestamps.type';

export type BaseEntity = {
  id: ID;
} & Timestamp;

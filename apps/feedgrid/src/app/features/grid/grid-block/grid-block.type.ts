import { BaseEntity } from '@/core/types/base-entity.type';
import { PostType } from 'src/app/core/types/post-type.type';

export type GridBlock = BaseEntity &
  (
    | {
        url: string;
        type: Exclude<PostType, 'carousel'>;
      }
    | {
        url: string[];
        type: Extract<PostType, 'carousel'>;
      }
  );

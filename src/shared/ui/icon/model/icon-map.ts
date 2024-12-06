import {
  Gear,
  TrashSimple
} from '@phosphor-icons/react';

export const ICON_MAP = {
  gear  : Gear,
  remove: TrashSimple
} as const;

export type IconName = keyof typeof ICON_MAP;

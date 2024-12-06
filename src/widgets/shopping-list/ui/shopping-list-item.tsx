import React from 'react';
import { ShoppingListType } from '@/shared/types';
import { Checkbox, RemoveButton } from '@/shared/ui';
import styles from '../styles/index.module.scss';
import { cn } from '@/shared/utils';

type Props = {
  item: ShoppingListType;
  removeItem: () => void;
  markAsCompleted: () => void;
};

export const ShoppingListItem: React.FC<Props> = ({ item, removeItem, markAsCompleted }) => {
  return (
    <li className={styles.item}>
      <div className={styles.checkboxContainer}>
        <Checkbox onCheckedChange={markAsCompleted} />
      </div>
      <div className={styles.nameContainer}>
        <span>{item.name}</span>
        <div className={cn(
          'flex gap-2 items-center',
          item.isCompleted && 'line-through'
        )}>
          <span>{item.amount}</span>
          <span>{item.unit}</span>
        </div>
      </div>
      <div className={styles.actionsContainer}>
        <RemoveButton removeHandler={removeItem} />
      </div>
    </li>
  );
};

{/* <li key={item.id} className={styles.item}>
<div className="flex items-center gap-3">
  <Checkbox />
  <span className="text-lg font-medium">{item.name}</span> -{' '}
  <span>{item.amount}</span>
</div>

<RemoveButton removeHandler={ removeItem} />
</li> */}
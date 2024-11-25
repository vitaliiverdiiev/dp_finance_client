import React from 'react';
import { ShoppingListType } from '@/shared/types';
import { Checkbox, RemoveButton } from '@/shared/ui';
import styles from '../styles/index.module.scss';

type Props = {
  item: ShoppingListType;
  removeItem: () => void;
};

export const ShoppingListItem: React.FC<Props> = ({ item, removeItem }) => {
  return (
    <li className={styles.item}>
      <div className={styles.checkboxContainer}>
        <Checkbox />
      </div>
      <div className={styles.nameContainer}>
        <span>{item.name}</span>
        <span>{item.amount}</span>
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
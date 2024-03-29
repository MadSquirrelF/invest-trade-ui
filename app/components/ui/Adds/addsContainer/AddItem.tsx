import { FC } from 'react';

import Image from 'next/image';
import styles from '@/components/ui/Adds/Add.module.scss';
import { IAdds } from '@/shared/types/product.types';

const AddItem: FC<{ item: IAdds }> = ({ item }) => (
  <div className={styles.item}>
    <h4>{item.name}</h4>
    <div className={styles.image}>
      <Image
        src={item.photo}
        alt={item.name}
        fill
        draggable={false}
        priority
      />
    </div>

  </div>
);

export default AddItem;

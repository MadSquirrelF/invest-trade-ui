import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Gallery.module.scss';
import { IGalleryItemProps } from './gallery.types';

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => (
  <Link
    href={item.url}
    className={cn(styles.item, {
      [styles.withText]: item.content,
      [styles.horizontal]: variant === `horizontal`,
      [styles.vertical]: variant === `vertical`,
    })}
  >

    <Image
      alt={item.name}
      src={item.posterPath}
      fill
      draggable={false}
      priority
    />

    <div className={styles.content}>
      <div className={styles.title}>{item.name}</div>
    </div>

  </Link>
);

export default GalleryItem;

import { ChangeEvent, FC } from 'react';
import MaterialIcon from '../MaterialIcon';
import styles from './SearchField.module.scss';

interface ISearchField {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => (
  <div className={styles.root}>
    <MaterialIcon name="MdSearch" />
    <input
      placeholder="Поиск"
      value={searchTerm}
      onChange={handleSearch}
    />
  </div>
);

export default SearchField;

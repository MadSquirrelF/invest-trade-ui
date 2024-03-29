import BrandsList from '@/components/screens/admin/brands/BrandList';
import { NextPageAuth } from '@/shared/types/auth.types';

const BrandsListPage: NextPageAuth = () => <BrandsList />;

BrandsListPage.isOnlyAdmin = true;

export default BrandsListPage;

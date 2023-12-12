import { Layout } from '../../components/Layout/index';
import foodstuffs from '../../productsData/foodstuffs.json';

export const Foodstuffs = () => {
  return (
    <Layout products={foodstuffs} />
  )
}

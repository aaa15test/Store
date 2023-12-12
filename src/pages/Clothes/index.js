import { Layout } from '../../components/Layout/index';
import clothes from '../../productsData/clothes.json';

export const Clothes = () => {

  return (
    <Layout products={clothes} />
  )
}

import { Layout } from '../../components/Layout/index';
import electronics from '../../productsData/electronics.json';

export const Electronics = () => {
  return (
    <Layout products={electronics} />
  )
}

import { ProductsCard } from '../ProductsCard/index';
import './index.css'

export const Products = ({ products }) => {
  return (
    <ul className='products'>
      {products.map((item, key) => {
        return <ProductsCard product={item} key={key}/>
      })}
    </ul>
  )
}

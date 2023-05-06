import { useContext } from 'react';
import './Shop.scss';
import {ProductsContext} from '../../context/productsContext';
import ProductCard from '../../components/productCard/productCard';

const Shop = () => {
    const {products} = useContext(ProductsContext);
  return (
    <div className='products-container'>
        {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Shop
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {Footer, Name, Price, ProductCardContainer} from './product-card.styles';
import {useDispatch, useSelector} from 'react-redux';
import './product-card.styles';
import {addItemToCart} from '../../store/cart/cart.action';
import {selectCartItems} from '../../store/cart/cart.selector';
import {CategoryItem} from '../../store/categories/categories.types';
import {FC} from 'react';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({product}) => {
  const {name, price, imageUrl} = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to card</Button>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
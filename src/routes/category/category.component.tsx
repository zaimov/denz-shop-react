import {useParams} from 'react-router-dom';
import {Fragment, useEffect, useState} from 'react';
import ProductCard from '../../components/product-cards/product-card.component';
import './category.styles';
import {CategoryContainer, CategoryTitle} from './category.styles';
import {useSelector} from 'react-redux';
import {selectCategoriesMap, selectIsLoading} from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

type CategoryRouteParams = {
  category: string;
}

const Category = () => {
  const {category} = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts((categoriesMap[category]));
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {
        isLoading ? (
          <Spinner/>
        ) : (
          <CategoryContainer>
            {
              products && products.map(product => <ProductCard key={product.id} product={product}/>)
            }
          </CategoryContainer>
        )
      }
    </Fragment>
  );
};

export default Category;
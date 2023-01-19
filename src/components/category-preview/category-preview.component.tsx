import {Link} from 'react-router-dom';
import ProductCard from '../product-cards/product-card.component';
import './category-preview.styles';
import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";
import {CategoryItem} from '../../store/categories/categories.types';
import {FC} from 'react';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({title, products}) => {

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {
          products.filter((_, index) => index < 4)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
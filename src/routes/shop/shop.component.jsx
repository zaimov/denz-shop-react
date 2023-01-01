import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils';
import {useEffect} from 'react';
import {fetchCategoriesStartAsync} from '../../store/categories/categories.action';
import {useDispatch} from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
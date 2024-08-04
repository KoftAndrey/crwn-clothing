import CATEGORIES_ACTION_TYPES from './categoriesActionTypes';
import { createAction } from '../../utils/reducer/reducer';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

const setCategories = categoriesArray => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
try {
  const categoriesArr = await getCategoriesAndDocuments('categories');
  dispatch(fetchCategoriesSuccess(categoriesArr));
} catch (error) {
  dispatch(fetchCategoriesFailed());
}

};

export { 
  fetchCategoriesAsync
};

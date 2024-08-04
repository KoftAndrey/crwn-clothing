import { createSelector } from 'reselect';

const selectCategoryReducer = state => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
); 

const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    acc[category.title.toLowerCase()] = category.items;
    return acc;
  }, {})
);

const selectCategoriesIsLoading  = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

export { selectCategoriesMap, selectCategoriesIsLoading };

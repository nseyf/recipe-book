import { combineReducers } from 'redux';
import RecipeReducer from './recipes';
import { reducer as RecipeForm } from 'redux-form';
import ActiveRecipe from './recipe_reducer';

const rootReducer = combineReducers({
  recipes: RecipeReducer,
  form: RecipeForm,
  activeRecipe: ActiveRecipe
});

export default rootReducer;

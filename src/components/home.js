import React, { Component } from 'react';
import RecipeList from '../containers/recipe_list';
import ActiveRecipe from '../containers/active_recipe';

class Home extends Component {
render() {
    return (
      <div className="container justify-content-center">
        <ActiveRecipe activeRecipe={this.props.activeRecipe}/>
    <RecipeList />
        </div>

    );
  }
}

export default Home;

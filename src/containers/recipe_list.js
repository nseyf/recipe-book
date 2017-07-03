import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeRecipe } from '../actions/actions';

class RecipeList extends Component {

renderRecipes() {

    return _.map(this.props.recipes, recipe => {
      return (
        <li className="list-group-item recipeListDisplayItem"
          key={recipe.id}
          onClick={() => this.props.activeRecipe(recipe)}>
          {recipe.dish.toUpperCase()}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
<div className="col-md-4 col-xs-12">
  <ul className="list-group" style={{marginTop: "5px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
{this.renderRecipes()}
  </ul>
</div>
</div>
    )
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({activeRecipe: activeRecipe}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

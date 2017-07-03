import React, { Component } from "react";
import { connect } from 'react-redux';


/* #22223B, #4A4E69, #9A8C98, #C9ADA7, #F2E9E4  */

class ActiveRecipe extends Component {

      renderIngredients() {

    const ingredients = this.props.recipe.ingredients;

        return ingredients.map((ingredient) => {
          return (
            <li
            key={ingredient}
            style={{
              paddingBottom: "5px",
              listStyleType: "none",
              fontWeight: "700",
              fontSize: "18px",
              color: "#22223B"
            }}

            >{ingredient}</li>
          )
        })
      }


          renderMethod(){
          const method = this.props.recipe.method;
        return method.map((step) => {
          return (
          <li key={step} style={{
              paddingBottom: "10px",
              padding: "15px",
              textAlign: "justify",
              fontSize: "18px",
              fontWeight: "300",
            }}>{step}</li>
          )
        })
          }


  render() {
if(!this.props.recipe) {
  return <div><h3 style={{borderBottom: "2px solid #f5f5f5", marginTop: "20px",fontWeight: "700"}}>YOUR RECIPES:</h3></div>
}
    const recipe = this.props.recipe;
    return (
      <div>
      <div className="col-md-8 col-xs-12" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", background: "white", marginTop: "5px", marginBottom: "10px"}}>
<div className="col-xs-12" style={{
    padding:"25px 0 0",
    marginBottom:"10px",
    textAlign: "left",
    borderBottom: " 3px solid #C9ADA7"
  }}>
  <h1 style={{
      fontWeight: "700",
      paddingBottom: "20px",
      letterSpacing: "3px",
      borderLeft: "5px solid #C9ADA7",
      color: "#22223B",
      padding: "25px"
    }}>{recipe.dish.toUpperCase()} </h1>
  <div className="col-xs-4">Serves: <span style={{fontWeight: "700"}}>{recipe.serves}</span></div>
<div className="col-xs-4">Prep time: <span style={{fontWeight: "700"}}>{recipe.prepTime} minutes</span></div>
<div className="col-xs-4">Cook time: <span style={{fontWeight: "700"}}>{recipe.cookTime} minutes</span></div>
</div>
<div><ul style={{paddingBottom: "5px"}}>

  {this.renderIngredients()}

</ul></div>
<div><ol>

  {this.renderMethod()}

</ol></div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
  recipe: state.activeRecipe
}
}

export default connect(mapStateToProps)(ActiveRecipe)

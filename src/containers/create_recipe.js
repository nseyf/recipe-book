import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createRecipe } from '../actions/actions';

class CreateRecipeForm extends Component {

onSubmit(values) {
  this.props.createRecipe(values)
}

    render() {

      const buttonStyle = {
      border: "none",
      borderRadius: "0",
      background: "white",
      fontWeight: "700",
      borderRight: "5px solid #f5f5f5",
      color: "#151515",
      marginTop: "10px"
      }

      const { handleSubmit } = this.props;
    return (
<div className="col-xs-12 col-lg-8 col-lg-offset-2">
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="form-group">
          <label htmlFor="dish">What is the name of the dish?</label>
          <Field className="form-control" name="dish" component="input" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="serves">How many will the dish serve?</label>
            <Field className="form-control" name="serves" component="input" type="number" />
            </div>
            <div className="form-group">
              <label htmlFor="prepTime">How long does the dish take to prep? (in minutes)</label>
              <Field className="form-control" name="prepTime" component="input" type="number" />
              </div>
              <div className="form-group">
                <label htmlFor="cookTime">How long does the dish take to cook? (in minutes)</label>
                <Field className="form-control" name="cookTime" component="input" type="number" />
                </div>
                <button className="btn" style={buttonStyle} type="submit">SUBMIT</button>

      </form>
<Link to='/'>
  <button className="btn" style={buttonStyle}>BACK TO HOME</button>
</Link>
</div>
    )
}
}


export default reduxForm({
  form: 'CreateRecipeForm'
})(CreateRecipeForm);


/*
<FieldArray name="ingredients" component={ingredients =>
  <ul>
  <li>
    <button type='button' onClick={() => push('ingredients')}>Add Ingredient</button>
    </li>
    {ingredients.map((ingredient, ingredientIndex) =>
      <li key={ingredientIndex}>
        <button
          type="button"
          title="Remove Ingredient"
          onClick={() => ingredients.remove(ingredientIndex)}/>
      </li>
    )}
  </ul>
  }/>
  }
<button type="submit">Submit Recipe </button>

*/
//Form must account for the following
// dish, serves, Preptime, cooktime, ingredients(li), method

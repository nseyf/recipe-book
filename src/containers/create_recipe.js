import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createRecipe } from '../actions/actions';

class CreateRecipeForm extends Component {

onSubmit(values) {
this.props.createRecipe(values);
console.log(values);
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

function mapStateToProps(state) {
  return { recipes: state.recipes }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createRecipe: createRecipe}, dispatch)
}

export default reduxForm({form: "CreateRecipeForm"})(connect(mapStateToProps, mapDispatchToProps)(CreateRecipeForm));
// Have to connect the form to redux, use it to update recipes.js with new values


//Form must account for the following
// dish, serves, Preptime, cooktime, ingredients(li), method

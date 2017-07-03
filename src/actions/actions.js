export function activeRecipe(recipe){
  return {
    type: "CHANGE_ACTIVE_RECIPE",
    payload: recipe
  }
}

export function createRecipe(recipe){
  return {
    type: "CREATE_RECIPE",
    payload: recipe
  }
}

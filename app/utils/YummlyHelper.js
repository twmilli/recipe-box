var axios = require('axios');

var id='233b341e';
var key='12884f8db5d6370cdaa4d5acfd5bc7b4';


function getRecipes(searchText){
  var query = ('https://api.yummly.com/v1/api/recipes?_app_id=' + id + '&_app_key=' + key + '&q=' + searchText);
  return(axios.get(query).then(function(info){
    return (info.data.matches);
  }));
}

function organizeData(results_list){
  var recipe_list=[];
  var new_recipe;
  var max_recipes = 6;
  var base_url = "https://www.yummly.com/recipe/";
  for (var i=0; i < max_recipes; i++){
    var recipe_data = results_list[i];
    new_recipe={
      image: recipe_data.imageUrlsBySize[90],
      ingredient_list: recipe_data.ingredients,
      num_list: [],
      title: recipe_data.recipeName,
      servings : 1,
      url: base_url + recipe_data.id
    };
    recipe_list.push(new_recipe);
  }
  return recipe_list;
}

var YummlyHelper = {
  getRecipeList: function(searchText){
    return(getRecipes(searchText).then(organizeData));
  }

};

module.exports=YummlyHelper;

var React = require('react');
var Recipe = require('./Recipe');
var Main = React.createClass({

  createRecipe: function(image, ingredient_list, title){
    var new_recipe = {
      image: image,
      ingredient_list: ingredient_list,
      title: title
    }
    return new_recipe;
  },

  render: function(){
    var test_list = [{
      name: "egg",
      amount: 3,
      units: "whole"
    },
  {
    name: "tomatoes",
    amount: 1/2
  }]
    return(
      <div className="jumbotron main">
        <Recipe image="http://www.wikihow.com/images/7/78/Cook-a-Western-Omelet-Intro.jpg"
          ingredient_list={test_list}
          title="Omelette"
          description="Classic take on a Western Omelette"/>
        <Recipe image="http://www.wikihow.com/images/7/78/Cook-a-Western-Omelet-Intro.jpg"
            ingredient_list={test_list}
            title="Omelette"
            description="Classic take on a Western Omelette"/>
      </div>
    )
  }
});

module.exports = Main;

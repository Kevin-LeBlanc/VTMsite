var app = angular.module("site");

app.controller("AttributesController", function($window, $http){

  this.categoryChange = categoryChange;

  this.attributePtsTotal = 15;
  this.attributePriorities = ["Primary", "Secondary", "Tertiary"];
  this.attributesPage = "./attributes.html";

  this.primaryPts = 7;
  this.secondaryPts = 5;
  this.tertiaryPts = 3;

  this.selectedCategories =[{id:"physical", priority: null},
                            {id:"social", priority: null},
                            {id:"mental", priority: null}];

  this.physicalStats = {priority: null, points: 0};
  this.socialStats = {priority: null, }


  class Attributes {
    constructor(){
      this.points = [{id:0, img:"./full.png"},
                     {id:1, img:"./empty.png"},
                     {id:2, img:"./empty.png"},
                     {id:3, img:"./empty.png"},
                     {id:4, img:"./empty.png"}];

      this.select = function(index){
        if(this.points[index].img=="./full.png")
        {
          this.points.forEach(function(point){
            if(point.id <= index){
              var test = 1;
            }
            else{
              point.img = "./empty.png";
            }
          });
        }
        if(this.points[index].img=="./empty.png")
        {
          this.points.forEach(function(point){
            if(point.id > index){
              var test = 1;
            }
            else{
              point.img = "./full.png";
            }
          });
        }
      }
    }
  }

  this.strength = new Attributes();
  this.dexterity = new Attributes();
  this.stamina = new Attributes();
  this.charisma = new Attributes();
  this.manipulation = new Attributes();
  this.appearance = new Attributes();
  this.perception = new Attributes();
  this.intelligence = new Attributes();
  this.wits = new Attributes();



//TODO: Under construction. Figure out how to organize this correctly & check for equality between selectors.
function categoryChange(changedCategory){
  this.selectedCategories.forEach(function(category){
    if(changedCategory.priority == category.priority && changedCategory.id != category.id){
      var test = 1;
    }
  })
}

});
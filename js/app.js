$(function(){

  var view={
  	init:function(){
         var list_dom=$("#cat-list");
         var viewing=$("#cat-view");
         view.render();

  	},
    render:function(){
    	model.cats.forEach(function(cat){
          list_dom.append(cat);

    	})
    	
    }
  };

  var model={

  	   init:function(){
  	   	var cats=[]
  	   	for(var i=0;i<=4;i++){
  	   		cats.push({
  	   			name: `image${i+1}`
  	   		})
  	   	}
  	   }
  };
  model.init();
  view.init();
 
}())
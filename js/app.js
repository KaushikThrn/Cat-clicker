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
       cats:[],
  	   init:function(){
  	   	for(var i=0;i<=4;i++){
  	   		model.cats.push({
  	   			name: `image${i+1}`
  	   		})
  	   	}
  	   	model.render();
  	   },
  	    render:function(){
    	model.cats.forEach(function(cat){
        list_dom.append(cat);

    	})
    	
    }
  };
  model.init();
  //view.init();
 
}())
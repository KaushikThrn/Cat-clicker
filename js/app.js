$(function(){

  var view={

  	init:function(){
          this.list_dom=$("#cat-list");
         this.viewing=$("#cat-view");
         //view.render();

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
  	   	view.init();
  	   	model.render();
  	   },
  	    render:function(){
    	model.cats.forEach(function(cat){
        view.list_dom.append(`<li class="cat">${cat.name}<\li>`);
    	});
    	
    }
  };
  model.init();
  //view.init();
 
}())
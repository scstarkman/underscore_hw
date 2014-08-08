$(document).ready(function(){

  var homePage = {

      init:function(){
        homePage.initStyling();
        homePage.initEvents();
      },
        ///for div that displays text....
        initStyling:function(){
          homePage.renderText($(".text"));

        },

        //for button click  event...
        initEvents:function(){
          $(".showPictures").on('click', homePage.renderPictures);


        },



        ///render function...using template written in <head>
        render:function(template,data,$target){
            var tmpl = _.template(template,data);
            $target.append(tmpl);

        },

        //render text function...using the render function
        renderText:function($target){
            homePage.render($("#namesTmpl").html(),githubData,$target);
        },
        //my function
        homePage.render($())


        //render pictures function....
        renderPictures: function($target){
            homePage.render($("#imgTmpl").html(),githubData,$target);
        }


}; //end var homePage


homePage.init();





}); //end of document

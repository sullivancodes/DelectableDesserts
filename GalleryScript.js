$(document).ready(function() {

    $('ul.first').bsPhotoGallery({
    "classes" : "col-lg-2 col-md-4 col-sm-3 col-xs-4 col-xxs-12",
    "hasModal" : true
  });


 var on = "no"
$(document).on("click", ".menu-icon", function(){      
    if (on == "no") { $('.navigation').animate({ top: "0"}, 1000);
on = "yes"
}
else { $('.navigation').animate({ top: "-100vh"}, 1000);
on = "no"
}
})

})
$(document).ready(function() {

    
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
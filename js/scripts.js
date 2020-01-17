$(document).ready(function(){
    $("form#celebrityForm").submit(function(event) {
        var experience = $("#experience").val();
        var designorBuild = $("#designorBuild").val();
        var frontEndBackEnd = $("#frontEndBackEnd").val();
        var longForm = $("#longForm").val();
        var question5 = $("#question5").val();
        var question6 = $("#question6").val();



        if (experience === "1" && designorBuild === "1" && frontEndBackEnd === "3" && longForm === "3" && question5 === "3") {
            $("#two, #three").hide();
            $("#four, #five").hide();
            $("#one").show();
          } else if (experience === "1" && designorBuild === "1" && frontEndBackEnd === "3" && longForm === "3" && question5 === "3") {
            $("#one, #three").hide();
            $("#four, #five").hide();
            $("#two").show();
          } else if (experience === "1" && designorBuild === "1" && frontEndBackEnd === "3" && longForm === "3" && question5 === "3") {
            $("#one, #two").hide();
            $("#four, #five").hide();
            $("#three").show();
          } else if (experience === "1" && designorBuild === "1" && frontEndBackEnd === "3" && longForm === "3" && question5 === "3") {
            $("#one, #two").hide();
            $("#three, #five").hide();
            $("#four").show();
          } else if (experience === "1" && designorBuild === "1" && frontEndBackEnd === "3" && longForm === "3" && question5 === "3") {
            $("#one, #two").hide();
            $("#four, #three").hide();
            $("#five").show();
          }
          event.preventDefault();
      
        });
});
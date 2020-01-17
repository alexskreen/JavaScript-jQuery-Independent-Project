$(document).ready(function(){
    $("form#languageForm").submit(function(event) {
        var experience = $("#experience").val();
        var designorBuild = $("#designorBuild").val();
        var frontEndBackEnd = $("#frontEndBackEnd").val();
        var longForm = $("#longForm").val();
        var question5 = $("#question5").val();
        var question6 = $("#question6").val();
        // console.log(experience, designorBuild, frontEndBackEnd, longForm, question5, question6);



        if (experience === "1" && designorBuild === "1" && frontEndBackEnd === "1" && longForm === "1" && question5 === "1" && question6 === "1") {
            $("#two, #three, #four, #five").hide();
            $("#one").show();
          } else if (experience === "3" && designorBuild === "2" && frontEndBackEnd === "2" && longForm === "2" && question5 === "1" && question6 === "1") {
            $("#one, #three, #four, #five").hide();
            $("#two").show();
          } else if (experience === "2" && designorBuild === "1" && frontEndBackEnd === "3" && longForm === "2" && question5 === "1" && question6 === "1") {
            $("#one, #two, #four, #five").hide();
            $("#three").show();
          } else if (experience === "1" && designorBuild === "1" && frontEndBackEnd === "1" && longForm === "2" && question5 === "1" && question6 === "1") {
            $("#one, #two, #three, #five").hide();
            $("#four").show();
          } else if (experience === "4" && designorBuild === "2" && frontEndBackEnd === "2" && longForm === "2" && question5 === "1" && question6 === "1") {
            $("#one, #two, #four, #three").hide();
            $("#five").show();
          }
          event.preventDefault();
      
        });
    $("form#contactMeForm").submit(function(event) {
      var firstName = $("input#firstName").val();
      var lastName = $("input#lastName").val();
      var anyQuestions = $("textarea#anyQuestions").val();
      // console.log(firstName, lastName, anyQuestions);
    event.preventDefault();
});
});

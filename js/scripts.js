$(document).ready(function(){
    $("form#languageForm").submit(function(event) {
        var experience = $("#experience").val();
        var designorBuild = $("#designorBuild").val();
        var frontEndBackEnd = $("#frontEndBackEnd").val();
        var longForm = $("#longForm").val();
        var location = $("#location").val();
        var workSchedule = $("#workSchedule").val();
        console.log(experience, designorBuild, frontEndBackEnd, longForm, location, workSchedule);



        if (experience === "1" && designorBuild === "1" && frontEndBackEnd === "1" && longForm === "1" && location === "1" && workSchedule === "1") {
            $("#two, #three, #four, #five").hide();
            $("#one").show();
          } else if (experience === "3" && designorBuild === "2" && frontEndBackEnd === "2" && longForm === "2" && location === "1" && workSchedule === "1") {
            $("#one, #three, #four, #five").hide();
            $("#two").show();
          } else if (experience === "2" && designorBuild === "1" && frontEndBackEnd === "3" && longForm === "2" && location === "1" && workSchedule === "1") {
            $("#one, #two, #four, #five").hide();
            $("#three").show();
          } else if (experience === "1" && designorBuild === "1" && frontEndBackEnd === "1" && longForm === "2" && location === "1" && workSchedule === "1") {
            $("#one, #two, #three, #five").hide();
            $("#four").show();
          } else if (experience === "4" && designorBuild === "2" && frontEndBackEnd === "2" && longForm === "2" && location === "1" && workSchedule === "1") {
            $("#one, #two, #four, #three").hide();
            $("#five").show();
          }
          event.preventDefault();
      
        });
    $("form#contactMeForm").submit(function(event) {
      var firstName = $("input#firstName").val();
      var lastName = $("input#lastName").val();
      var anyQuestions = $("textarea#anyQuestions").val();
      console.log(firstName, lastName, anyQuestions);
      $("#six").show();
      $("#firstNameForm").text(firstName);
      $("#lastNameForm").text(lastName);
      // alert("Thank you" + " " firstName + " " + lastName + ". One of our teachers will reach out to you shortly! Thank you for taking the time to fill out our contact me form.")

      
    event.preventDefault();
});
});

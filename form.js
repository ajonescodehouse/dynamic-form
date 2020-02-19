$(document).ready(function() {
  var countryOptions = "";
  var stateOptions = "";
  var cityOptions = "";

  // Get Countries from json
  $.getJSON("countries.json", function(data) {
    countryOptions += '<option value="">Select country</option>';
    $.each(data, function(key, country) {
      countryOptions +=
        '<option value="' + country.id + '">' + country.name + "</option>";
    });
    $("#country").html(countryOptions);
  });


  $(document).on("change", "#country", function() {
    var country_id = $(this).val();
    if (country_id != "") {
      $.getJSON("states.json", function(data) {
        stateOptions = '<option value="">Select state</option>';
        $.each(data, function(key, state) {
          if (country_id == state.country_id) {
            stateOptions +=
              '<option value="' + state.id + '">' + state.name + "</option>";
          }
        });
        $("#state").html(stateOptions);
      });
    } else {
      $("#state").html('<option value="">Select state</option>');
      // $("#city").html('<option value="">Select city</option>');
    }
  });

  $(document).on("change", "#state", function() {
    var state_id = $(this).val();
    if (state_id != "") {
      $.getJSON("cities.json", function(data) {
        cityOptions += '<option value="">Select city</option>';
        $.each(data, function(key, city) {
          if (state_id == city.state_id) {
            cityOptions +=
              '<option value="' + city.id + '">' + city.name + "</option>";
          }
        });
        $("#city").html(cityOptions);
      });
    } else {
      $("#city").html('<option value="">Select city</option>');
    }
  });

  $(document).on("change", "#country", function() {
    // $("#australia-countries").change(function() {
    if ($(this).val() == "yes") {
      $("#australia-states-container").show();
      $("#state").attr("required", "");
      $("#state").attr("data-error", "This field is required.");
    } else {
      $("#australia-states-container").hide();
      $("#state").removeAttr("required");
      $("#state").removeAttr("data-error");
    }
  });
  $("#country").trigger("change");

  // $(document).on("change", "#seeAnotherFieldGroup", function() {
  //   if ($(this).val() == "yes") {
  //     $("#otherFieldGroupDiv").show();
  //     $("#otherField1").attr("required", "");
  //     $("#otherField1").attr("data-error", "This field is required.");
  //     $("#otherField2").attr("required", "");
  //     $("#otherField2").attr("data-error", "This field is required.");
  //   } else {
  //     $("#otherFieldGroupDiv").hide();
  //     $("#otherField1").removeAttr("required");
  //     $("#otherField1").removeAttr("data-error");
  //     $("#otherField2").removeAttr("required");
  //     $("#otherField2").removeAttr("data-error");
  //   }
  // });
  // $("#seeAnotherFieldGroup").trigger("change");
});

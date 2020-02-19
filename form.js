$(document).ready(function() {
  var countryOptions = "";
  // var stateOptions = "";
  // var cityOptions = "";

  // Get Countries from json
  $.getJSON("countries.json", function(data) {
    countryOptions += '<option value="">Select country</option>';
    $.each(data, function(key, country) {
      countryOptions +=
        '<option value="' + country.value + '">' + country.name + "</option>";
    });
    $("#selectCountry").html(countryOptions);
  });

  // $(document).on("change", "#country", function() {
  //   var country_value = $(this).val();
  //   if (country_value != "yes") {
  //     $.getJSON("states.json", function(data) {
  //       stateOptions = '<option value="">Select state</option>';
  //       $.each(data, function(key, state) {
  //         if (country_id == state.country_id) {
  //           stateOptions +=
  //             '<option value="' + state.value + '">' + state.name + "</option>";
  //         }
  //       });
  //       $("#state").html(stateOptions);
  //     });
  //   } else {
  //     $("#state").html('<option value="">Select state</option>');
  //     $("#city").html('<option value="">Select city</option>');
  //   }
  // });

  // $(document).on("change", "#state", function() {
  //   var state_id = $(this).val();
  //   if (state_id != "") {
  //     $.getJSON("cities.json", function(data) {
  //       cityOptions += '<option value="">Select city</option>';
  //       $.each(data, function(key, city) {
  //         if (state_id == city.state_id) {
  //           cityOptions +=
  //             '<option value="' + city.id + '">' + city.name + "</option>";
  //         }
  //       });
  //       $("#city").html(cityOptions);
  //     });
  //   } else {
  //     $("#city").html('<option value="">Select city</option>');
  //   }

  $("#selectCountry").change(function() {
    if ($(this).val() == "yes") {
      $("#australia-states-countries").show();
      $("#select-state").attr("required", "");
      $("#select-state").attr("data-error", "This field is required.");
      $("#select-city").attr("required", "");
      $("#select-city").attr("data-error", "This field is required.");
      $("#general-form-content").hide();
      $(".general-field").removeAttr("required");
      $(".general-field").removeAttr("data-error");
    } else {
      $("#australia-states-countries").hide();
      $("#select-state").removeAttr("required");
      $("#select-state").removeAttr("data-error");
      $("#select-city").removeAttr("required");
      $("#select-city").removeAttr("data-error");
      $("#general-form-content").show();
      $(".general-field").attr("required", "");
      $(".general-field").attr("data-error", "This field is required.");
    }
  });

  $("#selectCountry").trigger("change");

  // Hide and show Australia countries when Australia is selected on dropdown
  $("#selectCountry").on("change", function() {
    "yes" === $(this).val()
      ? $("#australia-states-countries").show()
      : $("#australia-states-countries").hide();
  });

  // Hide and show general form for non valid countries
  $("#selectCountry").on("change", function() {
    "no" === $(this).val()
      ? $("#general-form-content").show()
      : $("#general-form-content").hide();
  });

  // Hide elements on page load
  $(document).ready(function() {
    $("#general-form-content").hide();
  });
});

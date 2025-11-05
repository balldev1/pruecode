$(document).ready(function () {
  $("#loadBtn").on("click", function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      success: function (data) {
        $("#output").text(JSON.stringify(data, null, 2));
      },
      error: function (err) {
        console.error(err);
        $("#output").text("Error loading data.");
      },
    });
  });
});

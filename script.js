$(document).ready(function() {
  
  function getData() {
    $.ajax({
      url: "http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srprop=snippet&callback=?&srsearch=" + $("#search").val(),
      dataType: "json",
      type: "POST",    
      success: function(data) {
        
        $("#results").empty();
                
        var resultList = data.query.search;
        var html = "";       
        
        for (var result in resultList) {
          html = "<a id = 'x' target = '_blank' href='https://en.wikipedia.org/wiki/" + resultList[result].title + "'><div class = 'resultDiv'><h4>" + resultList[result].title + "</h4><p>" + resultList[result].snippet + "</p></div></a>";
          $("#results").append(html);
        }
      }
    });
  }
  
   $("#search").keypress(function(event) {
     if (event.which == 13) {
       getData();
       return false;
     }
   });
  
  $("#search").on("click", function() {
    $(this).val("");
    $("#instruction").html("");
  });
});
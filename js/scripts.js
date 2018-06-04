$(function(){
  $("form#list").submit(function(event){
    event.preventDefault()

    var listItem = ["list1", "list2", "list3", "list4", "list5"]
    var sortList = [];



    listItem.forEach(function(list){
      var userlist = $("input#" + list).val();
      sortList.push(userlist);
    });
    sortList.sort();
  
    sortList.forEach(function(list){

      $(".food").append("<li>" + list.toUpperCase() + "</li>")
      $("form#list").hide();
    });
  });
});



// if (list === "") {
//    $(".food").append("<li>" + "Error" + "</li>");
//    return;
// }

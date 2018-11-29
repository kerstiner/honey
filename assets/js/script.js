$(document).ready(function(){

  var checkAll = $("#checkAll");
  var checkbox = $(".checkbox");
  var deleteButton = $(".deleteButton");
  var tableRow = $("#tableRow");
  var table = $(".table");
  var showTodo = $(".showTodo");
  var buttonEdit = $(".buttonEdit");
  var save = $(".save");
  var add = $(".add");

  save.hide();

  deleteButton.click(function(){
      $(this).closest('tr').remove();
      return false;
  });

  buttonEdit.click(function(){
    $(this).parents(".tableRow").find(".buttonEdit").hide(); 
    $(this).parents(".tableRow").find("span").attr("contenteditable", true);
    $(this).parents(".tableRow").find(".save").show();
  });

  save.click(function(){
    $(this).parents(".tableRow").find(".save").hide();
    $(this).parents(".tableRow").find(".buttonEdit").show();
    $(this).parents(".tableRow").find("span").attr("contenteditable", false); 
  });

  add.click(function(){
    var task = $("#task").val();
    var result = "<tr><td><input class='checkbox' type='checkbox'></td>" +
                "<td class='showTodo' id='showInput1'><span contenteditable='false'></span> " + task + "</td> " +
                "<td><button class='buttonEdit btn btn-info'><span class='glyphicon glyphicon-edit'></span>edit</button> " +
                "<button class='save btn btn-info'><span class='glyphicon glyphicon-save'></span>save</button>| " +
                "<button class='btn btn-info deleteButton'><span class='glyphicon glyphicon-delete'></span>delete</button></td></tr>";

    $("table tbody").before(result);
  });

});
  



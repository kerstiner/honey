$(document).ready(function(){

  var doneTask = $(".done-task");
  var deleteButton = $(".delete-button");
  var tableRow = $("#tableRow");
  var table = $(".table");
  var showTodo = $(".show-to-do");
  var buttonEdit = $(".button-edit");
  var save = $(".save");
  var add = $(".add");

  save.hide();

  deleteButton.click(function(){
    $(this).closest('tr').remove();
    return false;
  });

  buttonEdit.click(function(){
    $(this).parents(".tableRow").find(".button-edit").hide(); 
    $(this).parents(".tableRow").find("span").attr("contenteditable", true);
    $(this).parents(".tableRow").find(".save").show();
  });

  save.click(function(){
    $(this).parents(".tableRow").find(".save").hide();
    $(this).parents(".tableRow").find(".button-edit").show();
    $(this).parents(".tableRow").find("span").attr("contenteditable", false); 
  });

  add.click(function(){
    var task = $("#task").val();
    var result = "<tr><td><input class='checkbox' type='checkbox'></td>" +
                "<td class='show-to-do' id='showInput1'><span contenteditable='false'></span> " + task + "</td> " +
                "<td><button class='button-edit btn btn-info'><span class='glyphicon glyphicon-edit'></span>edit</button> " +
                "<button class='save btn btn-info'><span class='glyphicon glyphicon-save'></span>save</button>| " +
                "<button class='btn btn-info delete-button'><span class='glyphicon glyphicon-delete'></span>delete</button></td></tr>";

    $("table tbody").prepend(result);
    $("#task").val("");
  });

  doneTask.click(function(){
    console.log("test");
    $(this).parents(".tableRow").find(".show-to-do").toggleClass("strike");
  });
    
});


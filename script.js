
var rootEl = $("#root");

//displays current date 
var today = dayjs();
$("#currentDay").text(today.format("MM/DD/YYYY"));



//event listener for save button 
$(function () {
  var saveBtn = $(".saveBtn");

  saveBtn.on("click", function(){
  var textId = $(this).parent().attr("id");
  var text=$(this).siblings(".description").val()
  console.log(textId,text)
  localStorage.setItem(textId,text)

//saves user input to schedule in local storage
  } );
    
  for (var i=9; i<=17; i++){
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }  
   //updates color based on current time for past, present, future 
   function colorUpdate(){
    var currentTime=dayjs().hour()

    var timeBlock=$(".time-block")
    timeBlock.each(function(){
        //removes the hour- so the time is just a number
        var blockId=parseInt($(this).attr("id").split("-")[1])
        console.log(currentTime, blockId)
        if (blockId<currentTime){
            $(this).addClass("past")
        }
        else if (blockId === currentTime){
            $(this).addClass("present")
        }
        else{
            $(this).addClass("future")
        }
    })
   }
   //updates hour 
   for (var i=9; i<=17; i++){
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }

 
   colorUpdate()


  

});

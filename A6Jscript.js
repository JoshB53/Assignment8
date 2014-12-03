/*
- Assignment 8: Creating an Interactive Dynamic Table With Tabs
  - Joshua Blanchette, UMass Lowell Computer Science Transfer Student
  - Email:  Joshua_Blanchette@student.uml.edu
  - Date: 10/22/2014
  - This file is my JavaScript that actually creates the table, and checks for user
  - error.  It takes the given information from the user and multiplies the numbers
  - accordingly.  Enhanced: You can now create more than one multiplication table via tabs.
*/
$(document).ready(function() {
//Variable definitions below handle the creation of tabs and assignment of tabs
  $("#tabs").tabs();
  var tabsdiv = $("#tabs");
  var tabslist = tabsdiv.find("ul");
  var nextTabNo = tabslist.find("li").length(); //keeps track of number of tabs
    
  var AddTabButtonClickHandler = function() {
      
    //Below creates a new tab. 97 is the value of char A.  .fromCharCode converts to char.
    tabslist.append( '<li><a href="#' + String.fromCharCode( 97+nextTabNo+1) + '">' + 
    'Tab' + (nextTabNo+1) + '</a></li>' );
    
    //Below adds the content to the new tab that was created.
    tabsdiv.append( '<div id="' + String.fromCharCode(97+nextTabNo) + '">');
    $("#" + String.fromCharCode( 97+nextTabNo) ).append( '<button class="removeTab">Remove Tab</button>' ) ;
    
    //Refresh tab structure so newly added components appear.
    $("#tabs").tabs("refresh");
    
    //These two lines come after the tab refresh.  Buttons must exisit after refresh
    $("#" + String.fromCharCode( 97+nextTabNo ) + " .addTab").click( AddTabButtonClickHandler ) ;
    $("#" + String.fromCharCode( 97+nextTabNo ) + " .removeTab").click( RemoveTabButtonClickHandler ) ;
    
    //Most important part, you MUST increment the tab counter.
    nextTabNo++;
  }; //End of AddTab function
    
    
  var RemoveTabButtonClickHandler = function() {
    // remove tab content
    $(this).parent().remove() ;
    
    // remove tab itself        
    var id = $(this).parent().attr("id") ;
    var tabToRemove = tabslist.find( "li a[href='#" + id + "']").parent() ;
    tabToRemove.remove() ;
    
    // refresh the tab structure to make the newly added components appear
    $("#tabs").tabs( "refresh" ) ;

  }; //End of RemoveTab function
  
  // add the AddTab button click handler to all AllTab buttons
  $(".addTab").click( AddTabButtonClickHandler ) ;
  
  // add the AddTab button click handler to all AllTab buttons
  $(".removeTab").click( RemoveTabButtonClickHandler ) ;
  
  
  
  
  
  
  
  
  //All form validation below
  $("#form1").validate({
    errorClass: "errorClass",
      rules: {
        startH:{
        number: true,
        required: true
               },
        endH:  {
        number: true,
        required: true
               },
        startV:{
        number: true,
        required: true
               },
        endV:  {
        number: true,
        required: true
               }
             }
  });  //End of form validation
    
    
  //removes all tabs
  $("#removeAll").unbind().click(function(){
  $(".removeTab").click();
  }); 
  
  
    $("#form1").submit(function() {
      $("table").remove();//This removes the table when another one is generated
      $("h2").remove();
        var RowStart = Number(document.getElementById('StartH').value);
        var RowEnd = Number(document.getElementById('EndH').value);
        var ColumnStart = Number(document.getElementById('StartV').value);
        var ColumnEnd = Number(document.getElementById('EndV').value);
      
        var n1= document.querySelector("#StartH");
        var n2= document.querySelector("#EndH");
        var n3= document.querySelector("#StartV");
        var n4= document.querySelector("#EndV");
      
        str = "";
        n1.style.backgroundColor="White";
        n2.style.backgroundColor="White";
        n3.style.backgroundColor="White";
        n4.style.backgroundColor="White";  
        // For the following three if statements generally do that same thing.
        // They all checks if the user inputed incorrect data.  If so, the
        // Text boxes that are incorrect turn red and an error message appears. 
        if(RowStart > RowEnd && ColumnStart > ColumnEnd){
          $("h2").remove();
          
          n1.style.backgroundColor="Red";
          n2.style.backgroundColor="Red";
          n3.style.backgroundColor="Red";
          n4.style.backgroundColor="Red";
          str +="<h2 style=\"color:red\"> Both your starting values are greater than both your ending values.<br>Please recalculate and try again. </h2>";
          $(this).append(str);
          return;
        }
        else if(RowStart > RowEnd){
          $("h2").remove(); //removes the previous error message if there is one
          n1.style.backgroundColor="Red";
          n2.style.backgroundColor="Red";
          str +="<h2 style=\"color:red\"> Your starting horizontal value is greater than your ending horizontal value.<br>Please recalculate and try again. </h2>";
          $(this).append(str);//append all the strings in the str variable. 
          return;
        }
        
        else if(ColumnStart > ColumnEnd){
          $("h2").remove();//removes the previous error message if there is one
          n3.style.backgroundColor="Red";
          n4.style.backgroundColor="Red";
          str +="<h2 style=\"color:red\"> Your starting column value is greater than your ending column value.<br>Please recalculate and try again. </h2>";
          $(this).append(str);//append all the strings in the str variable. 
          return;
        }
        
        str += "<table border=2 width=100%>";
        str += "<tr><td> Q </td>";
        // A for loop to generate the first row in the table
        for(i=RowStart; i<= RowEnd; i++){
          str+="<th>" + i + "</th>";
        } // End of for loop 
            
        str+= "</tr>";
        // A for loop to genearte the first numbers in the columns, along with
        // multiplying the numbers in the middle of the table.
        for(i=ColumnStart; i<=ColumnEnd; i++){
          str+="<tr><td>" + i + "</td>";
          for(j=RowStart; j<=RowEnd; j++){
            str+= "<td>" + i*j + "</td>";
          }// End of nested for loop
          str += "</tr>";
        }// End of for loop 
        str += "</table>";
        //append html code
        $("#" + String.fromCharCode( 97+nextTabNo-1) ).append(str);
        return;
    });
});

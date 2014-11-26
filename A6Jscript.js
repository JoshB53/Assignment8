/*
- Assignment 6: Creating an Interactive Dynamic Table
  - Joshua Blanchette, UMass Lowell Computer Science Transfer Student
  - Email:  Joshua_Blanchette@student.uml.edu
  - Date: 10/22/2014
  - This file is my JavaScript that actually creates the table, and checks for user
  - error.  It takes the given information from the user and multiplies the numbers
  - accordingly.  
*/
$(document).ready(function() {
  $("#form1").submit(function() {
    $("table").remove();  //This removes the table when another one is generated
    $("h2").remove(); // Removes previous error messages
      //Below are declerations of multiple variables.
      var RowStart = Number(document.getElementById('StartH').value);
      var RowEnd = Number(document.getElementById('EndH').value);
      var ColumnStart = Number(document.getElementById('StartV').value);
      var ColumnEnd = Number(document.getElementById('EndV').value);
      
      var n1= document.querySelector("#StartH");
      var n2= document.querySelector("#EndH");
      var n3= document.querySelector("#StartV");
      var n4= document.querySelector("#EndV");
      str = "";
      //Below sets the background color of my text boxes to white
      n1.style.backgroundColor="White";
      n2.style.backgroundColor="White";
      n3.style.backgroundColor="White";
      n4.style.backgroundColor="White";
        // For the following three if statements generally do that same thing.
        // They all check if the user inputed incorrect data.  If so, the
        // text boxes that are incorrect turn red and an error message appears. 
        if(RowStart > RowEnd && ColumnStart > ColumnEnd){
          $("h2").remove();
          n1.style.backgroundColor="Red";
          n2.style.backgroundColor="Red";
          n3.style.backgroundColor="Red";
          n4.style.backgroundColor="Red";
          str +="<h2 style=\"color:red\"> Both your starting values are greater than both your ending values.<br>Please recalculate and try again. </h2>";
          $(this).append(str);//append all the strings in the str variable. 
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
        
        $("h2").remove();
        str += "<table border=2 width=100%>"; 
        str += "<tr><td> Q </td>";  // This Q appears in the top right block that is not used
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
        }// End of for loop 
        str += "</tr>"; //close tag
        str += "</table>"; //close tag
        
        $(this).append(str); //append all the strings in the str variable. 
        return;
    });
});

import * as $ from "jquery"

$( document ).ready(function() {
  console.log( "ready!" )
  var source = $("#data-row-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $('#data-row').html(html);
  $.ajax({
    type: "GET",
    url: "/v1/deployments",
    success: initializePage(data)
  })
})

function initializePage(data) {
  // for thing in things setup all the rows
  //populateRow(data, currentRow)
}

function populateRow(deployment, rowHTML) {
  var source = $("#list-in-cell-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  //first cell is always the name of the deployment
  $(rowHTML).append("<td>", deployment.name, "</td>");

  //second cell is a list of the releases in that deployment
  $(rowHTML).html(html);
}



var data = {
             "deployments": [
               {
                 "name": "bosh",
                 "environments" : [
                   {
                     "name": "snw-dev",
                     "releases": [
                       {
                         "name": "bosh",
                         "version": "270.9",
                         "age": 0
                       },
                       {
                         "name": "uaa",
                         "version": "72.0.0",
                         "age": 0
                       }
                     ]
                   },
                   {
                     "name": "snw-prod",
                     "releases": [
                       {
                         "name": "bosh",
                         "version": "270.2",
                         "age": 1,
                       },
                       {
                         "name": "uaa",
                         "version": "72.0.0",
                         "age": 0
                       }
                     ]
                   }
                 ]
               }
             ]
           } 

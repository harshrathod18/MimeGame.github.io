jQuery(document).ready(function($){
  // $('.table-responsive').doubleScroll();
  var country_code = $('#country_code_get').val();
  var country_code_alt = $('#country_code_get_alt').val();
  $("#country_code").val(country_code);
  $("#country_code_alt").val(country_code_alt);

  $('#is_taxble').on('change', function() {
    if(this.value=="1"){
      $('#gst_detail_div').css('display','block');
    } else {
      $('#gst_detail_div').css('display','none');
    }
    
});

$("#weekDivs").hide();
$("#monthDivs").hide();
$("#singleDate").hide();
$(".aloowMultileDiv").hide();
$(".aloowMultileDivSingle").hide();
$(".NoOfPersonMultiDiv").hide();


 $('.number_of_personCheck').on('change', function() {
    if(this.value=="1"){
      $('.aloowMultileDiv').show();
    } else {
      $('.aloowMultileDiv').hide();
    }
    
});

 $('.number_of_personCheckSingle').on('change', function() {
    if(this.value=="1"){
      $('.aloowMultileDivSingle').show();
    } else {
      $('.aloowMultileDivSingle').hide();
    }
    
});

 $('.single_slot_booking').on('change', function() {
    if(this.value=="1"){
      $('#maximuSlot1').show();
      $('#maximuSlot2').show();
    } else {
      $('#maximuSlot1').hide();
      $('#maximuSlot2').hide();
    }
    
});


  $('#member_relation_name').on('change', function() {
    if(this.value=="Other"){
      $('.otherRelationDiv').css('display','block');
      $('#member_relation_name_other').val('');
    } else {
      $('.otherRelationDiv').css('display','none');
    }
    
});

//20220803
  $('#paymentCompanyChange').on('change', function() {
    // alert(this.value);
    if(this.value=="2"){
      $('#payUmoneyDiv').css('display','none');
      $('#upiDiv').css('display','none');
      $('#razorpayDiv').css('display','block');
      $('#flutterwaveDiv').css('display','none');
      $('#paytm').css('display','none');
      $('#authTokenDiv').css('display','none');
    }else if(this.value=="3"){
      $('#payUmoneyDiv').css('display','none');
      $('#upiDiv').css('display','block');
      $('#razorpayDiv').css('display','none');
      $('#flutterwaveDiv').css('display','none');
      $('#paytm').css('display','none');
      $('#authTokenDiv').css('display','none');
    } else if(this.value=="4"){
      $('#payUmoneyDiv').css('display','none');
      $('#upiDiv').css('display','none');
      $('#razorpayDiv').css('display','none');
      $('#flutterwaveDiv').css('display','block');
      $('#paytm').css('display','none');
      $('#authTokenDiv').css('display','none');
    }else if(this.value=="5"){
      $('#payUmoneyDiv').css('display','none');
      $('#upiDiv').css('display','none');
      $('#razorpayDiv').css('display','none');
      $('#flutterwaveDiv').css('display','none');
      $('#paytm').css('display','block');
      $('#authTokenDiv').css('display','none');
    } else {
      $('#payUmoneyDiv').css('display','block');
      $('#razorpayDiv').css('display','none');
      $('#upiDiv').css('display','none');
      $('#flutterwaveDiv').css('display','none');
      $('#paytm').css('display','none');
      $('#authTokenDiv').css('display','block');
    }
    
});

//20220803

  
  $('#member_relation_add').on('change', function() {
    if(this.value=="Other"){
      $('.otherRelationDivAdd').css('display','flex');
      $('#member_relation_name_other').val('');
    } else {
      $('.otherRelationDivAdd').css('display','none');
    }
    
});

$('#member_relation_primary').on('change', function() {
    if(this.value=="Other"){
      $('.otherRelationDivPrimary').css('display','block');
      $('#member_relation_name_other_primary').val('');
    } else {
      $('.otherRelationDivPrimary').css('display','none');
    }
    
});
//IS_1686 27march2020
$('#is_taxble_bill_type1').on('change', function() {
    if(this.value=="1"){
      $('#expense_gst_detail_div').css('display','block');
    } else {
      $('#expense_gst_detail_div').css('display','none');
    }
    
});

$('#is_taxble_bill_type').on('change', function() {
    if(this.value=="1"){
      $('#income_gst_detail_div').css('display','block');
    } else {
      $('#income_gst_detail_div').css('display','none');
    }
    
});
//IS_1686 27march2020

    // Notice Board Start
   $('#summernoteEditor').summernote({
  height: 400,
  tabsize: 2,
  toolbar: [
  [ 'style', [ 'style' ] ],
  [ 'font', [ 'bold', 'italic', 'underline', 'clear'] ],
  [ 'fontname', [ 'fontname' ] ],
  [ 'fontsize', [ 'fontsize' ] ],
  [ 'color', [ 'color' ] ],
  [ 'para', [ 'ol', 'ul', 'paragraph', 'height' ] ],
  [ 'table', [ 'table' ] ],
  [ 'insert', [ 'link','picture'] ],
  [ 'view', [ 'undo', 'redo', 'codeview', 'help' ] ]
  ]
});

 $('#summernoteImgage').summernote({
  height: 400,
  tabsize: 2,
  toolbar: [
    [ 'style', [ 'style' ] ],
    [ 'font', [ 'bold', 'italic', 'underline', 'clear'] ],
    [ 'fontname', [ 'fontname' ] ],
    [ 'fontsize', [ 'fontsize' ] ],
    [ 'color', [ 'color' ] ],
    [ 'para', [ 'ol', 'ul', 'paragraph', 'height' ] ],
    [ 'table', [ 'table' ] ],
    [ 'insert', [ 'link','picture','video'] ],
    [ 'view', [ 'undo', 'redo', 'codeview', 'help' ] ],
  ]
  ,
  callbacks: {
    onImageUpload: function(image) {
      uploadImage(image[0]);
    }
  }
});
 function uploadImage(image) {
  var data = new FormData();
  data.append("image", image);
  $.ajax({
    url: 'controller/noticeBoardImage.php',
    cache: false,
    contentType: false,
    processData: false,
    data: data,
    type: "post",
    success: function(url) {
      if (url==0) {
        swal("Error! Please Upload Only Photo !", {icon: "error",});

      } else {

      var image = $('<img width=320>').attr('src', url);
      console.log(image);
      $('#summernoteImgage').summernote("insertNode", image[0]);
      }
    },
    error: function(data) {
      console.log(data);
    }
  });
}

    //IS_986
    $( "#noticeBoard" ).submit(function( event ) {
     if ($('#summernoteImgage').summernote('codeview.isActivated')) {
       $('#summernoteImgage').summernote('codeview.deactivate');
     }
   });

$('#balancesheetIncome').dataTable({
  aaSorting: [[4, 'desc']],
  "fnRowCallback" : function(nRow, aData, iDisplayIndex){
                $("td:first", nRow).html(iDisplayIndex +1);
               return nRow;
            },
});



$('#balancesheetExpence').dataTable({
  aaSorting: [[3, 'desc']]
});

$('#balancesheetExpencePublic').dataTable({
  aaSorting: [[2, 'desc']],
  lengthChange: false,
  bPaginate: false,
   bInfo : false,
   bFilter :false,
   
            

});

$('#balancesheetExpencePublicSumary').dataTable({
  lengthChange: false,
  bPaginate: false,
   bInfo : false,
   bFilter :false,
});
// data table start
      $('#default-datatable').DataTable({
        drawCallback: function(){
          $("img.lazyload").lazyload();
       }
      });
      $('#default-datatable1').DataTable({
        drawCallback: function(){
          $("img.lazyload").lazyload();
       }
      });
      $('#default-datatable2').DataTable({
        drawCallback: function(){
          $("img.lazyload").lazyload();
       }
      });
      $('#default-datatable3').DataTable({
        drawCallback: function(){
          $("img.lazyload").lazyload();
       }
      });
      //IS_1217 13march2020
      $('#default-datatable4').DataTable({
        drawCallback: function(){
          $("img.lazyload").lazyload();
       }
      });
      $('#default-datatable5').DataTable({
        drawCallback: function(){
          $("img.lazyload").lazyload();
       }
      });
      $('#default-datatable6').DataTable({
        drawCallback: function(){
          $("img.lazyload").lazyload();
       }
      });


//IS_675 //26feb2020
var table = $('#examplePenaltiesTbl').DataTable( {
  lengthChange: false,
  order: [[ 8, 'desc' ]] 
});
table.buttons().container().appendTo( '#examplePenaltiesTbl_wrapper .col-md-6:eq(0)' );
//IS_675 //26feb2020

var table = $('#example,.exampleReport').DataTable( {
  drawCallback: function(){
          $("img.lazyload").lazyload();
       },
  stateSave: true,
  lengthChange: true,
  pageLength: 25,
  lengthMenu: [[5,10, 25, 50,100, -1], [5, 10, 25, 50,100, "All"]],
        // buttons: [ 'copy', 'excel', 'pdf', 'print', 'colvis' ]
      } );

var table1 = $('#exampleReportBackup').DataTable( {
  "bPaginate": false,
  "bLengthChange": false,
  "bFilter": true,
  "bInfo": false,
  "bAutoWidth": false 

} );

var table1 = $('#exampleReport').DataTable( {
  "bPaginate": false,
  "bLengthChange": false,
  "bFilter": true,
  "bInfo": false,
  "bAutoWidth": false,
  "dom": 'Blfrtip',
  "buttons": [
  {
    extend: 'copyHtml5',
    title: $("#reportName").val(),
    exportOptions: {
      columns: ':visible'
    }
  },
  {
    extend: 'csv',
    title: $("#reportName").val(),
    exportOptions: {
      columns: ':visible'
    }
  },
  {
    extend: 'excelHtml5',
    title: $("#reportName").val(),
    exportOptions: {
      columns: ':visible'
    }
  },
  {
    extend : 'pdfHtml5',
    title: $("#reportName").val(),
    orientation : 'landscape',
    pageSize : 'LEGAL',
    titleAttr : 'PDF',
    exportOptions: {
      columns: ':visible'
    }
  },'colvis']
} );



var tableBala = $('#exampleReportBalancesheet').DataTable( {
   aaSorting: [[2, 'desc']],
  "bPaginate": false,
  "bLengthChange": false,
  "bFilter": true,
  "bInfo": false,
  "bAutoWidth": false,
  "dom": 'Blfrtip',
   // "fnRowCallback" : function(nRow, aData, iDisplayIndex){
   //              $("td:first", nRow).html(iDisplayIndex +1);
   //             return nRow;
   //          },
  "buttons": [
  {
    extend: 'copyHtml5',
    title: $("#reportName").val(),
    exportOptions: {
      columns: ':visible'
    }
  },
  {
    extend: 'csv',
    title: $("#reportName").val(),
    exportOptions: {
      columns: ':visible'
    }
  },
  {
    extend: 'excelHtml5',
    title: $("#reportName").val(),
    exportOptions: {
      columns: ':visible'
    }
  },
  {
    extend: 'pdfHtml5',
    title: $("#reportName").val(),
    exportOptions: {
      columns: ':visible'
    }
  },'colvis']
} );

table.buttons().container().appendTo( '#example_wrapper .col-md-6:eq(0)' );
table1.buttons().container().appendTo( '#example_wrapper .col-md-6:eq(0)' );
tableBala.buttons().container().appendTo( '#example_wrapper .col-md-6:eq(0)' );

//20220625
var notificationTable = $('#notificationTable').DataTable( {
    drawCallback: function(){
            $("img.lazyload").lazyload();
         },
    lengthChange: true,
    pageLength: 25,
    lengthMenu: [[5,10, 25, 50, -1], [5, 10, 25, 50, "All"]],
    columnDefs: [{
       targets: 0,
       bSortable: false,
       searchable: false,
       orderable: false,
       className: 'dt-body-center',
       render: function (data, type, full, meta){
           return data;
           /*return '<input type="checkbox" value="' + $('<div/>').text(data).html() + '">';*/
       }
    }],
    // buttons: [ 'copy', 'excel', 'pdf', 'print', 'colvis' ]
  } );
// Handle click on "Select all" control
  $('#example-select-all').on('click', function(){

    // Get all rows with search applied
    var rows = notificationTable.rows({ 'search': 'applied' }).nodes();
    // Check/uncheck checkboxes for all rows in the table
    $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  // Handle click on checkbox to set state of "Select all" control
   $('#notificationTable tbody').on('change', 'input[type="checkbox"]', function(){
      // If checkbox is not checked
      if(!this.checked){
         var el = $('#example-select-all').get(0);
         // If "Select all" control is checked and has 'indeterminate' property
         if(el && el.checked && ('indeterminate' in el)){
            // Set visual state of "Select all" control
            // as 'indeterminate'
            el.indeterminate = true;
         }
      }
   });

   

  
//20220625
// Data Table End

$('#loginOTP').on('click',function(e){

    e.preventDefault();


   var adminMobile= $('#mobile').val();

   if($.trim(adminMobile) ==''){
     swal("Error! Please Provide Mobile Number!", {icon: "error",});
   } else {

    var csrf =$('input[name="csrf"]').val();
      $.ajax({
      url: 'controller/loginController.php',
      cache: false,
      data: {adminMobile : adminMobile,SendOPT:'yes',csrf:csrf},
      type: "post",
      success: function(data) {

        if(data==0){
          swal("Error! Plaese Enter Registered Mobile Number!", { icon: "error", });
        } else if(data==2){
          swal("Error! Something Went Wrong, Please Try Again!", { icon: "error",  });
        } else {

           
            $('#success_info').text('OTP Sent to '+adminMobile+', Please Provide in below textbox.');
           
          $('#verifyOTPFrm :input[name="verify_mobile"]').val(adminMobile);
            $('#verifyOTP').click();
        }
          
      },
      error: function(data) {
         swal("Error! Something Went Wrong, Please Try Again!", { icon: "error",  });
      }
    });
   }

   });

  


});


// multiselect delete function

function deleteData(id) {
              swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this data !",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
              $('form.deleteForm'+id).submit();
                  swal("Successfully Deleted !", {
                    icon: "success",
                  });
                } else {
                  // swal("Your imaginary file is safe!");
                }
              });
  }

$(document).on("click", "button[type='reset']", function(){
       // $("select").trigger("change");
       // $(".single-select").select2('val', 'All');
       $('.single-select').val('').trigger('change');
});

// multiple delete
// function DeleteAllTem(deleteValue) {
//     var myArray = [];
//     var id = "";
//     var oTable = $("#example").dataTable();
//     $(".multiDelteCheckbox:checked", oTable.fnGetNodes()).each(function() {
//         if (id != "") {
//             id = id + "," + $(this).val();
//         } else {
//             id = $(this).val();
//         }
//     });
//     alert(id);
// }

function DeleteAll(deleteValue) {
    // var myArray = [];
    // var val = [];
    if(deleteValue=="deleteComplaintSubCategory"){
      var oTable = $(".example").dataTable();
    }else if(deleteValue=="deleteAdminNotification"){
      var oTable = $("#notificationTable").dataTable();
    }else{
      var oTable = $("#example").dataTable();
    }
    
    
    // $(".multiDelteCheckbox:checked", oTable.fnGetNodes()).each(function(i) {
    //     if (val != "") {
    //         val[i] = val + "," + $(this).val();
    //     } else {
    //         val = $(this).val();
    //     }
    // });

    var val = [];
          $(".multiDelteCheckbox:checked", oTable.fnGetNodes()).each(function(i) {
            val[i] = $(this).val();
            
          });
    if(val=="") {
      swal(
        'Warning !',
        'Please Select at least 1 item !',
        'warning'
      );
    } else {
    
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              // $('form.deleteForm'+id).submit(); 
              
          $.ajax({
              url: "controller/deleteController.php",
              cache: false,
              type: "POST",
              data: {ids : val,deleteValue
                :deleteValue,csrf:csrf},
              success: function(response){
                // console.log(response)
                if(response==1) {
                  document.location.reload(true);
                  // history.go(0);
                } else {
                  document.location.reload(true);
                  // history.go(0);
                }
              }
            });

             
            } else {
              // swal("Your data is safe!");
            }
          });
    }
}
  // change status 

  $(function() {

    $('.selectAll').click(function() {
        $('.multiDelteCheckbox').prop('checked', this.checked);
    });

});

  

function changeStatus(id,status) {
  var csrf =$('input[name="csrf"]').val();
  $(".ajax-loader").show();
  $.ajax({
        url: "controller/statusController.php",
        cache: false,
        type: "POST",
        data: {id : id,status
          :status, csrf:csrf},
        success: function(response){
          $(".ajax-loader").hide();
          console.log(response)
          if(response==1) {
            document.location.reload(true);
            swal("Status Changed", {
                      icon: "success",
                    });
          } else {
            document.location.reload(true);
            swal("Something Wrong!", {
                      icon: "error",
                    });

          }
        }
      });
}


$('#new_primary_id').on('change', function() {
  var user_type =$('#userType').val();
  var user_id =$('#user_id').val();
  var unit_id =$('input[name="unit_id"]').val();
  var csrf =$('input[name="csrf"]').val();
  var new_primary_id =this.value;
  $(".ajax-loader").show();
  $.ajax({
        url: "getOtherFamilyMember.php",
        cache: false,
        type: "POST",
        data: {user_type:user_type,new_primary_id : new_primary_id,unit_id
          :unit_id,user_id:user_id, csrf:csrf},
        success: function(response){
          $(".ajax-loader").hide();
          $('#familyLoadDiv').html(response);
         
        }
      });
});


  // var csrf =$('input[name="csrf"]').val();   Aleredu imclude in footer.php
//IS_1045 7march2020
$('.block-id-cls').change(function() {
      var elem = $(this);
      var  id = elem.closest('tr').attr('id');

      var detail = id.split('~');

      var block_id= detail[0];
      var society_id= detail[1];
      var block_sort =  $(this).val();
      $.ajax({
        url: "controller/blockController.php",
        cache: false,
        type: "POST",
        data: {block_id : block_id,society_id:society_id,block_sort:block_sort, updateBlocksAjax:'yes',csrf:csrf},
        success: function(response){
          var obj =response.split('~');
          if(obj[0]=="error"){
             swal("Error! Duplicate Order Number!", {
                            icon: "error",
                          });
            // $('#block_id_'+block_id).html('<center><label   style="color: #ff0000;"  >'+obj[1]+'</label></center>');
          } else {
            swal("Success ! Block Order Number Changed!", {
                            icon: "success",
                          });
            // $('#block_id_'+block_id).html('<center><label   style="color: #2dce89;"  >'+obj[1]+'</label></center>');
            // location.reload();
          }


        }
      });  

    });
//IS_1045 7march2020




function  getBlockList() {
  var no_of_blocks = $("#no_of_blocks").val();
  var block_type = $("#block_type").val();
  $.ajax({
        url: "getBlockList.php",
        cache: false,
        type: "POST",
        data: {no_of_blocks : no_of_blocks,block_type:block_type,csrf:csrf},
        success: function(response){
            $('#BlockResp').html(response);
          
            
        }
     });
}

function  getSubCategory(business_categories_sub) {
  var business_categories = $("#business_categories").val();
  if (business_categories=='Other') {
    $("#ProfessionalOther").show();
  }else {
    $("#ProfessionalOther").hide();
    $("#ProfessionalTypeOther").hide();
  }
  $.ajax({
        url: "getBusSubCategory.php",
        cache: false,
        type: "POST",
        data: {business_categories : business_categories,business_categories_sub:business_categories_sub,csrf:csrf},
        success: function(response){
            $('#business_categories_sub').html(response);
        }
     });
}



function  otherCheck() {
  var business_categories_sub = $("#business_categories_sub").val();
  if (business_categories_sub=='Other') {
    if (business_categories_sub=='Other') {
      $("#ProfessionalTypeOther").show();
    }else {
      $("#ProfessionalTypeOther").hide();
    }

  }

}


function  otherDailyCheck() {
  var visitor_sub_type_id = $("#visitor_sub_type_id option:selected").html();
    if (visitor_sub_type_id=='Other') {
      $("#otherCompany").show();
    }else {
      $("#otherCompany").hide();
    }


}



function  getFloorList() {
  var no_of_floor = $("#no_of_floor").val();
  var floor_type = $("#floor_type").val();
  $.ajax({
        url: "getFloorList.php",
        cache: false,
        type: "POST",
        data: {no_of_floor : no_of_floor,floor_type:floor_type,csrf:csrf},
        success: function(response){
            $('#floorResp').html(response);
          
            
        }
     });
}

function  editAgent(agent_id) {
  
  $.ajax({
        url: "editAgent.php",
        cache: false,
        type: "POST",
        data: {agent_id : agent_id,csrf:csrf},
        success: function(response){
            $('#agentEditDiv').html(response);
        }
     });
}

function DeleteBlock(block_id) {
    // alert(block_id);
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/blockController.php",
                cache: false,
                type: "POST",
                data: {deleteBlock : block_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                    
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  } else {
                         swal("Token Mismatch", {
                            icon: "error",
                          });
                  }
                }
              });
             
            } else {
              //swal("Your data is safe!");
            }
          });

}

function DeleteFloor(floor_id) {
    // alert(floor_id);
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/floorController.php",
                cache: false,
                type: "POST",
                data: {deleteFloor : floor_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  } else {
                         swal("Success ! Your data has been deleted!", {
                            icon: "error",
                          });
                  }
                }
              });

             
            } else {
              //swal("Your data is safe!");
            }
          });



}


function DeleteUnit(unit_id) {
    // alert(unit_id);
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/unitController.php",
                cache: false,
                type: "POST",
                data: {deleteUnit : unit_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  } else {
                         swal("Success ! Your data has been deleted!", {
                            icon: "error",
                          });
                  }
                }
              });

             
            } else {
              //swal("Your data is safe!");
            }
          });



}


function DeleteParking(parking_id) {
    // alert(parking_id);
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/parkingController.php",
                cache: false,
                type: "POST",
                data: {deleteParking_id : parking_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  } else {
                         swal("Success ! Your data has been deleted!", {
                            icon: "error",
                          });
                  }
                }
              });

             
            } else {
              //swal("Your data is safe!");
            }
          });



}


function editFloor (floor_id,floor_name) {
    $('#floorId').val(floor_id);
    $('#oldFloorname').val(floor_name);

}


function editBlock (block_id,block_name,block_sort) {
    $('#floorId').val(block_id);
    $('#oldFloorname').val(block_name);
    $('#block_sort').val(block_sort);

}


//20220226
function editParking (parking_id,parking_name,society_parking_id,is_visitor_parking,charging_point,is_allocate) {
    
    $('#parking_id').val(parking_id);
    $('#oldParkingName').val(parking_name);
    $('#society_parking_id').val(society_parking_id);
    
    if(is_allocate=="1"){
      
      $("#visitorParkingeHide").css("display","none");
      $("#chargePointHide").css("display","none");
      
    }else{
      
      $("#visitorParkingeHide").css("display","block");
      $("#chargePointHide").css("display","block");
    }

    $('.parking_has_electric_charge_point_'+charging_point).each(function(){
      $(this).prop('checked', true);
    });
    
    $('.is_visitor_parking_'+is_visitor_parking).each(function(){
      $(this).prop('checked', true);
    });

}
//20220226

 function editKbgCategory (kbg_category_id,category_name) {
    $('#kbg_category_id').val(kbg_category_id);
    $('#category_name').val(category_name);

}
function addParking(parking_id,Type,parking_name,society_parking_id) {

  $('#P_id').val(parking_id);
  $('#sParking_id').val(society_parking_id);
  $('#pType').html(Type);
  //IS_607
  $('#CappType').html(Type);
  $('#parkingName').html(parking_name);
  $('#alocateParkingName').val(parking_name);

}

//20220222
function updateParking(parking_id,Type,parking_name,society_parking_id,unit_id) {
  $('.P_id11').val(parking_id);
  $('.sParking_id1').val(society_parking_id);
  $('.unitId').val(unit_id);
  $('#pType1').html(Type);
   //IS_607
  $('#UpCappType').html(Type);
  $('#parkingName1').html(parking_name);
  $('#alocateParkingNameEdit').val(parking_name);
   $.ajax({
        url: "getParkingDetails.php",
        cache: false,
        type: "POST",
        data: {updateCarParking : "updateCarParking",unit_id : unit_id,UpCappType:Type,parking_id:parking_id,csrf:csrf},
        success: function(response){
            $('#getParkingDetails').html(response);
        }
      });
}
//20220222

function approveParking(parking_id,Type,parking_name,society_parking_id,unit_id) {
 
   $.ajax({
        url: "getParkingDetailsPending.php",
        cache: false,
        type: "POST",
        data: {unit_id : unit_id,Type:Type,parking_name:parking_name,society_parking_id:society_parking_id,parking_id:parking_id,csrf:csrf},
        success: function(response){
            $('#pendingParkingDiv').html(response);
        }
      });
}

function checkMobileSociety() {
  var secretary_mobile= $('#secretary_mobile').val();
  
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {secretary_mobile : secretary_mobile,checkSocietyMobile:'checkSocietyMobile',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This mobile number is Already Used.'
              //   });

              swal("This Mobile Number is Already Used.", {
                            icon: "error",
                          });
                  
           } else {
               document.getElementById("socAddBtn").disabled=false;
           }
        }
      });
}


function checkMobileUser() {
  var userMobile= $('#userMobile').val();
  
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {userMobile : userMobile,checkUserMobile:'checkUserMobile',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This mobile number is Already Used.'
              //   });
                  
                swal("This Mobile Number is Already Used.", {
                            icon: "error",
                          });
           } else {
               document.getElementById("socAddBtn").disabled=false;
           }
        }
      });
}


function checkMobileUserTenant() {
  var userMobile= $('#userMobileTenant').val();
   if (userMobile.length>0) {

     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {userMobile : userMobile,checkUserMobile:'checkUserMobile',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtnTenat").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This mobile number is Already Used.'
              //   });
              swal("This mobile number is Already Used.", {
                            icon: "error",
                          });

           } else {
               document.getElementById("socAddBtnTenat").disabled=false;
           }
        }
      });
  }
}



function checkEmailUser() {
  var userEmail= $('#userEmail').val();
    if (userEmail!='') {
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {userEmail : userEmail,checkEmailMobile:'checkEmailMobile',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This Email is Already Used.'
              //   });
                  
               swal("This Email is Already Used.", {
                            icon: "error",
                          });
           } else {
               document.getElementById("socAddBtn").disabled=false;
           }
        }
      });
    } else {
      document.getElementById("socAddBtn").disabled=false;
    }
}

function checkEmailUserTenant() {
  var userEmail= $('#userEmailTenant').val();
    if (userEmail!='') {
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {userEmail : userEmail,checkEmailMobile:'checkEmailMobile',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtnTenat").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This Email is Already Used.'
              //   });
              
               swal("This Email is Already Used.", {
                            icon: "error",
                          });
           } else {
               document.getElementById("socAddBtnTenat").disabled=false;
           }
        }
      });
    } else {
       document.getElementById("socAddBtnTenat").disabled=false;
    }
}

function checkMobileUser1() {
  var userMobile= $('#userMobile1').val();
  
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {userMobile : userMobile,checkUserMobile:'checkUserMobile',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn1").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This mobile number is Already Used.'
              //   });
                  
                 swal("This mobile number is Already Used.", {
                            icon: "error",
                          });
           } else {
               document.getElementById("socAddBtn1").disabled=false;
           }
        }
      });
}



function checkEmailUser1() {
  var userEmail= $('#userEmail1').val();
 
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {userEmail : userEmail,checkEmailMobile:'checkEmailMobile',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn1").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This Email is Already Used.'
              //   });
              
              swal("This Email is Already Used.", {
                            icon: "error",
                          });
           } else {
               document.getElementById("socAddBtn1").disabled=false;
           }
        }
      });
}


function checkMobileSocietyEdit() {

  var secretary_mobile= $('#secretary_mobile').val();
  var secretary_mobile_old= $('#secretary_mobile_old').val();
  if (secretary_mobile_old!=secretary_mobile) {
    // alert("call");
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {secretary_mobile : secretary_mobile,secretary_mobile_old:secretary_mobile_old,checkSocietyMobileEdit:'checkSocietyMobileEdit',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This Mobile Number  is Already Used.'
              //   });
              
              swal("This Mobile Number is Already Used.", {
                            icon: "error",
                          });
           } else {
               document.getElementById("socAddBtn").disabled=false;
           }
        }
      });
    } else {
         document.getElementById("socAddBtn").disabled=false;
    }
}

function checkemailSociety() {
  var secretary_email= $('#secretary_email').val();
  
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {secretary_email : secretary_email,checkSocietyEmail:'checkSocietyEmail',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'Email already used'
              //   });
                
                swal("This Email is Already Used.", {
                            icon: "error",
                          });
           } else {
               document.getElementById("socAddBtn").disabled=false;
           }
        }
      });
}


function checkemailSocietyEdit() {

  var secretary_email= $('#secretary_email').val();
  var secretary_email_old= $('#secretary_email_old').val();
  if (secretary_email_old!=secretary_email) {
    // alert("call");
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {secretary_email : secretary_email,secretary_email_old:secretary_email_old,checkSocietyEmailEdit:'checkSocietyEmailEdit',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'Email already used'
              //   });

              swal("This Email is Already Used.", {
                            icon: "error",
                          });
                  
           } else {
               document.getElementById("socAddBtn").disabled=false;
           }
        }
      });
    } else {
         document.getElementById("socAddBtn").disabled=false;
    }
}


function checkMobileEmp() {
  var emp_mobile= $('#empNumber').val();
  
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {emp_mobile : emp_mobile,checkUserEmp:'checkUserEmp',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This mobile number is Already Used.'
              //   });
              
              swal("This Mobile Number is Already Used.", {
                            icon: "error",
                          });
           } else {
               document.getElementById("socAddBtn").disabled=false;
           }
        }
      });
}


function checkMobileEmpEdit() {
  var emp_mobile= $('#empNumber').val();
  var empNumberOld= $('#empNumberOld').val();
  if (empNumberOld!=emp_mobile) {
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {emp_mobile : emp_mobile,checkUserEmp:'checkUserEmp',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This mobile number is Already Used.'
              //   });
                
                swal("This Mobile Number is Already Used.", {
                            icon: "error",
                          });
           } else {
               document.getElementById("socAddBtn").disabled=false;
           }
        }
      });
    }
}



function checkMobileUserEdit() {
  var userMobile= $('#userMobile').val();
  var userMobileOld= $('#userMobileOld').val();
  if (userMobile!='') {
    if (userMobile!=userMobileOld) {
     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {userMobile : userMobile,checkUserMobile:'checkUserMobile',csrf:csrf},
        success: function(response){
           if (response==1) {
                document.getElementById("socAddBtn").disabled=true;
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This mobile number is Already Used.'
              //   });

            swal("This Mobile Number is Already Used.", {
                            icon: "error",
                          });
                  
           } else {
               document.getElementById("socAddBtn").disabled=false;
           }
        }
      });
   }
  } else {
    document.getElementById("socAddBtn").disabled=false;
  }
}


function checkEmailUserEdit() {
  var userEmail= $('#userEmail').val();
  var userEmailOld= $('#userEmailOld').val();
  if (userEmail!='') {
    if (userEmail!=userEmailOld) {
       $.ajax({
          url: "controller/uniqueController.php",
          cache: false,
          type: "POST",
          data: {userEmail : userEmail,checkEmailMobile:'checkEmailMobile',csrf:csrf},
          success: function(response){
             if (response==1) {
                  document.getElementById("socAddBtn").disabled=true;
                // Lobibox.notify('error', {
                //   pauseDelayOnHover: true,
                //   continueDelayOnInactiveTab: false,
                //   position: 'top right',
                //   icon: 'fa fa-times-circle',
                //   msg: 'This Email is Already Used.'
                //   });

                swal("This Email is Already Used.", {
                            icon: "error",
                          });
                    
             } else {
                 document.getElementById("socAddBtn").disabled=false;
             }
          }
        });
      }
     } else {
       document.getElementById("socAddBtn").disabled=false;
    }
}


 function changePlan(society_id) {
   $.ajax({
      url: "getPlan.php",
      cache: false,
      type: "POST",
      data: {society_id : society_id,csrf:csrf},
      success: function(response){
          document.getElementById("planFormRes").innerHTML=response;
      }
    });


}


function  getStates() {
  var country_id = $("#country_id").val();
  $.ajax({
        url: "getStates.php",
        cache: false,
        type: "POST",
        data: {country_id : country_id,getStates:'getStates',csrf:csrf},
        success: function(response){
            $('#state_id').html(response);
          
            
        }
     });
}

function  getCity() {
  var state_id = $("#state_id").val();
  $.ajax({
        url: "getCities.php",
        cache: false,
        type: "POST",
        data: {state_id : state_id,getCity:'getCity',csrf:csrf},
        success: function(response){
            $('#city_id').html(response);
          
            
        }
     });
}

function  getSubCategorySp() {
  var local_service_master_id = $("#local_service_master_id").val();
  $.ajax({
        url: "getSubCategory.php",
        cache: false,
        type: "POST",
        data: {local_service_master_id : local_service_master_id,getSubCategory:'getSubCategory',csrf:csrf},
        success: function(response){
            $('#local_service_provider_sub_id').html(response);
          
            
        }
     });
}


function deletePost(feed_id) {
    // alert(block_id);
    swal({
            title: "Are you sure to Delete this Post ?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/newsFeedController.php",
                cache: false,
                type: "POST",
                data: {feed_id_delete : feed_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                    
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  } else {
                         swal("Success ! Your data has been deleted!", {
                            icon: "error",
                          });
                  }
                }
              });
             
            } else {
              //swal("Your data is safe!");
            }
          });

}

function deleteComment(comments_id) {
    // alert(block_id);
    swal({
            title: "Are you sure delete this Comment ?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/newsFeedController.php",
                cache: false,
                type: "POST",
                data: {comments_id_delete : comments_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                    
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  } else {
                         swal("Success ! Your data has been deleted!", {
                            icon: "error",
                          });
                  }
                }
              });
             
            } else {
              //swal("Your data is safe!");
            }
          });

}



function deleteSpCategory(local_service_provider_id) {
    // alert(block_id);
    swal({
            title: "Are you sure to Delete this Category ?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/serviceProviderController.php",
                cache: false,
                type: "POST",
                data: {local_service_provider_id_delete : local_service_provider_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                    
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  }
                }
              });
             
            } else {
            }
          });

}

function deleteSpSubCategory(local_service_provider_sub_id) {
    // alert(block_id);
    swal({
            title: "Are you sure to Delete this Sub Category ?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/serviceProviderController.php",
                cache: false,
                type: "POST",
                data: {local_service_provider_sub_id_delete : local_service_provider_sub_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  } 
                }
              });
             
            } else {
            }
          });

}


function editCategory(local_service_provider_id,service_provider_category_name,service_provider_category_image) {
   $("#local_service_provider_id").val(local_service_provider_id);
   $("#service_provider_category_name").val(service_provider_category_name);
   $("#service_provider_category_image").val(service_provider_category_image);
    

}

function editSubCategory(local_service_provider_sub_id,service_provider_sub_category_name,service_provider_sub_category_image) {
   $("#local_service_provider_sub_id").val(local_service_provider_sub_id);
   $("#service_provider_sub_category_name").val(service_provider_sub_category_name);
   $("#service_provider_sub_category_image").val(service_provider_sub_category_image);
    

}



function  getCategorySp() {

  $.ajax({
        url: "main_api/local_service_provider_controller.php",
        cache: false,
        type: "POST",
         dataType: 'JSON',
        data: {getLocalServiceProviders : 'getLocalServiceProviders',csrf:csrf},
        success: function(response){
          // console.log(response['local_service_provider'][1]);
            
          $.each(response.local_service_provider, function (key, value) {
              $("#dropDownDest").append($('<option></option>').val(value.local_service_provider_id+'~'+value.service_provider_category_name).html(value.service_provider_category_name));
          });

          $('#dropDownDest').change(function () {
              // alert($(this).val());
              //Code to select image based on selected car id
          })
            
        }
     });
}

function showError(msg) {
  swal(msg, {
    icon: "warning",
  });
}
$('.eventPrice').hide();

$('input[type=radio][name=event_type]').change(function() {
    if (this.value == '1') {
      alert('asfdf');
      $('.eventPrice').show();

    }
    else if (this.value == '0') {
      $('.eventPrice').hide();
      alert("Asdff");
      
    }
});

function hideData() {
  var empType = $('.employment_type').val();
  if (empType=='Unemployed' || empType=='Student' || empType=='Others' || empType=='Homemaker') {
    $('.proExtDiv').hide();
  } else {
    $('.proExtDiv').show();
  }

}

 $(".onlyNumber,#secretary_mobile,#trlDays,#emp_sallary,#no_of_option,#month_working_days,#working_days,#leave_days,#no_of_person,#no_of_month,#expAmoint,#no_of_unit_bill,#no_of_unit,#no_of_blocks,#no_of_floor,#emrNumber,#userMobile,#ownerMobile,#empNumber,#cMobile,#editMobile1,#noofCar,#noofBike,#person_limit_day,#person_limit").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
         // Allow: Ctrl+A, Command+A
        (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
         // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

$(".onlyNumberNew").keydown(function(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 ) {
  }
  else {
    if (event.keyCode < 48 || event.keyCode > 57 ) {
        event.preventDefault();
    }
  }
});

//IS_250 21FEB2020
$("#no_of_person,#no_of_month").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    //110 for dot(.)
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
         // Allow: Ctrl+A, Command+A
        (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
         // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress

    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

 

//IS_250 21FEB2020


//24feb2020 IS_387
function hideNewsFeedInfo(id){
  if($("#collapse"+id).hasClass("show")){
    $("#showNewsFeedIfo"+id).css("display","block");
    
  } else {
    //20220726
    $.ajax({
        url: "getNewsFeed.php",
        cache: false,
        type: "POST",
        data: {feed_id : id,getComment:"yes",csrf:csrf},
        success: function(response){
          $(".collapse_"+id).html(response);
            
        }
    });
    //20220726
    $("#showNewsFeedIfo"+id).css("display","none");
  }
}
//24feb2020 IS_387

//28feb2020 IS_837
function resetFrm(id){
  $('#'+id).validate().resetForm();
}

//28feb2020 IS_837

//2march2020
/*//28feb2020-new  IS_853
 $('input').change(function(){
        this.value = $.trim(this.value);
    });

     $('textarea').change(function(){
        this.value = $.trim(this.value);
    });
//28feb2020-new  IS_853*/
//2march2020


$('.form-btn').on('click',function(e){
    e.preventDefault();
    var form = $(this).parents('form');
     swal({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        buttons: ['Cancel', 'Yes, I am sure !'],
      })
     .then((willDelete) => {
        if (willDelete) {
          form.submit();
        }
      });

});

if (window.innerWidth < 720) {

  $('.content-wrapper').click(function(e) {
     if($("#wrapper").hasClass("toggled")){
        $('#wrapper').removeClass("toggled"); 
           e.preventDefault();
        } 
  });
   $('.toggle-menu').click(function(event){
       event.stopPropagation();
   });

}



function  getSocietyData(society_id) {
 
  $.ajax({
        url: "controller/cronGetData.php",
        cache: false,
        type: "POST",
        data: {society_id : society_id,csrf:csrf},
        success: function(response){
            $('#BlockResp').html(response);
            
        }
     });
}

function getPenalty(penalty_id) {
      // alert(receive_bill_id);
      $.ajax({
      url: "getPenalty.php",
      cache: false,
      type: "POST",
      data: {penalty_id : penalty_id,csrf:csrf},
      success: function(response){
      $('#billPayDiv').html(response);
      
      
      }
      });
}

function getPenaltyRequest(penalty_id) {
      // alert(receive_bill_id);
      $.ajax({
      url: "getPenaltyRequest.php",
      cache: false,
      type: "POST",
      data: {penalty_id : penalty_id,csrf:csrf},
      success: function(response){
      $('#billPayDiv').html(response);
      
      
      }
      });
}

function mainPayRequest(receive_maintenance_id,mId,unit_id,bId) {
    $.ajax({
      url: "getPaymentRequest.php",
      cache: false,
      type: "POST",
      data: {receive_maintenance_id : receive_maintenance_id,mId:mId,unit_id:unit_id,bId:bId,csrf:csrf},
      success: function(response){
        $('#paidReqDiv').html(response);
      }
    });
  }

 function generateBIllRequestNew(receive_bill_id,block_id,balancesheet_id) {
    $.ajax({
      url: "getPayBillRequest.php",
      cache: false,
      type: "POST",
      data: {receive_bill_id : receive_bill_id,block_id:block_id,balancesheet_id:balancesheet_id},
      success: function(response){
        $('#billPayDivRequest').html(response);


      }
    });
  }

//IS_605 26feb2020
function getPenaltyEdit(penalty_id) {
      // alert(receive_bill_id);
      $.ajax({
      url: "getPenalty.php",
      cache: false,
      type: "POST",
      data: {penalty_id : penalty_id,EditFlg:"Yes",csrf:csrf},
      success: function(response){
      $('#EditPanDiv').html(response);
      
      
      }
      });
}
//IS_605 26feb2020


//12march2020
function getCommEntry(common_entry_id) {
  $.ajax({
 url: "getCommEntry.php",
 cache: false,
 type: "POST",
 data: {common_entry_id : common_entry_id,csrf:csrf},
 success: function(response){
 $('#editCMDiv').html(response);
 
 
 }
 });
}
//12march2020



//13march2020
function editMainType(visitor_main_type_id) {
  $.ajax({
 url: "getVisitorDetails.php",
 cache: false,
 type: "POST",
 data: {visitor_main_type_id : visitor_main_type_id,csrf:csrf},
 success: function(response){
 $('#updateModalDiv').html(response);
 
 
 }
 });
}

function editSubcategory(visitor_sub_type_id) {
  $.ajax({
 url: "getVisitorDetails.php",
 cache: false,
 type: "POST",
 data: {visitor_sub_type_id : visitor_sub_type_id,csrf:csrf},
 success: function(response){
 $('#updateSubModalDiv').html(response);
 
 
 }
 });
}
function DeleteVisitorMain(visitor_main_type_id) {
 

    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              // $('form.deleteForm'+id).submit();

 
        $.ajax({
            url: 'controller/addMainTypeVisitorsController.php',
            cache: false,
            type: "POST",
            data: {visitor_main_type_id : visitor_main_type_id,deleteData:'deleteData',csrf:csrf  },
            success: function(response){
              
               if(response == 1217) {

                  swal("Not Deleted", "Visitor sub type has records with this Main Type, Please Delete Those records before you delete main visitor type...!", "error"); 
                } else if(response==1) {
                
                swal("Success ! Your data has been deleted!", {
                      icon: "success",
                    });
               location.reload();
              } else {
                    swal("Success ! Your data has been deleted!", {
                      icon: "error",
                    });
              }
            }
          });
            } else {
              swal("Your data is safe!");
            }
          });
      
}

//13march2020

function deleteClassifiedCategory(classified_cat_id) {
    // alert(block_id);
    swal({
            title: "Are you sure to Delete this Category ?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/classifiedController.php",
                cache: false,
                type: "POST",
                data: {classified_cat_id_delete : classified_cat_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  }
                }
              });
            } else {
            }
          });
}
function deleteClassifiedSubCategory(classified_sub_id) {
    // alert(block_id);
    swal({
            title: "Are you sure to Delete this Sub Category ?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // $('form.deleteForm'+id).submit();
                $.ajax({
                url: "controller/classifiedController.php",
                cache: false,
                type: "POST",
                data: {classified_sub_id_delete : classified_sub_id,csrf:csrf},
                success: function(response){
                  console.log(response)
                  if(response==1) {
                         swal("Success ! Your data has been deleted!", {
                            icon: "success",
                          });
                    document.location.reload(true);
                  } 
                }
              });
            } else {
            }
          });
}


function editinstallationteam(societyid,memberid,membername,membermobile){
    $('#member_society_id option[value='+societyid+']').attr('selected','selected');
    $('#member_id').val(memberid);
    $('#member_full_name').val(membername);
    $('#member_mobile_number').val(membermobile);
  }
  


$(".docOnly").change(function () {
    var fileExtension = ['jpeg', 'jpg', 'png', 'doc','docx', 'pdf', 'csv', 'xls' , 'xlsx','ods'];
    if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
        // alert("Only formats are allowed : "+fileExtension.join(', '));
        swal("Only formats are allowed : "+fileExtension.join(', '), {icon: "error", });
        $('.docOnly').val('');
    }
});

$(".pdfOnly").change(function () {
    var fileExtension = ['pdf'];
    if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
        // alert("Only formats are allowed : "+fileExtension.join(', '));
        swal("Only PDF formats are allowed", {icon: "error", });
        $('.docOnly').val('');
    }
});

$(".idProof").change(function () {
     var fileExtension = ['jpeg', 'jpg', 'png', 'doc','docx', 'pdf'];
    if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
        // alert("Only formats are allowed : "+fileExtension.join(', '));
        swal("Only formats are allowed : "+fileExtension.join(', '), {icon: "error", });
        $('.idProof').val('');
    }
});

$(".photoOnly").change(function () {
     // alert(this.files[0].size);
    var fileExtension = ['jpeg', 'jpg', 'png','webp','HEIC'];
    if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
        // alert("Only formats are allowed : "+fileExtension.join(', '));
        swal("Only formats are allowed : "+fileExtension.join(', '), {icon: "error", });
        $('.photoOnly').val('');
    }
});

$(".mp3Only").change(function () {
  // alert(this.files[0].size);
  var fileExtension = ['mp3','wav','flac','ogg','m3u','acc','wma','midi','aif','m4a','mpa','pls'];
 if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
     // alert("Only formats are allowed : "+fileExtension.join(', '));
     swal("Only formats are allowed : "+fileExtension.join(', '), {icon: "error", });
     $('.mp3Only').val('');
 }
});

$('.csvupload').change(function(){
      var fileExtension = ['csv'];
      if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
          // alert("Only formats are allowed : "+fileExtension.join(', '));
          swal("Only formats are allowed : "+fileExtension.join(', '), {icon: "error", });
          $('.csvupload').val('');
        }
      });
      

$(".alphanumeric").keypress(function (e) {
  var keyCode = e.which;
  if ( !( (keyCode >= 48 && keyCode <= 57) 
   ||(keyCode >= 65 && keyCode <= 90) 
   || (keyCode >= 97 && keyCode <= 122) ) 
   && keyCode != 8 && keyCode != 32) {
   e.preventDefault();
  }
});


//14march2020
/*$('.txtNumeric').keydown(function (e) { //alert();
   
  var key = e.keyCode;
  
    if (!(  (key == 8) ||   (key == 189) ||  (key == 32)  || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105) )) {
    e.preventDefault();
    } 
});*/
$('.txtNumeric').keypress(function(event)
{
    var kcode = event.keyCode;

    if (kcode == 8 ||
        kcode == 9 ||
       
        kcode == 95 ||
         kcode == 45 ||
         kcode == 32 ||
        (kcode > 47 && kcode < 58) ||
        (kcode > 64 && kcode < 91) ||
        (kcode > 96 && kcode < 123))
    {
        return true;
    }
    else
    {
        return false;
    }
});
// $('.txtNumeric').bind("cut copy paste",function(e) {
//      e.preventDefault();
//  });
//14march2020

$('.number').keypress(function(event) {
  if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57)) {
    event.preventDefault();
  }
});



$('.space').on('keypress', function(e) {
    if (e.which == 32){
        return false;
    }
});


function getAccessMenuDetail(app_menu_id) {
  $.ajax({
 url: "getAccessMenuDetail.php",
 cache: false,
 type: "POST",
 data: {app_menu_id : app_menu_id,csrf:csrf},
 success: function(response){
 $('#editAMDiv').html(response);
 
 
 }
 });
}

 
// $('.noticeBoardMultiSelectCls').on('change', function(){  

  // const selected = $('.noticeBoardMultiSelectCls :selected').map(function() {return $(this).val()}).get()
  
  // if (selected.includes('0')) {
  //   $('option:not(:contains("0"))').prop('selected', false);
  //   $('option:contains(All Block)').prop('selected', true);
  // } 
// })

$('.noticeBoardMultiSelectCls').change(function() {    
    var item=$(this);
    var abc= item.val();
    if (abc==0) {
      
    } else {
     var x = abc+' ';
      if(x.charAt(0)=='0'){
        // alert("all select");
        swal("if you choose custom block all block auto removed");
        $('option:contains(All Blocks)').prop("selected", false);
      }else  {

      }
    }
});



//18march2020
 function checkMobileUserDailyVisitor() {

  
  var userMobile= $('#visitor_mobile').val();
   if (userMobile.length>0) {

     $.ajax({
        url: "controller/uniqueController.php",
        cache: false,
        type: "POST",
        data: {userMobile : userMobile,checkDailyUserMobile:'checkDailyUserMobile',csrf:csrf},
        success: function(response){
           if (response==1) {
            $(':input[type="submit"]').prop('disabled', true);
                
              // Lobibox.notify('error', {
              //   pauseDelayOnHover: true,
              //   continueDelayOnInactiveTab: false,
              //   position: 'top right',
              //   icon: 'fa fa-times-circle',
              //   msg: 'This mobile number is Already Used.'
              //   });

              swal("This Mobile Number is Already Used.", {
                            icon: "error",
                          });
                  
           } else {
               $(':input[type="submit"]').prop('disabled', false);
           }
        }
      });
  }
}


function getDailyVisitorEdit(visitor_id) {
 
        
      $.ajax({
      url: "getDailyVisitor.php",
      cache: false,
      type: "POST",
      data: {visitor_id : visitor_id,EditFlg:"Yes",csrf:csrf},
      success: function(response){
        
      $('#updateDailyVisitorModalDiv').html(response);
      
      
      }
      });
}


//IS_1498 20march2020
function getEmpUnitEdit(unit_id,user_id) {
   var emp_id = $('#emp_id').val(); 
     $.ajax({
      url: "getSlotDetail.php",
      cache: false,
      type: "POST",
      data: {emp_id:emp_id, unit_id : unit_id,user_id:user_id,EditFlg:"Yes",csrf:csrf},
      success: function(response){ 
      $('#updateTimeUnitModalDiv').html(response);
      
      
      }
      });
}
//IS_1498 20march2020


//IS_1498 20march2020
function getNotificationData(unit_id,user_id) {
   var emp_id = $('#emp_id').val(); 
     $.ajax({
      url: "getSlotNotificationUser.php",
      cache: false,
      type: "POST",
      data: {emp_id:emp_id, unit_id : unit_id,user_id:user_id,EditFlg:"Yes",csrf:csrf},
      success: function(response){ 
      $('#NotificationListDiv').html(response);
      
      
      }
      });
}

function getNotificationDataDaily(unit_id,user_id,daily_visitor_id) {
     $.ajax({
      url: "getSlotNotificationUserDaily.php",
      cache: false,
      type: "POST",
      data: {daily_visitor_id:daily_visitor_id, unit_id : unit_id,user_id:user_id,EditFlg:"Yes",csrf:csrf},
      success: function(response){ 
      $('#NotificationListDiv').html(response);
      
      
      }
      });
}

function removeSingleUser(unit_id,user_id,emp_id) {
  $.ajax({
      url: "controller/employeeController.php",
      cache: false,
      type: "POST",
      data: {emp_id:emp_id, unit_id : unit_id,user_id:user_id,deleteSingleUser:"deleteSingleUser",csrf:csrf},
      success: function(response){ 
      // $('#NotificationListDiv').html(response);
        if (response==0) {
          getNotificationData(unit_id,user_id);
        }
      
      }
      });
}

function removeSingleUserDailyVisitor(unit_id,user_id,daily_visitor_id) {
  $.ajax({
      url: "controller/dailyVisitorController.php",
      cache: false,
      type: "POST",
      data: {daily_visitor_id:daily_visitor_id, unit_id : unit_id,user_id:user_id,deleteSingleUser:"deleteSingleUser",csrf:csrf},
      success: function(response){ 
      // $('#NotificationListDiv').html(response);
        if (response==0) {
          getNotificationDataDaily(unit_id,user_id,daily_visitor_id);
        }
      
      }
      });
}


function muteResourceNotification(unit_id,user_id,emp_id) {
  $.ajax({
      url: "controller/employeeController.php",
      cache: false,
      type: "POST",
      data: {emp_id:emp_id, unit_id : unit_id,user_id:user_id,muteResourceNotification:"muteResourceNotification",csrf:csrf},
      success: function(response){ 
      // $('#NotificationListDiv').html(response);
        if (response==0) {
          getNotificationData(unit_id,user_id);
        }
      
      }
      });
}

function unmuteResourceNotification(unit_id,user_id,emp_id) {
  $.ajax({
      url: "controller/employeeController.php",
      cache: false,
      type: "POST",
      data: {emp_id:emp_id, unit_id : unit_id,user_id:user_id,unmuteResourceNotification:"unmuteResourceNotification",csrf:csrf},
      success: function(response){ 
      // $('#NotificationListDiv').html(response);
        if (response==0) {
          getNotificationData(unit_id,user_id);
        }
      
      }
      });
}


function getEmpNotification(emp_id) {
  $.ajax({
      url: "controller/employeeController.php",
      cache: false,
      type: "POST",
      data: {emp_id:emp_id,getEmpNotification:"getEmpNotification",csrf:csrf},
      success: function(response){ 
        $('.empSpan'+emp_id).html(response);
        swal("Success ! In/Out Notification Enable !", {icon: "success",});
      
      }
      });
}

function notGetEmpNotification(emp_id) {
  $.ajax({
      url: "controller/employeeController.php",
      cache: false,
      type: "POST",
      data: {emp_id:emp_id,NotgetEmpNotification:"NotgetEmpNotification",csrf:csrf},
      success: function(response){ 
        $('.empSpan'+emp_id).html(response);
        swal("Success ! In/Out Notification Disabled !", {icon: "success",});
      }
      });
}

function getEmpNotificationDaily(emp_id) {
  $.ajax({
      url: "controller/dailyVisitorController.php",
      cache: false,
      type: "POST",
      data: {emp_id:emp_id,getEmpNotification:"getEmpNotification",csrf:csrf},
      success: function(response){ 
        $('.empSpan'+emp_id).html(response);
        swal("Success ! In/Out Notification Enable !", {icon: "success",});
      
      }
      });
}

function notGetEmpNotificationDaily(emp_id) {
  $.ajax({
      url: "controller/dailyVisitorController.php",
      cache: false,
      type: "POST",
      data: {emp_id:emp_id,NotgetEmpNotification:"NotgetEmpNotification",csrf:csrf},
      success: function(response){ 
        $('.empSpan'+emp_id).html(response);
        swal("Success ! In/Out Notification Disabled !", {icon: "success",});
      }
      });
}



function muteDailyVisitorNotification(unit_id,user_id,daily_visitor_id) {
  $.ajax({
      url: "controller/dailyVisitorController.php",
      cache: false,
      type: "POST",
      data: {daily_visitor_id:daily_visitor_id, unit_id : unit_id,user_id:user_id,muteDailyVisitorNotification:"muteDailyVisitorNotification",csrf:csrf},
      success: function(response){ 
      // $('#NotificationListDiv').html(response);
        if (response==0) {
          getNotificationDataDaily(unit_id,user_id,daily_visitor_id);
        }
      
      }
      });
}

function unmuteDailyVisitoreNotification(unit_id,user_id,daily_visitor_id) {
  $.ajax({
      url: "controller/dailyVisitorController.php",
      cache: false,
      type: "POST",
      data: {daily_visitor_id:daily_visitor_id, unit_id : unit_id,user_id:user_id,unmuteDailyVisitoreNotification:"unmuteDailyVisitoreNotification",csrf:csrf},
      success: function(response){ 
      // $('#NotificationListDiv').html(response);
        if (response==0) {
          getNotificationDataDaily(unit_id,user_id,daily_visitor_id);
        }
      
      }
      });
}

//IS_1498 20march2020
$("#user_data").change(function () {
        var end = this.value;
        var firstDropVal = $('#user_data').val();
        var detail = firstDropVal.split('~');
        var unit_id = detail[0];
        var user_id = detail[1];
        var emp_id = $('#emp_id').val();
        $.ajax({
            url: 'getSlotDetail.php',
            type: 'POST',
             data: {emp_id:emp_id, unit_id : unit_id, user_id:user_id },
            success: function(data) {
                $('#time_slot_detail_div').html(data); 
            } 
        });
  });
//IS_1498 20march2020


function getslabEdit(slab_id) {
      $.ajax({
      url: "getSlabData.php",
      cache: false,
      type: "POST",
      data: {slab_id : slab_id,EditFlg:"Yes",csrf:csrf},
      success: function(response){
      $('#editGSTModalDiv').html(response);
      
      
      }
      });
}

function getGSTDetails(){
    if($('#penaltyEdit :input[name="is_taxble"]').val()=="1"){
      $('#gst_detail_div_edit').css('display','block');
    } else {
      $('#gst_detail_div_edit').css('display','none');
    }
  }


function showPaidInfo(flg,id){
  if (flg == 'paid') {
     $.ajax({ 
      url: "getEventData.php",
      cache: false,
      type: "POST",
      data: {id : id,paidinfo:"yes",csrf:csrf},
      success: function(response){
        $('.eventPrice-days'+id).css("display", "block");
        var abc= $(':radio[value="1"]:checked').length;
        if (abc>0) {
          $('#billTypeLble').show();
          $('#is_taxble').show();
          $('#bill_type').prop('selectedIndex', 0);
        }else {
          $('#billTypeLble').hide();
          $('#is_taxble').hide();
          $('#gst_detail_div').hide();
        }
        console.log(abc);
      //$('#event_days_detail').html(response);
      $('.eventPrice-days'+id).html(response);
      
      }
      });


      

    }
    else if (flg == 'Unpaid')  {
      $('.eventPrice-days'+id).html('');
      var abc= $(':radio[value="1"]:checked').length;
      if (abc>0) {
          $('#billTypeLble').show();
          $('#is_taxble').show();
          $('#bill_type').prop('selectedIndex', 0);
          $('#gst_detail_div').hide();
          
        }else {
          $('#billTypeLble').hide();
          $('#is_taxble').hide();
          $('#gst_detail_div').hide();
        }
        console.log(abc);
    }
 }
  
//20220418
  
$('.event_end_time,.event_start_time').change(function() {
  var event_start_time = $('input[type=text][name=event_start_time]').val();
  var event_end_time = $('input[type=text][name=event_end_time]').val();
  if(event_end_time !=""){
   $.ajax({ 
      url: "getEventData.php",
      cache: false,
      type: "POST",
      data: {event_start_time : event_start_time,event_end_time:event_end_time,csrf:csrf},
      success: function(response){
      $('#event_days_detail').html(response);
      $('#billTypeLble').hide();
      $('#bill_type').hide();
      $('#is_taxble').hide();
      $('#gst_detail_div').hide();
      
      
      }
      });
  }
});
//20220418


//28march2020
 
$('#type').on('change', function() {
    if(this.value=="Block" || this.value=="BalanceSheet" ){
      var type = this.value;
       $.ajax({ 
      url: "getPaymentTypeData.php",
      cache: false,
      type: "POST",
      data: {type : type,csrf:csrf},
      success: function(response){
      

      if(type=="Block"){
        $('#block_id').html(response);
        $('#payment_type_block_details').css('display','block');
        $('#payment_type_balancesheet_details').css('display','none');

      } else {
        $('#balancesheet_id').html(response);
        $('#payment_type_balancesheet_details').css('display','block');
         $('#payment_type_block_details').css('display','none');
      }
      
      
      }
      });

      
    } else {
      $('#payment_type_balancesheet_details').css('display','none');
      $('#payment_type_block_details').css('display','none');
       
    }
    
});

 function getPaymentInfo(society_payment_getway_id){
   $.ajax({ 
      url: "getPaymentTypeData.php",
      cache: false,
      type: "POST",
      data: {society_payment_getway_id : society_payment_getway_id,csrf:csrf, getInfo:"yes"},
      success: function(response){
       $('#infoModalDiv').html(response);
         
      
      
      }
      });
 }
//28march2020


//30march2020 , #sos_duration IS_1751
$("#no_of_person,#no_of_month, #sos_duration").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    //110 for dot(.)
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
         // Allow: Ctrl+A, Command+A
        (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
         // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress

    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});


$('#events_day_id').on('change', function() {
  var events_day_id = this.value;
  var user_id = $('#user_id').val();
  if(user_id !== null && user_id !== '') {

       $.ajax({ 
      url: "getEventData.php",
      cache: false,
      type: "POST",
      data: {user_id:user_id,events_day_id : events_day_id,bookEventDetail:"Yes",csrf:csrf},
      success: function(response){
       $('#eventDetailsDiv').html(response);
       }
      });
  } else {
      $('#events_day_id').prop('selectedIndex', 0);
    swal("Please Select Booking For!");

  }

    
});

function resetBookingForm() {
  $('#events_day_id').prop('selectedIndex', 0);
  $('#eventDetailsDiv,#payementDetailsDiv').html(" ");

}

function getAmountDetail(){
  var going_person= $('#going_person').val();
  var going_child= $('#going_child').val();
  var going_guest= $('#going_guest').val();
  var events_day_id= $('#events_day_id').val();
  var user_id= $('#user_id').val();
  var event_id= $('#event_id').val();  
       $.ajax({ 
      url: "getEventData.php",
      cache: false,
      type: "POST",
      data: {user_id:user_id,going_person : going_person, going_child : going_child, going_guest : going_guest, events_day_id : events_day_id,event_id : event_id,calculatePrice:"Yes",csrf:csrf},
      success: function(response){
       $('#payementDetailsDiv').html(response);
       }
      });
}
$('#going_person, #going_child, #going_guest').on('change', function() {
  var going_person= $('#going_person').val();
  var going_child= $('#going_child').val();
  var going_guest= $('#going_guest').val();
  var events_day_id= $('#events_day_id').val();

  var going_person =$('#going_person').val();
  var going_child =$('#going_child').val();
  var going_guest =$('#going_guest').val();
  var totalGuests = parseInt(going_person)+parseInt(going_child)+parseInt(going_guest);

  $( "#eventPerson" ).val(totalGuests);
 
  var event_id= $('#event_id').val(); 
       $.ajax({ 
      url: "getEventData.php",
      cache: false,
      type: "POST",
      data: {going_person : going_person, going_child : going_child, going_guest : going_guest, events_day_id : events_day_id,event_id : event_id,calculatePrice:"Yes",csrf:csrf},
      success: function(response){
       $('#payementDetailsDiv').html(response);
       }
      });
});

//30march2020


function getPayAmount(receive_amount,event_attend_id,balancesheet_id,events_day_id,event_id) {
    $('#payEventAmountFrm :input[name="receive_amount"]').val(receive_amount);
    $('#payEventAmountFrm :input[name="event_attend_id"]').val(event_attend_id);
    $('#payEventAmountFrm :input[name="balancesheet_id"]').val(balancesheet_id);
    $('#payEventAmountFrm :input[name="events_day_id"]').val(events_day_id);
    $('#payEventAmountFrm :input[name="event_id"]').val(event_id);
    document.getElementById('PaybleAmount').innerHTML=receive_amount; 
  }



  function getBankDetails(value){

    if(value != ''){
      $.ajax({
        url: 'ajaxPaymentData.php',
        type: 'POST',
        data: {payment_type_value:value},
      })
      .done(function(response) {
        $('#addBankDetails').html(response);
        $('#isCash').val('1');

      });
    }else{
      $('#addBankDetails').html('');
      $('#isCash').val('');

    }
  }

  function getBankDetailsSalary(value){

    if(value != ''){
      $.ajax({
        url: 'ajaxPaymentDataSalary.php',
        type: 'POST',
        data: {payment_type_value:value},
      })
      .done(function(response) {
        $('#addBankDetails').html(response);
        $('#isCash').val('1');

      });
    }else{
      $('#addBankDetails').html('');
      $('#isCash').val('');

    }
  }
  function getBankDetailsEvent(value){

    if(value != ''){
      $.ajax({
        url: 'ajaxPaymentData.php',
        type: 'POST',
        data: {payment_type_value:value,eventBook:'eventBook'},
      })
      .done(function(response) {
        $('#addBankDetails').html(response);
        $('#isCash').val('1');

      });
    }else{
      $('#addBankDetails').html('');
      $('#isCash').val('');

    }
  }

  function getBankDetailsFacility(value){

    if(value != ''){
      $.ajax({
        url: 'ajaxPaymentDataFacility.php',
        type: 'POST',
        data: {payment_type_value:value},
      })
      .done(function(response) {
        $('#addBankDetails').html(response);
        $('#isCash').val('1');

      });
    }else{
      $('#addBankDetails').html('');
      $('#isCash').val('');

    }
  }

  //20220601
  function getBankDetailsComplaint(value){

    if(value != ''){
      $.ajax({
        url: 'ajaxPaymentDataCompaint.php',
        type: 'POST',
        data: {payment_type_value:value},
      })
      .done(function(response) {
        $('#addBankDetails').html(response);
        $('#isCash').val('1');

      });
    }else{
      $('#addBankDetails').html('');
      $('#isCash').val('');

    }
  }
  //20220601

  function cancelEvent(id) {
    $.ajax({
        url: 'getCancelEventData.php',
        type: 'POST',
        data: {event_attend_id:id},
      })
      .done(function(response) {
        $('#cancelPaidEvent').html(response);

      });
  }

  function cancelFacility(id) {
    $.ajax({
        url: 'getCancelFacilityData.php',
        type: 'POST',
        data: {booking_id:id},
      })
      .done(function(response) {
        $('#cancelPaidEvent').html(response);

      });
  }


  function importquestion(room_id,que) {
    $.ajax({
        url: 'getHousieQuestions.php',
        type: 'POST',
        data: {room_id:room_id,que:que},
      })
      .done(function(response) {
        $('#queDiv').html(response);

      });
  }



function eidtMainParking (society_parking_id) {
    $('#society_parking_id_edit').val(society_parking_id);
    // $('#oldFloorname').val(floor_name);
    var conceptName = $('#society_parking_name_view').find(":selected").text();
    $('#socieaty_parking_name').val(conceptName);

}


//15july2020
$('input[name="maintenance_type_id"]').click(function(){

 var maintenance_type_id = $("input[name='maintenance_type_id']:checked").val();
 if(maintenance_type_id==0) {
  $('#auto_gen_date_div').css('display','block');
  $('#auto_gen_date_lbl').css('display','block');
} else {
 $('#auto_gen_date_div').css('display','none');
 $('#auto_gen_date_lbl').css('display','none');
}
});



$('#mentainance_price_type').on('change', function() {

 var amountType = $("input[name='amountType']:checked").val();
 var mentainance_price_type = $("#mentainance_price_type").val();
  // alert(mentainance_price_type);

if(amountType==1 && mentainance_price_type==1  ) {
  $('#amt_lbl').text('Monthly Amount'); 
} else if(amountType==1 && mentainance_price_type==0  ) {
  $('#amt_lbl').text('Fixed Amount'); 
}else if(amountType==0 && mentainance_price_type==1  ) {
  $('#amt_lbl').text('Monthly Amount'); 
} else   {
  $('#amt_lbl').text('Amount'); 
}


if(this.value=="0"){

 $('#month_div').css('display','none');
 $('#fixed_div').css('display','block');

} else if(this.value=="1"){ 
  $('#month_div').css('display','block');


  $('#fixed_div').css('display','none');

} else  { 

 $('#fixed_div').css('display','none');
 $('#month_div').css('display','none');

}

});


$('input[name="accept_custom_amount"]').click(function(){
 var accept_custom_amount = $("input[name='accept_custom_amount']:checked").val();
 if(accept_custom_amount==0) {

  $('#cut_per_lbl').css('display','none');
  $('#cut_per_div').css('display','none');


} else {
  $('#cut_per_lbl').css('display','block');
  $('#cut_per_div').css('display','block');

}

var late_fees_type = $("#late_fees_type").val();
var accept_custom_amount = $("input[name='accept_custom_amount']:checked").val();
var late_fee_applicable = $("input[name='late_fee_applicable']:checked").val();
if(late_fees_type!=0 && accept_custom_amount==1) {
  $('#late_fee_everytime').css('display','block');
}else if(late_fees_type==0 && accept_custom_amount==1 && late_fee_applicable==0) {
  $('#late_fee_everytime').css('display','block');
} else {
  $('#late_fee_everytime').css('display','none'); 
}



});



$('#late_fees_type').on('change', function() {

  var accept_custom_amount = $("input[name='accept_custom_amount']:checked").val();
  var amountType = $("input[name='amountType']:checked").val();
  var  sqftt ='';
  if(amountType == "1"){
    sqftt ='';
  }
  if(this.value=="1"){
    $('#late_fee_lbl').text('Late Fees Per Day'+sqftt); 
  }  else   if(this.value=="2"){
    $('#late_fee_lbl').text('Late Fees Per Month'+sqftt); 
  }    else { 
    $('#late_fee_lbl').text('Late Fees'); 
  }

});

$('input[name="late_fee_applicable"]').click(function(){

  var accept_custom_amount = $("input[name='accept_custom_amount']:checked").val();
  var amountType = $("input[name='amountType']:checked").val();

 var late_fee_applicable = $("input[name='late_fee_applicable']:checked").val();
 if(late_fee_applicable==0) {

  $('#late_fes_max_amount_div').css('display','block');
  $('#late_fee_type_cap').css('display','block');
  $('#late_fee_type_div').css('display','block');
  $('#late_fee_data_div').css('display','block');
  if (accept_custom_amount==1) {
    $('#late_fee_everytime').css('display','block'); 
  }
  if (amountType==1) {
    $('#LateFeesAmountTypeLbl').css('display','block'); 
    $('#LateFeesAmountTypeLblDiv').css('display','block'); 
  } else {
    $('#LateFeesAmountTypeLbl').css('display','none'); 
    $('#LateFeesAmountTypeLblDiv').css('display','none'); 
  }
} else {
  $('#late_fes_max_amount_div').css('display','none');
  $('#late_fee_type_cap').css('display','none');
  $('#late_fee_type_div').css('display','none');
  $('#late_fee_data_div').css('display','none'); 
  $('#late_fee_everytime').css('display','none'); 
  $('#LateFeesAmountTypeLbl').css('display','none'); 
  $('#LateFeesAmountTypeLblDiv').css('display','none'); 
}
});


$('#late_fees_type').change(function(){
  var late_fees_type = $("#late_fees_type").val();
  var accept_custom_amount = $("input[name='accept_custom_amount']:checked").val();
  if(accept_custom_amount==1) {
    $('#late_fee_everytime').css('display','block');
  } else {
    $('#late_fee_everytime').css('display','none'); 
  }
});


//20220527
$('input[name="amountType"]').click(function(){

 var amountType = $("input[name='amountType']:checked").val();
 var mentainance_price_type = $("#mentainance_price_type").val();

 if (amountType==1) {
    $('#roundFigureAmount').css('display','block'); 
    $('#LateFeesAmountTypeLbl').css('display','block'); 
    $('#LateFeesAmountTypeLblDiv').css('display','block'); 
  } else {
    $('#roundFigureAmount').css('display','none'); 
    $('#LateFeesAmountTypeLbl').css('display','none'); 
    $('#LateFeesAmountTypeLblDiv').css('display','none'); 
  }


  if(amountType==1 && mentainance_price_type==1  ) {
    $('#amt_lbl').text('Monthly Amount Per Square Feet'); 
  } else if(amountType==1 && mentainance_price_type==0  ) {
    $('#amt_lbl').text('Fixed Amount Per Square Feet'); 
  }else if(amountType==0 && mentainance_price_type==1  ) {
    $('#amt_lbl').text('Monthly Amount'); 
  } else   {
    $('#amt_lbl').text('Amount'); 
  }

  var accept_custom_amount = $("input[name='accept_custom_amount']:checked").val();
  var late_fees_type = $("#late_fees_type").val();
  var amountType = $("input[name='amountType']:checked").val();
  var  sqftt ='';

  if(amountType == "1"){
    sqftt =' /Per Square Feet';
  }
  if(late_fees_type=="1"){
    $('#late_fee_lbl').text('Late Fees Per Day'+sqftt); 
  }  else   if(late_fees_type=="2"){
    $('#late_fee_lbl').text('Late Fees Per Month'+sqftt); 
  }    else { 
    $('#late_fee_lbl').text('Late Fees'); 
  }



});
//20220527

function selUnsel(block_id){
 var isChecked = $("#selectSAll"+block_id).is(":checked");
 if (isChecked) {
   console.log('checked');
   $('.selectSAll'+block_id).prop('checked', true);
 } else {
  console.log('unchekd');
  $('.selectSAll'+block_id).prop('checked', false);
}


}

$('#month_from').on('change', function() {
  var month_from = $('#month_from').val();


  $.ajax({
    url: "ajaxMonthDetails.php",
    cache: false,
    type: "POST",
    data: {month_from : month_from},
    success: function(response){
     $('#year_from').html(response);
     $('#month_to').html('');
     $('#year_to').html('');
   }
 });

});

$('#year_from').on('change', function() {
  var year_from = $('#year_from').val();
  var month_from = $('#month_from').val();  

  $.ajax({
    url: "ajaxMonthDetails.php",
    cache: false,
    type: "POST",
    data: {year_from : year_from,month_from:month_from},
    success: function(response){
     $('#month_to').html(response);
     $('#year_to').html('');
   }
 });

});

$('input[name="parkingType"]').click(function(){
    var parkingType = $("input[name='parkingType']:checked").val();
    if (parkingType ==1) {
      $("#parkingNameDiv").hide();
    } else {
      $("#parkingNameDiv").show();
    }

});



$('#month_to').on('change', function() {
  var year_from = $('#year_from').val();
  var month_from = $('#month_from').val(); 
  var month_to = $('#month_to').val();  

  $.ajax({
    url: "ajaxMonthDetails.php",
    cache: false,
    type: "POST",
    data: {year_from : year_from,month_from:month_from,month_to:month_to},
    success: function(response){
     $('#year_to').html(response);
   }
 });

});

function men_edit(receive_maintenance_id,block_id){
 $.ajax({ 
  url: "ajaxEditMentainance.php",
  cache: false,
  type: "POST",
  data: {receive_maintenance_id : receive_maintenance_id,bId:block_id,csrf:csrf},
  success: function(response){
    $('#ediFormDetails').html(response);


  }
});
}

function men_history(receive_maintenance_id){
 $.ajax({ 
  url: "ajaxMenHistory.php",
  cache: false,
  type: "POST",
  data: {receive_maintenance_id : receive_maintenance_id,csrf:csrf},
  success: function(response){
    $('#payHistoryDetails').html(response);


  }
});
}
//15july2020


function autoNumberGenerate() {
  var emp_type_id =$('.emp_type_id').val();
  var emp_type_id11 =$('.emp_type_id11').val();


  if(emp_type_id == '' && emp_type_id11 == ''){
   swal("Error! Please Select Type First !", {icon: "error",});
    $('#empNumber').val('');
   
  } else if(emp_type_id == '1'){
   swal("Error! Security Guard Need Valid Phone Number !", {icon: "error",});
    $('#empNumber').val('');
  } else  {
    // alert(emp_type_id);
     $.ajax({ 
      url: "getUniqueNumber.php",
      cache: false,
      type: "POST",
      data: {emp_type_id : emp_type_id,csrf:csrf},
      success: function(response){
        $('#empNumber').val(response);
      }
    });
  }

}


 // $('.weekday').val(this.checked);

 //    $('.weekday').change(function() {
 //        if(this.checked) {
 //         $(':input[type="submit"]').prop('disabled', false);
 //        }
               
 //    });


function editExpenseCategory(argument) {
    $.ajax({
      url: 'editExpenseCategory.php',
      type: 'POST',
      data: {expense_category_id: argument},
    })
    .done(function(response) {
      $('#editcomplaintCatDetails').html(response);
    });
  }

function editExpense(argument) {
    $.ajax({
      url: 'editExpense.php',
      type: 'POST',
      data: {expenses_balance_sheet_id: argument},
    })
    .done(function(response) {
      $('#editcomplaintCatDetails').html(response);
    });
  }


function editIncome(argument) {
    $.ajax({
      url: 'editIncome.php',
      type: 'POST',
      data: {expenses_balance_sheet_id: argument},
    })
    .done(function(response) {
      $('#editcomplaintCatDetailsIncome').html(response);
    });
  }

function editSalary(argument) {
    $.ajax({
      url: 'editSalary.php',
      type: 'POST',
      data: {emp_salary_master: argument},
    })
    .done(function(response) {
      $('#editcomplaintCatDetailsSalary').html(response);
    });
  }

function getnewUnitlist() {
  var blockIds= $("#block_id").val();
  var notice_for= $(".notice_for").val();
  $.ajax({
      url: 'getUnitlistNoticeboard.php',
      type: 'POST',
      data: {blockIds: blockIds,notice_for:notice_for},
    })
    .done(function(response) {
      $('#unitList').html(response);
    });
}


 function readURLProfile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#profileView').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#imgInpProfile").change(function() {
  readURLProfile(this);
});


function readURLSoceityLogo(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#societyLogoView').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#soceityLogo").change(function() {
  readURLSoceityLogo(this);
});

//20220326

function readURLLoginBgImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#loginBgView').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#loginBg").change(function() {
  readURLLoginBgImage(this);
});
//20220326
function readURLSoceityLogoCover(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#societyCoverView').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}


function configurePaymentGateway(requiest_id) {
   $('#congigureDiv').html('');
  // var blockIds= $("#block_id").val();
  $.ajax({
      url: 'configurePaymentGateway.php',
      type: 'POST',
      data: {requiest_id: requiest_id},
    })
    .done(function(response) {
      $('#congigureDiv').html(response);
    });
}


function getQrBox() {
  var no_of_qr = $("#no_of_qr").val();

  $.ajax({
      url: 'getQrAddOption.php',
      type: 'POST',
      data: {no_of_qr: no_of_qr},
    })
    .done(function(response) {
      $('.qrDiv').html(response);
    });

}

$("#soceityCover").change(function() {
  readURLSoceityLogoCover(this);
});

function resetSubDiv(dayname,dayNumber) {
    $('.addMoreTimeslot_'+dayname).html(' ');
}

function addMoreTimeslot(dayname,dayNumber) {
   var Lastval = $('.'+dayname+1).val();
   var timeSlotNumber = $('.countDiv'+dayname).length;
  
        if (timeSlotNumber>0) {
          vamptimeSlotNumber = parseInt(timeSlotNumber-1);
          var LastvalNew = $('.appenddayCheckEnd'+dayname+vamptimeSlotNumber).val();
        } else {
          LastvalNew = Lastval;
        }


  if (LastvalNew=='11:30 PM') {
     swal("Error! No More Time Slot Available !", {icon: "error",});
  }else if (LastvalNew!='') {
    $.ajax({
        url: 'addMoreTimeslotFacility.php',
        type: 'POST',
        data: {dayname: dayname,lastTime:Lastval,timeSlotNumber:timeSlotNumber },
      })
      .done(function(response) {

        $('.addMoreTimeslot_'+dayname).append(response);
       
          $('.appenddayCheck'+dayname+timeSlotNumber).timepicker({
        // timeFormat : 'hh:mm a',
              interval : 30,
              minTime : LastvalNew,
              maxTime : '11:00 PM',
              startTime : '04:00 AM',
              dynamic : false,
              dropdown : true,
              scrollbar : true
          });
          $('.appenddayCheckEnd'+dayname+timeSlotNumber).timepicker({
                // timeFormat : 'hh:mm a',
                interval : 30,
                minTime : '00:00 AM',
                maxTime : '11:30 PM',
                startTime : '04:00 AM',
                dynamic : false,
                dropdown : true,
                scrollbar : true
            });

          $('.appenddayCheck'+dayname+timeSlotNumber).timepicker('option', 'change', function(time) {
            var selectedaty = $(this).attr("name");
            var later = new Date(time.getTime() + (1 * 30 * 60 * 1000));
            $('.appenddayCheckEnd'+dayname+timeSlotNumber).timepicker('option', 'minTime', later);
            $('.appenddayCheckEnd'+dayname+timeSlotNumber).timepicker('setTime', later);
          });

         

      });
    } else {
        swal("Error! Please Enter Time Slot of the "+dayname, {icon: "error",});

    }
}

function deleteTimeSlot(divName) {
  $('.'+divName).remove();
}

function addTimeSlotEdit(facility_id,facility_day_id,dayname,timeSlotNumber,next_start_time,facility_end_time) {

    if (facility_end_time!='00:00:00') {
      var LastvalNew =facility_end_time;
    } else  {
      var LastvalNew = '04:00 AM';
    }

    if (next_start_time!='00:00:00') {
      var next_start_time =next_start_time;
    } else  {
      var next_start_time = '11:30 PM';
    }
    // alert(next_start_time);
    $.ajax({
        url: 'addMoreTimeslotFacilityEdit.php',
        type: 'POST',
        data: {facility_id: facility_id,facility_day_id:facility_day_id,dayname,timeSlotNumber:timeSlotNumber },
      })
      .done(function(response) {

        $('#AddTimeSLotDiv').html(response);
       
          $('.appenddayCheck'+dayname+timeSlotNumber).timepicker({
        // timeFormat : 'hh:mm a',
              interval : 30,
              minTime : LastvalNew,
              maxTime : next_start_time,
              startTime : '04:00 AM',
              dynamic : false,
              dropdown : true,
              scrollbar : true
          });
          $('.appenddayCheckEnd'+dayname+timeSlotNumber).timepicker({
                // timeFormat : 'hh:mm a',
                interval : 30,
                minTime : '00:00 AM',
                maxTime : next_start_time,
                startTime : '04:00 AM',
                dynamic : false,
                dropdown : true,
                scrollbar : true
            });

          $('.appenddayCheck'+dayname+timeSlotNumber).timepicker('option', 'change', function(time) {
            var selectedaty = $(this).attr("name");
            var later = new Date(time.getTime() + (1 * 30 * 60 * 1000));
            $('.appenddayCheckEnd'+dayname+timeSlotNumber).timepicker('option', 'minTime', later);
            $('.appenddayCheckEnd'+dayname+timeSlotNumber).timepicker('setTime', later);
          });

         

      });
}


function singleTimeSlotEdit(facility_schedule_id,c_start_time,c_end_time,facility_id,facility_day_id,dayname,timeSlotNumber,next_start_time,current_start_time) {

    if (current_start_time!='00:00:00') {
      var LastvalNew =current_start_time;
    } else  {
      var LastvalNew = '04:00 AM';
    }

    if (next_start_time!='00:00:00') {
      var next_start_time =next_start_time;
    } else  {
      var next_start_time = '11:30 PM';
    }
    // alert(LastvalNew);
    $.ajax({
        url: 'addMoreTimeslotFacilityEdit.php',
        type: 'POST',
        data: {facility_schedule_id:facility_schedule_id,c_start_time:c_start_time,c_end_time:c_end_time,facility_id: facility_id,facility_day_id:facility_day_id,dayname,timeSlotNumber:timeSlotNumber,editTimeSlotSIngle:'editTimeSlotSIngle' },
      })
      .done(function(response) {

        $('#AddTimeSLotDiv').html(response);
       
          $('.appenddayCheck'+dayname+timeSlotNumber).timepicker({
        // timeFormat : 'hh:mm a',
              interval : 30,
              minTime : LastvalNew,
              maxTime : next_start_time,
              startTime : '04:00 AM',
              dynamic : false,
              dropdown : true,
              scrollbar : true
          });
          $('.appenddayCheckEnd'+dayname+timeSlotNumber).timepicker({
                // timeFormat : 'hh:mm a',
                interval : 30,
                minTime : c_start_time,
                maxTime : next_start_time,
                startTime : c_start_time,
                dynamic : false,
                dropdown : true,
                scrollbar : true
            });

          $('.appenddayCheck'+dayname+timeSlotNumber).timepicker('option', 'change', function(time) {
            var selectedaty = $(this).attr("name");
            var later = new Date(time.getTime() + (1 * 30 * 60 * 1000));
            $('.appenddayCheckEnd'+dayname+timeSlotNumber).timepicker('option', 'minTime', later);
            $('.appenddayCheckEnd'+dayname+timeSlotNumber).timepicker('setTime', later);
          });

         

      });
}


function ResetFormBooking() {
   $('#facilityTimeSlotCheck').html('');
   $('.facility_datepicker').val('');
   var user_id= $('#user_id').val();
   var facility_id= $('#facility_id').val();
   $.ajax({
      url: "getFacilityBookingPackages.php",
      cache: false,
      type: "POST",
      data: {user_id : user_id,facility_id:facility_id,csrf:csrf},
      success: function(response){
        $('#pacakgeDiv').html(response);
      }
    });

   
}


function ResetFormBookingPerson() {
   $('#facilityTimeSlotCheck').html('');
   $('.facility_datepicker').val('');
   var user_id= $('#user_id').val();
   var facility_id= $('#facility_id').val();
  
}

function ResetFormBookingPackage() {
   $('#facilityTimeSlotCheck').html('');
   $('.facility_datepicker').val('');
   var package_type = $('.package_type').val();
   $.ajax({
      url: "getPackageMultiPerson.php",
      cache: false,
      type: "POST",
      data: {package_type : package_type},
      success: function(response){
        if (response==1) {
          $(".NoOfPersonMultiDiv").show();
        } else {
          $(".NoOfPersonMultiDiv").hide();
        }
      }
    });
   
}

function copyReminder() {
  var reminderText = $("#quick_reminder").val();
  $("#reminder_text").val(reminderText);
}


$('input[type=radio][name=qr_attendace_self]').change(function() {
    if (this.value == '1') {
      // alert('asfdf');
      $('.alertDurationLblDiv').show();
      $('.alertDurationLbl').show();
      $('.eyeAttendance1').show();
      $('.eyeAttendance').show();

    }
    else if (this.value == '0') {
      // $('.eventPrice').hide();
      $('.alertDurationLblDiv').hide();
      $('.alertDurationLbl').hide();
      $('.eyeAttendance1').hide();
      
    }
});

$('.no_copy').bind("cut copy paste",function(e) {
     e.preventDefault();
 });


function  editAssetscategory(assets_category_id) {

    $.ajax({
      url: "editassetsCategory.php",
      cache: false,
      type: "POST",
      data: {assets_category_id : assets_category_id,csrf:csrf},
      success: function(response){
        $('#edit_Assets_category').html(response);
      }
    });
  }


  function  editAssets(assets_id) {
   /* alert(assets_id);*/
    $.ajax({

      url: "editAssets.php",
      cache: false,
      type: "POST",
      data: {assets_id : assets_id,csrf:csrf},
      success: function(response){
        $('#edit_assets').html(response);
      }
    });
  }


  function  editInventory(inventory_id) {
   /* alert(inventory_id);*/
    $.ajax({

      url: "editInventory.php",
      cache: false,
      type: "POST",
      data: {inventory_id : inventory_id,csrf:csrf},
      success: function(response){
        $('#edit_Inventory').html(response);
      }
    });
  }


  function  editOutofStock(out_of_stock_id) {
   /* alert(out_of_stock_id);*/
    $.ajax({

      url: "editOutofStock.php",
      cache: false,
      type: "POST",
      data: {out_of_stock_id : out_of_stock_id,csrf:csrf},
      success: function(response){
        $('#edit_Out_stock').html(response);
      }
    });
  }


  function addUsage(inventory_id,availbeQty) {
    $('#inventory_id_out').val(inventory_id);
    $("input.stock_unit").attr({
       "max" : availbeQty,        // substitute your own
       "min" : 1          // values (or variables) here
    });
  }


  function payBill(receive_bill_id,balancesheet_id) {
    // alert(receive_bill_id);
    $("#receive_bill_id_again").val(receive_bill_id);
    $("#balancesheet_id_again").val(balancesheet_id);
    var bill_payment_date = $(".bill_payment_date").val();
    $.ajax({
      url: "getPayBill.php",
      cache: false,
      type: "POST",
      data: {receive_bill_id : receive_bill_id,balancesheet_id:balancesheet_id,bill_payment_date:bill_payment_date},
      success: function(response){
        $('#billPayDiv').html(response);
      }
    });
  }

  function reCalculateBill() {
     $('#billPayDiv').html('');
     var receive_bill_id = $("#receive_bill_id_again").val();
     var balancesheet_id = $("#balancesheet_id_again").val();
     if (receive_bill_id!='') {
       payBill(receive_bill_id,balancesheet_id);
     }
  }



  function generateBIll(receive_bill_id) {
    // alert(receive_bill_id);
    $.ajax({
      url: "generateBill.php",
      cache: false,
      type: "POST",
      data: {receive_bill_id : receive_bill_id},
      success: function(response){
        $('#paidBillDiv').html(response);
      }
    });
  }
  
  function billShow(receive_bill_id) {
    // alert(receive_bill_id);
    $.ajax({
      url: "getShowBill.php",
      cache: false,
      type: "POST",
      data: {receive_bill_id : receive_bill_id},
      success: function(response){
        $('#billShowDiv').html(response);
      }
    });
  }

  function updateLanguage() {
    $(".ajax-loader").show();
     $.ajax({
      url: "controller/updateLng.php",
      cache: false,
      type: "POST",
      data: {udpateLng : 'udpateLng'},
      success: function(response){
        $(".ajax-loader").hide();
      }
    });
  }

  $( function() {
      $( "#searchMenu" ).autocomplete({
      source: 'menu-search.php',
      select: function (e, ui) {
        var menuUrl = ui['item']['id'];

           window.location.href=menuUrl;
      }  
      });
  });

     function limitTextarea(textarea, maxLines, maxChar) {
        var lines = textarea.value.replace(/\r/g, '').split('\n'), lines_removed, char_removed, i;
        if (maxLines && lines.length > maxLines) {
            lines = lines.slice(0, maxLines);
            lines_removed = 1
        }
        if (maxChar) {
            i = lines.length;
            while (i-- > 0) if (lines[i].length > maxChar) {
                lines[i] = lines[i].slice(0, maxChar);
                char_removed = 1
            }
            if (char_removed || lines_removed) {
                textarea.value = lines.join('\n')
            }
        }
    }

    $( "#admin-image-list" ).sortable({
      placeholder : "ui-state-highlight",
      update  : function(event, ui)
      {
        var imageIdsArray = new Array();
        var csrf =$('input[name="csrf"]').val();
        $('#admin-image-list .adminBox').each(function(){
          imageIdsArray.push($(this).data("post-id"));
          console.log(imageIdsArray);
        });
        $.ajax({
          url:"controller/changeOrderController.php",
          method:"POST",
          data:{order_change_id:imageIdsArray,changeOrderAdmin:'changeOrderAdmin',csrf:csrf},
          success:function(data)
          {
           if(data){
            swal("Order Changed Successfully", {
              icon: "success",
            });
           }else{
            swal("Order Changed Successfully", {
              icon: "error",
            });
           }
          }
        });
      }
    });

    function removeNoticeAttachment(notice_board_id) {
      $('#notice_attachment_old').val('');
      $('.attachmentView').hide();
    }


    function sendEventReminder(events_day_id,event_day_name) {
      $("#events_day_id_noti").val(events_day_id);
      $("#event_day_name_noti").val(event_day_name);
    }

    function changeUnitColour(id) {
      switch(id) {
        case 1:
          var newcolour = $("#owner_unit_colour").val();
          break;
        case 2:
          var newcolour = $("#tenant_unit_colour").val();
          break;
        case 3:
          var newcolour = $("#closed_unit_colour").val();
          break;
        case 4:
          var newcolour = $("#empty_unit_colour").val();
          break;
        case 5:
          var newcolour = $("#defaulter_unit_colour").val();
          break;
        default:
          // code block
      } 
        var csrf =$('input[name="csrf"]').val();

        $.ajax({
          url:"controller/changeOrderController.php",
          method:"POST",
          data:{unitType:id,newcolour:newcolour,changeUnitColour:'changeUnitColour',csrf:csrf},
          success:function(data)
          {
           if(data==0){
            swal("Changed Successfully", {
              icon: "success",
            });
           }else{
            swal("Something went wrong", {
              icon: "error",
            });
           }
          }
        });
    }

//20220321

function getMainteDiv(facility_id) {
  $("#timeSlots").html("");
    var facilities_maintainace_type = $("#facilities_maintainace_type").val();
    if (facilities_maintainace_type==1) {
      type = "weekTimeSlot";
    } else if (facilities_maintainace_type==2) {
      type = "monthTimeSlot";
    } else if (facilities_maintainace_type==3) {
      type = "singleDateTimeSlot";
    } else if (facilities_maintainace_type==4) {
      type = "closeTimeSlot";
    }
    $.ajax({
      url:"getFacilityCloseTimeSlot.php",
      method:"POST",
      data:{type:type,facility_id:facility_id,csrf:csrf},
      success:function(data)
      {
       $('#timeSlots').html(data);
      }
    });
  }
  //20220321

function getCloseSlotMaintance(facilities_maintainace_id) {
     $.ajax({
          url:"getMaintanaceTimeSlot.php",
          method:"POST",
          data:{facilities_maintainace_id:facilities_maintainace_id},
          success:function(data)
          {
           $('#ckiseSlotDiv').html(data);
          }
    });
}

//20220516

function AddPackage() {
  var facility_type = $(".facility_type").val();
  var booking_for = $(".booking_for").val();
  var maximum_person_booking_limit = $("#maximum_person_booking_limit").val();
  var minimum_person_booking_limit = $("#minimum_person_booking_limit").val();
  var number_of_person = $("#number_of_person").val();
  var package_type = $("#package_type").val();
  var package_amount = $("#package_amount").val();
  var user_type = $("#user_type").val();
  var allow_mulitple_person_booking = $("#allow_mulitple_person_booking").val();

  if($.trim(facility_type) ==''){
     swal("Error! Please Select Type!", {icon: "error",});
  } else if($.trim(booking_for) ==''){
     swal("Error! Please Select Booking Type!", {icon: "error",});
  } else if($.trim(maximum_person_booking_limit) =='' && booking_for!='1'){
     swal("Error! Please Enter Maximum Person Booking Limit!", {icon: "error",});
  } else if($.trim(number_of_person) =='' && booking_for!='1'){
     swal("Error! Please Select No. Of Person!", {icon: "error",});
  } else if($.trim(package_type) ==''){
     swal("Error! Please Select Package Type!", {icon: "error",});
  } else if($.trim(package_amount) <1 && facility_type!=2){
     swal("Error! Enter Valid Package Amount!", {icon: "error",});
  } else if($.trim(package_amount) >1 && facility_type==2){
     swal("Error! For Free Enter 0 Amount!", {icon: "error",});
  }  else if($.trim(user_type) ==''){
     swal("Error! Select Package For!", {icon: "error",});
  }else if(parseInt(number_of_person) <parseInt(minimum_person_booking_limit) && booking_for!='1'){
     swal("Error! Number of Person should be greater than or equal to Minimum Person Booking Limit!", {icon: "error",});
  } else if(parseInt(number_of_person) >parseInt(maximum_person_booking_limit) && booking_for!='1'){
     swal("Error! Number of Person should be less than Maximum Person Booking Limit!", {icon: "error",});
  } else {
    $.ajax({
          url:"getAppendPackages.php",
          method:"POST",
          data:{allow_mulitple_person_booking:allow_mulitple_person_booking,number_of_person:number_of_person,package_type:package_type,package_amount:package_amount,user_type:user_type,booking_for:booking_for},
          success:function(data)
          {
           $('#packageDiv').append(data);
          }
    });

  }

}

//20220516

function singlePacakgeEdit(facility_package_id) {
  
  
    $.ajax({
          url:"editFacilityPackageSingle.php",
          method:"POST",
          data:{facility_package_id:facility_package_id},
          success:function(response)
          {
           $('#editPackageDiv').html(response);
          }
    });


}



$("#packgesTable").on("click", "button", function() {
   $(this).closest("tr").remove(); 
});

//20220321
function editMaintenceSingle(facilities_maintainace_type,facility_id,facilities_maintainace_id) {

  var type="";
    if (facilities_maintainace_type==1) {
      // $('#weekDivs[value="1"]');
      type = "weekTimeSlot";
      //$('#facilities_maintainace_type option[value=1]').prop('selected', 'selected').change();
      
    } else if (facilities_maintainace_type==2) {
      type = "monthTimeSlot";
      //$('#facilities_maintainace_type option[value=2]').prop('selected', 'selected').change();
      
    } else if (facilities_maintainace_type==3) {
      type = "singleDateTimeSlot";
      // $('#singleDate[value="3"]');
      //$('#facilities_maintainace_type option[value=3]').prop('selected', 'selected').change();
      
    } else if (facilities_maintainace_type==4) {
      type = "closeTimeSlot";
      // $('#singleDate[value="3"]');
      //$('#facilities_maintainace_type option[value=4]').prop('selected', 'selected').change();
      
    }
    $.ajax({
      url:"getFacilityCloseTimeSlot.php",
      method:"POST",
      data:{type:type,updateFacilityMaintenance:"yes",facilities_maintainace_id:facilities_maintainace_id,csrf:csrf},
      success:function(data)
      {

       $('#EditTimeSlots').html(data);
      }
    });


}
//20220321

function getTechnician() {
  var complaint_category = $(".complaint_category").val();
  
    $.ajax({
          url:"getTechnician.php",
          method:"POST",
          data:{complaint_category:complaint_category},
          success:function(response)
          {
           $('#technicainDiv').html(response);
          }
    });


}


// club code

  function selectClubPack(PackageType){
       var csrf =$('input[name="csrf"]').val();
      //$("#ClubPackageName").empty();
      $.ajax({
        url:"controller/MemberShipPlanController.php",
        type:"post",
        data:{csrf:csrf,PackageType:PackageType},
        success: function(response){
          
          $("#ClubPackageNameDiv").html(response)
        },
        error: function (response) {
            alert(response);
            $("#ClubPackageNameDiv").html(response)
        }
      })
      
    }


  
  $('#membershipTransaction').dataTable({
    aaSorting: [
    [3, 'desc']
    ]
  });

  
  function SelectGate(emp_type_id)
  {
    if(emp_type_id==1){
      $(".gateSelect").css("display","block");
    }else{
      $(".gateSelect").css("display","none");
    }
  }



  //20220212
  function visitorOverstay(visitor_main_type_id,overstay_alert_minutes) {
    $("#visitor_main_type_id").val("");
    $("#overstay_alert_minutes").val(""); 
      $("#updateVisitor").modal("show");
      $("#visitor_main_type_id").val(visitor_main_type_id);
      if(overstay_alert_minutes){
        $("#overstay_alert_minutes").val(overstay_alert_minutes);
      }
  }

  $('#societyVisitorType').dataTable({
    aaSorting: [
    [3, 'desc']
    ]
  });

  //20220406
  function SelectUnitMember() {
    var user_type = $(".notice_for").val();
    var unit_id = $("#unitList").val();
    $.ajax({
      url: "controller/noticeController.php",
      cache: false,
      type: "POST",
      data: {selectUnitMember:"selectUnitMember",unit_id : unit_id,user_type : user_type,csrf:csrf},
      success: function(response){
        
      $('#allMember').html(response);
      
      
      }
    });
  }
  //20220406

  //20220215
  //20220316
  function VehicleModal(users_vehicle_id=""){
    
    
    $.ajax({
      url: "getVehicleDetails.php",
      cache: false,
      type: "POST",
      data: {updateMemberVehicle:"updateMemberVehicle",users_vehicle_id : users_vehicle_id,csrf:csrf},
      success: function(response){
        //console.log(response);
        $("#vehicleUpdateDiv").html(response);
      }
    });
    
  }
  //20220316

  function SelectVehicle(unitData) {
    var unitData = unitData.split("~");
    $.ajax({
      url: "controller/parkingController.php",
      cache: false,
      type: "POST",
      data: {selectVehicle:"selectVehicle",unit_id:unitData[0],block_id:unitData[1],user_id:unitData[2],csrf:csrf},
      success: function(response){
       
      $('.allVehicle').html(response);
      
      
      }
    });
  }
  //20220215

  //20220218
  var table1 = $('#exampleReportWithoutBtn').DataTable( {
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": false,
     } );

  var table1 = $('.example').DataTable();
  //20220218

  //20220222
  function addBikeParking(parking_id,Type,parking_name,society_parking_id) {
  
  $('#P_id_bike').val(parking_id);
  $('#sParking_id_bike').val(society_parking_id);
  $('#pType_bike').html(Type);
  //IS_607
  $('#parkingName_bike').html(parking_name);
  $('#alocateParkingName_bike').val(parking_name);

}
function SelectBike(unitData) {
  var unitData = unitData.split("~");
  $.ajax({
    url: "controller/parkingController.php",
    cache: false,
    type: "POST",
    data: {selectBike:"selectBike",unit_id:unitData[0],block_id:unitData[1],user_id:unitData[2],csrf:csrf},
    success: function(response){
      
    $('.allBike').html(response);
    
    
    }
  });
}

//20220226
var last_valid_selection_car = null;

function carAllocate01(carLimit,bikeLimit){
  var vehicle = $("#carAllocate").val();
  if(vehicle){
    var bikeCnt = 0;
    var carCnt = 0;
    for(var i=0;i<(vehicle.length);i++){
      var vehicleData = vehicle[i].split("~");
      
      if(vehicleData[1]==1){
        bikeCnt += 1 ;
      }else if(vehicleData[1]==0){
        carCnt += 1;
      }

    }
    

    if(carLimit==0 && bikeLimit==0)
    {
      if(carCnt == 1 && bikeCnt > 0 ){

        swal("Error! Per parking Only 1 car allowed!", {icon: "error",});
        $("#carAllocate").val(last_valid_selection_car).trigger('change');
      }else if(carCnt > 1 ){
        swal("Error! Per parking Only 1 car allowed!", {icon: "error",});
        $("#carAllocate").val(last_valid_selection_car).trigger('change');
      }else if(bikeCnt > 3){
        swal("Error! Maximum 3 bike allowed!", {icon: "error",});
        $("#carAllocate").val(last_valid_selection_car).trigger('change');
      }else{
        last_valid_selection_car = vehicle;
        
      }
    }else{
      if(carCnt > carLimit ){
        swal("Error! Maximum "+carLimit+" car allowed!", {icon: "error",});
        $("#carAllocate").val(last_valid_selection_car).trigger('change');
      }else if(bikeCnt > bikeLimit){
        swal("Error! Maximum "+bikeLimit+" bike allowed!", {icon: "error",});
        $("#carAllocate").val(last_valid_selection_car).trigger('change');
      }else{
        last_valid_selection_car = vehicle;
        
      }
    }
  }
  
    
}

var last_valid_selection_bike = null;

function bikeAllocate01(bikeLimit){
  var vehicle = $("#bikeAllocate").val();
  
  if(vehicle){
    var bikeCnt = vehicle.length;
    if(bikeLimit==0)
    {
      bikeLimit=3;
    }
    
    if(bikeCnt > bikeLimit){
      swal("Error! Maximum "+bikeLimit+" bike allowed!", {icon: "error",});
      $("#bikeAllocate").val(last_valid_selection_bike).trigger('change');
    }else{
      last_valid_selection_bike = vehicle;
    }
    
  }
  
    
}
//20220226

function updateBikeParking(parking_id,Type,parking_name,society_parking_id,unit_id) {
  $('.P_id11').val(parking_id);
  $('.sParking_id1').val(society_parking_id);
  $('.unitId').val(unit_id);
  $('#pType1_bike').html(Type);
   //IS_607
  $('#parkingName1_bike').html(parking_name);
  $('#alocateBikeParkingNameEdit').val(parking_name);
   $.ajax({
        url: "getParkingDetails.php",
        cache: false,
        type: "POST",
        data: {updateBikeParking : "updateBikeParking",unit_id : unit_id,parking_id:parking_id,csrf:csrf},
        success: function(response){
            $('.getParkingDetails').html(response);
        }
      });
}



  //20220222

//20220223
  function DeleteVehicle(users_vehicle_id,user_id) {
    // alert(parking_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          // $('form.deleteForm'+id).submit();
        $.ajax({
          url: "controller/vehicleController.php",
          cache: false,
          type: "POST",
          data: {deleteVehicle : "yes",deleteFromListing : "yes",users_vehicle_id : users_vehicle_id,user_id : user_id,csrf:csrf},
          success: function(response){
            console.log(response);
            if(response) {
                   swal("Success ! Your data has been deleted!", {
                      icon: "success",
                    });
              document.location.reload(true);
            } else {
              swal("Success ! Your data has been deleted!", {
                icon: "error",
              });
            }
          }
        });
      } else {
        //swal("Your data is safe!");
      }
    });
  }

  function SelectParkingSlot() {
    vehicle_type = $("#vehicle_type").val();
    society_parking_id = $("#society_parking_id").val();
    
    if(society_parking_id!="")
    {
     $.ajax({
          url: "getVehicleDetails.php",
          cache: false,
          type: "POST",
          data: {parkingSlot : "parkingSlot",society_parking_id : society_parking_id,vehicle_type : vehicle_type,csrf:csrf},
          success: function(response){
              $('#parkingSlot').html(response);
          }
        });
    }
  }

  function UpdateVehicle(users_vehicle_id) {
    
     $.ajax({
          url: "getVehicleDetails.php",
          cache: false,
          type: "POST",
          data: {UpdateVehicle : "UpdateVehicle",users_vehicle_id : users_vehicle_id,csrf:csrf},
          success: function(response){
              $('#VehicleUpdate').html(response);
          }
    });
    
  }
  //20220223

  //20220224
  function updateVisitingReason(visiting_reason_id,visiting_reason) {
    
    $("#visiting_reason").val(visiting_reason);
    $("#visiting_reason_id").val(visiting_reason_id);
  }
  //20220224

  //20220405
  function parkingOnRent() {
    if ($('#parking_on_rent').is(':checked')) {
      $("#parkingOnRent").css("display","block");
     
      //$("#parkingRentApprovalDiv").html(`<input type="checkbox" name="parking_rent_approval" checked class="js-switch" data-color="#15ca20" data-size="small" />`);
      $("#parkingRentApprovalDiv").css("display","none");
      $("#parkingRentApprovalDiv01").css("display","block");
        

    }else{
      //$("#parkingRentApprovalDiv").html(`<input type="checkbox" name="parking_rent_approval" class="js-switch" data-color="#15ca20" data-size="small" />`);
      
      // var checkBoxes = $("input[name=parking_rent_approval]");
      // checkBoxes.attr("checked", !checkBoxes.attr("checked"));

      $("#parkingRentApprovalDiv").css("display","none");
      $("#parkingRentApprovalDiv01").css("display","block");
      $("#parkingOnRent").css("display","none");

    }
    
  }
  //20220405
  

  function bookParkingForExpected() {
    if ($('#book_parking_for_expected').is(':checked')) {
      $("#bookParkingForExpected").css("display","block");
    }else{
      $("#bookParkingForExpected").css("display","none");
      $("#visitor_free_parking_hours").val("");
      $("#visitor_parking_price").val("");
      $("#advance_slot_booking_maximum_limit").val("");
      $("#parking_price_type").val("");
      $("#expected_visitor_price_pay_by").val("");

    }
    
  }
  //20220225

  //20220228
  function showHideChargePoint(is_visitor){

    if(is_visitor=="0"){
      $("#chargePointHide").css("display","block");
    }else{
      $("#chargePointHide").css("display","none");
    }

  }
  //20220228


  //20220301
  function AllowMultipleTenant(is_allow){
    if(is_allow=='1'){
      $("#AllowMultipleTenant").css("display","block");
    }else{
      
      $("#maximum_tenant_allow").val("1");
      $("#AllowMultipleTenant").css("display","none");
    }
  }
  //20220621
  
  function addTenants(is_delete){
    //alert(is_delete);
    /*if(is_delete=='addMoreTenant'){
      $("#tenantToTenantTransfer").val("addMoreTenant");
    }else*/ 
    if(is_delete=='1'){
      $("#tenantToTenantTransfer").val("Yes");
    }else{
      $("#tenantToTenantTransfer").val("No");
    }

  }
  //20220621
  function editComplainEscalation(complaint_escalation_id){
    $.ajax({
          url: "getComplaintEscalation.php",
          cache: false,
          type: "POST",
          data: {editComplainEscalation : "editComplainEscalation",complaint_escalation_id : complaint_escalation_id,csrf:csrf},
          success: function(response){
              $('#editEscalation').html(response);
          }
    });
  }
  //20220304
  //20220305
$(document).on('keyup',".onStepPercent", function(e){
        
    var val2 = 0;
    $('.onStepPercent').each(function(){
        val2+=(parseFloat($(this).val()) || 0);
    });
    $('#totalStepPercent').val(val2);

    if(val2>100 || val2<100){
      
      $(".totalStepPercentMsg").html('Total Steps Percent Should Be 100 % ..');
    }else{
      $(".totalStepPercentMsg").html('');
    }
    
  });

  $(document).on('keyup',".onPricePercent", function(e){
    
    var val2 = 0;
    $('.onPricePercent').each(function(){
        val2+=(parseFloat($(this).val()) || 0);
    });
    $('#totalPricePercent').val(val2);
    if(val2>100){
      
      $(".totalStepPercentMsg").html('Total Price Percent Should Be 100 % ');
    }else{
      $(".totalStepPercentMsg").html('');
    }
    
  });
  //20220305
  //20220307
  function viewProgressReport(unit_step_report_id) {
    
      $.ajax({
          url: "getStepProgressReport.php",
          cache: false,
          type: "POST",
          data: {editStepProgressReport:"editStepProgressReport",unit_step_report_id : unit_step_report_id,csrf:csrf},
          success: function(response){
              $('#editStepProgressReport').html(response);
          }
       });
  } 

  function removeImage(photo_id)
  {

    swal({
        title: "Are you sure to Remove this Image ?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            // $('form.deleteForm'+id).submit();

            $.ajax({
              url: "controller/unitProgressController.php",
              cache: false,
              type: "POST",
              data: {removeImage:"removeImage",photo_id : photo_id,csrf:csrf},
              success: function(response){
                  $('.remove_'+photo_id).remove();
              }
           });
            
        } else {
        }
    });
    
  }

  function checkedDelete(unit_step_id){
    if($("#checkbox_"+unit_step_id).prop("checked") == true){
      $("#removeStep_"+unit_step_id).removeClass('onStepPercent');
      $("#removeStep_"+unit_step_id).prop('disabled',true);
      $("#removeStepName_"+unit_step_id).prop('disabled',true);
      $("#removeStepPrice_"+unit_step_id).prop('disabled',true);
      $("#removeStepPhoto_"+unit_step_id).prop('disabled',true);
      $("#removeStepPhotoOld_"+unit_step_id).prop('disabled',true);
      $("#removeStepDes_"+unit_step_id).prop('disabled',true);
      $("#removeStepId_"+unit_step_id).prop('disabled',true);
    }else{
      $("#removeStep_"+unit_step_id).addClass('onStepPercent');
      $("#removeStep_"+unit_step_id).prop('disabled',false);
      $("#removeStepName_"+unit_step_id).prop('disabled',false);
      $("#removeStepPrice_"+unit_step_id).prop('disabled',false);
      $("#removeStepPhoto_"+unit_step_id).prop('disabled',false);
      $("#removeStepPhotoOld_"+unit_step_id).prop('disabled',false);
      $("#removeStepDes_"+unit_step_id).prop('disabled',false);
      $("#removeStepId_"+unit_step_id).prop('disabled',false);
    }

    var val2 = 0;
    
     $('.onStepPercent').each(function(){
      
          val2+=(parseFloat($(this).val()) || 0);
      
      });
    
    $('#totalStepPercent').val(val2);

    if(val2>100 || val2<100){
      
      $(".totalStepPercentMsg").html('Total Steps Percent Should Be 100 % ');
    }else{
      $(".totalStepPercentMsg").html('');
    }
  }
  //20220307


  //20220309
  function UnitPayment(unit_payment_id){
    $("#unit_payment_id").val(unit_payment_id);
    $.ajax({
          url: "getPaymentSchedule.php",
          cache: false,
          type: "POST",
          data: {UnitPayment:"UnitPayment",unit_payment_id : unit_payment_id,csrf:csrf},
          success: function(response){
              $('#UnitPaymentDiv').html(response);
          }
       });
  }

  function getPaymentMode(payment_mode){
    
    $.ajax({
          url: "getPaymentSchedule.php",
          cache: false,
          type: "POST",
          data: {getPaymentMode:"getPaymentMode",payment_mode : payment_mode,csrf:csrf},
          success: function(response){
              $('#getPaymentMode').html(response);
          }
       });
  }

  function EditPayment(unit_payment_id){
    $("#unitPaymentId").val(unit_payment_id);
    $.ajax({
          url: "getPaymentSchedule.php",
          cache: false,
          type: "POST",
          data: {EditUnitPayment:"EditUnitPayment",unit_payment_id : unit_payment_id,csrf:csrf},
          success: function(response){
              $('#EditUnitPaymentDiv').html(response);
          }
       });
  }
  //20220309

  //202203010
  function IdentificationDate(unit_identification){
    if(unit_identification==1){
      $(".handoverDateDiv").css("display","none");
      $(".occupiedDateDiv").css("display","block");

    }else if(unit_identification==2){
      $(".handoverDateDiv").css("display","block");
      $(".occupiedDateDiv").css("display","none");
    }
  }
  //202203010
  //202203012
  $('.blockStepReportMultiSelectCls').change(function() {    
      var item=$(this);
      var abc= item.val();
      if (abc==0) {
        
      } else {
       var x = abc+' ';
        if(x.charAt(0)=='0'){
          // alert("all select");
          swal("if you choose custom block all block auto removed");
          $('option:contains(All Blocks)').prop("selected", false);
        }else  {

        }
      }
  });

  $('.floorStepReportMultiSelectCls').change(function() {    
      var item=$(this);
      var abc= item.val();
      if (abc==0) {
        
      } else {
       var x = abc+' ';
        if(x.charAt(0)=='0'){
          // alert("all select");
          swal("if you choose custom floor all floor auto removed");
          $('option:contains(All Floor)').prop("selected", false);
        }else  {

        }
      }
  });

  function getBlockFloorlist(id) {
    var blockIds= $("#block_id_"+id).val();
    console.log(blockIds);
    $.ajax({
        url: 'getStepProgressReport.php',
        type: 'POST',
        data: {blockIds: blockIds,floorList:"floorList"},
      })
      .done(function(response) {
        $('#floorList_'+id).html(response);
      });
  }

  function UpdateBlockStepReport(unit_step_report_id) {
    
      $.ajax({
          url: "getStepProgressReport.php",
          cache: false,
          type: "POST",
          data: {editBlockStepProgressReport:"editBlockStepProgressReport",unit_step_report_id : unit_step_report_id,csrf:csrf},
          success: function(response){
              $('#editBlockStepProgressReport').html(response);
          }
       });
  } 
  //202203012

  //20220323
  function RejectVendorRequest(visitor_frequently_id,visitor_name,type="yes",sos_user_token="",device="",user_id="",expected_visitor_type){
    $("#visitor_frequently_id").val(visitor_frequently_id);
    $("#visitor_name").val(visitor_name);
    $("#rejectVendorRequest").val(type);
    $("#expected_visitor_type").val(expected_visitor_type);
    if(type=="yes"){
      $("#sos_user_token").val(sos_user_token);
      $("#device").val(device);
      $("#user_id").val(user_id);
    }
  }
  //20220323

  //2022326
  function maximumTenantAllow(value) {
    $.ajax({
          url: "controller/TenantSettingController.php",
          cache: false,
          type: "POST",
          data: {updateMultipleTenant:"updateMultipleTenant",maximum_tenant_allow : value,csrf:csrf},
          success: function(response){
              document.location.reload(true);
          }
       });
  }
  function memberScreenView(value) {
    $.ajax({
          url: "controller/TenantSettingController.php",
          cache: false,
          type: "POST",
          data: {updateMemberScreenView:"updateMemberScreenView",owner_tenant_view : value,csrf:csrf},
          success: function(response){
              document.location.reload(true);
          }
       });
  }
  //2022326

  //20220330
  function EditInvoiceTerms(invoice_term_condition_id) {
    $.ajax({
          url: "getInvoiceTerms.php",
          cache: false,
          type: "POST",
          data: {EditInvoiceTerms:"EditInvoiceTerms",invoice_term_condition_id : invoice_term_condition_id,csrf:csrf},
          success: function(response){
              $('#editIvoiceTerms').html(response);
          }
       });
  }
  
  //20220330

  //20220331
  //20220404
  
  /*var userArray = new Array();
  function SendMailToBlock(block_id,maintenance_id) {
    
      $.ajax({
        url: "controller/maintenaceControllerAdvance.php",
        cache: false,
        type: "POST",
        data: {sendInvoiceToUser:"sendInvoiceToUser",block_id : block_id,maintenance_id : maintenance_id,csrf:csrf},
        dataType:'json',
        success: function(response){
          var userList="";
          if(response.data.length>0){
            $(".senInvoiceBtn").show();
          }
          $.each(response.data, function( index, value ) {
            userArray.push(value);
            userList += `<tr>
                          <td class='text-center'>
                            
                            <input type="checkbox" checked class="multiDelteCheckbox"  value="`+value.user_id+`">
                            
                          </td>
                          <td>`+(index+1)+`</td>
                          <td>`+value.block_name+`-`+value.unit_name+`(`+value.user_full_name+`)</td>
                          <td>`+value.user_email+`</td>
                          <td class="process_`+value.user_id+`"></td>
                          
                        </tr>`;
          });
          $("#userList").html(userList);

        }
     });
    
  }*/

  //20220404
  //20220331

  //20220714
  function ResetFormClubBooking() {
     $('#clubFacilityTimeSlotCheck').html('');
     $('.club_facility_datepicker').val('');
     var facility_id= $('#club_facility_id').val();
     $.ajax({
        url: "getClubFacilityBookingPackages.php",
        cache: false,
        type: "POST",
        data: {facility_id:facility_id,csrf:csrf},
        success: function(response){
          $('#clubPacakgeDiv').html(response);
        }
      });
  }
  //20220714
  function ResetFormClubBookingPerson() {
     $('#clubFacilityTimeSlotCheck').html('');
     $('.club_facility_datepicker').val('');
     var user_id= $('#club_user_id').val();
     var facility_id= $('#club_facility_id').val();
    
  }

  function ResetFormClubBookingPackage() {
     $('#clubFacilityTimeSlotCheck').html('');
     $('.club_facility_datepicker').val('');
     var package_type = $('.package_type').val();
     $.ajax({
        url: "getClubPackageMultiPerson.php",
        cache: false,
        type: "POST",
        data: {package_type : package_type},
        success: function(response){
          if (response==1) {
            $(".NoOfPersonMultiDiv").show();
          } else {
            $(".NoOfPersonMultiDiv").hide();
          }
        }
      });
     
  }
  //20220502
  function getBankDetailsClubFacility(value){

    if(value != ''){
      $.ajax({
        url: 'ajaxPaymentDataClubFacility.php',
        type: 'POST',
        data: {payment_type_value:value},
      })
      .done(function(response) {
        $('#clubAddBankDetails').html(response);
        $('#clubIsCash').val('1');

      });
    }else{
      $('#clubAddBankDetails').html('');
      $('#clubIsCash').val('');

    }
  }

  function cancelClubFacility(id) {
    $.ajax({
        url: 'getCancelClubFacilityData.php',
        type: 'POST',
        data: {booking_id:id},
      })
      .done(function(response) {
        $('#cancelPaidEvent').html(response);

      });
  }
  //20220401
  //20220404

  function sendInvoiceMail(user_id,unit_id,user_full_name,user_email,receive_maintenance_id,bill_name_mail,lastData){
    var result =  $.ajax({
                    url: "controller/maintenaceControllerAdvance.php",
                    cache: false,
                    async: false,
                    type: "POST",
                    data: {
                      sendInvoiceMail:"sendInvoiceMail",
                      user_id : user_id,
                      unit_id : unit_id,
                      user_full_name : user_full_name,
                      user_email : user_email,
                      receive_maintenance_id : receive_maintenance_id,
                      bill_name_mail : bill_name_mail,
                      lastData:lastData,
                      csrf:csrf
                    },
                    success: function(response){
                      return response;
                      
                    }
                 });
    return result;

  }

  function sendInvoice(mId,action) {

    
    var oTable = $("#example01").dataTable();
    
    var val = [];
    $(".multiDelteCheckbox:checked", oTable.fnGetNodes()).each(function(i) {
      val[i] = $(this).val();
    });
    if(val=="") {
      swal(
        'Warning !',
        'Please Select at least 1 item !',
        'warning'
      );
    } else {
      
     
        var lastData='';
        var i=0;
        var id = setInterval(frame, 10);
        
        function frame() {
          if (i < val.length) {

            var user_id = val[i];
            if(i==(val.length-1)){
              lastData='1';
            }
            
            $.ajax({
                url: "controller/maintenaceControllerAdvance.php",
                cache: false,
                async:false,
                type: "POST",
                data: {InvoiceUser:"InvoiceUser",user_id : user_id, mId:mId, action:action, csrf:csrf},
                dataType:'json',
                success: function(response){
                  
                  var unit_id = response.data.unit_id;
                  var user_full_name = response.data.user_full_name;
                  var user_email = response.data.user_email;
                  var receive_maintenance_id = response.data.receive_maintenance_id;
                  var bill_name_mail = response.data.maintenance_name;
                  
                  var res = sendInvoiceMail(user_id,unit_id,user_full_name,user_email,receive_maintenance_id,bill_name_mail,lastData);
                  if(res.responseText==1){
                    $(".process_"+user_id).html(`<span class="badge badge-success">Success</span>`);
                    
                  }else{
                    $(".process_"+user_id).html(`<span class="badge badge-danger">Failed</span>`);
                    
                  }
                  i++;
                  var id = setInterval(frame, 10);
                }
             });
             
          }else{
            clearInterval(id);
          }
        }

        
      }
      $(".sendInvoiceBtn").attr("disabled");
  }

  function closeSendInvoice(){
    window.location.reload();
  }

  function publishFirst(){
    swal(
        'Warning !',
        'Please Published !',
        'warning'
      );
  }
  //20220404
  //20220425
  function  getClassifiedSubCategory() {
    var classified_category_id = $("#classified_category_id").val();
    
    $.ajax({
      url: "getClassifiedSubCategory.php",
      cache: false,
      type: "POST",
      data: {classified_category_id : classified_category_id,getClassifiedSubCategories : "getClassifiedSubCategories",csrf:csrf},
      success: function(response){
        console.log(response);
          $('#classified_sub_category_id').html(response);
      }
   });
  }
  //20220425

  //20220409
  function noticeMailToUser(notice_board_id,notice_title,block_id,noticeUser,userCount){
    
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willSend) => {
      if (willSend) { 
        var i = 0;  
        var limit = 100;
        var loopCount = Math.ceil(userCount/limit);
        var id = setInterval(frame, 10);
        $(".ajax-loader").show();
        function frame() {
          if (i < loopCount) {
            $.ajax({
                url: "controller/noticeController.php",
                cache: false,
                async:false,
                type: "POST",
                data: {noticeUser:noticeUser,block_id:block_id,limit : limit,offset : limit*i,notice_title : notice_title,notice_board_id:notice_board_id,csrf:csrf},
                dataType:'json',
                success: function(response){

                  i++;
                  
                }
             });
             
          }else{
            clearInterval(id);
            $(".ajax-loader").hide();
            swal("Mail Sent Successfully !", {
              icon: "success",
            });
          }
        }

        
      }
    });
             
          
  
  }
  //20220409

//20220418
  $('#total_days').on('change', function (e) {
    var total_days = $(this).val();
    $.ajax({
      url: "getEventData.php",
      cache: false,
      type: "POST",
      data: {
        total_days : total_days,
        csrf : csrf
      },
      success: function(response) {
        $('#event_days_detail').html(response);
        $('#billTypeLble').hide();
        $('#bill_type').hide();
        $('#is_taxble').hide();
        $('#gst_detail_div').hide();
      }
    });
});
  //20220418

  //20220419
  function donationFields(){
    if($('#need_fund_donation').val()=="1"){
      $(".donationForEvent").css("display","block");
    }else{
      $(".donationForEvent").css("display","none");
      $("#donation_amount_total").val("");
      $("#min_donation_amount_per_user").val("");
      $("#donation_blancesheet_id").val("");
    }
    
  }

  function RefundEventDonation(id) {
    $.ajax({
        url: 'getRefundEventDonation.php',
        type: 'POST',
        data: {donation_id:id},
      })
      .done(function(response) {
        $('#refundEventDonation').html(response);

      });
  }

  function changeDiscussionStatus(id,status) {
    var csrf =$('input[name="csrf"]').val();
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willSend) => {
      if (willSend) { 
        $(".ajax-loader").show();
        $.ajax({
              url: "controller/statusController.php",
              cache: false,
              type: "POST",
              data: {id : id,status
                :status, csrf:csrf},
              success: function(response){
                $(".ajax-loader").hide();
                console.log(response)
                if(response==1) {
                  document.location.reload(true);
                  // swal("Status Changed", {
                  //           icon: "success",
                  //         });
                } else {
                  document.location.reload(true);
                  swal("Something Wrong!", {
                            icon: "error",
                          });
                }
              }
            });
      }
    });
}

  //20220419

  //20220422



  $('#getReport').click(function () {
      if($("#getVisitorReportForm").valid()){   // test for validity
        $('#visitorReport').css("display","block");
        $('#visitorReportNoData').css("display","none");

        var from = $(".from").val();
        var toDate = $(".toDate").val();
        var block_id = $("#block_id").val();
        //var csrf =$('input[name="csrf"]').val();
        var report_download_access =$('input[name="report_download_access"]').val();
        var role_id =$('input[name="role_id"]').val();
        

        if(report_download_access=="0"){
            maintable = $('#visitorReportWithBtn').DataTable( {
              "destroy": true,
              "bPaginate": false,
              "stateSave": true,
              "bLengthChange": false,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": false,
              "processing": true,
              "serverSide": true,
              "ajax": {
                      url: "visitorReport_server_processing.php",
                      type: 'POST',
                            data: {from:from,toDate:toDate,block_id:block_id,report_download_access:report_download_access,role_id:role_id,csrf:csrf}
                    },
               } );
        }else{
          maintable = $('#visitorReportWithBtn').DataTable({
            "destroy": true,
            "bPaginate": false,
            "stateSave": true,
            "bLengthChange": false,
            "bFilter": true,
            "bInfo": false,
            "bAutoWidth": false,
            "dom": 'Blfrtip',
            //"order": [[0, 'desc']],
            "processing": true,
            "serverSide": true,
            "paging": false,
            "buttons": [
            {
              extend: 'copyHtml5',
              title: $("#reportName").val(),
              exportOptions: {
                columns: ':visible'
              }
            },
            {
              extend: 'csv',
              title: $("#reportName").val(),
              exportOptions: {
                columns: ':visible'
              }
            },
            {
              extend: 'excelHtml5',
              title: $("#reportName").val(),
              exportOptions: {
                columns: ':visible'
              }
            },
            {
              extend : 'pdfHtml5',
              title: $("#reportName").val(),
              orientation : 'landscape',
              pageSize : 'LEGAL',
              titleAttr : 'PDF',
              exportOptions: {
                columns: ':visible'
              }
            },'colvis'],
            "ajax": {
              url: "visitorReport_server_processing.php",
              type: 'POST',
                    data: {from:from,toDate:toDate,block_id:block_id,report_download_access:report_download_access,role_id:role_id,csrf:csrf}
            },

            
          });
        }
        
        
        
      }
      
  });
  //20220422
  //20220425
  
  function eventReschedule(events_day_id,event_id) {
    
    $.ajax({
      url: "getEventRescheduleData.php",
      cache: false,
      type: "POST",
      data: {event_id : event_id,events_day_id : events_day_id,eventReschedule : "Yes",csrf:csrf},
      success: function(response){
          $('#rescheduleData').html(response);
      }
   });
}

function EventCancel(events_day_id,event_day_name,event_type,row_count,event_date) {
    
    $("#events_day_id_cancel").val(events_day_id);
    $("#event_day_name").val(event_day_name);
    $("#event_date").val(event_date);
    if(event_type==1 && row_count>0){
      $("#refund_mode").css("display","block");
    }else{
      $("#refund_mode").css("display","none");
    }
}
  //20220425

  //20220516
  function bookingTypeSelect(type){
    $('#packageDiv').html('');
    $('#package_amount').val('');
    $('#minimum_person_booking_limit').val('');
    $('#maximum_person_booking_limit').val('');
    if(type=="1"){
      $(".oneTimeDiv").css("display","none");
      $(".evenBookingPersonDiv").css("display","none");
      var select = `<label>Package Type</label>
                    <select  class="single-select package_type" id="package_type" name="package_type">
                      <option value=""> -- Select --</option>
                      <option value="0"> One Day Booking</option>
                      <option value="1"> Two Days Booking</option>
                      <option value="2"> Three Days Booking</option>
                      <option value="3"> Four Days Booking</option>
                      <option value="4"> Five Days Booking</option>
                    </select>`;
      
    }else{
      $(".oneTimeDiv").css("display","block");
      $(".evenBookingPersonDiv").css("display","block");
      var select = `<label>Package Type</label>
                    <select  class="single-select package_type" id="package_type" name="package_type">
                      <option value=""> -- Select --</option>
                      <option value="0"> One Time Booking</option>
                      <option value="1"> Monthly Booking</option>
                      <option value="2"> Quarterly Booking</option>
                      <option value="3"> Half Yearly Booking</option>
                      <option value="4"> Yearly Booking</option>
                    </select>`;
    } 
    $(".packageTypeSelect").html(select);
    $('.single-select').select2();
  }

  function addFacilityPackage(booking_type,number_of_person){
    if(booking_type=='1'){
      $(".personNoDiv").css('display','none');
      var select = `<label>Booking Type</label>
                    <input type="hidden" name="booking_type" value="`+booking_type+`" > 
                    <input type="hidden" name="number_of_person" value="`+number_of_person+`" > 
                    <select  class="single-select package_type" id="package_type" name="package_type">
                      <option value=""> -- Select --</option>
                      <option value="0"> One Day Booking</option>
                      <option value="1"> Two Days Booking</option>
                      <option value="2"> Three Days Booking</option>
                      <option value="3"> Four Days Booking</option>
                      <option value="4"> Five Days Booking</option>
                    </select>`;
    }else{
      $(".personNoDiv").css('display','block');
      var select = `<label>Booking Type</label>
                    <input type="hidden" name="booking_type" value="`+booking_type+`" > 
                    <input type="hidden" name="number_of_person" value="`+number_of_person+`" > 
                    <select  class="single-select package_type" id="package_type" name="package_type">
                      <option value=""> -- Select --</option>
                      <option value="0"> One Time Booking</option>
                      <option value="1"> Monthly Booking</option>
                      <option value="2"> Quarterly Booking</option>
                      <option value="3"> Half Yearly Booking</option>
                      <option value="4"> Yearly Booking</option>
                    </select>`;
    }
    $(".packageTypeDiv").html(select);
    $('.single-select').select2();
    
  }
  //20220516

  ///geet ======19-06-2023
  
  function UserWalletUse(){
    var totalAmount = parseFloat($(".facility_amount_org_wallet").val());
    var facility_amount = parseFloat($(".facility_amount").val());
    var walletAmount = parseFloat($("#walletAmount").val());
    if(facility_amount > totalAmount){
      $('#walletUse').attr('disabled',true);
      $('#walletUse').prop('checked', false);
    }else{
      $('#walletUse').attr('disabled',false);
    }
   
    var select = "";
    var is_checked = $('#walletUse').prop('checked');
    if(is_checked) {
        if(facility_amount > walletAmount){
          var remaining_amount = parseFloat(facility_amount-walletAmount);
          select = `<select required="" type="text" class="form-control check" id="payment_type" name="payment_type" onchange="getBankDetailsFacility(this.value)" >
                    <option value="">-- Select --</option>
                    <option value="0">Cash</option>
                    <option value="1">Cheque</option>
                    <option value="2">Online Payment</option>
                    <option value="3">Salary Deduction</option>
                  </select>`;
          $('#walletAmountMsg').html('Collect Remaining Amount('+parseFloat(remaining_amount).toFixed(2)+')');
          
        }else{
          select = `<select type="text" class="form-control check" id="payment_type"  >
                      <option value="">Full Wallet</option>
                    </select>`;
          $('#walletAmountMsg').html("");
        }
        $("#paymentMethod").html(select);
      }else{
        
        select = `<select required="" type="text" class="form-control check" id="payment_type" name="payment_type" onchange="getBankDetailsFacility(this.value)" >
                    <option value="">-- Select --</option>
                    <option value="0">Cash</option>
                    <option value="1">Cheque</option>
                    <option value="2">Online Payment</option>
                    <option value="3">Salary Deduction</option>
                  </select>`;
        $("#paymentMethod").html(select);
        $('#walletAmountMsg').html("");
      }
  }

  
  //20220525

  //20220526
  function timeSlotMinutesDifference(){

    var start_time = $(".timeSlotStartDate").val();
    var end_time = $(".timeSlotEndDate").val();
    var interval = $(".interval").val();
    var intervalTime = $(".intervalTime").val();
    
    if(start_time!="" && end_time!="" && interval>0 ){
      
      var mins = timeDifference();
      if(mins < interval){
        $("#timeSlotMinutesError").html("Per slot time shoud be less than or equal to time difference.");
        $("#slotList").html("");
      }else{
        if(interval!=""){

          var slots = getTimeSlot(interval,intervalTime, start_time, end_time);
          console.log(slots);
          
          var slotList = `<div class="row">
                            <div class="col-lg-12">
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                  </tr>
                                </thead>
                                <tbody>`;
                    if(slots.length>0)
                    {
                      
                      $.each(slots,function(key,val){
                        start_day = "";
                        end_day = "";
                        if(val['start_day']=="Next"){
                          start_day = " ("+val['start_day']+" Day)";
                        }
                        if(val['end_day']=="Next"){
                          end_day = " ("+val['end_day']+" Day)";
                        }
                        
                        slotList += `<tr>
                                      <td>`+(key+1)+`</td>
                                      <td>`+val['slot_start_time']+start_day+`</td>
                                      <td>`+val['slot_end_time']+end_day+`</td>
                                    </tr>`;
                      });
                    }else{
                      slotList += `<tr colspan="3">
                                    No Data Found!
                                  </tr>`;
                    }
                    slotList += `</tbody>
                              </table>
                            </div>
                          </div>`;

          $("#slotList").html(slotList);

          $("#timeSlotMinutesError").html("");
        }else{
          $("#slotList").html("");
        }
      }
    }else{
      $("#timeSlotMinutesError").html("");
      $("#slotList").html("");
    }
  }
  
  

  //20220526
  //20220607

  function timeSlotMinutesDifference(facility_id){
    
    var start_time = $(".timeSlotStartDate").val();
    var end_time = $(".timeSlotEndDate").val();
    var interval = $(".interval").val();
    var intervalTime = $(".intervalTime").val();
    
    if(start_time!="" && end_time!="" && interval>0 ){
      
      $.ajax({
        url: "getFacilityTimeSlot.php",
        cache: false,
        type: "POST",
        data: {start_time:start_time,end_time:end_time,timeSlotMinutes:interval,intervalTime:intervalTime,createTimeSlotes : "createTimeSlotes",csrf:csrf},
        success: function(response){
            $("#slotList").html(response);
        }
      });
      
    }
  }

  
  //20220607
  //20220610
  function calculationView(receive_maintenance_id,all_days,owner_days,tenant_days,owner_day_count,tenant_day_count,user_type=0){
    //var newMaintenanceAmount = $("#newMaintenanceAmount_"+receive_maintenance_id).val();
    $.ajax({
        url: "getUserMaintenanceCalculation.php",
        cache: false,
        type: "POST",
        data: {receive_maintenance_id:receive_maintenance_id,calculateAmount:"yes",all_days:all_days,owner_days:owner_days,tenant_days:tenant_days,user_type:user_type,owner_day_count:owner_day_count,tenant_day_count:tenant_day_count,csrf:csrf},
        success: function(response){
            $("#UserMaintenanceCalculationDetails").html(response);
        }
      });
  }

  
  //20220610

  //20220614
  function complaintBalancesheet(value) {
    $.ajax({
          url: "controller/compalainController.php",
          cache: false,
          type: "POST",
          data: {complaintBalancesheet:"yes",complaint_balancesheet_id:value,csrf:csrf},
          success: function(response){
              document.location.reload(true);
          }
       });
  }

  
  //20220614


  function  editItemsDetails(assets_id,society_id) {
    //alert(assets_id);
    $.ajax({

      url: "editItemsDetails.php",
      cache: false,
      type: "POST",
      data: {assets_id : assets_id,csrf:csrf,society_id:society_id},
      success: function(response){
        $('#edit_items').html(response);
      }
    });
  }

  function moveToScrap(id){
  $('.assets_id').val(id); 
  $('#moveToScrapReasonModal').modal();
}

function itemSoldOut(id){
  $('.assets_id').val(id); 
  $('#soldOutReasonAndPriceModal').modal();
}


function getAssetsItemByCategoryId(id){
  $(".ajax-loader").show();
  $.ajax({
    url: "../residentApiNew/commonController.php",
    cache: false,
    type: "POST",
    data: {
        action:"getAssetsItemByCategoryId",
        assets_category_id:id,
      },
    success: function(response){
      $(".ajax-loader").hide();
      var main_content ="";
      main_content=`<option value="">-- Select Assets Item --</option>`;
      
      $.each(response.assets_item, function( index, value ) {
        main_content +=`<option value="`+value.assets_id+`">`+value.assets_name+`</option>`;
      });
      
      $('#assets_id').html(main_content);
    }
  })
}

function assetsMaintenanceCompleted(assets_category_id,assets_id,assets_maintenance_id,date){
    $('#assetsMaintenanceCompletedModal').modal();
    $('#assets_category_id').val(assets_category_id);
    $('#assets_id').val(assets_id);
    $('#assets_maintenance_id').val(assets_maintenance_id);
    $('#date').val(date);
}

function markAsMaintenanceCompleted(assets_maintenance_complete_id){
  $('#markAsMaintenanceCompletedModal').modal();
  $('#assets_maintenance_complete_id').val(assets_maintenance_complete_id);
}



function timeSlotMinutesDifference(facility_id){
  
  var start_time = $(".timeSlotStartDate").val();
  var end_time = $(".timeSlotEndDate").val();
  var interval = $(".interval").val();
  var intervalTime = $(".intervalTime").val();
  
  if(start_time!="" && end_time!="" && interval>0 ){
    
    $.ajax({
      url: "getFacilityTimeSlot.php",
      cache: false,
      type: "POST",
      data: {start_time:start_time,end_time:end_time,timeSlotMinutes:interval,intervalTime:intervalTime,createTimeSlotes : "createTimeSlotes",csrf:csrf},
      success: function(response){
          $("#slotList").html(response);
      }
    });
    
  }
}

//20220630
notificationCount();
function notificationCount(){
  $.ajax({
      url: "controller/notificationController.php",
      cache: false,
      type: "POST",
      data: {notificationCount:"yes",csrf:csrf},
      success: function(response){
        
          $("#notificationCount").html(response);
      }
    });
}
//20220630

//20220802

function checkTransactionStatus(merchant_id,merchant_key,order_id,payment_mode,transection_id,payment_for_type,common_id,logo,token,payment_txnid){
  
  $("#order_id").val(order_id);
  $("#transection_id").val(transection_id);
  $("#payment_for_type").val(payment_for_type);
  $("#common_id").val(common_id);
  $("#status").val("");
  $("#paymentStatus").text("");
  $("#paymentStatusBtn").hide();
  if(logo!="")
  {
    $("#paymentGatewayLogo").attr("src",logo);
  }else{
    $("#paymentGatewayLogo").css("display","none");
  }
  
  var payment_mode = payment_mode.toLowerCase();
  $(".ajax-loader").show();
  $.ajax({
    url: "controller/checkPaymentStatusController.php",
    cache: false,
    type: "POST",
    data: {merchant_id:merchant_id,merchant_key:merchant_key,order_id:order_id,payment_mode:payment_mode,transection_id:transection_id,payment_for_type:payment_for_type,common_id:common_id,payment_txnid:payment_txnid,token:token,csrf:csrf},
    success: function(response){
      $(".ajax-loader").hide();
      if (/^[\],:{}\s]*$/.test(response.replace(/\\["\\\/bfnrtu]/g, '@').
      replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
      replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        // console.log(response);
        var obj = JSON.parse(response);
        if(payment_mode=="paytm" || payment_mode=="upi" || payment_mode=="upi_intent")
        {

          var status = obj.body.resultInfo.resultStatus;
          if(status!==undefined){
            if(status=="TXN_FAILURE"){
              paymentStatus="<i class='text-danger'>Invalid Order ID</i>";
              status="failed";
            }else if(status=="TXN_SUCCESS"){
               var receive_amount = obj.body['txnAmount'];
              paymentStatus="<i class='text-success'>Success (Received Amount : "+receive_amount+")</i>";
              status="success";
            }else if(status=="TXN_PENDING"){
              paymentStatus="<i class='text-warning'>Pending</i>";
              status="pending";
            } else if(status=="PENDING"){
              paymentStatus="<i class='text-warning'>Pending</i>";
              status="pending";
            } 
            $("#status").val(status);
            $("#paymentStatus").html(paymentStatus);
            $("#paymentStatusBtn").show();
          }
        }else if(payment_mode=="razorpay"){
         
            var status = obj.items[0]['status'];
            if(status=="failed"){
              paymentStatus="<i class='text-danger'>Failed</i>";
              status="failed";
            }else if(status=="captured"){
              var receive_amount = parseFloat(obj.items[0]['amount'])/100;
              paymentStatus="<i class='text-success'>Success (Received Amount : "+receive_amount+")</i>";
              status="success";
            }else {
              paymentStatus="<i class='text-warning'>Pending</i>";
              status="pending";
            } 
            $("#status").val(status);
            $("#paymentStatus").html(paymentStatus);
            $("#paymentStatusBtn").show();
            
          
        }else if(payment_mode=="payumoney"){
          
          if(status!='' && obj.status==0){
            var status = obj.result[0].postBackParam.status;
            if(status=="failure"){
              paymentStatus="<i class='text-danger'>Failed</i>";
              status="failed";
            }else if(status=="success"){
              var receive_amount = obj.result[0].postBackParam['amount'];
              paymentStatus="<i class='text-success'>Success (Received Amount : "+receive_amount+")</i>";;
              status="success";
            }else {
              paymentStatus="<i class='text-warning'>Pending</i>";
              status="pending";
            } 
            $("#status").val(status);
            $("#paymentStatus").html(paymentStatus);
            $("#paymentStatusBtn").show();
          } else if(obj.status==-1) {
            $("#paymentStatus").html("merchantTransactionIds does not exist");
          } else {
            $("#paymentStatus").html("Server Not Responding");
          }
        }
      //window.location.reload();
      }else{

        //the json is not ok
         $("#paymentStatus").html(response);
      }
    }
  });  
      
}

function updateTransactionStatus(){
  swal({
    title: "Are you sure?",
    text: "Update Transaction Status !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      $("#updateTransactionStatus").modal("hide");

      var order_id = $("#order_id").val();
      var transection_id = $("#transection_id").val();
      var payment_for_type = $("#payment_for_type").val();
      var common_id = $("#common_id").val();
      var status = $("#status").val();

      $.ajax({
        url: "controller/checkPaymentStatusController.php",
        cache: false,
        type: "POST",
        data: {order_id:order_id,status:status,transection_id:transection_id,payment_for_type:payment_for_type,common_id:common_id,updateStatus:"yes",csrf:csrf},
        success: function(response){
          var obj = JSON.parse(response);
          if(obj.status=="200")
          {
            swal("Successfully Updated !", {
              icon: "success",
            });
          }else{
            swal("Something Wrong !", {
              icon: "error",
            });
          }
          setTimeout(() => {
            window.location.reload();
          }, "2000");
          
        }
      });  
      
    } else {
      // swal("Your imaginary file is safe!");
    }
  });
}
//20220802


function removeOwnerDoc(unit_history_id,owner_doc)
{
  swal({
      title: "Are you sure to Remove this Image ?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          // $('form.deleteForm'+id).submit();
          $.ajax({
            url: "controller/unitHistoryController.php",
            cache: false,
            type: "POST",
            data: {removeDoc:"removeDoc",unit_history_id : unit_history_id,owner_doc:owner_doc,csrf:csrf},
            success: function(response){
                $('.remove_doc_'+unit_history_id).remove();
                window.location.reload();
            }
         });
          
      } else {
      }
  });
  
}
//20220720

$('.selectall').on('change', function(e)
{
  var $inputs = $('#checkboxlist input[type=checkbox]');
  if(e.originalEvent === undefined)
  {
    var allChecked = true;
    $inputs.each(function(){
        allChecked = allChecked && this.checked;
    });
    this.checked = allChecked;
  }
  else
  {
    $inputs.prop('checked', this.checked);
  }
});

$('#checkboxlist input[type=checkbox]').on('change', function()
{
    $('.selectall').trigger('change');
    if(this.checked)
    {
      $(this).attr("checked",'true');
    }
    else
    {
      $(this).removeAttr("checked");
    }
});

var elementArray;
function payPenalty()
{
  $(".ajax-loader").show();
  elementArray = new Array();
  $(".payCheckBox:checked").each(function ()
  {
      elementArray.push($(this).val());
  });
  doAjax(0);
}

function doAjax(arrCount)
{
  var lst_to = [];
  $("input:hidden.due_types_arr").each(function()
  {
      lst_to.push($(this).val());
  });

  var ids = elementArray[arrCount];
  var [unit_id, user_id] = ids.split("-");
  $.ajax({
    url: 'controller/allPenaltyPaymentController.php',
    data: {makePenaltyPayment : "makePenaltyPayment",unit_id:unit_id,user_id:user_id,csrf:csrf,order:lst_to},
    type: "post",
    success: function(response)
    {
      response = JSON.parse(response);
      if(response.penalty_any_paid > 0)
      {
        $('#unit_id'+unit_id).text('Penalty Paid');
        $('#unit_id'+unit_id).addClass('badge-success');
      }
      else if(response.penalty_low_balance > 0)
      {
        $('#unit_id'+unit_id).text('Insufficient Wallet Balance');
        $('#unit_id'+unit_id).addClass('badge-danger');
      }
      else if(response.penalty_no_due > 0)
      {
        $('#unit_id'+unit_id).text('No Due');
        $('#unit_id'+unit_id).addClass('badge-warning');
      }

      if(response.bill_any_paid > 0)
      {
        $('#unit_id_bill'+unit_id).text('Bill Paid');
        $('#unit_id_bill'+unit_id).addClass('badge-success');
      }
      else if(response.bill_low_balance > 0)
      {
        $('#unit_id_bill'+unit_id).text('Insufficient Wallet Balance');
        $('#unit_id_bill'+unit_id).addClass('badge-danger');
      }
      else if(response.bill_no_due > 0)
      {
        $('#unit_id_bill'+unit_id).text('No Due');
        $('#unit_id_bill'+unit_id).addClass('badge-warning');
      }
    },
    complete : function ()
    {
      arrCount++;
      if (arrCount < elementArray.length)
      {
        setTimeout( function(){
        doAjax(arrCount);
        },100);
      }
      else
      {
        $(".ajax-loader").hide();
      }
    }
  });
}

function getComplaintSubCat(complaint_category_id)
{
  $.ajax({
    url: 'controller/complaintCategoryController.php',
    data: {getComplaintSubCatList : "getComplaintSubCatList",complaint_category_id:complaint_category_id,csrf:csrf},
    type: "post",
    success: function(response)
    {
      response = JSON.parse(response);
      $('#sCId').empty();
      $('#sCId').append($("<option></option>").attr("value","").text("Select"));
      $.each(response, function(key, value)
      {
        $('#sCId').append($("<option></option>").attr("value",value.complaint_sub_category_id).text(value.sub_category_name));
      });
    }
  });
}

$('.capInput').keyup(function(){
    $(this).val($(this).val().toUpperCase());
});

function approveRejectRequest(unit_id,user_id,employee_unit_id,emp_id,ar)
{
  swal({
    title: "Are you sure?",
    text: "You want to change status",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) =>
  {
    if (willDelete)
    {
      $.ajax({
        url: 'controller/employeeController.php',
        data: {
          unit_id: unit_id,
          user_id: user_id,
          employee_unit_id: employee_unit_id,
          emp_id: emp_id,
          ar: ar,
          csrf: csrf,
          changeUnitPenReq: "changeUnitPenReq"
        },
        type: "post",
        success: function(response)
        {
          location.reload();
        }
      });
    }
  });
}

$('#addAssetsModal').on('hidden.bs.modal', function ()
{
  $('#addAssetForm').trigger("reset");
  $("#addAssetForm").validate().resetForm();
});

function editUnitAssets(unit_assets_id,unit_assets_name,is_movable)
{
  $('#unit_assets_name_edit').val(unit_assets_name);
  $('#unit_assets_id').val(unit_assets_id);
  if(is_movable == 0)
  {
    $("#is_movable_yes_edit").prop("checked", true);
  }
  else
  {
    $("#is_movable_no_edit").prop("checked", true);
  }
  $('#editUnitAssetsModal').modal();
}

$('#editUnitAssetsModal').on('hidden.bs.modal', function ()
{
  $('#editAssetForm').trigger("reset");
  $("#editAssetForm").validate().resetForm();
});

$('#addUserAssetsModal').on('hidden.bs.modal', function ()
{
  $('#addUserAssetsForm').trigger("reset");
  $("#addUserAssetsForm").validate().resetForm();
});

function submitUserAssetsForm()
{
  if(jQuery('#addUserAssetsForm input[type=checkbox]:checked').length)
  {
    $('.asset_btn').prop('disabled', true);
    $(".ajax-loader").show();
    $('#addUserAssetsForm').submit();
  }
  else
  {
    swal("Error! Please select atleast one asset !", {icon: "error",});
  }
}

function handOverUnit(unit_id,user_id,block_id,unit_name)
{
  swal({
    title: "Are you sure?",
    text: "You want to handover unit",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) =>
  {
    if (willDelete)
    {
      $.ajax({
        url: 'controller/unitController.php',
        data: {
          unit_id: unit_id,
          user_id: user_id,
          unit_name: unit_name,
          csrf: csrf,
          handOverUnitTag: "handOverUnitTag"
        },
        type: "post",
        success: function(response)
        {
          // console.log(response);
          window.location.href='owners?bId='+block_id;
        }
      });
    }
  });
}

function viewAssetsItemsByUser(user_id,unit_id){
  $.ajax({
    url: "getAssetsItems.php",
    cache: false,
    type: "POST",
    data: {user_id : user_id,unit_id:unit_id},
    success: function(response){
      $('.assetsItems').html(response);
      $('#assetsItemsHistory').modal('show');
    }
  });
}

function EditAssetTerms(asset_term_condition_id) {
  $.ajax({
        url: "getAssetTerms.php",
        cache: false,
        type: "POST",
        data: {EditAssetTerms:"EditAssetTerms",asset_term_condition_id : asset_term_condition_id,csrf:csrf},
        success: function(response){
            $('#editAssetTerms').html(response);
        }
     });
}

$('.event_start_time').change(function(event)
{
    var valid_time = $(this).val();
    alert(valid_time);
    if(valid_time != '')
    {
        $(this).valid();
    }
});


//////geet 30-05-2023

function editBillunitPriceCategory(bill_unit_price_category_id, bill_unit_price_category_name) {
  $('#billunitPriceCategoryForm').trigger("reset");
  // $("#billunitPriceCategoryForm").validate().resetForm();
  $('#bill_unit_price_category_id').val(bill_unit_price_category_id);
  $('#bill_unit_price_category_name').val(bill_unit_price_category_name);
  $('.billunitPriceCategorybtn').html('Update');
  $('#billUnitPriceCategoryModal').modal();
}

function addBillunitPriceCategory() {
  $('#billunitPriceCategoryForm').trigger("reset");
  $('.billunitPriceCategorybtn').html('Save');
  $('#billUnitPriceCategoryModal').modal();
}

function deleteBillunitPriceCategory(bill_unit_price_category_id)
{
  swal({
      title: "Are you sure to delete this data ?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          $.ajax({
            url: "controller/tarrifCategoryController.php",
            cache: false,
            type: "POST",
            data: {deteleCategory:"deteleCategory",bill_unit_price_category_id : bill_unit_price_category_id,csrf:csrf},
            success: function(response){
                window.location.reload();
            }
         });
          
      } else {
      }
  });
  
}

//geet========2023-06-26
function getBillCategoryByTarrif(bill_unit_price_category_id, bill_category_id = '') {
  if (bill_unit_price_category_id) {
      $.ajax({
          url: "controller/billController.php",
          cache: false,
          type: "POST",
          data: {getBillCategoryByTarrif:"getBillCategoryByTarrif",bill_unit_price_category_id : bill_unit_price_category_id,bill_category_id:bill_category_id,csrf:csrf},
          success: function(response){
              
              $("#bill_category_id").html(response)
          }
      });
      
  }
}
//geet========2023-06-26

function DeleteBillTariffCategory(action,bill_category_id,bill_unit_price_category_id) {
  swal({
      title: "Are you sure to delete this category ?",
      text: "Once deleted, you will not be able to recover this category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          $.ajax({
            url: "controller/billController.php",
            cache: false,
            type: "POST",
            data: {action : action,bill_category_id:bill_category_id,bill_unit_price_category_id:bill_unit_price_category_id,csrf:csrf},
            success: function(response){
                if(response==1) {
                  document.location.reload(true);
                  swal("Bill Category Deleted", {
                      icon: "success",
                    });
                } else {
                  document.location.reload(true);
                  swal("Something Wrong!", {
                    icon: "error",
                  });
                }
            }
         });
      }
  });
}
//////geet 30-05-2023

//Geet 14-07-2022
function addChangeMeter() {
  $("#addChangeMeter").modal();
  
}
function editChangeMeter(meter_change_id="") {
  $("#editChangeMeterModal").modal();
    $.ajax({
      url: "controller/changeMeterController.php",
      type: "POST",
      dataType:'html',
      data: {editChangeMeter : "editChangeMeter",meter_change_id:meter_change_id,csrf:csrf},
      success: function (response) {
        
        $("#updateChangeMeter").html(response);
      }
   });
  }




//Geet 14-07-2022
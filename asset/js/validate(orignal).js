$("#signinForm").validate({
    // errorPlacement: function (error, element) {
    //     if (element.parent('.input-group').length) { 
    //          error.insertAfter(element.parent());      // radio/checkbox?
    //      } else if (element.hasClass('select2-hidden-accessible')) {     
    //          error.insertAfter(element.next('span'));  // select2
    //          element.next('span').addClass('error').removeClass('valid');
    //      } else {                                      
    //          error.insertAfter(element);               // default
    //      }
    //  },
     rules: {
         username: {
             required: true
         },
         password: {
             required: true
         }
     },
     messages: {
         username: {
             required: "Please enter a username"
         },
         password: {
             required: "Please provide a password"
         }
     },
         submitHandler: function(form) {
             $(':input[type="submit"]').prop('disabled', true);
             $(".ajax-loader").show();
             form.submit(); 
       }
 });


// $().ready(function() {
//      //20220226
//     $.validator.addMethod("noComma", function(value, element) { 
//       return value.indexOf(",") < 0 && value != ""; 
//     }, "Please enter valid number");

//     $.validator.addMethod('regexp', function(value, element, param) {
//         return this.optional(element) || value.match(param);
//     },'Please enter a valid no.');

//     $.validator.addMethod("pwcheck", function(value) {
//         return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
//            && /[A-Z]/.test(value) // has a lowercase letter
//            && /\d/.test(value) // has a digit
//     });

//     $.validator.addMethod("addressCheck", function(value) {
//         /*alert(value);*/
//         /*alert((/^[A-Za-z ]+/.test(value) || value==""  ))*/
//          return /^[A-Za-z 0-9\d=!,\n\-@._*]*$/.test(value) // consists of only these
//             && (/\w*[a-zA-Z ]\w*/.test(value) || value==''  )// has a lowercase letter
//            // && /\d/.test(value) // has a digit
//     });

//     jQuery.validator.addMethod("acceptName", function(value, element, param) {
//         return value.match(new RegExp("." + param + "$"));
//     });


//     $.validator.addMethod("alpha", function(value, element) {
//         return this.optional(element) || value == value.match(/^[a-zA-Z ]*$/);
//     }, jQuery.validator.format("Please enter a Valid Name."));

//     $.validator.addMethod("alphaRestSpeChartor", function(value, element) {
//         return this.optional(element) || value == value.match(/^[A-Za-z 0-9\d=!,:\n\-@&()/?%._*]*$/);
//     }, jQuery.validator.format("special characters not allowed"));


//     $.validator.addMethod("noSpace", function(value, element) { 
//         return value == '' || value.trim().length != 0;  
//     }, "No space please and don't leave it empty");

//     $.validator.addMethod('minStrict', function (value, el, param) {
//         return value >= param;
//     });

//     jQuery.validator.addMethod("greaterThan", 
//         function(value, element, params) {

//             if (!/Invalid|NaN/.test(new Date(value))) {
//                 return new Date(value) > new Date($(params).val());
//             }

//             return isNaN(value) && isNaN($(params).val()) 
//             || (Number(value) > Number($(params).val())); 
//     },'Must be greater than {0}.');

//     jQuery.validator.addMethod("image", function (value, element, param) {
//         param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g";
//         return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
//     }, jQuery.validator.format("Please add a valid image file."));


//     $('input[type="file"]').change(function(){
//         $(this).valid()
//     });

//     //IS_639 divya
//     $.validator.addMethod('filesize', function (value, element, arg) {
//         var size =3000000;
//         if(element.files.length){
//             if(element.files[0].size<=size)
//             {
//                 return true;
//             }else{
//                 return false;
//             }
//         }else{
//             return true;
//         }

//     }, $.validator.format("file size must be less than or equal to 3MB."));

//     //21FEB2020
//     $.validator.addMethod('filesize1MB', function (value, element, arg) {
//         var size =1097152;
//         if(element.files.length){
//             if(element.files[0].size<size)
//             {
//                 return true;
//             }else{
//                 return false;
//             }
//         }else{
//             return true;
//         }
//     }, $.validator.format("file size must be less than  1MB."));

//     $.validator.addMethod('MaxUploadFile', function (value, element, arg) {
//         var FIlelength = 20;

//         if(element.files.length <= FIlelength){

//             return true;
//         }else{
//             return false;
//         }
//     }, $.validator.format("You are allowed to upload only maximum 20 files at a time"));

//     //21FEB2020


//     //24feb2020
//     $.validator.addMethod("extension", function(value, element, param) {
//         param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
//         return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
//     },$.validator.format("Please select a file with a valid extension (png,jpeg,jpg,gif)."));

//     $.validator.addMethod("extensionDoc", function(value, element, param) {
//         param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif|pdf";
//         return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
//     }, $.validator.format("Please select a file with a valid extension (png,jpeg,jpg,gif,pdf)."));

//     $.validator.addMethod('filesize4MB', function (value, element, arg) {
//         var size =4000000;
//         if(element.files.length){
//             if(element.files[0].size<=size)
//             {
//                 return true;
//             }else{
//                 return false;
//             }
//         }else{
//             return true;
//         }
//     }, $.validator.format("file size must be less than or equal to 4MB."));
//     //24feb2020
//     $.validator.addMethod('filesize2MB', function (value, element, arg) {
//         var size =2000000;
//         if(element.files.length){
//             if(element.files[0].size<=size)
//             {
//                 return true;
//             }else{
//                 return false;
//             }
//         }else{
//             return true;
//         }
//     }, $.validator.format("file size must be less than or equal to 2MB."));

//     $.validator.addMethod("extensionDocument", function(value, element, param) {
//         param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g|txt|xls|csv|pdf|docx|odt|ods|xlsx";
//         return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
//     },$.validator.format("Please select a file with a valid extension (png,jpeg,jpg,txt,xls,csv,pdf,docx,odt,ods,xlsx)."));

//     $.validator.addMethod('compare', function (value, element, param) {
//         return this.optional(element) || parseInt(value) > 0 || parseInt($(param).val()) > 0;
//     }, $.validator.format('Invalid value'));


//     //19march2020 eve
//     $.validator.addMethod('filesize12MB', function (value, element, arg) {
//         var size =12000000;
//         if(element.files.length){
//             if(element.files[0].size<=size)
//             {
//                 return true;
//             }else{
//                 return false;
//             }
//         }else{
//             return true;
//         }
//     }, $.validator.format("file size must be less than or equal to 12MB."));

//     $.validator.addMethod('filesize20MB', function (value, element, arg) {
//         var size =1024*1024*20;
//         if(element.files.length){
//             if(element.files[0].size<=size)
//             {
//                 return true;
//             }else{
//                 return false;
//             }
//         }else{
//             return true;
//         }
//     }, $.validator.format("file size must be less than or equal to 20MB."));
//  //19march2020   




//     $("#personal-info").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         }
//     });
//     $("#personal-info1").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             parking_name:
//             {
//                 required: true,
//                 noSpace: true,
//                 remote:
//                 {
//                     url: 'UniqueParkingName.php',
//                     type: "post",
//                     data:
//                     {
//                         oldParkingName: function()
//                         {
//                             return $('#personal-info1 :input[name="parking_name"]').val();
//                         },
//                         society_parking_id: function()
//                         {
//                             return $('#personal-info1 :input[name="society_parking_id"]').val();
//                         }, 
//                         society_id: function()
//                         {
//                             return $('#personal-info1 :input[name="society_id"]').val();
//                         } 
//                         , 
//                         parking_id: function()
//                         {
//                             return $('#personal-info1 :input[name="parking_id"]').val();
//                         } 
//                     } 
//                 }
//             }
//         },
//         messages: {
//             parking_name: {
//             //2march2020 -new
//             required: "Please enter Parking Name", 
//             remote: "Parking Name is already exists, please use another parking name to avoid confusion"
//             },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//      }
//     //28feb2020
//     });

    




//    //20220426

//     $("#bookFacilityFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },

//         rules: {
//             payment_type: {
//                 required: true,
//                 noSpace:true 
//             },
//             unit_id_main:{
//                 required:true
//             }, 
//             booked_date:{
//                 required:true
//             },
            
//             payment_bank:{
//                 required:{
//                     depends: function(element) {
//                       return $("#payment_type").val()=="1"  || $("#payment_type").val()=="2" ;
//                     }
//                 },
//                  noSpace:true 
//             },
//             payment_number:{
//                 required:{
//                     depends: function(element) {
//                       return $("#payment_type").val()=="1"  || $("#payment_type").val()=="2" ;
//                     }
//                 },
//                  noSpace:true 
//             }
//         },
//         messages: {
//             payment_type: {
//                 required: "Please select Payment Type", 
//                 },
//             unit_id_main:{
//                 required: "Please Select booking for"
//             },
//             booked_date:{
//                 required:"please select booking date"
//             },
//             payment_bank:{
//                 required:"Please enter bank name"
//             },
//             payment_number:{
//                 required:"Please enter reference number"
//             }
//         },
//             submitHandler: function(form) {
//                 // $(':input[type="submit"]').prop('disabled', true);
//                 // $(".ajax-loader").show();
//                 // form.submit(); 
//                 if (guestAlowed=='0') {
//                     var minimum = maxPersonSelected;
//                      if($(".multiple-select-family").select2('data').length>=minimum){
//                         $(':input[type="submit"]').prop('disabled', true);
//                         $(".ajax-loader").show();
//                         form.submit(); 
//                      }else {
//                         swal("Error! Please select booking for", {icon: "error",});
//                          return false;
//                      }
//                  } else {
//                     var player_name = 0;
//                     var player_mobile = 0;
//                     $('.player_name').each(function() {
//                         var clsVal =  $(this).val();
//                         if($.trim(clsVal) =="")
//                         {
//                             player_name++;
                            
//                         }
                        
//                     });
//                     $('.player_mobile').each(function() {
                        
//                         var clsVal =  $(this).val();
//                         if($.trim(clsVal) =="")
//                         {
//                             player_mobile++;
                            
//                         }
                        
//                     });
                    
//                     if(player_name>0){
//                         swal("Error! Please enter guest name", {icon: "error",});
//                     }else if(player_mobile>0){
//                         swal("Error! Please enter guest mobile no.", {icon: "error",});
//                     }else{
//                         $(':input[type="submit"]').prop('disabled', true);
//                         $(".ajax-loader").show();
//                         form.submit();
//                     }
                     
//                 }
//           }
         
//     });

//     //20220426

//     $("#payFacilityFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             payment_type: {
//                 required: true,
//                 noSpace:true 
//             } ,
//             payment_bank:{
//                 required:{
//                     depends: function(element) { 
//                       return $('#payFacilityFrm :input[name="payment_type"]').val() =="1"  || $('#payFacilityFrm :input[name="payment_type"]')=="2" ;
//                     }
//                 },
//                  noSpace:true 
//             },
//             payment_number:{
//                 required:{
//                     depends: function(element) {
//                        return $('#payFacilityFrm :input[name="payment_type"]').val() =="1"  || $('#payFacilityFrm :input[name="payment_type"]')=="2" ;
//                   }
//                 },
//                  noSpace:true 
//             }
//         },
//         messages: {
//             payment_type: {
//                 required: "Please select Payment Type", 
//             },
            
//             payment_bank:{
//                 required:"Please enter bank name"
//             },
//             payment_number:{
//                 required:"Please enter reference number"
//             }
//          },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
     
//     });
    
//     //IS_914 //2march2020 -new




    
//     $("#personal-info2").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         }
//     });
//     $("#personal-info3").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules:{
//             employment_type:{
//                 required:false,
//             },
//             business_categories:{
//                 required:false,
//             },
//             business_categories_sub:{
//                 required:false,
//             },
//             company_name:{
//                 required:true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             designation:{
//                 required:false,
//                 noSpace:true,
//                 alpha: true,
//             },
//             company_address:{
//                 required:true,
//                 noSpace:true,
//             },
//             company_contact_number:{
//                 required:false,
//                 digits: true,
//                 maxlength: 15,
//                 minlength: 8,
//             }
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $(".common-form").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         }
//     });
//     $("#signupForm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             firstname: "required",
//             lastname: "required",
//             username: {
//                 required: true,
//                 minlength: 2,
//                 alpha:true
//             },
//             password: {
//                 required: true,
//                 minlength: 5
//             },
//             confirm_password: {
//                 required: true,
//                 minlength: 5,
//                 equalTo: "#password"
//             },
//             email: {
//                 required: true,
//                 email: true
//             },
//             contactnumber: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             topic: {
//                 required: "#newsletter:checked",
//                 minlength: 2
//             },
//             agree: "required"
//         },
//         messages: {
//             firstname: "Please enter your firstname",
//             lastname: "Please enter your lastname",
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
//             password: {
//                 required: "Please provide a password",
//                 minlength: "Your password must be at least 5 characters long"
//             },
//             confirm_password: {
//                 required: "Please provide a password",
//                 minlength: "Your password must be at least 5 characters long",
//                 equalTo: "Please enter the same password as above"
//             },
//             email: "Please enter a valid email address",
//             contactnumber: "Please enter valid number",
//             agree: "Please accept our policy",
//             topic: "Please select at least 2 topics"
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 // $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#addUser").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             user_first_name_add: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//              company_name: {
//                 required: true,
//                 noSpace:true,
//             },
//             user_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_email: {
//                 minlength: 2
//             },
//             user_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             family_user_mobile: {
//                 minlength: 8,
//                 maxlength:15

//             },
//             member_relation_name_other: {
//                 minlength: 2,
//                 maxlength:15,
//                 required: true,
//                 noSpace:true,

//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             tenant_doc: {
//                filesize4MB: true

//             },
//             prv_doc: {
//                filesize4MB: true

//             }
            
//         },
//         messages: {
//             company_name: {
//                 required : "Please enter company name",
//                 noSpace: "Space Not Allowed",
//             },
//              user_first_name_add: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             member_relation_name_other: {
//                 required : "Please enter other relation name",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             user_email: "Please enter a valid email address",
//             user_mobile: "Please enter valid mobile number",
//             family_user_mobile: "Please enter valid mobile number",
//             owner_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#addUserTransfer").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             user_first_name_new_owner: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_email: {
//                 minlength: 2
//             },
//             user_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             family_user_mobile: {
//                 minlength: 8,
//                 maxlength:15

//             },
//             member_relation_name_other: {
//                 minlength: 2,
//                 maxlength:15,
//                 required: true,
//                 noSpace:true,

//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             user_profile_pic: {
//                filesize2MB: true

//             },
//              tenant_doc: {
//                filesize4MB: true

//             },
//             prv_doc: {
//                filesize4MB: true

//             }
            
//         },
//         messages: {
//             user_first_name_new_owner: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             member_relation_name_other: {
//                 required : "Please enter other relation name",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             user_email: "Please enter a valid email address",
//             user_mobile: "Please enter valid mobile number",
//             family_user_mobile: "Please enter valid mobile number",
//             owner_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#addUserCommercial").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             phone: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             password: {
//                 minlength: 5,
//                 maxlength:15

//             },
           
            
//         },
//         messages: {
//             name: {
//                 required : "Please enter name",
//                 noSpace: "Space Not Allowed",
//             },
//             password: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             phone: "Please enter valid mobile number",

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#addNoteForm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             note_title: {
//                 required: true,
//                 noSpace:true,
//             },
//             note_description: {
//                 required: true,
//                 noSpace:true,
//                 minlength: 1,
//                 maxlength:500

//             }
           
            
//         },
//         messages: {
//             note_title: {
//                 required : "Please enter title",
//                 noSpace: "Space Not Allowed",
//             },
//             note_description: {
//                 required : "Please enter description",
//                 noSpace: "Space Not Allowed",
//             },
//             phone: "Please enter valid mobile number",

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//      $("#addUser").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             user_first_name_add: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_email: {
//                 minlength: 2
//             },
//             user_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             tenant_doc: {
//                filesize4MB: true

//             },
//             prv_doc: {
//                filesize4MB: true

//             }
            
//         },
//         messages: {
//             user_first_name_add: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             user_email: "Please enter a valid email address",
//             user_mobile: "Please enter valid mobile number",
//             owner_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#addFamilyForm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             family_user_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             member_relation: {
//                 required: true,
//             },
//             member_relation_name_other: {
//                 required: true,
//                 noSpace:true,
//             },
//             owner_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_email: {
//                 minlength: 2
//             },
//             user_mobile: {
//                 required: false,
//                 minlength: 8,
//                 maxlength:15
//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15
//             },
//             tenant_doc: {
//                filesize4MB: true

//             },
//             prv_doc: {
//                filesize4MB: true

//             }
            
//         },
//         messages: {
//             family_user_first_name: {
//                 required : "Please enter first name",
//                 noSpace: "Space Not Allowed",
//             },
//             user_first_name_add: {
//                 required : "Please enter first name",
//                 noSpace: "Space Not Allowed",
//             },
//             user_first_name: {
//                 required : "Please enter first name",
//                 noSpace: "Space Not Allowed",
//             },
//             member_relation_name_other: {
//                 required : "Please enter valid name",
//                 noSpace: "Space Not Allowed",
//             },
//             member_relation: {
//                 required : "Please select relation",
//             },
//             user_last_name: {
//                 required : "Please enter last name",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_first_name: {
//                 required : "Please enter first name",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_last_name: {
//                 required : "Please enter last name",
//                 noSpace: "Space Not Allowed",
//             },
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             user_email: "Please enter a valid email address",
//             user_mobile: "Please enter valid mobile number",
//             owner_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     $("#addChildForm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             family_user_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             member_relation: {
//                 required: true,
//             },
//             member_relation_name_other: {
//                 required: true,
//                 noSpace:true,
//             },
//             owner_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_email: {
//                 minlength: 2
//             },
//             user_mobile: {
//                 required: false,
//                 minlength: 8,
//                 maxlength:15
//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15
//             },
//             tenant_doc: {
//                filesize4MB: true

//             },
//             prv_doc: {
//                filesize4MB: true

//             }
            
//         },
//         messages: {
//             family_user_first_name: {
//                 required : "Please enter first name",
//                 noSpace: "Space Not Allowed",
//             },
//             user_first_name_add: {
//                 required : "Please enter first name",
//                 noSpace: "Space Not Allowed",
//             },
//             user_first_name: {
//                 required : "Please enter first name",
//                 noSpace: "Space Not Allowed",
//             },
//             member_relation_name_other: {
//                 required : "Please enter valid name",
//                 noSpace: "Space Not Allowed",
//             },
//             member_relation: {
//                 required : "Please select relation",
//             },
//             user_last_name: {
//                 required : "Please enter last name",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_first_name: {
//                 required : "Please enter first name",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_last_name: {
//                 required : "Please enter last name",
//                 noSpace: "Space Not Allowed",
//             },
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             user_email: "Please enter a valid email address",
//             user_mobile: "Please enter valid mobile number",
//             owner_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     $("#tenantForm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             company_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_first_name_owner: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//              last_addresss: {
//                 // alpha: true,
//                 noSpace:true,
//             },
//             user_email: {
//                 minlength: 2
//             },
//             user_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             tenant_doc: {
//                filesize4MB: true

//             },
//             prv_doc: {
//                filesize4MB: true

//             }
            
//         },
//         messages: {
//             company_name: {
//                 required : "Please enter company name",
//                 noSpace: "Space Not Allowed",
//             },
//              user_first_name_owner: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             user_email: "Please enter a valid email address",
//             user_mobile: {
//                 required: "Please enter valid mobile number",
//             },
//             owner_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     //20220622
//     $("#tenantToTenantForm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             company_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//              user_first_name_owner: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//              last_addresss: {
//                 // alpha: true,
//                 noSpace:true,
//             },
//             user_email: {
//                 minlength: 2
//             },
//             user_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             tenant_doc: {
//                filesize4MB: true

//             },
//             prv_doc: {
//                filesize4MB: true

//             }
            
//         },
//         messages: {
//             company_name: {
//                 required : "Please enter company name",
//                 noSpace: "Space Not Allowed",
//             },
//              user_first_name_owner: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             user_email: "Please enter a valid email address",
//             user_mobile: {
//                 required: "Please enter valid mobile number",
//             },
//             owner_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#moreTenantForm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             company_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//              user_first_name_owner: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//              last_addresss: {
//                 // alpha: true,
//                 noSpace:true,
//             },
//             user_email: {
//                 minlength: 2
//             },
//             user_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             tenant_doc: {
//                filesize4MB: true

//             },
//             prv_doc: {
//                filesize4MB: true

//             }
            
//         },
//         messages: {
//             company_name: {
//                 required : "Please enter company name",
//                 noSpace: "Space Not Allowed",
//             },
//              user_first_name_owner: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             user_email: "Please enter a valid email address",
//             user_mobile: {
//                 required: "Please enter valid mobile number",
//             },
//             owner_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     //20220622

//     $("#ownerAgain").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             user_first_name_owner_again: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             owner_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             user_email: {
//                 minlength: 2
//             },
//             user_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             }
            
//         },
//         messages: {
//             user_first_name_owner_again: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             user_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_first_name: {
//                 required : "Please enter firstname",
//                 noSpace: "Space Not Allowed",
//             },
//             owner_last_name: {
//                 required : "Please enter lastname",
//                 noSpace: "Space Not Allowed",
//             },
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             user_email: "Please enter a valid email address",
//             user_mobile: "Please enter valid mobile number",
//             owner_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#addEmp").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             emp_name: {
//                 required: true,
//                 noSpace:true,
//                 alpha:true
//             },
//             user_email: {
//                 minlength: 2
//             },
//             emp_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15
//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15
//             },
//             emp_id_proof:{
//                 filesize4MB:true
//             },
//             emp_id_proof1:{
//                 filesize4MB:true
//             },
//             valid_till_date:{
//                 required:true
//             },
//             emp_profile:{
//                 filesize4MB:true
//             }
//         },
//         messages: {
//             emp_name: "Please enter employee name",
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
//             emp_email: "Please enter a valid email address",
//             emp_mobile: "Please enter valid mobile number",
//             owner_mobile: "Please enter valid mobile number",
//             valid_till_date: "Please select valid till date"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     $("#addEmp").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             emp_name: {
//                 required: true,
//                 noSpace:true,
//                 alpha:true
//             },
//             user_email: {
//                 minlength: 2
//             },
//             emp_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15
//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15
//             },
//             emp_id_proof:{
//                 filesize12MB:true
//             },
//             emp_id_proof1:{
//                 filesize12MB:true
//             },
//             valid_till_date:{
//                 required:true
//             },
//             emp_profile:{
//                 filesize12MB:true
//             }
//         },
//         messages: {
//             emp_name: "Please enter employee name",
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
//             emp_email: "Please enter a valid email address",
//             emp_mobile: "Please enter valid mobile number",
//             owner_mobile: "Please enter valid mobile number",
//             valid_till_date: "Please select valid till date"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#addAdmin").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             admin_name_add: {
//                 required:true,
//                 noSpace:true,
//                 alpha: true,
//             },
//             role_name:{
//                 required: true,
//                 noSpace:true,
//                 alpha:true,
//             },
//             admin_email: {
//                 required:true,
//                 minlength: 2
//             },
//             admin_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             }
            
//         },
//         messages: {
//             admin_name_add: "Please enter full name",
//             role_name: "Please role name",
//             username: {
//                 required: "Please enter a username",
//                 minlength: "Your username must consist of at least 2 characters"
//             },
            
//             admin_email: "Please enter a valid email address",
//             admin_mobile: "Please enter valid mobile number"

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#buildingDetails").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             society_name_update: {
//                 required: true,
//                 noSpace:true,
//             },
//             currency: {
//                 required: true,
//                 noSpace:true,
//             },
//             society_address: {
//                 required: true,
//                 noSpace:true,
//             },
//             owner_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             }
            
//         },
//         messages: {
//             society_name_update: {
//                 required : "Please enter building name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//              currency: {
//                 required : "Please enter currency",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             society_address: {
//                 required : "Please enter address",
//                 noSpace: "No space please and don't leave it empty",
//             },
            
//             builder_mobile: "Please enter valid mobile number",

//         },
//             submitHandler: function(form)
//             {
//                 var max_visitor_for_notification = $('#max_visitor_for_notification').val();
//                 var max_visitor_for_approval = $('#max_visitor_for_approval').val();

//                 if(max_visitor_for_notification>max_visitor_for_approval)
//                 {
//                     swal("Error! Please add maximum visitor For approval is greater than maximum visitor for notification", {icon: "error",});
//                 }
//                 else
//                 {
//                     $(':input[type="submit"]').prop('disabled', true);
//                     $(".ajax-loader").show();
//                     form.submit(); 
//                 }
//             }
//     });
//     $("#blockAdd").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             block_name: {
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//                 //IS_159 28feb2020
//                     //IS_159 28feb2020
//                  },
//                  block_sort: {
//                     required: true,
//                     noSpace:true,
//               },

//                  blockNameSingle: {
//                      required: true,
//                      noSpace:true,
//                      alphaRestSpeChartor: true,
                
//                      //IS_159 28feb2020
//                  },
//                  unit_name_single: {
//                      required: true,
//                      noSpace:true,
//                      alphaRestSpeChartor: true,
//                  }

//              },
//              messages: {
//                  block_name: {
//                      required : "Please enter block name",
//                      noSpace: "No space please and don't leave it empty",
//                //IS_159 28feb2020
//                remote: "Block Name is already exists, please use another Block name to avoid confusion"
//                //IS_159  28feb2020
//            },

//            //7march2020
//             block_sort: {
//                      required : "Please enter block order",
//                      noSpace: "No space please and don't leave it empty",
//                      remote: "Block order is already exists, please use another Block order to avoid confusion"
               
//            },
//            //7march2020

//            blockNameSingle: {
//                required : "Please enter block name",
//                noSpace: "No space please and don't leave it empty",
//                //IS_159 28feb2020
//                remote: "Block Name is already exists, please use another Block name to avoid confusion"
//                //IS_159 28feb2020
//            },
//            unit_name_single: {
//                required : "Please enter unit name",
//                noSpace: "No space please and don't leave it empty",
//            },
           
//        },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#floorAdd").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             floor_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             blockNameSingle: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
//         },
//         messages: {
//             floor_name: {
//                 required : "Please enter floor name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             block_sort: {
//                 required : "Please enter block name",
//                 noSpace: "No space please and don't leave it empty",
//                 remote: "Block order is already exists, please use another Block order to avoid confusion"
//             },
//             blockNameSingle: {
//                 required : "Please enter block name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#noticeBoard").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             notice_title: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             blockNameSingle: {
//                 required: true,
//                 noSpace:true,
//             },
//             block_id: {
//                 required: true
//             },
//             notice_attachment: {
//                  filesize12MB:true 
//             } ,
            
//         },
//         messages: {
//             notice_title: {
//                 required : "Please enter noticeboard title",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             blockNameSingle: {
//                 required : "Please enter block name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             block_id: {
//                 required: "Please select block"
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#emergencyNumberEdit").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             name_edit: {
//                 required: true,
//                 noSpace:true,
//                 alpha:true,
//             },
//             designation : {
//                 required: true,
//                 noSpace:true,
//                 // alpha: true,
//             },
//             mobile: {
//                 required: true,
//                 noSpace:true,
//                 minlength: 3,
//                 maxlength:15,
//             }
            
//         },
//         messages: {
//             name_edit: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             designation: {
//                 required : "Please enter designation",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             mobile: {
//                 minlength : "Please enter valid number",
//                 maxlength : "Please enter valid number",
//                 required : "Please enter valid number",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#emergencyNumberAdd").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             name: {
//                 required: true,
//                 noSpace:true,
//                 alpha:true,
//             },
//             designation : {
//                 required: true,
//                 noSpace:true,
//                 // alpha: true,
//             },
//             mobile: {
//                 noSpace:true,
//                 required: true,
//                 minlength: 3,
//                 maxlength:15,
//             }
            
//         },
//         messages: {
//             name: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             designation: {
//                 required : "Please enter Description",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             mobile: {
//                 minlength : "Please enter valid number",
//                 maxlength : "Please enter valid number",
//                 required : "Please enter valid number",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#facility").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             facility_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             designation : {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             person_limit : {
//                 required: true,
//                 noSpace:true,
//                 minStrict: 1,
//             },
//             facility_amount : {
//                 required: true,
//                 noSpace:true,
//                 minStrict: 1,
//             },
//             facility_amount_day : {
//                 required: true,
//                 noSpace:true,
//                 minStrict: 1,
//             }
                
            
//         },
//         messages: {
//             facility_name: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             designation: {
//                 required : "Please enter designation",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             person_limit: {
//                 required : "Please enter person limit",
//                 noSpace: "No space please and don't leave it empty",
//                 minStrict : "Minimum 1 person required"
//             },
//             facility_amount: {
//                 required : "Please enter amount",
//                 noSpace: "No space please and don't leave it empty",
//                 minStrict : "Minimum 1 rs required"
//             },
//             facility_amount_day: {
//                 required : "Please enter amount",
//                 noSpace: "No space please and don't leave it empty",
//                 minStrict : "Minimum 1 rs required"
//             },

//         },
//             submitHandler: function(form) {

//                 var addfacilities = $(".addfacilities").val();
//                 var facility_type = $(".facility_type").val();
//                 if (addfacilities=='addfacilities') {
//                     var package_typeTotal = $('input[name="package_type[]"]').length;
//                     if (package_typeTotal>0) {
//                        $(':input[type="submit"]').prop('disabled', true);
//                        $(".ajax-loader").show();
//                        form.submit(); 
//                     } else {
//                        swal("Error! Please Add Atleast 1 Package !", {icon: "error",}); 
//                     }
                    

//                 } else {
//                     $(':input[type="submit"]').prop('disabled', true);
//                     $(".ajax-loader").show();
//                     form.submit(); 
//                 }
//           }
//     });

//     $("#balancesheet").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             balancesheet_name_add: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             balancesheet_name : {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
//         },
//         messages: {
//             facility_name: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             balancesheet_name: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#incomeAdd").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             expenses_title: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             balancesheet_name : {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
//              //24feb2020
//              ,expAmoint:{
//                  required:true
//              }
//              , income_amount:{
//                  required:true
//              }
//              ,expenses_add_date:{
//                  required: true
//              },expenses_photo:{
//                  required: false,
//                  filesize4MB: true 
//              },is_taxble:{
//                 required:true
//             }
//             ,taxble_type:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#incomeAdd :input[name="is_taxble"]').val()=="1" ;
//                     }
//                 }
//             }

//             //24feb2020
            
//         },
//         messages: {
//             expenses_title: {
//                 required : "Please enter title",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             balancesheet_name: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//             //24feb2020
//             expenses_add_date:{
//                 required : "Please select date"
//             } ,
//             income_amount:{
//                 required : "Please enter amount"
//             },
//             expAmoint:{
//                 required : "Please enter amount"
//             } ,is_taxble:{
//                 required: "Please select Bill Type"
//             }
//             ,taxble_type:{
//                 required:  "Please select Tax Type"
//             }
//             //24feb2020

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//       $("#creditFrom").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             remark: {
//                 required: true,
//                 noSpace:true,
//             }, credit_amount:{
//                  required:true
//              }
            
//         },
//         messages: {
//             remark: {
//                 required : "Please enter remark",
//                 noSpace: "No space please and don't leave it empty",
//             },
            
//             credit_amount:{
//                 required : "Please enter credit amount"
//             }
//             //24feb2020

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//          $("#debitFrom").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             remark: {
//                 required: true,
//                 noSpace:true,
//             }, debit_amount:{
//                  required:true
//              }
            
//         },
//         messages: {
//             remark: {
//                 required : "Please enter remark",
//                 noSpace: "No space please and don't leave it empty",
//             },
            
//             debit_amount:{
//                 required : "Please enter debit amount"
//             }
//             //24feb2020

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     $("#chand").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             expenses_title: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             balancesheet_name : {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
//              //24feb2020
//              ,expAmoint:{
//                  required:true
//              }
//              , income_amount:{
//                  required:true
//              }
//              ,expenses_add_date:{
//                  required: true
//              },expenses_photo:{
//                  required: false,
//                  filesize4MB: true 
//              },is_taxble:{
//                 required:true
//             }
//             ,taxble_type:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#incomeAdd :input[name="is_taxble"]').val()=="1" ;
//                     }
//                 }
//             }

//             //24feb2020
            
//         },
//         messages: {
//             expenses_title: {
//                 required : "Please enter title",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             balancesheet_name: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//             //24feb2020
//             expenses_add_date:{
//                 required : "Please select date"
//             } ,
//             income_amount:{
//                 required : "Please enter amount"
//             },
//             expAmoint:{
//                 required : "Please enter amount"
//             } ,is_taxble:{
//                 required: "Please select Bill Type"
//             }
//             ,taxble_type:{
//                 required:  "Please select Tax Type"
//             }
//             //24feb2020

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#expense").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             expenses_title: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             balancesheet_name : {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
//             //24feb2020
//             ,expAmoint:{
//                 required:true
//             }
//             , income_amount:{
//                 required:true
//             }
//             ,expenses_add_date:{
//                 required: true
//             },expenses_photo:{
//                 required: false,
//                 filesize4MB: true 
//             } //27march2020 #expense
//             ,is_taxble:{
//                 required:true
//             }
//             ,taxble_type:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#expense :input[name="is_taxble"]').val()=="1" ;
//                     }
//                 }
//             }

//             //24feb2020
            
//         },
//         messages: {
//             expenses_title: {
//                 required : "Please enter title",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             balancesheet_name: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//             //24feb2020
//             expenses_add_date:{
//                 required : "Please select expense date"
//             } ,
//             income_amount:{
//                 required : "Please enter income amount"
//             },
//             expAmoint:{
//                 required : "Please enter expense amount"
//             },is_taxble:{
//                 required: "Please select Bill Type"
//             }
//             ,taxble_type:{
//                 required:  "Please select Tax Type"
//             }
//             //24feb2020

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#bill").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }

//         },
//         rules: {
//             bill_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
//             ,
//             bill_category:{
//                 required: true,
//                 // alphaRestSpeChartor: true,
//             },
//             bill_genrate_date:{
//                 required: true
//             } ,
//             bill_end_date:{
//                 required: true
//             }  ,
//             owner_unit_price:{
//                 required: true
//             } ,
//             rent_unit_price:{
//                 required: true
//             },
//             close_unit_price:{
//                 required: true
//             },
//             balancesheet_id:{
//                 required:true
//             },
//             wing_id:{
//                 required:true
//             }
//             ,is_taxble:{
//                 required:true
//             }
//             ,taxble_type:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#is_taxble').val()=="1" ;
//                     }
//                 }
//             }
//         },
//         messages: {
//             bill_name: {
//                 required : "Please enter bill name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//             bill_genrate_date:{
//                 required : "Please select bill date"
//             } ,
//             bill_end_date:{
//                 required : ""
//             }  ,
//             owner_unit_price:{
//                 required : "Please enter bill owner unit price"
//             } ,
//             rent_unit_price:{
//                 required : "Please enter bill rent unit price"
//             },
//             close_unit_price:{
//                 required : "Please enter bill close unit price"
//             },
//             balancesheet_id:{
//                 required : "Please select balancesheet"
//             },
//             wing_id:{
//                 required : "Please select Unit"
//             }
//             //24feb2020 
//             ,is_taxble:{
//                 required:"Please select Bill Type" 
//             }
//             ,taxble_type:{
//                 required:"Please select Tax Type" 
//             }

//         },
//           //   submitHandler: function(form) {
//           //       $(':input[type="submit"]').prop('disabled', true);
//           //$(".ajax-loader").show();
//           //       form.submit(); 
//           // }
//             submitHandler: function(form) {
//                 var error = 0;
//                   $( "#unit_id_main" ).each(function( index ) {
//                      var clsVal =  $(this).val();
//                      if($.trim(clsVal) ==""){
//                         error++;
//                     }
//                 });
//                 if (error > 0 ) {
//               swal("Please select unit.!");
//               } else {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//             }
//           }
//     });
//     $("#maintenance").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             maintenance_name_add: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             maintenance_name_auto: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             created_date:{
//                 required:true,
//             },
//             end_date:{
//                 required:true,
//             },is_taxble:{
//                 required:true
//             }
//             ,unit_id_main:{
//                 required:true
//             }
//             ,taxble_type:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#is_taxble').val()=="1" ;
//                     }
//                 }
//             },

//             //15july2020
//             auto_gen_date:{
//                 required:{
//                     depends: function(element) {
//                       return $('#maintenance :input[name="maintenance_type_id"]:checked').val() =="0" ;
//                     }
//                 },
//             },
//             mentainance_price_type:{
//                  required: true
//             },
//              month_from:{
//                 required:{
//                     depends: function(element) {
//                       return $('#maintenance :input[name="mentainance_price_type"]').val() =="1" ;
//                     }
//                 },
//             },
//              year_from:{
//                 required:{
//                     depends: function(element) {
//                       return $('#maintenance :input[name="mentainance_price_type"]').val() =="1" ;
//                     }
//                 },
//             },
//              month_to:{
//                 required:{
//                     depends: function(element) {
//                       return $('#maintenance :input[name="mentainance_price_type"]').val() =="1" ;
//                     }
//                 },
//             },
//              year_to:{
//                 required:{
//                     depends: function(element) {
//                       return $('#maintenance :input[name="mentainance_price_type"]').val() =="1" ;
//                     }
//                 },
//             },
//             //15july2020
            
//         },
//         messages: {
//             maintenance_name_add: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             maintenance_name_auto: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             created_date:{
//                 required : "Please enter maintenance date",
//             },
//             //15july2020
//              auto_gen_date:{
//                 required : "Please select auto generate date",
//             },
//             mentainance_price_type:{
//                 required:"Please select maintenance price type"
//             },
//             month_from:{
//                 required:"select from month"
//             },
//             year_from:{
//                 required:"select to month"
//             },
//             month_to:{
//                 required:"select from month"
//             },
//             year_to:{
//                 required:"select to month"
//             },
//             end_date:{
//                 required:"",
//             },is_taxble:{
//                 required:"Please select Bill Type" 
//             }
//             ,taxble_type:{
//                 required:"Please select Tax Type" 
//             },unit_id_main:{
//                 required:"Please select Unit" 
//             }

//         },
//             submitHandler: function(form) {
//                 var error = 0;
//                   $( "#unit_id_main" ).each(function( index ) {
//                      var clsVal =  $(this).val();
//                      if($.trim(clsVal) ==""){
//                         error++;
//                     }
//                 });
//                 if (error > 0 ) {
//               swal("Please select unit.!");
//               } else {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//             }
//           }
//     });
//     $("#poll").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             pulling_question: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             option_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
//             //24feb2020 IS_205
//             ,poll_for:{
//                 required:true
//             },no_of_option:{
//                 required:true
//             }
//             /*,option_name1: {
//                 required: true,
//                 noSpace:true,
//             },option_name2: {
//                 required: true,
//                 noSpace:true,
//             },option_name3: {
//                 required: true,
//                 noSpace:true,
//             },option_name4: {
//                 required: true,
//                 noSpace:true,
//             },option_name5: {
//                 required: true,
//                 noSpace:true,
//             },option_name6: {
//                 required: true,
//                 noSpace:true,
//             },option_name7: {
//                 required: true,
//                 noSpace:true,
//             },option_name8: {
//                 required: true,
//                 noSpace:true,
//             },option_name9: {
//                 required: true,
//                 noSpace:true,
//             },option_name10: {
//                 required: true,
//                 noSpace:true,
//             }*/

//              //24feb2020 IS_205

//          },
//          messages: {
//              pulling_question: {
//                  required : "Please enter question",
//                  noSpace: "No space please and don't leave it empty",
//              },
//              option_name    : {
//                  required : "Please enter option",
//                  noSpace: "No space please and don't leave it empty",
//              },
//             //24feb2020 IS_205
//             poll_for:{
//                 required : "Please select Poll For"
//             },no_of_option:{
//                 required : "Please select No Of Options"
//             },
//             option_name1    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             option_name2    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             option_name3    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             option_name4    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             option_name5    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             option_name6    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             option_name7    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             option_name8    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             option_name9    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             option_name10    : {
//                 required : "Please enter option",
//                 noSpace: "No space please and don't leave it empty",
//             } 
//             //24feb2020 IS_205

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 // $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#election").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             election_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             election_description: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
//             // /IS_641 26feb2020
//             ,penalty_photo:{
//                 filesize:true
//             }
//              // /IS_641 26feb2020
//          },
//          messages: {
//              election_name: {
//                  required : "Please enter name",
//                  noSpace: "No space please and don't leave it empty",
//              },
//              election_description: {
//                  required : "Please enter description",
//                  noSpace: "No space please and don't leave it empty",
//              },

//          },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//      $("#addDiscussion").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             discussion_forum_title: {
//                 required: true,
//                 noSpace:true,
//             },
//             discussion_forum_description: {
//                 required: true,
//                 noSpace:true,
//             }
//             // /IS_641 26feb2020
//             ,penalty_photo:{
//                 filesize:true
//             }
//              // /IS_641 26feb2020
//          },
//          messages: {
//              discussion_forum_title: {
//                  required : "Please enter title",
//                  noSpace: "No space please and don't leave it empty",
//              },
//              discussion_forum_description: {
//                  required : "Please enter description",
//                  noSpace: "No space please and don't leave it empty",
//              },

//          },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//       $("#commentAddDiscusstion").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             comment_messaage: {
//                 required: true,
//                 noSpace:true,
//             },
           
//              // /IS_641 26feb2020
//          },
//          messages: {
//              comment_messaage: {
//                  required : "Please enter message",
//                  noSpace: "No space please and don't leave it empty",
//              },
             

//          },
//              submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#penaltyAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             penalty_name: {
//                 required: true,
//                 noSpace:true,
//             },
//             election_description: {
//                 required: true,
//                 noSpace:true,
//             }
//             //2march2020
//             ,
//             penalty_photo:{
//                 filesize2MB: true
//             },
//             penalty_amount:{
//                 required:true,
//                 noSpace:true,
//                 min:1
//             },
//             balancesheet_id:{
//                  required:true
//             },
//             penalty_date:{
//                 required: true
//             }, tax_slab:{
//                 required: true
//             } 
//             //2march2020
//             ,is_taxble:{
//                 required:true
//             }
//             ,taxble_type:{
//                 required: {
//                  depends: function(element) {    
//                       return $("#is_taxble").val()=="1" ;
//                     }
//                 }
//             }
//         },
//         messages: {
//             penalty_name: {
//                 required : "Please enter description",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             election_description: {
//                 required : "Please enter description",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             //2march2020
//             penalty_amount: {
//                required : "Please enter penalty amount",
//                noSpace: "No space please and don't leave it empty",
//                min: "penalty Amount should be more then 0"
//             },
//             balancesheet_id:{
//                 required : "Please select balancesheet"
//             },
//             penalty_date:{
//                  required : "Please select penalty date"    
//             } , tax_slab:{
//                 required: "Please select Tax Slab"
//             } 
//             //2march2020
//              ,is_taxble:{
//                 required:"Please select Bill Type" 
//             }
//             ,taxble_type:{
//                 required:"Please select Tax Type" 
//             }
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//      $("#contactSupport").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             subject: {
//                 required: true,
//                 noSpace:true,
//             },
//             feedback_msg: {
//                 required: true,
//                 noSpace:true,
//             }
//         },
//         messages: {
//             subject: {
//                 required : "Please enter subject",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             feedback_msg: {
//                 required : "Please enter message",
//                 noSpace: "No space please and don't leave it empty",
//             }
           
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#serviceProviderFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             service_provider_name: {
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//             },
//             service_provider_name_edit:{
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//             },
//             service_provider_address: {
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//             },
//             service_provider_phone:{
//                 required: true,
//                 noSpace:true,
//             },
//             society_id:{
//                 required:true
//             },
//             country_id:{
//                 required:true
//             },
//             state_id:{
//                 required:true
//             },
//             city_id:{
//                 required:true
//             },
//             service_provider_email:{
//                 required:true,
//                 email:true
//             },
//             local_service_master_id:{
//                 required:true
//             },
//             local_service_provider_sub_id:{
//                 required:true
//             },
//             service_provider_user_image:{
//                 required: function(element){
//                     return $("#service_provider_user_image_old").val()=="";
//                 },
//                             //21FEB2020
//                //filesize: true
//                filesize1MB:true
//            }

//             //24feb2020
//             ,id_proof:{
//                 required:false,
//                 filesize:true,
//                 extensionDoc:true
//             } 
//             ,location_proof:{
//                 required:false,
//                 filesize:true,
//                 extensionDoc:true
//             } 
//             //24feb2020 
//         },
//         messages: {
//             service_provider_name: {
//                 required : "Please enter service provider",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             service_provider_name_edit:{
//                 required : "Please enter service provider",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             service_provider_address: {
//                 required : "Please enter address",
//                 noSpace: "No space please and don't leave it empty",
//             } ,
//             service_provider_phone:{
//                 required : "Please enter Mobile",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             society_id:{
//                 required:"Please select society"
//             },
//             country_id:{
//                 required:"Please select country"
//             },
//             state_id:{
//                 required:"Please select state"
//             },
//             city_id:{
//                 required:"Please select city"
//             },
//             service_provider_email:{
//                 required:"Please enter email",
//                 email: "Please enter valid email address.",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             local_service_master_id:{
//                 required : "Please select category",
//             },
//             local_service_provider_sub_id:{
//                 required : "Please select sub category",
//             },
//             service_provider_user_image: {
//                 required : "Please Select logo" 
//             } 
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#BalancesheetFileFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             balancesheet_name: {
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//             },
//             file_name:{
//                 required: true,
//                 filesize4MB: true
//             } 
            
//         },
//         messages: {
//             balancesheet_name: {
//                 required : "Please enter balancesheet name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             file_name: {
//                 required : "Please select pdf",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#addGallary").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             event_id: {
//                 required: true,
//                 noSpace:true,
//             },
//             "block_id[]":{
//                 required: true,
//             },
//             "gallery_photo[]":{
//                 required: true,
//                 image: true,
//                 filesize8MB: true,
//             },

//        },
//        messages: {
//             event_id: {
//                 required : "Please select event",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             "block_id[]": {
//                 required : "Please select Block",
//             },
//             "gallery_photo[]": {
//                 required : "Please select image",
//                 image : "Please add a valid image file.",
//                 filesize8MB : "file size must be less than or equal to 8MB.",
//            },
           
//        },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#editProfileFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             admin_name: {
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//             },
//             admin_email:{
//                 required:true,
//                 email:true,
//                 noSpace: true,
//             },
//              admin_mobile:{
//                 required:true,
//                 minlength: 8,
//                 maxlength: 15,
//                 noSpace: true,
//             },
//             profile_image:{
//                 required: function(element){
//                     return $("#profile_image_old").val()=="";
//                 },
//                 filesize: true
//             } 
            
//         },
//         messages: {
//             admin_name: {
//                 required : "Please enter admin name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             admin_email: {
//                 required : "Please enter email",
//                 email: "Please enter valid email",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             profile_image: {
//                 required : "Please select image",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
     

//     //20220419


//      $("#event").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                     error.insertAfter(element.parent());      // radio/checkbox?
//                 } else if (element.hasClass('select2-hidden-accessible')) {     
//                     error.insertAfter(element.next('span'));  // select2
//                     element.next('span').addClass('error').removeClass('valid');
//                 } else {                                      
//                     error.insertAfter(element);               // default
//                 }
//             },
//             rules: {
//                 event_title: {
//                     required: true,
//                     noSpace:true,
//                     // alphaRestSpeChartor: true,
//                 },
//                 eventMom: {
//                     required: true,
//                     noSpace:true,
//                     // alphaRestSpeChartor: true,
//                 },
//                 //IS_171 21FEB2020
//                 event_start_date:{
//                     required: true
//                 },
//                 event_end_date:{
//                     required: true
//                 },
//                 event_start_time:{
//                     required: true
//                 },
//                 event_end_time:{
//                     required: true
//                 },
//                 event_image: {
//                     // required: true,
//                     filesize: true,
//                 },
//                 adult_charge:{
//                     required: function(element){
//                         return  $('#event_typePaid').is(':checked');
//                     },
//                     min: 1
//                 },
//                 child_charge:{
//                     required: function(element){
//                         return  $('#event_typePaid').is(':checked');
//                     },
//                     min: 1
//                 },
//                 "event_day_name[]":{
//                     required:true
//                 },
//                 "event_location[]":{
//                     required:true
//                 },
//                 "event_time[]":{
//                     required:true
//                 },
//                 "maximum_pass_adult[]":{
//                     min: function() {
//                         return parseInt($('#minAdult').val());
//                     }
//                 },
//                 "maximum_pass_children[]":{
//                     min: function() {
//                         return parseInt($('#minChildren').val());
//                     }
//                 },
//                 "maximum_pass_guests[]":{
//                     min: function() {
//                         return parseInt($('#minGuests').val());
//                     }
//                 },
//                 "maximum_pass_adult_unit[]":{
//                     required:true
//                 },
//                 "maximum_pass_children_unit[]":{
//                     required:true
//                 },
//                 "maximum_pass_guests_unit[]":{
//                     required:true
//                 },
//                 //27march2020 new #event
//                 balancesheet_id:{
//                     required:true
//                 },
//                 is_taxble:{
//                     required:true
//                 },
//                 taxble_type:{
//                     required: {
//                        depends: function(element) {    
//                           return $('#event :input[name="is_taxble"]').val()=="1" ;
//                       }
//                   }
//                 },
                
//                 //27march2020 new #event
//             },
//             messages: {
//                 event_title: {
//                     required : "Please enter event name",
//                     noSpace: "No space please and don't leave it empty",
//                 },
//                 eventMom: {
//                     required : "Please enter event location",
//                     noSpace: "No space please and don't leave it empty",
//                 },
//                 //IS_171 21FEB2020
//                 event_start_date: {
//                    required : "Please select start date"
//                 },
//                 event_end_date: {
//                    required : "Please select end date"
//                 },
//                 event_start_time: {
//                    required : "Please select start time"
//                 },
//                 event_end_time: {
//                    required : "Please select end time"
//                 },
//                 //IS_171 21FEB2020
//                 //IS_639 divya
//                 event_image: {
//                     required : "Please select image" 
//                 },
//                 "event_day_name[]":{
//                     required:"Enter Event Day Name"
//                 },
//                 "event_location[]":{
//                     required:"Enter Event Location"
//                 },
//                 "event_time[]":{
//                     required:"Please Select Event Time"
//                 },
//                 "maximum_pass_adult[]":{
//                     required:"Enter Adult"
//                 },
//                 "maximum_pass_children[]":{
//                     required:"Enter Child"
//                 },
//                 "maximum_pass_guests[]":{
//                     required:"Enter Guest"
//                 },
//                 "maximum_pass_adult_unit[]":{
//                     required:"Enter Per Unit Adult"
//                 },
//                 "maximum_pass_children_unit[]":{
//                     required:"Enter Per Unit Child"
//                 },
//                 "maximum_pass_guests_unit[]":{
//                     required:"Enter Per Unit Guest"
//                 },

//                 //IS_639 divya
//                 //27march2020 new #event 
//                 balancesheet_id:{
//                     required:"Please select balancesheet" 
//                 },
//                 is_taxble:{
//                     required: "Please select Bill Type"
//                 },
//                 taxble_type:{
//                     required:  "Please select Tax Type"
//                 },
                
//                 //27march2020 new #event
//             },
//             submitHandler: function(form) {
//               //27march2020 new #event  
//               var error = 0;
//               $( ".paid-price" ).each(function( index ) {
//                  var clsVal =  $(this).val();
//                  if($.trim(clsVal) ==""){
//                     error++;
//                 }
//             });
//               $( ".max-allow" ).each(function( index ) {
//                  var clsVal =  $(this).val();
//                  if($.trim(clsVal) ==""){
//                     error++;
//                 }
//             });
//               $( ".event-day-name" ).each(function( index ) {
//                  var clsVal =  $(this).val();
//                  if($.trim(clsVal) ==""){
//                     error++;
//                 }
//             });
              
//             if(parseFloat($("#donation_amount_total").val()) < parseFloat($("#min_donation_amount_per_user").val())){
//                   swal("Total donation amount should be greater than minimum donation amount per user!");
//             }else{
//                 if (error > 0 ) {
//                       swal("Please provide value for every textbox...!");
//                 } else {
//                    $(':input[type="submit"]').prop('disabled', true);
//                    $(".ajax-loader").show();
//                    form.submit();
//                 }
//             }
//             //27march2020 new #event
//         }
//     });
    
//     //20220419
     
//     $("#parkingAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             socieaty_parking_name_add: {
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//             },
//             total_car_parking: {
//                 //required: true,
//                 digits:true,
//                 //compare: '#noofBike',
//             },
//             total_bike_parking: {
//                 //required: true,
//                 digits:true,
//                 //compare: '#noofCar',
//             },
//             total_visitor_car_parking: {
//                 //required: true,
//                 digits:true,
//                 //compare: '#noofVisitorBike',
//             },
//             total_visitor_bike_parking: {
//                 //required: true,
//                 digits:true,
//                 //compare: '#noofVisitorCar',
//             },
//             car_parking_name: {
//                 required: true,
//                 noSpace:true,
//             },
//             bike_parking_name: {
//                 required: true,
//                 noSpace:true,
//             }
            
//         },
//         messages: {
//             socieaty_parking_name_add: {
//                 required : "Please enter parking area name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             car_parking_name: {
//                 required : "Please enter car parking name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             bike_parking_name: {
//                 required : "Please enter bike parking name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             /*total_car_parking: {
//                 compare : "Please add Positive Number of Parkings",
//             },
//             total_bike_parking: {
//                 compare : "Please add Positive Number of Parkings",
//             },*/


//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     }); 

//      $("#addMoreParkingForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             parking_name: {
//                 required: true,
//                 noSpace:true,
//             }
            
//         },
//         messages: {
           
//             parking_name: {
//                 compare : "Please Parking Name",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#documentTypeAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             document_type_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             employee_type_name_edit: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
            
//         },
//         messages: {
//             document_type_name: {
//                 required : "Please enter type name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             employee_type_name_edit: {
//                 required : "Please enter type name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#empTypeAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             employee_type_name_add: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             employee_type_name_edit: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
//             ,emp_type_icon:{
//                 filesize2MB:true
//             }
            
            
//         },
//         messages: {
//             employee_type_name_add: {
//                 required : "Please enter staff type name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             employee_type_name_edit: {
//                 required : "Please enter staff type name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#addDocument").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             ducument_name_add: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             ducument_name_edit: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
//             //IS_738 26feb2020
//             ,document_file:{
//                 extensionDocument:true,
//                 filesize: true
//             }
//             //IS_738 26feb2020
            
//         },
//         messages: {
//             ducument_name_add: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             ducument_name_edit: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#sosAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             event_name_edit: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             event_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             sos_image:{
//                 required: {
//                     depends: function(element) {    
//                       return $("#img_req").val()=="0" ;
//                     }
//                 },
//                 filesize:true
//             },
//             sos_duration:{
//                 required: true,
//                 min:0,
//                 max:120
//             }
            
            
//         },
//         messages: {
//             event_name_edit: {
//                 required : "Please enter sos name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             event_name: {
//                 required : "Please enter sos name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             sos_image:{
//                 required:"Please Select SOS Image"
//             },
//             sos_duration:{
//                 required: "Please enter SOS minutes",
//                 min:"Please enter minutes in Positive number",
//                 max:"Max SOS duration can be 2 hours, i.e. 120 minutes"
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#classifiedCategory").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             classified_category_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
//         },
//         messages: {
//             classified_category_name: {
//                 required : "Please enter category name",
//                 noSpace: "No space please and don't leave it empty",
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#classifiedCategoryCateEdit").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             classified_category_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
//         },
//         messages: {
//             classified_category_name: {
//                 required : "Please enter category name",
//                 noSpace: "No space please and don't leave it empty",
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#classifiedSubCategory").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             classified_sub_category_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
//         },
//         messages: {
//             classified_sub_category_name: {
//                 required : "Please enter sub category name",
//                 noSpace: "No space please and don't leave it empty",
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#classifiedSubCateEdit").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             classified_sub_category_image: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
//         },
//         messages: {
//             classified_sub_category_image: {
//                 required : "Please enter sub category name",
//                 noSpace: "No space please and don't leave it empty",
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#unitEdit").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             unit_name: {
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//             },
//             car_parking_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             bike_parking_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
//         },
//         messages: {
//             unit_name: {
//                 required : "Please enter unit name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             car_parking_name: {
//                 required : "Please enter car parking name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             bike_parking_name: {
//                 required : "Please enter bike parking name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 // $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#insTeam").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             full_name: {
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//             },
//             mobile_number: {
//                 required: true,
//                 noSpace:true,
//                 minlength: 8,
//                 maxlength: 13,
//             }
            
//         },
//         messages: {
//             full_name: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             mobile_number: {
//                 required : "Please enter mobile number",
//                 noSpace: "No space please and don't leave it empty",
//             },


//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#editinsTeam").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             member_full_name: {
//                 required: true,
//                 noSpace:true,
//                 alphaRestSpeChartor: true,
//             },
//             member_mobile_number: {
//                 required: true,
//                 noSpace:true,
//                 minlength: 8,
//                 maxlength: 13,
//             }
            
//         },
//         messages: {
//             member_full_name: {
//                 required : "Please enter name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             member_mobile_number: {
//                 required : "Please enter mobile number",
//                 noSpace: "No space please and don't leave it empty",
//             },


//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#floorValidation").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             block_id: {
//                 required: true,
//             },
//             no_of_floor: {
//                 required: true,
//                 digits: true,
//             },
//             no_of_unit: {
//                 required: true,
//             },
//             unit_type: {
//                 required: true,
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#billCategoryValidation").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             category_name: {
//                 required: true,
//                 maxlength: 25,
//                 noSpace: true,
//                 // alphaRestSpeChartor: true,
//             },
//             facility_category_name: {
//                 required: true,
//                 maxlength: 25,
//                 noSpace: true,
//                 // alphaRestSpeChartor: true,
//             },
//             category_description: {
//                 maxlength: 200,
//                 noSpace: true,
//             },
//             category_image:{
//               required:false,
//                 filesize2MB: true
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//      $("#lostFoundAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             lost_found_title: {
//                 required: true,
//                 maxlength: 50,
//                 noSpace: true,
//             },
//             lost_found_image:{
//               required:false,
//                 filesize12MB: true
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     $("#importValidation").validate({
//         rules: {
//             file: {
//                 required: true,
//                 extension: "csv",
//             }
//         },
//         messages:{
//             file:{
//                 extension: "Please upload CSV file only"
//             }
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#notificationValidation").validate({
//         rules: {
//             title: {
//                 required: true,
//                 normalizer: function( value ) {
//                     return $.trim( value );
//                 },
//             },
//             description: {
//                 required: true,
//                 normalizer: function( value ) {
//                     return $.trim( value );
//                 },
//             },
//         },submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//      $("#notificationValidationSingle").validate({
//         rules: {
//             title: {
//                 required: true,
//                 normalizer: function( value ) {
//                     return $.trim( value );
//                 },
//             },
//             description: {
//                 required: true,
//                 normalizer: function( value ) {
//                     return $.trim( value );
//                 },
//             },
//         },submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     $("#pendingValidation").validate({
//         rules: {
//             user_first_name: {
//                 required: true,
//                 noSpace: true,
//                 alpha: true,
//             },
//             user_last_name: {
//                 required: true,
//                 noSpace: true,
//                 alpha: true,
//             },
//             user_mobile: {
//                 required: true,
//                 noSpace: true,
//                 digits: true,
//                 maxlength: 15,
//                 minlength: 8,
//             },
//             user_email: {
//                 required: true,
//                 noSpace: true,
//                 email: true,
//             },
//         },
//     });
//     $("#complainCategoryValidation").validate({
//         rules: {
//             category_name: {
//                 required: true,
//                 noSpace: true,
//                 maxlength: 25,
//                 // alphaRestSpeChartor: true,
//             },
//             user_mobile: "Please enter valid mobile number",
//         },
//     });
//     //3 March
//     $("#complaintValidation").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             user_id: {
//                 required: true,
//             },
//             complaint_category: {
//                 required: true,
//                 // alphaRestSpeChartor: true,
//             },
//             compalain_title: {
//                 required: true,
//                 noSpace: true,
//                 maxlength: 100,
//                 // alphaRestSpeChartor: true,
//             },
//             complain_photo: {
//                 image: true,
//             },
//             complain_description: {
//                 noSpace: true,
//                 // alphaRestSpeChartor: true,
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     $("#complaintBlockValidation").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             unit_id: {
//                required:true,
//             },
//             block_message: {
//                 noSpace: true,
//                 // alphaRestSpeChartor: true,
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#addexplenseCategory").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
           
//             expense_category_name: {
//                 required: true,
//                 noSpace: true,
//                 maxlength: 250,
//                 // alphaRestSpeChartor: true,
//             },
           
//         },
//          messages: {
//             expense_category_name: {
//                 required: "Please enter category name",
//             }
//             },

//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     //12march2020
//     $("#CommEntryFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             common_entry_name:
//             {
//                 required: true,
//                 noSpace: true,
//                 // alphaRestSpeChartor: true,
//             },
//             common_entry_image:
//             {
//                 required: false,
//                 filesize4MB: true
//             },
//         },
//         messages: {
//             common_entry_name: {
//                 required: "Please enter common entry name",
//     }
//     },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     //12march2020



// //13march2020
// $("#addMainVisitorFrm").validate({
//     errorPlacement: function (error, element) {
//         if (element.parent('.input-group').length) { 
//         error.insertAfter(element.parent());      // radio/checkbox?
//         } else if (element.hasClass('select2-hidden-accessible')) {     
//             error.insertAfter(element.next('span'));  // select2
//             element.next('span').addClass('error').removeClass('valid');
//         } else {                                      
//             error.insertAfter(element);               // default
//         }
//     },
//     rules: {
//         main_type_name:
//         {
//             required: true,
//             noSpace: true,
//             // alphaRestSpeChartor: true, 
//         },
//         visitor_type:{
//             required: true,
//             noSpace: true 
//         },
//         main_type_image:
//         {
//             required: true,
//             filesize4MB: true 
//         },
//          visitor_main_full_img:
//         {
//             required: true,
//             filesize4MB: true 
//         },
//     },
//     messages: {
//         main_type_name: {
//             required: "Please enter visitor type name", 
//    },
//    visitor_type:{
//     required: "Please enter visitor type", 
//    },
//    main_type_image: {
//             required: "Please select main type image", 
//    },
//    visitor_main_full_img: {
//             required: "Please select full image", 
//    }
//   },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
// });
// $("#visitorSubTypeFrm").validate({
//     errorPlacement: function (error, element) {
//         if (element.parent('.input-group').length) { 
//         error.insertAfter(element.parent());      // radio/checkbox?
//         } else if (element.hasClass('select2-hidden-accessible')) {     
//             error.insertAfter(element.next('span'));  // select2
//             element.next('span').addClass('error').removeClass('valid');
//         } else {                                      
//             error.insertAfter(element);               // default
//         }
//     },
//     rules: {
//         visitor_main_type_id:
//         {
//             required: true,
//             noSpace: true 
//         },
//         visitor_sub_type_name:{
//             required: true,
//             noSpace: true ,
//             // alphaRestSpeChartor: true,
//         },
//         visitor_sub_image:
//         {
//             required: true,
//             filesize4MB: true 
//         } 
//     },
//     messages: {
//         visitor_main_type_id: {
//             required: "Please select main type", 
//    },
//    visitor_sub_type_name:{
//     required: "Please enter sub type name", 
//    },
//    visitor_sub_image: {
//             required: "Please select image", 
//    } 
//   },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
// });

// //13march2020

//     $("#payMaintenanceFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             payment_type: {
//                 required: true,
//                 noSpace:true
//             },
//             receive_maintenance_date: {
//                 required: true,
//                 noSpace:true 
//             },
           
//             receive_maintenance_receipt_photo:{
//               required:false,
//                 filesize2MB: true
//             },
//             maintence_amount_new:{
//                 required:true,
//                 noSpace:true,
//                 //15july2020
//                 /*,
//                 min:1*/
//             }
            
//             ,bank_name:{
//                 required:{
//                     depends: function(element) {  
//                       return $("#payment_type").val()=="1"  || $("#payment_type").val()=="2" ;
//                     }
//                 },
//                  noSpace:true 
//             }
             
            
//         },
//         messages: {
//             payment_type: {
//                required : "Please select Payment Type",
//                noSpace: "No space please and don't leave it empty"
//             },
//              receive_maintenance_date: {
//                required : "Please select receive maintenance date",
//                noSpace: "No space please and don't leave it empty" 
//             },
//              maintence_amount_new: {
//                required : "Please enter maintenance amount",
//                noSpace: "No space please and don't leave it empty",
//                // min: "penalty maintence should be more then 0"
//             }
           
//              ,
//             bank_name:{
//                 required:"Please enter bank name"
//             }
           
            

           
//         } ,
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#chngProfileFrm").validate({
//     rules: {
//       old_password:
//       {
//         required: true,
//       },
//       password: {
//         required: true,
//         pwcheck: true,
//         minlength: 5
//       },
//       password2: {
//         required: true,
//         pwcheck: true,
//         minlength: 5,
//         equalTo: "#password"
//       },

//     } ,
//     messages: {

//       old_password: {
//         required: "Please provide a old password",
//         remote: "The current password is incorrect."
//       },

//       password: {
//         required: "Please provide a new password",
//          pwcheck: "Please enter at least 1 Uppercase letter & 1 number value",
//         minlength: "Your password must be at least 5 characters long"
//       },
//       password2: {
//         required: "Please confirm your new password",
//          pwcheck: "Please enter at least 1 Uppercase letter & 1 number value",
//         minlength: "Your password must be at least 5 characters long",
//         equalTo: "Please enter the same password"
//       }   

//     },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//   });


// $("#mpinForm").validate({
//     rules: {
     
//       mpin: {
//         required: true,
//         minlength: 4,
//         noSpace:true,
//       },
//       cmpin: {
//         required: true,
//         minlength: 4,
//         noSpace:true,
//         equalTo: "#mpin"
//       },

//     } ,
//     messages: {

//       mpin: {
//         required: "Please provide a new mpin",
//         minlength: "mpin must be at least 4 characters long",
//          noSpace: "No space please and don't leave it empty" 
//       },
//       cmpin: {
//         required: "Please confirm new mpin",
//         minlength: "mpin must be at least 4 characters long",
//         equalTo: "Please enter the same mpin",
//          noSpace: "No space please and don't leave it empty" 
//       }   

//     },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//   });

// $("#gateForm").validate({
//     rules: {
     
//       gate_number: {
//         required: true,
//         minlength: 1,
//         noSpace:true,
//       }

//     } ,
//     messages: {

//       gate_number: {
//         required: "Please enter duty place",
//          noSpace: "No space please and don't leave it empty" 
//       } 

//     },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//   });



//  $("#replyFeedbackFrm").validate({
//     errorPlacement: function (error, element) {
//         if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//         } else if (element.hasClass('select2-hidden-accessible')) {     
//             error.insertAfter(element.next('span'));  // select2
//             element.next('span').addClass('error').removeClass('valid');
//         } else {                                      
//             error.insertAfter(element);               // default
//         }
//     },
//     rules: {
//         reply: {
//             required: true,
//             noSpace:true,
//             // alphaRestSpeChartor: true,
//         } 
        
//     },
//     messages: {
//         reply: {
//             required : "Please enter reply",
//             noSpace: "No space please and don't leave it empty",
//         } 

//     },
//         submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
//       }
// });


//  $("#addDailyVisitorFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             visit_from: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             } ,
//              visitor_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//              visitor_mobile: {
//                 required: true,
//                 noSpace:true,
//                 minlength: 8,
//                 maxlength : 15,
//             },
//              visitor_profile: {
//                  filesize12MB:true 
//             } ,
//             id_proof:{
//                 filesize4MB:true
//             },
//             id_proof1:{
//                 filesize4MB:true
//             },
//             valid_till:{
//                 required:true
//             } ,
//             in_time:{
//                 required:true
//             },
//             out_time:{
//                 required:true
//             } ,
             
//             visitor_sub_type_id:{
//                 required:true
//             }
            
//         },
//         messages: {
//             visit_from: {
//                 required : "Please enter visit from",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             visitor_name: {
//                 required : "Please enter visitor name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             visitor_mobile: {
//                 minlength: "Please enter valid mobile number",
//                 maxlength: "Please enter valid mobile number",
//                 required : "Please enter visitor mobile",
//                 noSpace: "No space please and don't leave it empty",
//                 remote:"Please Provide another number, this mobile number is already registered"
//             },
//             valid_till:{
//                 required : "Please select date",
//             } ,
//             in_time:{
//                 required : "Please select in time",
//             },
//             out_time:{
//                 required : "Please select out time",
//             } ,
             
//             visitor_sub_type_id:{
//                required : "Please select type",
//             } 

//         },
//             submitHandler: function(form) {
//                 if (($("input[name*='week_days']:checked").length)<=0) {
//                     swal("Please select at least 1 week day!");
//                 }else {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                     form.submit(); 

//                 }
//           }
//     });


//   $("#editDailyVisitorFrm").validate({
//         errorPlacement: function (error, element) {
//           if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//               } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//               } else {                                      
//                 error.insertAfter(element);               // default
//               }
//             },
//             rules: {
//               visit_from: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//               } ,
//               visitor_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//               },
//               visitor_mobile: {
//                 required: true,
//                 noSpace:true,
//                 minlength: 8,
//                 maxlength : 15,
//               },
//               visitor_profile: {
//                filesize12MB:true 
//              }   ,
//          id_proof:{
            
//           filesize4MB:true
//         } ,
//              valid_till:{
//               required:true
//             } ,
//             in_time:{
//               required:true
//             },
//             out_time:{
//               required:true
//             } ,
            
//           visitor_sub_type_id:{
//             required:true
//           }

//         },
//         messages: {
//           visit_from: {
//             required : "Please enter visit from",
//             noSpace: "No space please and don't leave it empty",
//           },
//           visitor_name: {
//             required : "Please enter visitor name",
//             noSpace: "No space please and don't leave it empty",
//           },
//           visitor_mobile: {
//             required : "Please enter visitor mobile",
//             minlength: "Please enter valid mobile number",
//             maxlength: "Please enter valid mobile number",
//             noSpace: "No space please and don't leave it empty",
//             remote:"Please Provide another number, this mobile number is already registered"
//           } ,
//           valid_till:{
//             required : "Please select date",
//           } ,
//           in_time:{
//             required : "Please select in time",
//           },
//           out_time:{
//             required : "Please select out time",
//           } ,
           
//           visitor_sub_type_id:{
//            required : "Please select type",
//          }

//       },
//       submitHandler: function(form) {

//         if (($("input[name*='week_days']:checked").length)<=0) {
//           swal("Please select at least 1 week day!");

//         }else {
//           $(':input[type="submit"]').prop('disabled', true);
//           $(".ajax-loader").show();
//           form.submit(); 

//         }

//       }
//     });

//   $("#GenerateBill").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             previous_unit_read: {
//                 required: true,
//                 noSpace:true,
//             } ,
//              current_unit_read: {
//                 required: true,
//                 noSpace:true,
//             }
            
//         },
//         messages: {
//             previous_unit_read: {
//                 required : "Please enter Previous Reading",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             current_unit_read: {
//                 required : "Please enter Current Reading",
//                 noSpace: "No space please and don't leave it empty",
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//    $("#ParkingUpdateFrmNew").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         }
//          , submitHandler: function(form) {
//           $(':input[type="submit"]').prop('disabled', true);
//           $(".ajax-loader").show();
//           form.submit();
//         }
//     });

//     $("#ParkingUpdateFrmNewMain").validate({
//          errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             socieaty_parking_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
//         },
//         submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
//         }
//     });


//    $("#festivalAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             festival_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             },
//             festival_date: {
//                 required: true,
//             },
//             festival_image:{
//                 image: true,
//                 filesize2MB: true,
//             }
            
//         },
//         submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
//         }
//     });


//    //20march2020
//    $("#EmpUnitFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         }
//          , submitHandler: function(form) {
//           $(':input[type="submit"]').prop('disabled', true);
//           $(".ajax-loader").show();
//           form.submit();
//         }
//     });
//    //20march2020

//    //1418
//    $("#personalInfo2").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         }
//         , submitHandler: function(form) {
//           $(':input[type="submit"]').prop('disabled', true);
//           $(".ajax-loader").show();
//           form.submit();
//         }
//     });


//    //IS_1546 23march2020
//    $("#slabFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         } ,
//         rules: {
//             slab_percentage: {
//                 required: true,
//                 noSpace:true,
//             }  
//           },
//         messages: {
//             slab_percentage: {
//                 required : "Please enter slab value",
//                 noSpace: "No space please and don't leave it empty",
//             } 

//         }
//         , submitHandler: function(form) {
             
//           $(':input[type="submit"]').prop('disabled', true);
//           $(".ajax-loader").show();
//           form.submit();
       
//         }
//     });
   
//    //IS_1546 23march2020

//    //24march2020 IS_1581
//    $("#addTermFrm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             condition_desc: {
//                 required: true,
//                 noSpace:true 
//             } 
            
//         },
//         messages: {
//             condition_desc: {
//                 required : "Please enter terms and conditions",
//                 noSpace: "No space please and don't leave it empty",
//             } 

//         },
//             submitHandler: function(form) {
//                  var error = 0;
//                var clsVal =  $('#summernoteImgage').val();
               
//                    if($.trim(clsVal) =="<p><br></p>" ){
//                     error++;
//                   } 
              
//          if (error > 0 ) {
//           swal("Please provide terms and conditions!");
//          }else {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//             }
//           }
//     });

//    //20220330
//     $("#editTermFrm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             condition_desc: {
//                 required: true,
//                 noSpace:true 
//             } 
            
//         },
//         messages: {
//             condition_desc: {
//                 required : "Please enter terms and conditions",
//                 noSpace: "No space please and don't leave it empty",
//             } 

//         },
//             submitHandler: function(form) {
//                  var error = 0;
//                var clsVal =  $('#summernoteImgage').val();
               
//                    if($.trim(clsVal) =="<p><br></p>" ){
//                     error++;
//                   } 
              
//          if (error > 0 ) {
//           swal("Please provide terms and conditions!");
//          }else {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//             }
//           }
//     });
//     //20220330
   

//    $("#penaltyEdit").validate({
//       errorPlacement: function (error, element) {
//         if (element.parent('.input-group').length) {
//         error.insertAfter(element.parent());      // radio/checkbox?
//         } else if (element.hasClass('select2-hidden-accessible')) {
//         error.insertAfter(element.next('span'));  // select2
//         element.next('span').addClass('error').removeClass('valid');
//         } else {
//         error.insertAfter(element);               // default
//         }
//         },
//         rules: {
//           penalty_name: {
//             required: true,
//             noSpace:true,
//           },
//           election_description: {
//             required: true,
//             noSpace:true,
//           },

//           penalty_photo:{
//             required:false,
//             filesize2MB: true
//           },
//           penalty_amount:{
//             required:true,
//             noSpace:true,
//             min:1
//           },
//           balancesheet_id:{
//             required:true
//           },
//           penalty_date:{
//             required: true
//           }
//         //24march2020
//         ,is_taxble:{
//           required:true
//         }
//         ,taxble_type:{
//           required: {
//             depends: function(element) {
//               return $('#penaltyEdit :input[name="is_taxble"]').val()=="1" ;
//             }
//           }
//         }
//         //24march2020

//         },
//         messages: {
//           penalty_name: {
//             required : "Please enter description",
//             noSpace: "No space please and don't leave it empty",
//           },
//           election_description: {
//             required : "Please enter description",
//             noSpace: "No space please and don't leave it empty",
//           },
//           penalty_amount: {
//             required : "Please enter penalty amount",
//             noSpace: "No space please and don't leave it empty",
//             min: "penalty Amount should be more then 0"
//           },
//           balancesheet_id:{
//             required : "Please select balancesheet"
//           },
//           penalty_date:{
//             required : "Please select penalty date"
//           }

//         //24march2020
//         ,is_taxble:{
//           required:"Please select Bill Type"
//         }
//         ,taxble_type:{
//           required:"Please select Tax Type"
//         }
//         //24march2020

//         }
//     });




//     //26march2020 IS_1652
//    $("#surveyFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         } ,
//         rules: {
//             survey_title: {
//                 required: true,
//                 noSpace:true,
//             } ,
//             survey_desciption:{
//                  required: false,
//                 noSpace:true,
//             },
//             survey_date:{
//                  required: true,
//                 noSpace:true,
//             }
//           },
//         messages: {
//             survey_title: {
//                 required : "Please enter survey title",
//                 noSpace: "No space please and don't leave it empty",
//             } ,
//             survey_desciption: {
//                 required : "Please enter description",
//                 noSpace: "No space please and don't leave it empty",
//             } ,
//             survey_date: {
//                 required : "Please select survey date",
//                 noSpace: "No space please and don't leave it empty",
//             } 
//         }
//         , submitHandler: function(form) {
//           $(':input[type="submit"]').prop('disabled', true);
//           $(".ajax-loader").show();
//           form.submit();
//         }
//     });
//    $("#addSurveyQueFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         } ,
//         rules: {
//             survey_question: {
//                 required: true,
//                 noSpace:true,
//             }  
//           },
//         messages: {
//             survey_question: {
//                 required : "Please enter survey title",
//                 noSpace: "No space please and don't leave it empty",
//             }  
//         }
//         , submitHandler: function(form) {
//               var error = 0;
//             $( ".option_name-cls" ).each(function( index ) {
//                var clsVal =  $(this).val();
//                   if($.trim(clsVal) ==""){
//                     error++;
//                   }
//             });
//          if (error > 0 ) {
//           swal("Please provide value for every option...!");
//          } else {
//              $(':input[type="submit"]').prop('disabled', true);
//              $(".ajax-loader").show();
//           form.submit();
//          }
//         }
//     });
//    //26march2020  IS_1652
   
//     //27march2020 1686
//     $("#addSalaryFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             balancesheet_id: {
//                 required: true
//             },
//             month: {
//                 required: true
//             },
//             year:{
//                 required: true
//             },
//             month_working_days:{
//                 required: true
//             },
//             working_days:{
//                 required: true
//             },
//             leave_days:{
//                 required: true
//             },
//             salary_amount:{
//                 required: true
//             },
//             is_taxble:{
//                 required:true
//             } ,
//             taxble_type:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#addSalaryFrm :input[name="is_taxble"]').val() =="1" ;
//                     }
//                 }
//             }    
//           },
//         messages: {
//             balancesheet_id: {
//                 required : "Please select balance sheet"
//             },
//             month: {
//                 required : "Please select month"
//             },
//             year: {
//                 required : "Please select year"
//             },
//             month_working_days: {
//                 required : "Please enter month working days"
//             },
//             working_days:{
//                 required: "Please enter working days"
//             }  ,
//             leave_days:{
//                 required: "Please enter leave days"
//             },
//             salary_amount:{
//                 required: "Please enter salary amount"
//             },
//             is_taxble:{
//                 required: "Please select Bill Type"
//             },
//             taxble_type:{
//                 required:  "Please select Tax Type"
//             }    
//         }
//         , submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });
//    //27march2020 1686
//     //28march2020
// //20220803
//     $("#paymentGatewayFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             payment_getway_master_id: {
//                 required: true
//             },
//             name: {
//                 required: true,
//                 noSpace:true
//             },
//             merchant_id: {
//                 required: true,
//                 noSpace:true
//             },
//             merchant_key:{
//                 required: true,
//                 noSpace:true
//             },
//             salt_key:{
//                 required: true,
//                 noSpace:true
//             },
//             type:{
//                 required: true
//             } ,
//             block_id:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#paymentGatewayFrm :input[name="type"]').val() =="Block" ;
//                     }
//                 }
//             },
//             balancesheet_id:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#paymentGatewayFrm :input[name="type"]').val() =="BalanceSheet" ;
//                     }
//                 }
//             },
//             authorization_token:{
//                 required: true,
//                 noSpace:true
//             } ,        
//           },
//         messages: {
//             payment_getway_master_id: {
//                 required : "Please select payment gateway"
//             },
//              name: {
//                 required : "Please enter payment gateway name"
//             },
//             merchant_id: {
//                 required : "Please enter merchant id"
//             },
//             merchant_key: {
//                 required : "Please enter merchant key"
//             },
//             salt_key: {
//                 required : "Please enter salt key"
//             },
//             type:{
//                 required: "Please select gateway for"
//             }  ,
//             block_id:{
//                 required: "Please select block"
//             },
//             balancesheet_id:{
//                 required: "Please select balancesheet"
//             },
//             authorization_token:{
//                 required: "Please Ente Authorizaton Token"
//             }    
//         }
//         , submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });
// //20220803


//      $("#paymentGatewayApplyFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             payment_getway_master_id: {
//                 required: true
//             },
//             name: {
//                 required: true,
//                 noSpace:true,
//                  alpha: true,
//             },
//             mobile: {
//                 required: true,
//                 noSpace:true,
//                 number: true
//             },
//             email:{
//                 required: true,
//                 noSpace:true
//             },
//             registrationProof: {
//                required: true,
//                filesize4MB: true

//             },
//             panCard: {
//                filesize4MB: true,
//                required: true

//             } ,
//             gstCerty: {
//                filesize4MB: true

//             } ,
//             cancelledCheque: {
//                required: true,
//                filesize4MB: true

//             } ,
//             authorizedAddress: {
//                required: true,
//                filesize4MB: true

//             } ,
//             authorizedPancard: {
//                required: true,
//                filesize4MB: true

//             }        
//           },
//         messages: {
//             payment_getway_master_id: {
//                 required : "Please select payment gateway"
//             },
//             name: {
//                 required : "Please enter contact person name"
//             },
//             mobile: {
//                 required : "Please enter mobile number"
//             },
//             email: {
//                 required : "Please enter email id"
//             }
             
//         }
//         , submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });

// //20220803
//     $("#editpaymentGatewayFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             payment_getway_master_id: {
//                 required: true
//             },
//             merchant_id: {
//                 required: true,
//                 noSpace:true
//             },
//             name: {
//                 required: true,
//                 noSpace:true
//             },
//             merchant_key:{
//                 required: true,
//                 noSpace:true
//             },
//             salt_key:{
//                 required: true,
//                 noSpace:true
//             },
//             type:{
//                 required: true
//             } ,
//             block_id:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#editpaymentGatewayFrm :input[name="type"]').val() =="Block" ;
//                     }
//                 }
//             },
//             balancesheet_id:{
//                 required: {
//                  depends: function(element) {    
//                       return $('#editpaymentGatewayFrm :input[name="type"]').val() =="BalanceSheet" ;
//                     }
//                 }
//             },
//             authorization_token:{
//                 required: true,
//                 noSpace:true
//             } ,            
//           },
//         messages: {
//             payment_getway_master_id: {
//                 required : "Please select payment gateway"
//             },
//              name: {
//                 required : "Please enter payment gateway name"
//             },
//             merchant_id: {
//                 required : "Please enter merchant id"
//             },
//             merchant_key: {
//                 required : "Please enter merchant key"
//             },
//             salt_key: {
//                 required : "Please enter salt key"
//             },
//             type:{
//                 required: "Please select gateway for"
//             }  ,
//             block_id:{
//                 required: "Please select block"
//             },
//             balancesheet_id:{
//                 required: "Please select balancesheet"
//             },
//             authorization_token:{
//                 required: "Please Ente Authorizaton Token"
//             }     
//         }
//         , submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });
// //20220803
//     //28march2020

//     //30march2020
//  $("#eventBookFrm").validate({
//     errorPlacement: function (error, element) {
//         if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//         } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             user_id: {
//                 required: true
//             },
//             events_day_id: {
//                 required: true 
//             },
//              bank_name: {
//                 required: true,
//                 noSpace:true, 
//             }       
//         },
//         messages: {
//             user_id: {
//                 required : "Please select user"
//             },
//             events_day_id: {
//                 required : "Please select event date"
//             },
//             bank_name: {
//                 required : "Please enter bank name"
//             } 
//         }
//         , submitHandler: function(form) {
//            var going_person =$('#going_person').val();
//               var going_child =$('#going_child').val();
//               var going_guest =$('#going_guest').val();
//               var totalGuests = parseInt(going_person)+parseInt(going_child)+parseInt(going_guest);
//            if (totalGuests <= 0 || totalGuests=="" ) {
//               swal("Please Select Number of Person (Adult/Child/guest) for event..!");
//           } else {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//           }
//         }
//     });

// $("#payEventAmountFrm").validate({
//     errorPlacement: function (error, element) {
//         if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//         } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             payment_type: {
//                 required: true,
//                 noSpace:true 
//             },
//             payment_bank:{
//                 required:{
//                     depends: function(element) {
//                       return $('#payEventAmountFrm :input[name="payment_type"]').val() !="" ;
//                   }
//               },
//               noSpace:true ,
//           alphaRestSpeChartor:true
//           },
//           payment_ref_no:{
//             required:{
//                 depends: function(element) {
//                   return $('#payEventAmountFrm :input[name="payment_type"]').val() !="" ;
//               }
//           },
//           noSpace:true ,
//           alphaRestSpeChartor:true
//       }     
//       },
//       messages: {
//         payment_type: {
//             required : "Please select payment type"
//         },
//         payment_bank: {
//             required : "Please enter payment bank"
//         } ,
//         payment_ref_no: {
//             required : "Please enter cheque/ref. no"
//         } 
//     }
//     , submitHandler: function(form) {
//         $(':input[type="submit"]').prop('disabled', true);
//         $(".ajax-loader").show();
//         form.submit();
//     }
// });



//  $("#addHousie").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             game_name: {
//                 required: true,
//                 noSpace:true
//             },
//             game_date:{
//                 required: true,
//                 noSpace:true
//             },
           
             
//           },
//         messages: {
//             game_name: {
//                 required : "Please enter name"
//             },
//             game_date: {
//                 required : "Please enter date"
//             } 
//         }
//         , submitHandler: function(form) {
//             form.submit();
//         }
//     });


//  $("#changeOwner").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             new_primary_id: {
//                 required: true,
//                 noSpace:true
//             },
//             member_relation_name_other_primary:{
//                 required: true,
//                 noSpace:true
//             },
           
             
//           },
//         messages: {
//             new_primary_id: {
//                 required : "Please select member"
//             },
//             member_relation_name_other_primary: {
//                 required : "Please enter here"
//             } 
//         }
//         , submitHandler: function(form) {
//             var error = 0;
//             $( ".member_relation" ).each(function( index ) {
//                var clsVal =  $(this).val();
//                   if($.trim(clsVal) ==""){
//                     error++;
//                   }
//             });
//          if (error > 0 ) {
//           swal("Please provide value for every Relation...!");
//          } else {
//              $(':input[type="submit"]').prop('disabled', true);
//              $(".ajax-loader").show();
//           form.submit();
//          }
//         }
//     });


//   $("#addKbg").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             kbg_game_name: {
//                 required: true,
//                 noSpace:true
//             },
//             kbg_category_id:{
//                 required: true,
//                 noSpace:true
//             },
           
             
//           },
//         messages: {
//             kbg_game_name: {
//                 required : "Please enter name"
//             },
//             kbg_category_id: {
//                 required : "Please select category"
//             } 
//         }
//         , submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });



//  $("#addHousieQuestion").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             "question_name[]": "required",
//             "answer[]": "required"
//         },
//         messages: {
//             "question_name[]": "Please enter question",
//             "answer[]": "Please enter answer",
//         }
//     });


//  $("#addKbgQuestion").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//             error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             "kbg_question[]": "required",
//             "kbg_option_1[]": "required"
//         },
//         messages: {
//             "kbg_question[]": "Please enter question",
//             "kbg_option_1[]": "Please enter option a",
//         }
//     });


// //30march2020

   
//    $("[name^=opening_time]").each(function () {
//         $(this).rules("add", {
//             required: true,
//         });
//     });

//     $("[name^=closing_time]").each(function () {
//         $(this).rules("add", {
//             required: true,
//         });
//     });

//     //1oct2020
//      $("#reminder").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             reminder_text:{ required: true, noSpace:true},
//             reminder_date:{ required: true, noSpace:true}
//         }, messages: {
//              reminder_text:{ required: "Please enter reminder text."},
//             reminder_date:{ required: "Please select reminder date."},
//         } 
//     });
//     //1oct2020
//    $("#reqFoprmValidation").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules:{
//             log_name:{
//                 required:true,
//                 noSpace:true
//             },file_name: {
//                filesize4MB: true,
//                required: false

//             }
             
//         },
//         messages:{
//             log_name:{
//                 required : "Please enter your message"
//             },submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           }
//         }
//     });


//    $("#addAssets").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             assets_category: {
//                  required: true,
//                 noSpace:true
//             },
            
//         },

//         messages: {
//     assets_category:{
//                 required: "Please Enter Assets Category Name"
//                     }
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 
//     });


// $("#addAssetsDetails").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             assets_name: {
//                 required: true,
//                 noSpace:true
//             },

           

//             assets_category_id:{
//                 required: true
                
//             },
//               stock_measurement: {
//                 required: true,
//                 noSpace:true
//             },
//               stock_measurement_other_name: {
//                 required: true,
//                 noSpace:true
//             }
                       
//         },
//         messages: {

//                 assets_name:{
//                 required: "Please Enter Item Name"
//                 },

//                  assets_category_id:{
//                 required: "Please Select Assets Category"
//                 },

//                 stock_measurement:{
//                 required: "Please Select Measurement"
//                 },
//                  stock_measurement_other_name:{
//                     required: "Please Enter Other Name"
//                 }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 

//     });
     

//      $("#addAssetsInventory").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             floor_id:{
//                 required: true,   
//             },

//             start_date:{
//                 required: true,
//                 noSpace:true,
//             },

//             condition_type:{
//                 required: true,
//                 noSpace:true,
//             },
            
//              user_id:{
//                 required: true,
//                 noSpace:true,
//             },
                         
//         },
//         messages: {

//             floor_id:{
//                 required: "Please Select Department"
//                 },
//                 start_date:{
//                     required: "Please Enter Date"
//                 },
//                 condition_type:{
//                     required: "Please Select Condition Type"
//                 },
//                 user_id:{
//                     required: "Please select Custodian"
//                 }
               
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 
//     });     

//      $("#OutAssetsInventory").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             inventory_stock_details:{
//                 required: true,
//                 noSpace:true,
//             },
//             stock_unit:{
//                 required: true,
//                  digits:true,
//                 noSpace:true,
               
//             },
//         },
//         messages: {
//                  inventory_stock_details:{
//                     required: "Please Enter Stock Details"
//                 },
//                 stock_unit:{
//                     required: "Please Enter Stock Quantity"
//                 },
                
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 

//     });

//      $("#additemDetails").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             assets_name: {
//                 required: true,
//                 noSpace:true
//             },
//             assets_category_id:{
//                 required: true,
//                 noSpace:true
//             },
//             start_date:{
//                 required:{
//                     depends: function(element) {
//                         return $('#additemDetails :input[name="user_id"]').val() !="" ;
//                     }
//                 } 
//             },
//         },
//         messages: {
//             assets_name:{
//                 required: "Please Enter Item Name"
//             },
//             assets_category_id:{
//                 required: "Please Select Assets Category"
//             },
//             start_date:{
//                 required: "Please Select Handover Date"
//             },
//         },
//         submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             form.submit(); 
//         }
//     });



//      $("#payBillFrm").validate({
//       errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//               } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//               } else {                                      
//                 error.insertAfter(element);               // default
//               }
//             },
//             rules: {
//               payment_type: {
//                 required: true,
//                 noSpace:true
//               },
//               receive_bill_receipt_photo:{
//                 required:false,
//                 filesize2MB: true
//               },
//               bank_name:{
//                 required:{
//                   depends: function(element) {    
//                     return $("#payment_type").val()=="1"  || $("#payment_type").val()=="2" ;
//                   }
//                 },
//                 noSpace:true 
//               }
              
//             },
//             messages: {
//               payment_type: {
//                required : "Please select Payment Type",
//                noSpace: "No space please and don't leave it empty"
//              },
//              bank_name:{
//               required:"Please enter bank name"
//             }
//           },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 
//         });

//      $("#addChildCategory").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             allow_place_name: {
//                  required: true,
//                 noSpace:true
//             },
            
//         },

//         messages: {
//             allow_place_name:{
//                 required: "Please Enter Allow Place Name"
//                     }
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 
//     });

//     $("#WorkingTimeSlot").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             opening_time: {
//                  required: true,
//                 noSpace:true
//             },
//             closing_time: {
//                  required: true,
//                 noSpace:true
//             },
//             timeSlotMinutes: {
//                 required: true,
//                 noSpace:true
//             },
//             intervalTime: {
//                 required: true,
//                 noSpace:true
//             }
//         },

//         messages: {
//             opening_time:{
//                 required: "Please start time"
//             },
//             closing_time:{
//                 required: "Please start time"
//             }
//         },
//             submitHandler: function(form) {
//                 var start_time = $(".timeSlotStartDate").val();
//                 var end_time = $(".timeSlotEndDate").val();
//                 var timeSlotMinutes = $(".timeSlotMinutes").val();
//                 var mins = timeDifference();
//                 if(start_time!="" && end_time!="" && mins < timeSlotMinutes){
                                  

//                 }else{
//                     $(':input[type="submit"]').prop('disabled', true);
//                     form.submit(); 
//                 }
//           } 
//     });

//     $("#MaintainaceForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             facilities_maintainace_type : {
//                  required: true,
//                 noSpace:true
//             },
//             'week_days[]': {
//                  required: true,
//                 // noSpace:true
//             },
//             'facility_schedule_id_week[]': {
//                 required: true,
//                 // noSpace:true
//             },
//              'facility_schedule_id_day[]': {
//                 required: true,
//                 // noSpace:true
//             },
//              'facility_schedule_id_date[]': {
//                 required: true,
//                 // noSpace:true
//             }
//         },

//         messages: {
//             facilities_maintainace_type :{
//                 required: "Please select Maintenance type"
//             },
//             'week_days[]':{
//                 required: "Please select week"
//             },
//             'facility_schedule_id_week[]':{
//                 required: "Please select time slot"
//             },
//             'facility_schedule_id_day[]':{
//                 required: "Please select time slot"
//             },
//             'facility_schedule_id_date[]':{
//                 required: "Please select time slot"
//             }
//         },errorPlacement: function(error, element) {
//                 if (element.attr("name") == "facility_schedule_id_week[]" || element.attr("name") == "facility_schedule_id_day[]" || element.attr("name") == "facility_schedule_id_date[]") {
//                     error.appendTo(".errorToShow");
//                 } else {
//                     error.insertAfter(element);
//                 }
//             },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 
//     });

//     $("#addFacilityPacageForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             number_of_person : {
//                  required: true,
//                 noSpace:true
//             },
//             package_type: {
//                  required: true,
//                 noSpace:true
//             },
//             package_amount: {
//                 required: true,
//                 noSpace:true
//             },
//             user_type: {
//                 required: true,
//                 noSpace:true
//             }
//         },

//         messages: {
//             number_of_person :{
//                 required: "Please select number of person"
//             },
//             package_type:{
//                 required: "Please package type"
//             },
//             package_amount:{
//                 required: "Please enter amount"
//             },
//             user_type:{
//                 required: "Please select package for"
//             }
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 
//     });
    
//     $("#editFacilityPacageForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             number_of_person : {
//                  required: true,
//                 noSpace:true
//             },
//             package_type: {
//                  required: true,
//                 noSpace:true
//             },
//             package_amount: {
//                 required: true,
//                 noSpace:true
//             },
//             user_type: {
//                 required: true,
//                 noSpace:true
//             }
//         },

//         messages: {
//             number_of_person :{
//                 required: "Please select number of person"
//             },
//             package_type:{
//                 required: "Please package type"
//             },
//             package_amount:{
//                 required: "Please enter amount"
//             },
//             user_type:{
//                 required: "Please select package for"
//             }
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 
//     });


//     /* ==================================== */
//     /* =========== Club Management =========== */
//     /* ==================================== */

//     $("#clubDetails").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             club_name: {
//                 required: true,
//                 noSpace:true 
//             },
//             club_address:{
//                 required:true,
//                 noSpace:true 
//             },
//             club_opening_time:{
//                 required:true,
//                 noSpace:true 
//             },
//             club_closing_time:{
//                 required:true,
//                 noSpace:true 
//             },
//             resident_member_validity:{
//                 required:true,
//                 noSpace:true 
//             },
            
//         },
//         messages: {
//             club_name: {
//                 required: "Please Enter Club Name" 
//                 },
//             club_address:{
//                 required:"Please Enter Club Address"
//             },

//             club_opening_time:{
//                 required:"Please Select Opening Time"
//             },

//             club_closing_time:{
//                 required:"Please Select Closing Time"
//             },

//             resident_member_validity:{
//                 required:"Please Enter Residencial Member Validity"
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });

//     $("#addclubpackage").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             package_name: {
//                 required: true,
//                 noSpace:true 
//             },
//             package_type:{
//                 required:true,
//                 noSpace:true 
//             },
//             no_of_person:{
//                 required:true,
//                 noSpace:true 
//             },
//             membership_price:{
//                 required:true,
//                 noSpace:true 
//             },
//             active_status:{
//                 required:true,
//                 noSpace:true 
//             },
//             balancesheet_id:{
//                 required:true,
//                 noSpace:true 
//             },
            
//         },
//         messages: {
//             package_name: {
//                 required: "Please Enter Package Name" 
//                 },
//             package_type:{
//                 required:"Please Select Package Type"
//             },

//             no_of_person:{
//                 required:"Please Enter No. of Person"
//             },

//             membership_price:{
//                 required:"Please Enter Package Amount"
//             },

//             active_status:{
//                 required:"Please Select Status"
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });

//     //20220512

//     $("#addClubUser").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             club_user_first_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//              club_user_last_name: {
//                 required: true,
//                 alpha: true,
//                 noSpace:true,
//             },
//             club_user_address: {
//                 required: true,
//                 noSpace:true,
//             },
//             country_code: {
//                 required: true,
//                 noSpace:true,
//             },
            
//             club_user_email: {
//                 minlength: 2,
//                 noSpace:true,
//             },
//             club_user_mobile: {
//                 required: true,
//                 minlength: 8,
//                 maxlength:15

//             },
//             package_type: {
//                 required: true,

//             },
//             club_active_package_id: {
//                 required: true,

//             },
//             payment_type: {
//                 required: true,
//                 noSpace:true,
//             },
//             payment_ref_no: {
//                 noSpace:true,
//             },
//             bank_name: {
//                 required: true,
//                 noSpace:true,
//             },
            
//         },
//         messages: {
//             club_user_first_name: {
//                 required : "Please enter first name",
//                 noSpace: "Space Not Allowed",
//             },
//              club_user_last_name: {
//                 required : "Please enter last name",
//                 noSpace: "Space Not Allowed",
//             },
//             club_user_address: {
//                 required : "Please enter address",
//                 noSpace: "Space Not Allowed",
//             },
//             country_code: {
//                 required : "Please select country code",
//                 noSpace: "Space Not Allowed",
//             },
//             club_user_email: "Please enter a valid email address",
//             club_user_mobile: "Please enter valid mobile number",
//             package_type: "Please select package type",
//             club_active_package_id: "Please select package name",
//             payment_type: {
//                 noSpace: "Space Not Allowed",
//             },
//             payment_ref_no: {
//                 noSpace: "Space Not Allowed",
//             },
//             bank_name: {
//                 noSpace: "Space Not Allowed",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     //20220512

//     $("#addsocietygate").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             gate_name: {
//                 required: true,
//                 noSpace:true 
//             },
//             /* visitor_main_type_id:{
//                 required:true,
//                 noSpace:true 
//             }, */
//             active_status:{
//                 required:true,
//                 noSpace:true 
//             },
            
//         },
//         messages: {
//             gate_name: {
//                 required: "Please Enter Gate Name" 
//                 },
//             /* visitor_main_type_id:{
//                 required:"Please Select Visitor Guest"
//             }, */
//             active_status:{
//                 required:"Please Select Status"
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });


//     //20220212
//     $("#addVisitorOverstay").validate({
//         errorPlacement: function (error, element) {
//             error.insertAfter(element); 
//         },
//         rules: {
//             overstay_alert_minutes: {
//                 required: true,
//                 noSpace:true 
//             },
//         },
//         messages: {
//             overstay_alert_minutes: {
//                 required: "Please Enter Overstay Minutes" 
//                 },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });

//     //20220226
    
//     $("#addVehicleForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             vehicle_name: {
//                 required: true,
//                 noSpace:true 
//             },
//             vehicle_type: {
//                 required: true,
//                 noSpace:true 
//             },
//             vehicle_number: {
//                 required: true,
//                 noSpace:true ,
//                 noComma:true ,
//             },
//             vehicle_photo: {
//                 required: false,
//                 filesize20MB:true
//             },
//             rc_book: {
//                 required: false,
//                 filesize20MB:true
//             },
//             license_number: {
//                required: false,
//                 filesize20MB:true
//             },
//             insurance_number: {
//                 required: false,
//                 filesize20MB:true
//             }
            
//         },
//         messages: {
//             vehicle_name: {
//                 required: "Please Enter Vehicle Name" 
//             },
//             vehicle_type: {
//                 required: "Please Select Vehicle Type" 
//             },
//             vehicle_number: {
//                 required: "Please Enter Vehicle Number" 
//             }
            
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });
//     $("#updateVehicleForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             vehicle_name: {
//                 required: true,
//                 noSpace:true 
//             },
//             vehicle_type: {
//                 required: true,
//                 noSpace:true 
//             },
//             vehicle_number: {
//                 required: true,
//                 noSpace:true ,
//                 noComma:true ,
//             },
//             rc_book: {
//                 required: false,
//                 filesize20MB:true
//             },
//             license_number: {
//                  required: false,
//                 filesize20MB:true
//             },
//             insurance_number: {
//                 required: false,
//                 filesize20MB:true
//             },
            
//         },
//         messages: {
//             vehicle_name: {
//                 required: "Please Enter Vehicle Name" 
//             },
//             vehicle_type: {
//                 required: "Please Select Vehicle Type" 
//             },
//             vehicle_number: {
//                 required: "Please Enter Vehicle Number" 
//             },
//             rc_book: {
//                 required: "Please Select Vehicle rc book" 
//             },
//             license_number: {
//                 required: "Please Enter License Number" 
//             },
//             insurance_number: {
//                 required: "Please Enter Vehicle Insurance" 
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });
//     //20220226

//     //20220217
//     $("#complainSubCategoryValidation").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             sub_category_name: {
//                 required: true,
//                 noSpace: true,
//                 maxlength: 25,
//             },
//             complaint_category_id: {
//                 required: true,
//                 noSpace:true 
//             },
//         },
//         messages: {
//             sub_category_name: {
//                 required: "Please Enter Sub-Category Name" 
//             },
//             complaint_category_id: {
//                 required: "Please Select Category Name" 
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });

    

//     //20220217

//     //20220225
    
//     $(".addVisitingReason").validate({
//         errorPlacement: function (error, element) {
            
//             error.insertAfter(element);               // default
//         },
//         rules: {
//             visiting_reason: {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
//             visiting_reason: {
//                 required: "Please Enter Visiting Reason" 
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });
    
//     $(".updateVisitingReason").validate({
//         errorPlacement: function (error, element) {
            
//             error.insertAfter(element);               // default
//         },
//         rules: {
//             visiting_reason: {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
//             visiting_reason: {
//                 required: "Please Enter Visiting Reason" 
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });
//     //20220225

//     //20220226
//     $("#parkingSetting").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             maximum_car_allow_per_slot: {
//                 required: true,
//                 noSpace: true,
//             },
//             maximum_bike_allow_per_slot: {
//                 required: true,
//                 noSpace: true,
//             },
//             maximum_car_allow_per_slot: {
//                 required: true,
//                 noSpace: true,
//             },
//             maximum_bike_allow_per_car_slot: {
//                 required: true,
//                 noSpace: true,
//             },
//             visitor_parking_price: {
//                 required: true,
//                 noSpace: true,
//             },
//             advance_slot_booking_maximum_limit: {
//                 required: true,
//                 noSpace: true,
//             },
//             parking_price_type: {
//                 required: true,
//                 noSpace: true,
//             },
//             expected_visitor_price_pay_by: {
//                 required: true,
//                 noSpace: true,
//             },
            
//         },
//         messages: {
//             maximum_car_allow_per_slot: {
//                 required: "Please Enter Maximum Car Allow Per Slot" 
//             },
//             maximum_bike_allow_per_slot: {
//                 required: "Please Enter Maximum Bike Allow Per Slot" 
//             },
//             maximum_bike_allow_per_car_slot: {
//                 required: "Please Enter Maximum Bike Allow Per Car Slot" 
//             },
//             visitor_free_parking_hours: {
//                 required: "Please Enter Free Parking Hours for Expected Visitor" 
//             },
//             visitor_parking_price: {
//                 required: "Please Enter Parking Price After Expire Free Hours" 
//             },
//             advance_slot_booking_maximum_limit: {
//                 required: "Maximum Expected Visitor Parking Reserve" 
//             },
//             parking_price_type: {
//                 required: "Please Select Price Type" 
//             },
//             expected_visitor_price_pay_by: {
//                 required: "Please Select Parking Price Pay By" 
//             },
            
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });
//     //20220226

//         //20220301
//     $("#allowTenant").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             allow_multiple_tenants: {
//                 required: true,
//                 noSpace: true,
//             },
//             owner_tenant_stay_in_single_unit: {
//                 required: true,
//                 noSpace: true,
//             },
//             maximum_tenant_allow: {
//                 required: true,
//                 noSpace: true,
//             },
            
//         },
//         messages: {
            
//             maximum_tenant_allow: {
//                 required: "Please Enter Maximum Limit Co-Occupant Registraion" 
//             },
            
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//         }
        
//     });
//     //20220301
//     //20220311
    
//     $("#complainEscalation").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             escalation_level: {
//                 required: true,
//                 noSpace: true,
//             },
//             escalation_hours: {
//                 required: true,
//                 noSpace: true,
//             },
//             /*"escalation_email[]": {
//                 required: true,
//                 noSpace: true,
//             },*/
            
            
//         },
//         messages: {
            
//             escalation_level: {
//                 required: "Please Enter Level Name" 
//             },escalation_hours: {
//                 required: "Please Enter Alert Hours" 
//             }/*,"escalation_email[]": {
//                 required: "Please Enter Alert Email" 
//             }*/
            
//         },
//             submitHandler: function(form) {

                

//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
                
//         }
        
//     });

    
//     $("#updateComplainEscalation").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             escalation_level: {
//                 required: true,
//                 noSpace: true,
//             },
//             escalation_hours: {
//                 required: true,
//                 noSpace: true,
//             },
//             /*"escalation_email[]": {
//                 required: true,
//                 noSpace: true,
//             },*/
            
            
//         },
//         messages: {
            
//             escalation_level: {
//                 required: "Please Enter Level Name" 
//             },escalation_hours: {
//                 required: "Please Enter Alert Hours" 
//             }/*,"escalation_email[]": {
//                 required: "Please Enter Alert Email" 
//             }*/
            
//         },
//             submitHandler: function(form) {
                
//                     $(':input[type="submit"]').prop('disabled', true);
//                     $(".ajax-loader").show();
//                     form.submit(); 
                
//         }
        
//     });
    
//     $("#unitSteps").validate({
//         errorPlacement: function (error, element) {

//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             "step_name[]": {
//                 required: true,
//                 noSpace: true,
//             },
//             "step_percentage[]": {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
            
//             "step_name[]": {
//                 required: "Please Enter Step Name" 
//             },
//             "step_percentage[]": {
//                 required: "Please Enter Step Percent" 
//             },
            
//         },
//             submitHandler: function(form) {
                
//                 var totalStepPercent = $("#totalStepPercent").val();
//                 var totalPricePercent = $("#totalPricePercent").val();
//                 if(totalStepPercent>100 || totalStepPercent<100){
//                     $(".totalStepPercentMsg").html('Total Steps Percent Should Be 100 %');
//                     swal("Total Steps Percent Should Be 100 % !", {
//                       icon: "error",
//                     });
                    
//                 }else if(totalPricePercent>100){
//                     $(".totalStepPercentMsg").html('Total Price Percent Should Be 100 %');
//                     swal("Total Price Percent Should Be 100 % !", {
//                       icon: "error",
//                     });
                    
//                 }else{
//                     $(':input[type="submit"]').prop('disabled', true);
//                     $(".ajax-loader").show();
//                     form.submit(); 
//                 }
                
//         }
        
//     });
//     //20220311

//     //20220312
    
//     $("#AddUnitProgressStep").validate({
//         errorPlacement: function (error, element) {

//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             "unit_step_id": {
//                 required: true,
//             },
//             "unit_step_status": {
//                 required: true,
//                 noSpace: true,
//             },
//             "share_with_user": {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
            
//             "unit_step_id": {
//                 required: "Please Select Unit Step Name" 
//             },
//             "unit_step_status": {
//                 required: "Please Select Unit Step Status" 
//             },
//             "share_with_user": {
//                 required: "Please Select Share With User" 
//             },
            
//         },
//             submitHandler: function(form) {
                
                
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
                
                
//         }
        
//     });
//     //20220312

//     $("#UpdateUnitProgressStep").validate({
//         errorPlacement: function (error, element) {

//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             "unit_step_status": {
//                 required: true,
//                 noSpace: true,
//             },
//             "share_with_user": {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
            
//             "unit_step_status": {
//                 required: "Please Select Unit Step Status" 
//             },
//             "share_with_user": {
//                 required: "Please Select Share With User" 
//             },
            
//         },
//             submitHandler: function(form) {
                
                
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
                
                
//         }
        
//     });
//     //20220307

//     //20220309
//     $("#AddUnitPayment").validate({
//         errorPlacement: function (error, element) {

//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             "paid_by": {
//                 required: true,
//                 noSpace: true,
//             },
//             "payment_mode": {
//                 required: true,
//                 noSpace: true,
//             },
//             "payment_mode_number": {
//                 noSpace: true,
//             },
//         },
//         messages: {
            
            
//             "paid_by": {
//                 required: "Please Enter Paid By" 
//             },
//             "payment_mode": {
//                 required: "Please Select Payment Mode" 
//             },
            
//         },
//             submitHandler: function(form) {
                
                
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
                
                
//         }
        
//     });

//     $("#AddPaymentForm").validate({
//         errorPlacement: function (error, element) {

//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             "unit_step_id": {
//                 required: true,
//             },
//             "payment_amount": {
//                 required: true,
//                 noSpace: true,
//             },
//             "payment_date": {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
            
            
//             unit_step_id: {
//                 required: "Please Select Unit Step" 
//             },
//             payment_amount: {
//                 required: "Please Enter Payment Amount" 
//             },
//             payment_date: {
//                 required: "Please Select Payment Date" 
//             },
            
//         },
//             submitHandler: function(form) {
                
                
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
                
                
//         }
        
//     });

//     $("#EditPaymentForm").validate({
//         errorPlacement: function (error, element) {

//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             "unit_step_id": {
//                 required: true,
//             },
//             "payment_amount": {
//                 required: true,
//                 noSpace: true,
//             },
//             "payment_date": {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
            
            
//             unit_step_id: {
//                 required: "Please Select Unit Step" 
//             },
//             payment_amount: {
//                 required: "Please Enter Payment Amount" 
//             },
//             payment_date: {
//                 required: "Please Select Payment Date" 
//             },
            
//         },
//             submitHandler: function(form) {
                
                
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
                
                
//         }
        
//     });
//     //20220309

//     //20220312
//      $("#AddBlockProgressStep").validate({
//         errorPlacement: function (error, element) {

//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             "block_id": {
//                 required: true,
//             },
//             "unit_step_id": {
//                 required: true,
//             },
//             "unit_step_status": {
//                 required: true,
//                 noSpace: true,
//             },
//             "share_with_user": {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
            
//             "block_id": {
//                 required: "Please Select Block Name" 
//             },
//             "unit_step_id": {
//                 required: "Please Select Unit Step Name" 
//             },
//             "unit_step_status": {
//                 required: "Please Select Unit Step Status" 
//             },
//             "share_with_user": {
//                 required: "Please Select Share With User" 
//             },
            
//         },
//             submitHandler: function(form) {
                
                
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
                
                
//         }
        
//     });

//     $("#UpdateBlockProgressStep").validate({
//         errorPlacement: function (error, element) {

//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             "block_id": {
//                 required: true,
//             },
//             "unit_step_id": {
//                 required: true,
//             },
//             "unit_step_status": {
//                 required: true,
//                 noSpace: true,
//             },
//             "share_with_user": {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
            
//             "block_id": {
//                 required: "Please Select Block Name" 
//             },
//             "unit_step_id": {
//                 required: "Please Select Unit Step Name" 
//             },
//             "unit_step_status": {
//                 required: "Please Select Unit Step Status" 
//             },
//             "share_with_user": {
//                 required: "Please Select Share With User" 
//             },
            
//         },
//             submitHandler: function(form) {
                
                
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit(); 
                
                
//         }
        
//     });
//     //20220312

//     //20220322
//     $("#EmailTemplateFrm").validate({
//         errorPlacement: function (error, element) {

//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             "variable_name": {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
            
//             "variable_name": {
//                 required: "Please Enter Variable Name01" 
//             },
            
//         },
//             submitHandler: function(form) {
                
//             if($("#template_id").val()>0){
//                 $(':button[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//             }else{
//                 swal("Please Select Email Template !", {
//                   icon: "error",
//                 });
//             }
            
                
                
//         }
        
//     });

//     $("#MaintainaceForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             facilities_maintainace_type : {
//                  required: true,
//                 noSpace:true
//             },
//             'week_days[]': {
//                  required: true,
//                 // noSpace:true
//             },
//             'facility_schedule_ids[]': {
//                 required: true,
//                 // noSpace:true
//             },
//         },

//         messages: {
//             facilities_maintainace_type :{
//                 required: "Please select Maintenance type"
//             },
//             'week_days[]':{
//                 required: "Please select week"
//             },
//             'facility_schedule_ids[]':{
//                 required: "Please select time slot"
//             },
//         },errorPlacement: function(error, element) {
//                 if (element.attr("name") == "facility_schedule_id_week[]" || element.attr("name") == "facility_schedule_id_day[]" || element.attr("name") == "facility_schedule_id_date[]") {
//                     error.appendTo(".errorToShow");
//                 } else {
//                     error.insertAfter(element);
//                 }
//             },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 form.submit(); 
//           } 
//     });
//     //20220322

//     //20220323
//     $("#RejectVendorRequestForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             reject_message : {
//                  required: true,
//                 noSpace:true
//             },
//         },

//         messages: {
//             reject_message :{
//                 required: "Please Enter Reject Reason"
//             },
//         },
//         submitHandler: function(form) {
//             $(':button[type="submit"]').prop('disabled', true);
//             form.submit(); 
//         } 
//     });
//     //20220323

//     //20220422
//     $("#getVisitorReportForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             from : {
//                  required: true,
//             },
//             toDate : {
//                  required: true,
//             },
//         },

//         messages: {
//             from :{
//                 required: "Please Select From Date"
//             },
//             toDate :{
//                 required: "Please Select To Date"
//             },
//         },
//         submitHandler: function(form) {
//             $(':button[type="submit"]').prop('disabled', true);
//             // form.submit(); 
//         } 
        
//     });
    
//     //20220422

//     //20220409
//     $("#addNewItem").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
            
//             user_name : {
//                  required: true,
//                  noSpace:true
//             },
//             user_mobile : {
//                  required: true,
//                  noSpace:true
//             },
//             country_code : {
//                  required: true,
//             },
//             classified_category_id : {
//                  required: true,
//             },
//             classified_sub_category_id : {
//                  required: true,
//             },
//             classified_add_title : {
//                  required: true,
//                  noSpace:true
//             },
//             classified_brand_name : {
//                  required: true,
//                  noSpace:true
//             },
//             classified_manufacturing_year : {
//                  required: true,
//             },
//             classified_features : {
//                  required: true,
//                  noSpace:true
//             },
//             product_type : {
//                  required: true,
//                  noSpace:true
//             },
//             classified_expected_price : {
//                  required: true,
//                  noSpace:true
//             },
//         },

//         messages: {
//             user_name :{
//                 required: "Please Enter User Name"
//             },
//             user_mobile :{
//                 required: "Please Enter Mobile No."
//             },
//             country_code :{
//                 required: "Please Select Country Code"
//             },
//             classified_category_id :{
//                 required: "Please Select Category Name"
//             },
//             classified_sub_category_id :{
//                 required: "Please Select Sub Category Name"
//             },
//             classified_add_title :{
//                 required: "Please Enter Title"
//             },
//             classified_brand_name :{
//                 required: "Please Enter Brand Name"
//             },
//             classified_manufacturing_year :{
//                 required: "Please Select Year"
//             },
//             classified_features :{
//                 required: "Please Enter Features"
//             },
//             product_type :{
//                 required: "Please Select Condition"
//             },
//             classified_expected_price :{
//                 required: "Please Enter Expected Price"
//             },
//         },
//         submitHandler: function(form) {
//             $(':button[type="submit"]').prop('disabled', true);
//             form.submit(); 
//         } 
//     });
//     //20220409

//     //20220420
//     $("#eventDonationFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             user_id: {
//                 required: true
//             },
//              recived_amount: {
//                 required: true,
//                 noSpace:true, 
//             },
//              payment_ref_no: {
//                 required: false,
//                 noSpace:true, 
//             },
//              bank_name: {
//                 required: true,
//                 noSpace:true, 
//             }       
//         },
//         messages: {
//             user_id: {
//                 required : "Please select user"
//             },
//             recived_amount: {
//                 required : "Please enter amount"
//             },
//         }
//         , submitHandler: function(form) {
           
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
          
//         }
//     });

//     $("#eventDonationFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             user_id: {
//                 required: true
//             },
//              recived_amount: {
//                 required: true,
//                 noSpace:true, 
//             },
//              payment_ref_no: {
//                 required: true,
//                 noSpace:true, 
//             },
//              bank_name: {
//                 required: true,
//                 noSpace:true, 
//             }       
//         },
//         messages: {
//             user_id: {
//                 required : "Please select user"
//             },
//             recived_amount: {
//                 required : "Please enter amount"
//             },
//         }
//         , submitHandler: function(form) {
           
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
          
//         }
//     });
    
//     //20220420
//     //20220425
    
//     $("#eventRescheduleFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             event_date: {
//                 required: true
//             },
//              event_time: {
//                 required: true,
//             },
//         },
//         messages: {
//             event_date: {
//                 required : "Please select event date"
//             },
//             event_time: {
//                 required : "Please select event time"
//             },
//         }
//         , submitHandler: function(form) {
           
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
          
//         }
//     });

//     $("#EventCancelFrm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             cancel_reason: {
//                 required: true
//             },
//         },
//         messages: {
//             cancel_reason: {
//                 required : "Please Enter cancel reason"
//             },
//         }
//         , submitHandler: function(form) {
           
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
          
//         }
//     });
//     //20220425

//     $("#addAssetsMaintenanceForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             assets_category_id: {
//                 required: true,
//             },  
//             assets_id: {
//                 required: true,
//             },    
//             maintenance_type: {
//                 required: true,
//             },  
//             custom_date: {
//                 required: true,
//             },
//             "week_days[]": {
//                 required: true,
//             },
//             "month_days[]": {
//                 required: true,
//             },
//             start_month: {
//                 required: true,
//             },
//             month_date: {
//                 required: true,
//             },
//             vendor_name: {
//                 required: false,
//                 noSpace:true,
//             },
//             vendor_mobile_no: {
//                 required: false,
//                 noSpace:true,
//                 minlength: 8,
//                 maxlength:15,
//             },
//         },
//         messages: {
//             assets_category_id: {
//                 required:"Please Select Assets Category",
//             },  
//             assets_id: {
//                 required:"Please Select Assets Item",
//             },  
//             maintenance_type: {
//                 required:"Please Select Maintenance Type",
//             },  
//             custom_date: {
//                 required:"Please Select Date",
//             }, 
//             "week_days[]": {
//                 required:"Please Select Week Days",
//             },
//             "month_days[]": {
//                 required:"Please Select Month Days",
//             },
//             start_month: {
//                 required:"Please Select Start Month",
//             },
//             month_date: {
//                 required:"Please Select Month Date",
//             },
//             vendor_name: {
//                 required:"Please Enter Vendor Name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             vendor_mobile_no: {
//                 required:"Please Enter Vendor Mobile No",
//                 noSpace: "No space please and don't leave it empty",
//                 minlength: "Please enter valid mobile number",
//                 maxlength: "Please enter valid mobile number",
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     $("#addNoticeScheduleForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             notice_title: {
//                 required: true,
//                 noSpace:true,
//             }, 
//             schedule_type: {
//                 required: true,
//             },  
//             custom_date: {
//                 required: true,
//             },
//             "week_days[]": {
//                 required: true,
//             },
//             "month_days[]": {
//                 required: true,
//             },
//             start_month: {
//                 required: true,
//             },
//             month_date: {
//                 required: true,
//             }
//         },
//         messages: {
           
//             maintenance_type: {
//                 required:"Please Select Type",
//             },  
//             custom_date: {
//                 required:"Please Select Date",
//             }, 
//             "week_days[]": {
//                 required:"Please Select Week Days",
//             },
//             "month_days[]": {
//                 required:"Please Select Month Days",
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#completeAssetsMaintenanceForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             maintenance_amount: {
//                 required: false,
//                 noSpace:true,
//             },
//         },
//         messages: {
//             maintenance_amount: {
//                 required:"Please Enter Amount",
//                 noSpace: "No space please and don't leave it empty",
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     $("#paxtonForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             paxton_user_name: {
//                 required: true,
//                 noSpace: true,
//             },
//              paxton_user_password: {
//                 required: true,
//                 noSpace: true,
//             },
//             paxton_licence_key: {
//                 required: true,
//                 noSpace: true,
//             },
//             paxton_api_ip: {
//                 required: true,
//                 noSpace: true,
//             },
//         },
//         messages: {
//             paxton_user_name: {
//                 required : "Please user name"
//             },
//             paxton_user_password: {
//                 required : "Please enter password"
//             },
//             paxton_licence_key: {
//                 required : "Please enter lincence key"
//             },paxton_api_ip: {
//                 required : "Please enter ip address with port"
//             },
//         }
//         , submitHandler: function(form) {
           
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
          
//         }
//     });

//     $("#addCompanyForm").validate({
//        errorPlacement: function (error, element) {
//            if (element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             company_name: {
//                 required:true,
//                 noSpace:true,
//                 remote:
//                 {
//                     url: 'controller/companyController.php',
//                     type: "post",
//                     data:
//                     {
//                         checkCmpName: "checkCmpName",
//                         csrf: csrf,
//                         company_id: function()
//                         {
//                             return $('#company_id').val();
//                         }
//                     }
//                 }
//             },
//             company_contact_person_name:{
//                 required: true,
//                 alpha:true,
//                 noSpace:true
//             },
//             company_contact_person_number: {
//                 required:true,
//                 noSpace: true,
//                 minlength:8,
//                 maxlength:15
//             },
//             company_address: {
//                 required: false,
//                 noSpace: true
//             },
//             company_gst: {
//                 required: false,
//                 noSpace: true,
//                 regexp: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
//             },
//             company_pan: {
//                 required: false,
//                 noSpace: true,
//                 regexp: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
//             },
//             company_logo: {
//                 required: false,
//                 image: true
//             }
//         },
//         messages: {
//             company_name: {
//                 required: "Please enter company name",
//                 remote: "Company name already added"
//             },
//             company_contact_person_name: {
//                 required: "Please enter contact name"
//             },
//             company_contact_person_number: {
//                 required: "Please enter contact number"
//             },
//             company_address: {
//                 noSpace: "NO SPACE PLEASE"
//             },
//             company_gst: {
//                 noSpace: "NO SPACE PLEASE",
//                 regexp: "Please enter valid GST no"
//             },
//             company_pan: {
//                 noSpace: "NO SPACE PLEASE",
//                 regexp: "Please enter valid PAN no"
//             }
//         },
//         submitHandler: function(form)
//         {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });

//     $("#addAssetForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             unit_assets_name: {
//                 required: true,
//                 noSpace: true,
//                 remote:
//                 {
//                     url: 'controller/assetsController.php',
//                     type: "post",
//                     data:
//                     {
//                         checkAssetName: "checkAssetName",
//                         csrf: csrf,
//                         unit_assets_id: function()
//                         {
//                             return $('#unit_assets_id').val();
//                         }
//                     }
//                 }
//             },
//             is_movable: {
//                 required: true,
//                 noSpace: true
//             }
//         },
//         messages: {
//             unit_assets_name: {
//                 required: "Please Enter Asset Name",
//                 remote: "Asset name already used"
//             },
//             is_movable: {
//                 required: "Please select movable"
//             }
//         },
//         submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });

//     $("#editAssetForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             unit_assets_name: {
//                 required: true,
//                 noSpace: true,
//                 remote:
//                 {
//                     url: 'controller/assetsController.php',
//                     type: "post",
//                     data:
//                     {
//                         checkAssetName: "checkAssetName",
//                         csrf: csrf,
//                         unit_assets_id: function()
//                         {
//                             return $('#unit_assets_id').val();
//                         }
//                     }
//                 }
//             },
//             is_movable: {
//                 required: true,
//                 noSpace: true
//             }
//         },
//         messages: {
//             unit_assets_name: {
//                 required: "Please Enter Asset Name",
//                 remote: "Asset name already used"
//             },
//             is_movable: {
//                 required: "Please select movable"
//             }
//         },
//         submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });

//     $("#companyAssignForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             unit_owner_company_id: {
//                 required: true,
//             },
//             ledge_by_company_id: {
//                 required: true,
//             },
//             current_company_id: {
//                 required: true,
//                 /*remote:
//                 {
//                     url: 'controller/unitController.php',
//                     type: "post",
//                     data:
//                     {
//                         checkOwnerCompany: "checkOwnerCompany",
//                         csrf: csrf,
//                         unit_owner_company_id: function()
//                         {
//                             return $('#unit_owner_company_id').val();
//                         },
//                         current_company_id: function()
//                         {
//                             return $('#current_company_id').val();
//                         }
//                     }
//                 }*/
//             }
//         },
//         messages: {
//             unit_owner_company_id: {
//                 required : "Please select owner company",
//             },
//             ledge_by_company_id: {
//                 required : "Please select leased by company",
//             },
//             current_company_id: {
//                 required : "Please select occupant company",
//             },

//             /*current_company_id: {
//                 remote: "Both company name are same, Please use different company name."
//             }*/
//         },
//         submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });

//     $("#companyBillAssignForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             paid_by: {
//                 required: true,
//             },
//             "pc_id[]":{
//                 required:true,
//             }
//         },
//         messages: {
//             paid_by: {
//                 required : "Please select maintenance paid by",
//             },
//             "pc_id[]": {
//                 required: "Please select bill paid by"
//             }
//         },
//         submitHandler: function(form) {
           
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
          
//         }
//     });

//     $("#addbillUnitForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent()); 
//             } else if (element.hasClass('select2-hidden-accessible')) {
//                 error.insertAfter(element.next('span'));
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {
//                 error.insertAfter(element);
//             }
//         },
//         rules: {
//             bill_category_id: {
//                 required: true,
//                 /*remote:
//                 {
//                     url: 'controller/billController.php',
//                     type: "post",
//                     data:
//                     {
//                         checkBillUnitPrice: "checkBillUnitPrice",
//                         csrf: csrf,
//                         bill_category_id: function()
//                         {
//                             return $('#bill_category_id').val();
//                         },
//                         minimum_bill_unit: function()
//                         {
//                             return $('#minimum_bill_unit').val();
//                         },
//                         maximum_bill_unit: function()
//                         {
//                             return $('#maximum_bill_unit').val();
//                         }
//                     }
//                 }*/
//             },
//             bill_unit_price_category_id: {
//                 required: true,
//             },
//             "minimum_bill_unit[]": {
//                 required: true,
//             },
//             "maximum_bill_unit[]": {
//                 required: true,
//             },
//             "bill_unit_price[]": {
//                 required: true,
//             },
            
//         },
//         messages: {
//             bill_category_id: {
//                 required : "Please select bill category",
//             },
//             bill_unit_price_category_id: {
//                 required : "Please select bill unit price category",
//             },
//             "minimum_bill_unit[]": {
//                 required : "Please enter from unit",
//             },
//             "maximum_bill_unit[]": {
//                 required : "Please enter to unit",
//             },
//             "bill_unit_price[]": {
//                 required : "Please enter bill unit price",
//             },
//         },
//         submitHandler: function(form) {
//             $(':input[type="submit"]').prop('disabled', true);
//             $(".ajax-loader").show();
//             form.submit();
//         }
//     });

//     //////geet 30-05-2023



//     $("#MeasurementAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             unit_measurement_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
            
//         },
//         messages: {
//             unit_measurement_name: {
//                 required : "Please enter Measurement name",
//                 noSpace: "No space please and don't leave it empty",
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });


//     $("#categoryAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             complain_product_category_name: {
//                 required: true,
//                 noSpace:true,
//                 // alphaRestSpeChartor: true,
//             }
            
            
//         },
//         messages: {
//             complain_product_category_name: {
//                 required : "Please enter category name",
//                 noSpace: "No space please and don't leave it empty",
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     $("#productAdd").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             complain_product_category_id: {
//                 required: true,
//                 noSpace:true,
//             },complain_product_name: {
//                 required: true,
//                 noSpace:true,
//             },complain_unit_measurement_id: {
//                 required: true,
//                 noSpace:true,
//             }
            
            
//         },
//         messages: {
//             complain_product_category_id: {
//                 required : "Please select Category",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             complain_product_name: {
//                 required : "Please enter product name",
//                 noSpace: "No space please and don't leave it empty",
//             }

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     //////geet 30-05-2023
//     $("#billunitPriceCategoryForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.parent('.input-group').length) { 
//                 error.insertAfter(element.parent());      // radio/checkbox?
//             } else if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             bill_unit_price_category_name: {
//                 required: true,
//                 noSpace:true,
//             },            
//         },
//         messages: {
//             bill_unit_price_category_name: {
//                 required : "Please enter Tariff category name",
//                 noSpace: "No space please and don't leave it empty",
//             },

//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });

//     //////geet 30-05-2023
    
// //////geet 14-07-2023
//     $("#addChangeMeterForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             unit_id: {
//                 required: true,
//                 noSpace:true,
//             },            
//             change_meter_date: {
//                 required: true,
//                 noSpace:true,
//             },            
//             old_meter_serial_no: {
//                 required: true,
//                 noSpace:true,
//             },            
//             old_meter_current_reading: {
//                 required: true,
//                 noSpace:true,
//             },            
//             old_meter_company_name: {
//                 required: true,
//                 noSpace:true,
//             },            
//             new_meter_serial_no: {
//                 required: true,
//                 noSpace:true,
//             },            
//             new_meter_starting_reading: {
//                 required: true,
//                 noSpace:true,
//             },            
//             new_meter_company_name: {
//                 required: true,
//                 noSpace:true,
//             },            
//         },
//         messages: {
//             unit_id: {
//                 required : "Please select unit name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             change_meter_date: {
//                 required : "Please select change meter date",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             old_meter_serial_no: {
//                 required : "Please enter old meter serial no.",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             old_meter_current_reading: {
//                 required : "Please old meter current reading",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             old_meter_company_name: {
//                 required : "Please enter old meter company name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             new_meter_serial_no: {
//                 required : "Please enter new meter serial no.",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             new_meter_starting_reading: {
//                 required : "Please enter new meer starting reading",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             new_meter_company_name: {
//                 required : "Please enter new meter company name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
    
//     $("#editChangeMeterForm").validate({
//         errorPlacement: function (error, element) {
//             if (element.hasClass('select2-hidden-accessible')) {     
//                 error.insertAfter(element.next('span'));  // select2
//                 element.next('span').addClass('error').removeClass('valid');
//             } else {                                      
//                 error.insertAfter(element);               // default
//             }
//         },
//         rules: {
//             unit_id: {
//                 required: true,
//                 noSpace:true,
//             },            
//             change_meter_date: {
//                 required: true,
//                 noSpace:true,
//             },            
//             old_meter_serial_no: {
//                 required: true,
//                 noSpace:true,
//             },            
//             old_meter_current_reading: {
//                 required: true,
//                 noSpace:true,
//             },            
//             old_meter_company_name: {
//                 required: true,
//                 noSpace:true,
//             },            
//             new_meter_serial_no: {
//                 required: true,
//                 noSpace:true,
//             },            
//             new_meter_starting_reading: {
//                 required: true,
//                 noSpace:true,
//             },            
//             new_meter_company_name: {
//                 required: true,
//                 noSpace:true,
//             },            
//         },
//         messages: {
//             unit_id: {
//                 required : "Please select unit name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             change_meter_date: {
//                 required : "Please select change meter date",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             old_meter_serial_no: {
//                 required : "Please enter old meter serial no.",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             old_meter_current_reading: {
//                 required : "Please old meter current reading",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             old_meter_company_name: {
//                 required : "Please enter old meter company name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             new_meter_serial_no: {
//                 required : "Please enter new meter serial no.",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             new_meter_starting_reading: {
//                 required : "Please enter new meer starting reading",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             new_meter_company_name: {
//                 required : "Please enter new meter company name",
//                 noSpace: "No space please and don't leave it empty",
//             },
//         },
//             submitHandler: function(form) {
//                 $(':input[type="submit"]').prop('disabled', true);
//                 $(".ajax-loader").show();
//                 form.submit(); 
//           }
//     });
//     //////geet 14-07-2023

// });
//***************************
// General
//***************************

$(document).ready(function () {
    
    setTimeout(startup, 1000);

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "1500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    $('.datepicker').datepicker({
        format: "dd-M-yy",
        autoclose: true,
        orientation: "top left",
        todayHighlight: true
    });


//    $('#keyboard').keyboard({
//        alwaysOpen: true,
//        layout: 'custom',
//        customLayout: {
//            'normal': [
//                  '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
//                  '{tab} q w e r t y u i o p [ ] \\',
//                  'a s d f g h j k l ; \' {enter}',
//                  '{shift} z x c v b n m , . / {shift}',
//                  '{space} '
//                ],
//            'shift': [
//                  '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
//                  '{tab} Q W E R T Y U I O P { } |',
//                  'A S D F G H J K L : " {enter}',
//                  '{shift} Z X C V B N M < > ? {shift}',
//                  ' {space}'
//                ]
//        }
//    });

});

$("#transactionCategoryDiv").click(function () {
    if ($("#transactionCatDropdown").css("display") == "none") {
        $("#transactionCatDropdown").show('slide', {
            direction: "up"
        }, 500);
    } else {
        $("#transactionCatDropdown").hide('slide', {
            direction: "up"
        }, 500);
    }
});

//***************************
// Symbol Adding Function
//***************************

$("#addDollarSign").click(function () {
    var currentKey = $("#key-board").val();
    $("#key-board").val(currentKey + "$");
});

$("#addHashSign").click(function () {
    var currentKey = $("#key-board").val();
    $("#key-board").val(currentKey + "#");
});

$("#addAtSign").click(function () {
    var currentKey = $("#key-board").val();
    $("#key-board").val(currentKey + "@");
});

$("#addExclaimSign").click(function () {
    var currentKey = $("#key-board").val();
    $("#key-board").val(currentKey + "!");
});


//***************************
// Active Keyboard Function
//***************************
function startup() {

    //$a #b @c !d
    $("#key-board").keyup(function () {
        var currentKey = $("#key-board").val();
        var list = currentKey.split(" ");
        console.log(list);
        for (var i = 0; i < list.length; i++) {
            //categorize them
            var amt = "";
            var cat = "";
            var date = "";
            var note = "";


            //for transaction ********************************
            if (list[i].indexOf("$") >= 0) {
                console.log("contains $");
                amt = list[i].substring(1, list[i].length);

                /*                console.log("amt = " + amt);*/
                if (/[a-zA-Z]/.test(amt)) {
                    //if contains illegal char, throw notification
                    toastr["error"]("You have entered an illegal Character.")
                } else if (amt.length == 0) {
                    $("#transactionAmountInput").val("");
                } else {
                    //throw to the top
                    $("#transactionAmountInput").val("$" + amt);
                }
            }


            //for category ********************************
            if (list[i].indexOf("#") >= 0) {
                console.log("contains #");
                cat = list[i].substring(1, list[i].length);
                cat = cat.toLowerCase();
                //does the category = to any of the following..
                //throw to the top
                console.log("cat = |" + cat + "|");

                //cat picture change + text
                switch (cat) {
                case "food":
                    $("#transactionCategory").val(cat);
                    $("#transactionCateogryImg").attr("src", "msAssets/foodCat.png");
                    break;
                case "entertainment":
                    $("#transactionCategory").val(cat);
                    $("#transactionCateogryImg").attr("src", "msAssets/entertainmentCat.png");
                    break;
                case "household":
                    $("#transactionCategory").val(cat);
                    $("#transactionCateogryImg").attr("src", "msAssets/housecategory.png");
                    break;
                case "fashion":
                    $("#transactionCategory").val(cat);
                    $("#transactionCateogryImg").attr("src", "msAssets/shirtCategory.png");
                    break;
                case "transport":
                    $("#transactionCategory").val(cat);
                    $("#transactionCateogryImg").attr("src", "msAssets/transportCategory.png");
                    break;
                case "bills":
                    $("#transactionCategory").val(cat);
                    $("#transactionCateogryImg").attr("src", "msAssets/billsCategory.png");
                    break;
                case "others":
                    $("#transactionCategory").val(cat);
                    $("#transactionCateogryImg").attr("src", "msAssets/OthersCategory.png");
                    break;
                case "extra1":
                    $("#transactionCategory").val(cat);
                    $("#transactionCateogryImg").attr("src", "msAssets/OthersCategory.png");
                    break;
                case "extra2":
                    $("#transactionCategory").val(cat);
                    $("#transactionCateogryImg").attr("src", "msAssets/OthersCategory.png");
                    break;
                default:
                    $("#transactionCategory").val("Category");
                    $("#transactionCateogryImg").attr("src", "msAssets/transactionCategory.png");
                    break;
                }
            }

            //for date  ********************************
            if (list[i].indexOf("@") >= 0) {
                console.log("contains @");
                date = list[i].substring(1, list[i].length);
                date = date.toLowerCase();
                console.log(date);
                //does the date == today, tmr or represent a date
                //throw to the top accordingly
                if (date == 'today') {
                    var today = new Date();
                    var dd = today.getDate() + "";
                    console.log(dd);
                    var mm = today.getMonth() + 1;
                    var yy = today.getFullYear() - 2000;
                } else if (date == 'tmr' || date == 'tomorrow') {
                    var today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                    var dd = today.getDate() + "";
                    var mm = today.getMonth() + 1;
                    var yy = today.getFullYear() - 2000;
                } else if (date.charAt(2) == '-') {
                    var dd = date.substring(0, 2);
                    var mm = date.substring(3, date.length);
                    var yy = 16;
                }

                console.log(dd);

                if (dd != null && dd.length == 1) {
                    dd = "0" + dd;
                }

                switch (mm) {
                case 1:
                    mm = "Jan"
                    break;
                case 2:
                    mm = "Fed"
                    break;
                case 3:
                    mm = "Mar"
                    break;
                case 4:
                    mm = "Apr"
                    break;
                case 5:
                    mm = "May"
                    break;
                case 6:
                    mm = "Jun"
                    break;
                case 7:
                    mm = "Jul"
                    break;
                case 8:
                    mm = "Aug"
                    break;
                case 9:
                    mm = "Sep"
                    break;
                case 10:
                    mm = "Oct"
                    break;
                case 11:
                    mm = "Nov"
                    break;
                case 12:
                    mm = "Dec"
                    break;
                }

                if (dd != null || mm != null || yy != null) {
                    $("#transactionDate").val(dd + "-" + mm + "-" + yy);
                } else {
                    $("#transactionDate").val("");
                }

            }

            //for notes ********************************
            if (list[i].indexOf("!") >= 0) {
                console.log("contains !");
                note = list[i].substring(1, list[i].length);
                $("#transactionNotes").val(note);
            }

            if (list[i] == "") {
                console.log("Destroy!");
                list.splice(i, 1);
            }
        }
    });
}


//***************************
// Top Down Button Function
//***************************
$("#transactionAmountInput").keyup(function () {
    var amount = $("#transactionAmountInput").val();
    var currentKey = $("#key-board").val();
    //if $ do not exist, put $ inside the top
    if (amount.length == 1 && amount.indexOf("$") > 0) { //the last digit = $
        $("#transactionAmountInput").val("");
    } else if (amount.indexOf("$") < 0 && amount.length > 0) {
        $("#transactionAmountInput").val("$" + amount);
        amount = "$" + amount;
    }

    var cashMoney = amount.substring(1, amount.length);
//    console.log(cashMoney);

    if ($.isNumeric(cashMoney) || (cashMoney.length == 0)) {
        currentKeyCheckerAmount(currentKey, amount);
    }

    /*$("#key-board").val(currentKey + " " + amount);*/
});

function currentKeyCheckerAmount(currentKey, toAdd) {
    //check the currentKey if "$" exist.
    //if '$" exist, remove #and put the new category.
    var toReturn = "";
    var list = currentKey.split(" ");
    var checker = false; // to check if things need to be destroyed.
    /*    console.log(toAdd);*/
    console.log(list);
    for (var i = 0; i < list.length; i++) {
        if (list[i].charAt(0) == "$") {
//            console.log("true");
            list.splice(i, 1);
            list.splice(i, 0, toAdd);
            checker = true;
        } else if (list[i] == "") {
//            console.log("destroy");
            list.splice(i, 1);
        }
    }

    if (!checker) {
        list.splice(list.length, 0, toAdd);
    }

    for (var i = 0; i < list.length; i++) {
        toReturn += list[i] + " ";
    }

//    console.log(list);
//    console.log(toReturn);
    $("#key-board").val(toReturn);
}


//*****************************
//Category to keyboard - START
//food - 1
/*$("#catFoodSelect").click(function () {
    var currentKey = $("#key-board").val();
    currentCatChecker(currentKey, "#Food");
    $('#transactionCategory').text("Food");
    $("#transactionCateogryImg").attr("src", "msAssets/foodCat.png");
    $("#transactionCatDropdown").hide('slide', {
        direction: "up"
    }, 500);
});

//entertainment - 2
$("#catEntertainmentSelect").click(function () {
    var currentKey = $("#key-board").val();
    currentCatChecker(currentKey, "#Entertainment");
    $("#transactionCateogryImg").attr("src", "msAssets/entertainmentCat.png");
    $('#transactionCategory').text("Entertainment");
    $("#transactionCatDropdown").hide('slide', {
        direction: "up"
    }, 500);
});

//household - 3
$("#catHouseSelect").click(function () {
    var currentKey = $("#key-board").val();
    currentCatChecker(currentKey, "#Household");
    $('#transactionCategory').text("Household");
    $("#transactionCateogryImg").attr("src", "msAssets/housecategory.png");
    $("#transactionCatDropdown").hide('slide', {
        direction: "up"
    }, 500);
});

//fashion - 4
$("#catFashionSelect").click(function () {
    var currentKey = $("#key-board").val();
    currentCatChecker(currentKey, "#Fashion");
    $('#transactionCategory').text("Fashion");
    $("#transactionCateogryImg").attr("src", "msAssets/shirtCategory.png");
    $("#transactionCatDropdown").hide('slide', {
        direction: "up"
    }, 500);
});

//transport - 5
$("#catTransportSelect").click(function () {
    var currentKey = $("#key-board").val();
    currentCatChecker(currentKey, "#Transport");
    $('#transactionCategory').text("Transport");
    $("#transactionCateogryImg").attr("src", "msAssets/transportCategory.png");
    $("#transactionCatDropdown").hide('slide', {
        direction: "up"
    }, 500);
});

//Bills - 6
$("#catBillsSelect").click(function () {
    var currentKey = $("#key-board").val();
    currentCatChecker(currentKey, "#Bills");
    $('#transactionCategory').text("Bills");
    $("#transactionCateogryImg").attr("src", "msAssets/billsCategory.png");
    $("#transactionCatDropdown").hide('slide', {
        direction: "up"
    }, 500);
});

//Others - 7
$("#catOthersSelect").click(function () {
    var currentKey = $("#key-board").val();
    currentCatChecker(currentKey, "#Others");
    $('#transactionCategory').text("Others");
    $("#transactionCateogryImg").attr("src", "msAssets/OthersCategory.png");
    $("#transactionCatDropdown").hide('slide', {
        direction: "up"
    }, 500);
});

//extra1 - 8
$("#catEx1Select").click(function () {
    var currentKey = $("#key-board").val();
    currentCatChecker(currentKey, "#Extra1");
    $('#transactionCategory').text("Extra1");
    $("#transactionCateogryImg").attr("src", "msAssets/OthersCategory.png");
    $("#transactionCatDropdown").hide('slide', {
        direction: "up"
    }, 500);
});

//extra2 - 9
$("#catEx2Select").click(function () {
    var currentKey = $("#key-board").val();
    currentCatChecker(currentKey, "#Extra2");
    $('#transactionCategory').text("Extra2");
    $("#transactionCateogryImg").attr("src", "msAssets/OthersCategory.png");
    $("#transactionCatDropdown").hide('slide', {
        direction: "up"
    }, 500);
});*/

function currentCatChecker(currentKey, toAdd) {
    //check the currentKey if "#" exist.
    //if '#" exist, remove #and put the new category.
    var toReturn = "";
    var list = currentKey.split(" ");
    var checker = false;
    console.log(list);
    for (var i = 0; i < list.length; i++) {
        if (list[i].charAt(0) == "#") {
            list.splice(i, 1);
            list.splice(i, 0, toAdd);
            checker = true;
        }
    }
    console.log(checker);
    if (!checker) {
        list.splice(list.length, 0, toAdd);
        console.log(list);
    }

    for (var i = 0; i < list.length; i++) {
        toReturn += list[i] + " ";
    }

    console.log(toReturn);
    $("#key-board").val(toReturn);
}

//Category to Keyboard - END
//********************************

//********************************
//Date to Keyboard - END
$("#transactionDate").change(function () {
    var date = $("#transactionDate").val();
    date = date.substring(0, date.length - 3);
    var currentKey = $("#key-board").val();
    currentDateChecker(currentKey, date);
});

function currentDateChecker(currentKey, toAdd) {
    //check the currentKey if "#" exist.
    //if '#" exist, remove #and put the new category.
    var toReturn = "";
    var list = currentKey.split(" ");
    var checker = false;
    toAdd = "@" + toAdd;
    console.log(list);
    for (var i = 0; i < list.length; i++) {
        if (list[i].charAt(0) == "@") {
            list.splice(i, 1);
            list.splice(i, 0, toAdd);
            checker = true;
        }
    }
    if (!checker) {
        list.splice(list.length, 0, toAdd);
    }

    for (var i = 0; i < list.length; i++) {
        if (list[i] != '@' || list[i] == "") {
            toReturn += list[i] + " ";
        }
    }

    console.log(toReturn);
    $("#key-board").val(toReturn);
}
//Date to Keyboard - END
//********************************


//********************************
//Notes to Keyboard - END
$("#transactionNotes").keyup(function () {
    var note = $("#transactionNotes").val();
    var currentKey = $("#key-board").val();
    currentNoteChecker(currentKey, note);
});

function currentNoteChecker(currentKey, toAdd) {
    //check the currentKey if "#" exist.
    //if '#" exist, remove #and put the new category.
    var toReturn = "";
    var list = currentKey.split(" ");
    var checker = false;
    toAdd = "!" + toAdd;
    console.log(list);
    for (var i = 0; i < list.length; i++) {
        if (list[i].charAt(0) == "!") {
            list.splice(i, 1);
            list.splice(i, 0, toAdd);
            checker = true;
        }
    }
    if (!checker) {
        list.splice(list.length, 0, toAdd);
    }

    for (var i = 0; i < list.length; i++) {
        if (list[i] != '!' || list[i] == "") {
            toReturn += list[i] + " ";
        }
    }

    //console.log(toReturn);
    $("#key-board").val(toReturn);
}
//Notes to Keyboard - END
//********************************
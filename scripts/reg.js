$("#regCheckForm").click(function () {
    console.log("answer has been checked.");
    var ignFormshowCondition = $('#regCheckForm').prop('checked');
    if (ignFormshowCondition) {
        $("#formignDiv").css("display", "block");
    } else {
        $("#formignDiv").css("display", "none");
    }
});



//email validation
$("#formEmail1").keyup(function () {
    var x = $("#formEmail1").val();
    if (x.indexOf('@') > 0 && x.indexOf('.com') > 0) {
        $("#EmailNotValid").css('display', 'none');
        $("#EmailValid").css('display', 'block');
        $("#EmailBlank").css('display', 'none');
    } else if (x.length > 0) {
        $("#EmailNotValid").css('display', 'block');
        $("#EmailValid").css('display', 'none');
        $("#EmailBlank").css('display', 'none');
    } else {
        $("#EmailNotValid").css('display', 'none');
        $("#EmailValid").css('display', 'none');
        $("#EmailBlank").css('display', 'block');
    }
});


//ign validation
//invalid igns
var igns = ["paul", "ben", "mike"];

$("#formign").keyup(function () {
    var x = $("#formign").val();
    if (contains(igns, x)) {
        $("#ignNotValid").css('display', 'block');
        $("#ignValid").css('display', 'none');
        $("#ignBlank").css('display', 'none');
    } else if (x.length > 0) {
        $("#ignNotValid").css('display', 'none');
        $("#ignValid").css('display', 'block');
        $("#ignBlank").css('display', 'none');
    } else {
        $("#ignNotValid").css('display', 'none');
        $("#ignValid").css('display', 'none');
        $("#ignBlank").css('display', 'block');
    }
});


/*
PASSWORD STRENGTH CHECKER

var strength = document.getElementById(‘strength’);
var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$", "g");
var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
var enoughRegex = new RegExp("(?=.{6,}).*", "g");
var pwd = document.getElementById("password");
if (pwd.value.length==0) {
strength.innerHTML = ‘Type Password’;
} else if (false == enoughRegex.test(pwd.value)) {
strength.innerHTML = ‘More Characters’;
} else if (strongRegex.test(pwd.value)) {
strength.innerHTML = ‘<span style="color:green">Strong!</span>’;
} else if (mediumRegex.test(pwd.value)) {
strength.innerHTML = ‘<span style="color:orange">Medium!</span>’;
} else {
strength.innerHTML = ‘<span style="color:red">Weak!</span>’;
}*/

//password validation
$("#formPass1").keyup(function () {
    var x = $("#formPass1").val();
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    if (strongRegex.test(x)) {
        $("#regStrong").show('slide', {
            direction: "left"
        }, 500);
        $("#regGood").hide();
        $("#regWeak").hide();
    } else if (mediumRegex.test(x)) {
        $("#regStrong").hide();
        $("#regGood").show('slide', {
            direction: "left"
        }, 500);
        $("#regWeak").hide();
    } else if (x.length == 0) {
        $("#regStrong").hide('slide', {
            direction: "left"
        }, 500);
        $("#regGood").hide('slide', {
            direction: "left"
        }, 500);
        $("#regWeak").hide('slide', {
            direction: "left"
        }, 500);
    } else {
        $("#regStrong").hide();
        $("#regGood").hide();
        $("#regWeak").show('slide', {
            direction: "left"
        }, 500);
    }
});


//confirm password validation
$("#formPass2").keyup(function () {
    var x = $("#formPass1").val();
    var y = $("#formPass2").val();
    if (x == y) {
        $("#cfmPassNotValid").css('display', 'none');
        $("#cfmPassValid").css('display', 'block');
        $("#cfmPassBlank").css('display', 'none');
    } else if (x.length > 0) {
        $("#cfmPassNotValid").css('display', 'block');
        $("#cfmPassValid").css('display', 'none');
        $("#cfmPassBlank").css('display', 'none');
    } else {
        $("#cfmPassNotValid").css('display', 'none');
        $("#cfmPassValid").css('display', 'none');
        $("#cfmPassBlank").css('display', 'block');
    }
});


//contains function to check if array A has obj.
function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
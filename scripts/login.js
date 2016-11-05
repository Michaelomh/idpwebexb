/*Login & Registration Scripts*/
toastr.options = {
    "positionClass": "toast-top-center"
}

$("#loginButton").click(function () {
    var email = $("#formEmail").val();
    var pass = $("#formPass").val();

    if (login(email, pass)) {
        location.href = "index.html";
    } else {
        toastr.error('Incorrect Email and Password Combination');
    }
});

$("#regSlide").click(function () {
    console.log("slide to register");
    $("#loginPage").hide('slide', {
        direction: "up"
    }, 1000);
    $("#regPage").show('slide', {
        direction: "down"
    }, 1000);
});

function login(user, pa) {
    if (user == 'asd') {
        return true;
    } else {
        return false;
    }
}
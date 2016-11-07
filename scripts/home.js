$("#plusSign").click(function () {
    console.log("hi");
    window.location = "transaction.html";
})

$(document).ready(function () {
    var query = window.location.search;
    query = query.substr(1,query.length);
    if (query != "") {
        console.log(query);
        var queryArray = query.split("&");

        for (var i = 0; i < queryArray.length; i++) {
            var temp = queryArray[i].split("=");

            switch (temp[0]) {
            case "Amt":
                $("#transAmt").text(temp[1]);
                break;
            case "Cat":
                $("#transCat").text(temp[1]);
                changeImage(temp[1]);
                break;
            case "Notes":
                if (temp[1] == "") {
                    $("#transNotes").text("asdasd");
                    $("#transNotes").css("color", "white");
                } else {
                    $("#transNotes").text(temp[1]);
                }
                break;
            }
        }
    }
    

    function changeImage(temp) {
        console.log("Changing Image");
        switch (temp.toUpperCase()) {
        case "FOOD":
            $("#transPic").attr("src", "msAssets/foodCat.png");
            break;
        case "ENTERTAINMENT":
            $("#transPic").attr("src", "msAssets/entertainmentCat.png");
            break;
        case "BILLS":
            $("#transPic").attr("src", "msAssets/billsCategory.png");
            break;
        case "TRANSPORT":
            $("#transPic").attr("src", "msAssets/transportCategory.png");
            break;
        case "FASHION":
            $("#transPic").attr("src", "msAssets/shirtCategory.png");
            break;
        case "HOUSEHOLD":
            $("#transPic").attr("src", "msAssets/housecategory.png");
            break;
        case "OTHERS":
            $("#transPic").attr("src", "msAssets/OthersCategory.png");
            break;
        }

    };

});
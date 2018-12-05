// var accountBalance = 50,
//     cashInHand = 0;

document.addEventListener('contextmenu', event => event.preventDefault());

toastr.options = {
    "closeButton": true,
    "positionClass": "toast-top-full-width"
}

// function timeTicker(timeStamp) {
//     document.getElementById('time-tracker').innerHTML = timeStamp;
//     if (timeStamp == '5:00') {
//         document.body.innerHTML =='';
//         toastr("Oooops Time's Up , Better luck next time !!");
//     } else {
//         setTimeout(function() {
//             var timeStore = timeStamp.split(':');
//             if (Number(timeStore[1]) == 59) {
//                 timeStore[0] = Number(timeStore[0]) + 1;
//                 timeStore[1] = '00';
//             } else {
//                 timeStore[1] = timeStore[1] < 9 ? '0' + (Number(timeStore[1]) + 1) : Number(timeStore[1]) + 1;
//             }
//             //loop-on
//             timeTicker(timeStore.join(":"))
//         }, 100)
//     }
// }


function printConsoleMessage() {
    console.log("Wow you've opened the console , Good job ");
    console.log('You need to perform some JS magic to find the magical expression');
    console.log("or you can try your hand at some SQL injection");
    console.log('you know what just use this for both username and password and waltz your way right in---> " or ""=" ');
}

$(function() {
    printConsoleMessage();
    $('#loginModal').modal({ backdrop: 'static', keyboard: false });
    $("#login").click(function() {
        username = $("#username").val();
        password = $("#pwd").val();
        if (username == '" or ""="' && password == '" or ""="') {
            $('#loginModal').modal('hide');
            $("#rulesModal").modal();
            $("#rulesModal").on('hidden.bs.modal', function() {
                timeTicker('0:00');
            });
        } else {
            toastr.error("Login Failed Please Try again");
        }
    })
    $(".radioShopSelect").change(function(event) {
    })
});

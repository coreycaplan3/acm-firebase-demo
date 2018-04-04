$(document).ready(function () {
    $('.slider').slider();
    $('.modal').modal();
    $('.scrollspy').scrollSpy({scrollOffset: 50});
    $('.slides').css("height", "440px !important");

    const message = firebase.database().ref('acm/message');
    message.on('value', function (snapshot) {
        $('#message-label').html(snapshot.val());
    });

    const headline = firebase.database().ref('acm/title');
    headline.on('value', function (snapshot) {
        $('#title-label').html(snapshot.val());
    });
});
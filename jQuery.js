$(document).ready(function () {

    //create button with text, an id, and put in body of document
    var $button1 = $('<button>Click Me</button>').attr('id', 'btn1').appendTo('body');


    //when you click button, display alert
    $('#btn1').click(function () {
        alert("Good Work Christy!!!");
    })

    //retrieve user input in textbox and display in an alert
    //this button already created in html with id
    $('#btn2').click(function(){
        var $text = $('#textbox').val();
        alert($text);
    })

    //give existing div properties to make it look like a square
    $('#hoverDiv').css({
        'background-color': 'black',
        'height': '100px',
        'width': '100px'
    })

    //make square change color when mouse hovers
    $('#hoverDiv').hover(function(){
        $('#hoverDiv').css('background-color', 'magenta')
        $('#hoverDiv').mouseleave(function(){
            $('#hoverDiv').css('background-color', 'black')
        })
    })

    //create a paragraph with text
    $('<p>I am paragraph text, click me</p>').attr('id', 'para').appendTo('body');

    //click on paragraph text to change to a random color
    $('#para').click(function(){
        var colors = ['red', 'orange', 'yellow', 'blue', 'green', 'purple'];
        var random = Math.floor(Math.random() * colors.length);
        $('#para').css('color', colors[random]);
    })


    //add an empty div then add a button to it
    $('<div><div>').attr({'name': 'emptydiv', 'id': 'div'}).appendTo('body');
    $('<button>Empty Div Button</div>').attr('id', 'btn3').appendTo(div);

    //upon button click, add a span with name of div, which is div
    $('#btn3').click(function(){
        $('<span>'+$('#div').attr('name')+'</span>').appendTo(div);
    })


    //with already created button and ul in html, click on button to list friends
    var friends = ['Robert', 'mom', 'dad', 'Vicki', 'Tom', 'Christina', 'Bianca', 'Gabriel', 'Matt', 'Amanda'];
    var count = 0;
    $('#btn4').click(function(){
        if(count<10){
        $('<li></li>').text(friends[count]).appendTo('#ul');
        count++;
        }
    })


})
$(document).ready(function () {

    //enable button only with typing
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    })

    //create unordered list in body (for task number 11 on)
    $('<ul></ul>').appendTo('body');


    //when button is clicked...
    $('#Submit').click(function () {


        //Tasks through number 10 (to view, make sure tasks number 11 to end are commented out, except last line 'return false')

        //when button is clicked, display message
        $('<p></p>').text("Button has been clicked").appendTo('body');

        //create variable to retrieve user input
        var input = $("#input").val();

        //create a new div on body
        $('<div></div>').appendTo('body');

        //make input a heading, append to div
        $('<h2>' + input + '</h2>').appendTo('div');


        // $('h2').attr('id', 'h2');
        $('h2').hover(function () {
            $('h2').css({
                'background-color': 'blue',
                'border': '2px solid black',
                'border-radius': '600px'
            })
        })


        //tasks number 11 to end (to view, uncomment block below and comment out code below 'tasks through number 10')

        //create variable to retrieve user input
        // var input = $("#input").val()

        //take user input text and make it a list item on unordered list      
        // $('<li>' + input + '</li>').appendTo('ul');

        //when you click on a list item, it changes color
        // $('li').click(function () {
        // var colors = ["pink", "purple", "teal", "grey", "greenyellow"];
        // var randomColor = colors[Math.floor(Math.random() * colors.length)];
        // $(this).css("color", randomColor);
        // })

        //when you double click on list item, it gets deleted
        // $('li').dblclick(function () {
        // $(this).remove();

    //these actions will only flash on screen for a second because it will reset after clicking submit, false prevents that
    return false;
    })



})




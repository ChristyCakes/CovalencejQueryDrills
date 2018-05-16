
document.addEventListener('DOMContentLoaded', function () {

    //create button with text in body on document
    var button = document.createElement('button');
    var buttonText = document.createTextNode('Click Me');
    button.appendChild(buttonText);
    document.body.prepend(button);

    //when you click button, display alert
    button.addEventListener("click", function () {
        alert("Good Work Christy!!!");
    })

    //retrieve user input in textbox and display in an alert
    var button2 = document.getElementById('button2')
    button2.addEventListener("click", function () {
        var text = document.getElementById('textbox').value;
        alert(text);
    })

    //style the hoverDiv so it's a visible box
    var hoverDiv = document.getElementById('hoverDiv');
    hoverDiv.style.backgroundColor = 'black';
    hoverDiv.style.height = '100px';
    hoverDiv.style.width = '100px';

    //on hovering, change box color
    hoverDiv.addEventListener("mouseover", function () {
        hoverDiv.style.backgroundColor = 'pink';
        hoverDiv.addEventListener("mouseout", function () {
            hoverDiv.style.backgroundColor = 'black';
        })
    })

    //create a paragraph with text
    var p = document.createElement('p');
    var pText = document.createTextNode('This is the text that goes in the paragraph');
    p.appendChild(pText);
    document.body.appendChild(p);

    //on clicking on paragraph text, change to a random color
    p.addEventListener("click", function () {
        var colors = ["pink", "purple", "teal", "grey", "greenyellow"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.color = randomColor;
    })

    //add a button and empty div
    var button3 = document.createElement('button');
    var button3Text = document.createTextNode('Empty Div Button');
    button3.appendChild(button3Text);
    document.body.appendChild(button3);
    var div = document.createElement('div');

    //click button to add a span inside empty div with its name 'div'
    button3.addEventListener("click", function(){
        var span = document.createElement('span');
        var spanText = document.createTextNode(div.localName);
        span.appendChild(spanText);
        document.body.appendChild(span);
    })


})
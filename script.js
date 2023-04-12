
var h2Element = document.querySelectorAll('main h2');

//uses for var loop to look through the different h2 in the main section
for(var i=0; i<h2Element.length; i++){
    //adds click event listener on the index of h2element and runs showhide function when clicked.
h2Element[i].addEventListener('click',showHide)
}
//checks the attibute of div and h2 element, if they have the two classes, if it doesnt it sets the attribute.
function showHide(){
    
        if(this.getAttribute('class')=="minus")
        { this.removeAttribute('class'),this.nextElementSibling.removeAttribute('class');
    
        }else{ (this.setAttribute('class','minus'),
            this.nextElementSibling.setAttribute('class','show'))
    
        }
        }
       
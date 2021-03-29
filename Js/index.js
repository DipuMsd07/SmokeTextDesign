const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

/* "/" indicate end of Pattern in reg Expression
    \S takes matches all white Space characters including: \t,\n,'',etc
    g matches string globally and using str.replace it replace it.

    $& puts single letter in each span.
*/
const letters = document.querySelectorAll('span');

for(let i=0; i<letters.length;i++)
{
    letters[i].addEventListener("mouseover",function(){

        letters[i].classList.add('active');
    });
}
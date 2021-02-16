const title = document.querySelectorAll('.card-title')
const rename = document.querySelectorAll('.rename')
const inputV = document.querySelectorAll('.input')
const buttonRename = document.querySelectorAll('.btn--rename')
const card = document.querySelectorAll('.transport');
const arrayElem = []

const titleText = title.innerText

for (var i = 0; i < title.length; i++){
    arrayElem.push(title[i]);
    title[i].addEventListener('click', function(e){
        const id = arrayElem.indexOf(e.target);
        title[id].classList.add('none')
        rename[id].classList.add('flex')
        
        buttonRename[id].onclick = () => {
          title[id].innerText = inputV[id].value
          title[id].classList.remove('none')
          rename[id].classList.remove('flex')
          console.log('Значение инпута', inputV[id].value);
          console.log('Заголовок', title[id]);
          card[id].onmousedown = function(e) {

            var coords = getCoords(card[id]);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;
          
            card[id].style.position = 'absolute';
            document.body.appendChild(card[id]);
            moveAt(e);
            function moveAt(e) {
              card[id].style.left = e.pageX - shiftX + 'px';
              card[id].style.top = e.pageY - shiftY + 'px';
            }
          
            document.onmousemove = function(e) {
              moveAt(e);
            };
          
            card[id].onmouseup = function() {
              document.onmousemove = null;
              card[id].onmouseup = null;
            };
          
          }
          
            card[id].ondragstart = function() {
              return false;
            };
            
            function getCoords(elem) {  
              var box = elem.getBoundingClientRect();
              return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
              };
            }
       }
       
    });
} 




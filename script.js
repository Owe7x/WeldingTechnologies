const title = document.querySelectorAll('.card-title')
const rename = document.querySelectorAll('.rename')
const inputV = document.querySelectorAll('.input')
const buttonRename = document.querySelectorAll('.btn--rename')
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
        
    }
    });
}

const card = document.querySelectorAll('.transport');

card.forEach(function(card) {
    card.onmousedown = function(e) {

        var coords = getCoords(card);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;
      
        card.style.position = 'absolute';
        document.body.appendChild(card);
        moveAt(e);
      
        card.style.zIndex = 1000; 
      
        function moveAt(e) {
          card.style.left = e.pageX - shiftX + 'px';
          card.style.top = e.pageY - shiftY + 'px';
        }
      
        document.onmousemove = function(e) {
          moveAt(e);
        };
      
        card.onmouseup = function() {
          document.onmousemove = null;
          card.onmouseup = null;
        };
      
      }
      
      card.ondragstart = function() {
        return false;
      };
      
      function getCoords(elem) {  
        var box = elem.getBoundingClientRect();
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      }
})



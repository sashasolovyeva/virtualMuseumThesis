$(document).ready(function() {

  var mousePos = { x: -1, y: -1 };
  let addedCount = 0;
  var toAdd;
  var objType = 'frame';

  createFrame(objType);



  function createFrame(objName) {
    if(objName != 'pen'){
      let randPic = Math.floor(Math.random() * 3 + 1);
      toAdd = $('<img />',
                 { id: 'addedFrame' + addedCount,
                   class: 'added',
                   width: 'auto',
                   height: 'auto',
                   src: 'images/' + objName + randPic + '.png',
                   allowMove: true,
                 })
                 .css({'opacity': '50%', 'left': '100%', 'top': '100%', 'max-height': '200px', 'max-width': '300px'})
                 .appendTo($('.pagecontent'));
      addedCount++;
    } else {
        toAdd = $('<input />',
                   { class: 'added',
                     type: 'text',
                     value: 'Write your thoughts here',
                     allowMove: true,
                   })
                   .css({'position': 'absolute', 'left': '100%', 'top': '100%', 'background-color': 'inherit',
                   'width': '200px', 'height': '100px', 'font-family': 'neue-haas-unica, sans-serif', 'font-size': '1em', 'padding': '0 .3vw'})
                   .appendTo($('.pagecontent'));
    }

    $(document).mousemove(function(event) {
        mousePos.x = event.pageX;
        mousePos.y = event.pageY;

        if(toAdd != null){
          if(toAdd.allowMove || toAdd.allowMove == null){
            toAdd.css({'left': mousePos.x - toAdd.width()/2, 'top': mousePos.y - toAdd.height()/2});
          }
        }
    });

  }


  function setFrame() {
    if(toAdd != null){
      toAdd.allowMove = false;
      toAdd = null;
    }
  }

  $('.iconimg').mousedown(function(event) {
    event.stopPropagation();
    if(toAdd != null){
      toAdd.css({'display': 'none'});
    }

    objType = this.id;
    createFrame(objType);
    toAdd.allowMove = true;
  });


  $('.pagecontent').on('click', setFrame);


})

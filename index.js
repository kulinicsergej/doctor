
document.addEventListener('DOMContentLoaded', function() {
  var tabl = document.querySelector('.tabl');
  var tabl2 = document.querySelector('.tabl2');
  var button = document.querySelector('.blue__head');
  var button2 = document.querySelector('.green__head');

  function toggleModal(modal) {
    if (modal.style.display === 'none' || modal.style.display === '') {
      modal.style.display = 'flex';
    } else {
      modal.style.display = 'none';
    }
  }

  button.addEventListener('click', function() {
    toggleModal(tabl);
  });

  button2.addEventListener('click', function() {
    toggleModal(tabl2);
  });

  window.addEventListener('click', function(event) {
    if (event.target !== button && event.target !== button2 && tabl.style.display === 'flex') {
      tabl.style.display = 'none';
    }
    if (event.target !== button && event.target !== button2 && tabl2.style.display === 'flex') {
      tabl2.style.display = 'none';
    }
  });
});


// alert('Буду рад если дадите шанс доделать и попасть к вам на работу)')
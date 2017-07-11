(function() {
    'use strict';

    var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }

    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });

    dialog.querySelector('.agree').addEventListener('click', function() {
      console.log("Agree...");
       dialog.close();
    });

    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });

}());

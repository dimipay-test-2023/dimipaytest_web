let isOpened = false;
function select_All(){
    const cb = document.querySelectorAll('input[type="checkbox"]');
    for (let i=1; i<cb.length; i++){
        cb[i].checked = cb[0].checked;
    }
}
function open_Add(){
    if (isOpened) return;
    
    isOpened = true;
    
}
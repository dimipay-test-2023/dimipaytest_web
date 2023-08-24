function selectAll(){
    const cb = document.querySelectorAll('input[type="checkbox"]');
    for (let i=1; i<cb.length; i++){
        cb[i].checked = cb[0].checked;
    }
}
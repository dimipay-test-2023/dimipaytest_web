const addFrame = `
<div class="add-bar">
    <header>
        <h3>새 상품 등록</h3>
        <img src="imgs/삭제 마크.png" onclick="close_Add()">
    </header>
    <h4>정보</h4>
    <div>
        <p>상품 이름</p>
        <input type="text" id="name" placeholder="상품 이름을 입력해주세요">
    </div>
    <h5>추후 수정이 불가능합니다.</h5>
    <div>
        <p>단가</p>
        <input type="text" id="price" placeholder="가격을 입력해주세요">
    </div>
    <div style="margin-top: 20px;">
        <p>바코드</p>
        <input type="text" id="barcode" placeholder="바코드를 입력해주세요">
    </div>
    <div style="margin-top: 20px;">
        <p>분류</p>
        <input type="text" id="type" placeholder="분류를 입력해주세요">
    </div>
    <button>저장</button>
</div>`

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
    const container = document.querySelector(".container");
    container.innerHTML += addFrame;
}
function close_Add(){
    isOpened = false;
    const container = document.querySelector(".container");
    container.removeChild(container.lastChild);
}
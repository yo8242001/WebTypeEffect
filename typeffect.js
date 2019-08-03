var texts = ["網頁設計師", "平面設計師", "遊戲開發者"];    // 打字 - 陣列
var speed = 150;                                        // 打字速度 - 毫秒
var index = 0;                                          // 索引值 - 從 0 開始
var classname = ".type";                                // 類別名稱
var count = 0;                                          // 文字數量
var wait = 6;                                           // 等待

// 函式 打字
function type() {

    var t = document.querySelector(classname);          // 搜尋元素

    var letter = texts[index].slice(0, count++);        // 切割文字(開始位置，切割數量)

    t.innerHTML = letter;                               // 插入 HTML = 文字

    if (count == texts[index].length + wait) {          // 文字數量 等於 當前文字長度+等待
        index++;                                        // 索引值 +1
        count = 0;                                      // 文字數量 歸零
    }

    if (index == texts.length) {                        // 如果索引值等於長度
        index = 0;                                      // 索引值 歸零
    }

    setTimeout(type, speed);                            // 重複執行方法指定間隔時間
}

document.addEventListener("DOMContentLoded", type());   // DOMContentLoded 網頁載入完成後執行
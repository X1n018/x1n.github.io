// 🛡️ 基础防偷窥（禁止右键和F12）
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'J')) {
        event.preventDefault();
    }
});
document.getElementById('calcBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value.trim();
    if (!name) {
        alert("先输入个名字再算啊！");
        return;
    }

    let score = 0;
    let text = "";

    // ==========================================
    // 彩蛋区
    // ==========================================
        // 👑 作者专属隐藏防御
    if (name === "陈欣平" || name === "x1n") {  
        score = 0; 
        text = "检测到系统最高权限!该用户资料已被加密，无法查看。";
    } 
    else if (name === "陈凌砚") {  
        score = 999;
        text = "系统已烧毁!";
    } 
    else if (name === "单靖洋") { // 换成朋友A的名字
        score = 999;
        text = "表面上：我是直的。背地里：姐姐踩我！纯纯的嘴硬型百合。";
    }
    else if (name === "雷婧祎") { // 换成朋友B的名字
        score = 888;
        text = "系统算出她昨天半夜在偷偷搜美女贴贴文，手机里全是漂亮姐姐。";
    }
    // ==========================================
    // 正常人的计算逻辑
    // ==========================================
    else {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash += name.charCodeAt(i) * (i + 1);
        }
        score = (hash % 91) + 5; // 普通人分数控制在 5 - 95 之间

        // 普通文案池
        if (score >= 80) {
            text = "雷达疯狂作响，看到美女经常忘记呼吸，随时准备弯。";
        } else if (score >= 50) {
            text = "有一点点小悸动，偶尔会被漂亮姐姐掰弯，只是嘴硬。";
        } else if (score >= 30) {
            text = "大部分时候很直，但遇到那种极品天菜可能会动摇一下。";
        } else {
            text = "非常正直，心如止水，纯纯的直女，毫无波澜。";
        }
    }

    // ==========================================
    // 更新页面显示
    // ==========================================
    const resultArea = document.getElementById('resultArea');
    resultArea.classList.remove('hidden');
    
    document.getElementById('resultTitle').innerHTML = `计算结果 for <span>"${name}"</span>`;
    
    const progressFill = document.getElementById('progressFill');
    
    const barWidth = score > 100 ? 100 : score; // 超过100就撑满
    
    progressFill.style.width = "0%"; // 重置动画
    
    setTimeout(() => {
        progressFill.style.width = `${barWidth}%`;
        progressFill.innerText = `${score}%`; 
    }, 50);
    
    // 超过100变红警告
    if (score > 100) {
        progressFill.style.backgroundColor = "#ef4444"; 
    } else {
        progressFill.style.backgroundColor = "#f97316";
    }
    
    document.getElementById('resultText').innerText = text;
});
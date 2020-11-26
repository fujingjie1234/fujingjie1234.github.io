(function() {
    /**
     * aqiData，存储用户输入的空气指数数据
     * 示例格式：
     * aqiData = {
     *    "北京": 90,
     *    "上海": 40
     * };
     */
    var aqiData = {};
    var addBtn, iptCity, iptValue, aqiTable;
 
    /**
     * 从用户输入中获取数据，向aqiData中增加一条数据
     * 然后渲染aqi-list列表，增加新增的数据
     */
    function addAqiData() {
        var isZhOrEn = /^[a-zA-Z\u4e00-\u9fa5]+$/.test(iptCity.value);
        var isInteger = /^\d+$/.test(iptValue.value);
 
        if (isZhOrEn && isInteger) {
            aqiData[iptCity.value] = iptValue.value;
        } else {
            isZhOrEn || alert('城市名输入错误: 请输入中英文字符!');
            isInteger || alert('空气质量输入错误: 请输入一个整数!');
        }
    }
 
    /**
     * 渲染aqi-table表格
     */
    function renderAqiList() {
        var domStr = JSON.stringify(aqiData) === '{}' ? '' :
            `<tr>
                <td>城市</td>
                <td>空气质量</td>
                <td>操作</td>
            </tr>`;
 
        for (var key in aqiData) {
            domStr +=
            `<tr>
                <td>${key}</td>
                <td>${aqiData[key]}</td>
                <td>
                    <button>删除</button>
                </td>
            </tr>`;
        }
 
        aqiTable.innerHTML = domStr;
    }
 
    /**
     * 点击add-btn时的处理逻辑
     * 获取用户输入，更新数据，并进行页面呈现的更新
     */
    function addBtnHandle() {
        addAqiData();
        renderAqiList();
    }
 
    /**
     * 点击各个删除按钮的时候的处理逻辑
     * 获取哪个城市数据被删，删除数据，更新表格显示
     */
    function delBtnHandle(ev) {
        if (ev.target.nodeName.toLowerCase() !== 'button') return false;
 
        var key = ev.target.parentNode.parentNode.children[0].innerText;
 
        delete aqiData[key];
         
        renderAqiList();
    }
 
    /**
     * 输入城市和空气质量时修整value值首尾空格
     */
    function trimInput() {
        this.value = this.value.trim();
    }
 
    function init() {
        // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
        addBtn = document.querySelector('#add-btn');
        iptCity = document.querySelector('#aqi-city-input');
        iptValue = document.querySelector('#aqi-value-input');
        aqiTable = document.querySelector('#aqi-table');
 
        addBtn.addEventListener('click', addBtnHandle, false);
        iptCity.addEventListener('keyup', trimInput, false);
        iptValue.addEventListener('keyup', trimInput, false);
 
        // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
        aqiTable.addEventListener('click', delBtnHandle, false);
    }
 
    window.addEventListener('DOMContentLoaded', init, false);
})();
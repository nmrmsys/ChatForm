(function(){

    var save = function() {
        if(window.confirm('設定を保存しますか？')){
            localStorage['api_token'] = document.getElementById('api_token').value;
        }
    }

    if (localStorage['api_token']) {
        document.getElementById('api_token').value = localStorage['api_token'];
    }
    document.getElementById('save').addEventListener('click', save);

}());


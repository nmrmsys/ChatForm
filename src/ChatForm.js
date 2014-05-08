(function(){

    var sendToChatWork = function(api_token, room_id, content) {
        $.ajax({
            url: 'https://api.chatwork.com/v1/rooms/' + room_id + '/messages',
            type: 'POST',
            headers: {
               'X-ChatWorkToken': api_token
            },
            dataType: 'json',
            data: {body: content}
        });
    };

    var send = function() {

        if (!localStorage['api_token']) {
            alert('設定画面で ChatWork APIトークンを設定して下さい');
            return;
        }
        if (!document.getElementById('room_id').value) {
            alert('投稿先ルームIDを入力して下さい');
            return;
        }
        if (!document.getElementById('content').value) {
            alert('投稿メッセージを入力して下さい');
            return;
        }
        if(window.confirm('ChatWorkに送信しますか？')){
            sendToChatWork(
                localStorage['api_token'],
                document.getElementById('room_id').value,
                document.getElementById('content').value
            );
            localStorage['room_id'] = document.getElementById('room_id').value;
            localStorage['content'] = document.getElementById('content').value;
        }
    }

    if (localStorage['room_id']) {
        document.getElementById('room_id').value = localStorage['room_id'];
    }
    if (localStorage['content']) {
        document.getElementById('content').value = localStorage['content'];
    }

    document.getElementById('send').addEventListener('click', send);

}());


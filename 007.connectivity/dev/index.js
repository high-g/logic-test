'use strict';

var jQuery = require('jQuery');

(function($){
  var area1 = $('#area1'),
      btn_ins = $('#btn_ins');
  
  btn_ins.on('click', insert);
  
  show();

  function show() {
    var str_html = '<table>'
                 + '<tr>'
                 + '<td>会員ID</td>'
                 + '<td>氏名</td>'
                 + '<td>住所</td>'
                 + '<td>生年月日</td>'
                 + '<td>登録日</td>'
                 + '<td>更新日</td>'
                 + '<td></td>'
                 + '</tr>';

    $.ajax({
      url: '../server/get.php',
      type: 'post'
    }).done(function(data) {
      console.log('success');
      for(var i=0; i<data.length; i++) {
        str_html += '<tr>'
                  + '<td>' + data[i].id + '</td>'
                  + '<td>' + data[i].name + '</td>'
                  + '<td>' + data[i].address + '</td>'
                  + '<td>' + data[i].birth + '</td>'
                  + '<td>' + data[i].ins_date + '</td>'
                  + '<td>' + data[i].upd_date + '</td>'
                  + '<td><button class="btn_del" data-id="'+ data[i].id +'">削除</button></td>'
      }
      str_html += '</table>';
      area1.html(str_html);
    }).fail(function(data) {
      console.log('fail', data);
    });
  }

  function insert() {
    var member_name = $('#member_name'),
        member_address = $('#member_address'),
        member_birth = $('#member_birth');

    if(member_name.val() !== '' && 
       member_address.val() !== '' && 
       member_birth.val() !== '') {
      $.ajax({
        url: '../server/insert.php',
        type: 'post',
        data: {
          member_name: member_name.val(),
          member_address: member_address.val(),
          member_birth: member_birth.val()
        }
      }).done(function(data) {
        console.log('success', data);
        show();
      }).fail(function(data) {
        console.log('fail', data);
      });
    }
  }
})(jQuery);
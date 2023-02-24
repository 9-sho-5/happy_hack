$(document).ready(function(){
    $('.bg_slider').bxSlider({
      mode: "fade",
      auto: "true",
      pause: 7000,
      pager: false,
      infiniteLoop: true,
      controls: false,
    });
});

$('.slider').slick({
    arrows: true,
    dots: true, // ドットインジケーターの表示
    infinite: true, // スライドのループを有効にするか
    slidesToShow: 4, // 表示するスライド数を設定
    slidesToScroll: 1, // スクロールするスライド数を設定
    responsive: [
        {
          breakpoint: 768, // 399px以下のサイズに適用
          settings: {
            slidesToShow: 2,
          },
        },
      ],
});

//「開く」がクリックされた場合
$(document).on('click', '.ham_menu', function () {
    if ($('body').css('overflow-y') == 'auto') {
        $('.ham_menu[data-state="inactive"]').attr('data-state', 'active');
        $('.window-fixed').css('opacity', '1');
        $('.window-fixed').css('pointer-events', 'all');
        $('.window-fixed').css('transform', 'translateX(0%)');
        $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効s
    } else if ($('body').css('overflow-y') == 'hidden') {
        $('.ham_menu[data-state="active"]').attr('data-state', 'inactive'); // モーダルウィンドウを非表示
        $('.window-fixed').css('opacity', '0');
        $('.window-fixed').css('pointer-events', 'none');
        $('.window-fixed').css('transform', 'translateX(100%)');
        $('body').css('overflow-y', 'auto');     // 本文の縦スクロールを有効
    };
});
$(document).on('click', '.links_wrap a', function () {
    if ($('body').css('overflow-y') == 'auto') {
        $('.ham_menu[data-state="inactive"]').attr('data-state', 'active');
        $('.window-fixed').css('opacity', '1');
        $('.window-fixed').css('pointer-events', 'all');
        $('.window-fixed').css('transform', 'translateX(0%)');
        $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効s
    } else if ($('body').css('overflow-y') == 'hidden') {
        $('.ham_menu[data-state="active"]').attr('data-state', 'inactive'); // モーダルウィンドウを非表示
        $('.window-fixed').css('opacity', '0');
        $('.window-fixed').css('pointer-events', 'none');
        $('.window-fixed').css('transform', 'translateX(100%)');
        $('body').css('overflow-y', 'auto');     // 本文の縦スクロールを有効
    };
});

window.addEventListener('load', function(){
    //下記particles-js↓のところはHTMLで指定したidと合わせてください
    particlesJS('particle-js',{
    "particles":{
    
    //--シェイプの設定----------
        "number":{
            "value":50, //シェイプの数
            "density":{
            "enable":true, //シェイプの密集度を変更するか否か
            "value_area":200 //シェイプの密集度
            }
        },
        "shape":{
            "type":"circle", //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
            "stroke":{
            "width":0, //シェイプの外線の太さ
            "color":"#ffcc00" //シェイプの外線の色
            },
            //typeをpolygonにした時の設定
            "polygon": {
            "nb_sides": 5 //多角形の角の数
            },
            //typeをimageにした時の設定
            "image": {
            "src": "images/hoge.png",
            "width": 100,
            "height": 100
            }
        },
        "color":{
            "value":"#ffffff" //シェイプの色
        },
        "opacity":{
            "value":1, //シェイプの透明度
            "random":false, //シェイプの透明度をランダムにするか否か
            "anim":{
            "enable":false, //シェイプの透明度をアニメーションさせるか否か
            "speed":10, //アニメーションのスピード
            "opacity_min":0.1, //透明度の最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
            }
        },
        "size":{
            "value":5, //シェイプの大きさ
            "random":true, //シェイプの大きさをランダムにするか否か
            "anim":{
            "enable":false, //シェイプの大きさをアニメーションさせるか否か
            "speed":40, //アニメーションのスピード
            "size_min":0.1, //大きさの最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
            }
        },
    //--------------------
    
    //--線の設定----------
        "line_linked":{
            "enable":true, //線を表示するか否か
            "distance":150, //線をつなぐシェイプの間隔
            "color":"#ffffff", //線の色
            "opacity":0.4, //線の透明度
            "width":1 //線の太さ
        },
    //--------------------
    
    //--動きの設定----------
        "move":{
            "speed":10, //シェイプの動くスピード
            "straight":false, //個々のシェイプの動きを止めるか否か
            "direction":"none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
            "out_mode":"out" //エリア外に出たシェイプの動き(out、bounceより選択)
        }
    //--------------------
    
        },
        "retina_detect":true, //Retina Displayを対応するか否か
        "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
    }
    ); 
}); 
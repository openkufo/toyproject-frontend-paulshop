
let code = {
    editor1: {
        html :
`<!DOCTYPE html>
<html lang="en">
<!-- head Start -->
<head>
    <!-- title ...  link ... -->
    <style>
        #editor {
            position: relative;
            width: 400px;
            height: 400px;
        }
    </style>
</head>
<!-- head End -->
<!-- body start -->
<body>
    <!-- Ace Code Editor Div Start -->
    <div id="editor">function test(){
    // 코딩
}</div>
    <!-- Ace Code Editor Div End -->

    <!-- ACE Code Editor Setting Start -->
    <script src="assets/ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
    <script>
        // 해당 div의 ID 선택
        let editor = ace.edit("editor");
        
        // 코드 에디터 테마
        editor.setTheme("ace/theme/eclipse");
        
        // 코드 에디터 언어
        editor.session.setMode("ace/mode/javascript");

        // 코드 에디터의 내용 설정([ \` ] 백틱(backtick) 사용하여 멀티라인 구현)
        editor.session.setValue(\`// https://ace.c9.io/
        // 2번째 줄 주석
        // 3번째 줄 주석
        \`);
    </script>
    <!-- ACE Code Editor Setting End -->
</body>
</html>`,
        css :
`#editor {
    position: relative;
    width: 400px;
    height: 400px;
}`,
        javascript :
`// 해당 div의 ID 선택
let editor = ace.edit("editor");

// 코드 에디터 테마
editor.setTheme("ace/theme/eclipse");

// 코드 에디터 언어
editor.session.setMode("ace/mode/javascript");

// 코드 에디터의 내용 설정([ \` ] 백틱(backtick) 사용하여 멀티라인 구현)
editor.session.setValue(\`// https://ace.c9.io/
// 2번째 줄 주석
// 3번째 줄 주석
\`);`
    },
    editor2: {
        html :
`<div id="btn_position" class="position-absolute w-100">
    <button id="btn_more" type="button" class="btn btn-outline-success rounded-pill position-absolute">더보기</button>
    <button id="btn_stop" type="button" class="btn btn-outline-success rounded-pill d-none position-absolute">그만보기</button>
</div>`,
        css : `/* bootstrap 사용 */`,
        javascript :
`let box = $('#btn_position');
box.animate({left: '+=100'}, 1000, function(){
    $('#btn_more').animate({width: '+=19'}, 1000, function(){
        $('#btn_more').addClass('d-none');
        $('#btn_stop').removeClass('d-none');
    });
});`
    },
    editor3: {
        html :
`<div class="box position-absolute"></div>`,
        css :
`.box{
    width: 50px;
    height: 50px;
    left: 270px;
    top: 190px;
    background-color: orange;
}`,
        javascript :
`function random(){
    return Math.floor(Math.random() * 256);
}

$('#btn-run-3').on('click', function(){
    let box = $('#box');
    let step1 = box.animate({left : '+=20'}, 'fast');
    let step2 = step1.animate({left : '-=40'}, 'fast');
    step2.animate({left : '+=20'}, 'fast', function(){
        let r = random();
        let g = random();
        let b = random();
        let rgb = r + ',' + g + ',' + b
        box.css('background-color', 'rgb(' + rgb +')');
    });
});`
    }
}

function main(){
    let editor1 = ace.edit("editor1");
    editor1.setTheme("ace/theme/eclipse");
    editor1.session.setMode("ace/mode/html");
    editor1.setReadOnly(true);
    editor1.session.setValue(code.editor1.html);

    let editor2 = ace.edit("editor2");
    editor2.setTheme("ace/theme/eclipse");
    editor2.session.setMode("ace/mode/javascript");
    editor2.setReadOnly(true);
    editor2.session.setValue(code.editor2.javascript);

    let editor3 = ace.edit("editor3");
    editor3.setTheme("ace/theme/eclipse");
    editor3.session.setMode("ace/mode/javascript");
    editor3.setReadOnly(true);
    editor3.session.setValue(code.editor3.javascript);
}

main();

function changeEditor(){
    let id = $(this).parent().parent().next().attr('id');
    let mode = $(this).next().text().toLowerCase();
    let editor = ace.edit(id);
    editor.session.setValue(code[id][mode]);
    editor.session.setMode("ace/mode/" + mode);
}

$('.html').on("click", changeEditor);
$('.css').on("click", changeEditor);
$('.javascript').on("click", changeEditor);

$('#btn-run-1').one('click', function(){
    $('#change-editor').attr('id', 'sub_editor');
    let sub_editor = ace.edit("sub_editor");
    sub_editor.setTheme("ace/theme/eclipse");
    sub_editor.session.setMode("ace/mode/javascript");
    sub_editor.session.setValue(`// https://ace.c9.io/
// 2번째 줄 주석
// 3번째 줄 주석
`);
});

function boxSet(){
    $('#btn_more').css('width', '=-19');
    $('#btn_more').addClass('d-none');
    $('#btn_stop').removeClass('d-none');
}

function btnRun(){
    $('#btn-run-2').off('click');
    let box = $('#btn_position');
    box.animate({left: '+=100'}, 1000, function(){
        $('#btn_more').animate({width: '+=19'}, 1000, function(){
            setTimeout(() => {
                box.offset({left: box.offset().left - 100});
                $('#btn_more').removeClass('d-none');
                $('#btn_stop').addClass('d-none');
                $('#btn-run-2').on('click', btnRun);
            }, 3000);
            boxSet();
        });
    });
}

$('#btn-run-2').on('click', function(){
    btnRun();
});

function random(){
    return Math.floor(Math.random() * 256);
}

$('#btn-run-3').on('click', function(){
    let box = $('#box');
    let step1 = box.animate({left : '+=20'}, 'fast');
    let step2 = step1.animate({left : '-=40'}, 'fast');
    step2.animate({left : '+=20'}, 'fast', function(){
        let r = random();
        let g = random();
        let b = random();
        let rgb = r + ',' + g + ',' + b
        box.css('background-color', 'rgb(' + rgb +')');
    });
});
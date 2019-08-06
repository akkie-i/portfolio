<template>
    <div class="contact fadein">
        <div class="container text-center">
            <h2 class="h2-contents">Contact</h2>
            <p class="contact-p">
                制作の依頼・ご相談（無料）など
                <br> お気軽に下記メールアドレスまでご連絡ください。
            </p>
            <a href="mailto:zizi@zizi.tokyo" class="tokyo"><i class="far fa-envelope mail"></i>zizi@zizi.tokyo</a>
            <p class="contact-p2">
                翌営業日までに返信いたします。
                <br> もし返信がない場合は
                <br class="br-sp">迷惑メールフォルダをご確認ください。
            </p>
        </div>
        <div class="main-contents"></div>
        <div class="parent"><a href="#" class="san"></a></div>
    </div>

</template>

<style lang='scss' scoped>
.contact {
	padding-top: 100px;
	height: 100vh;
	line-height: 1.9;
}


.contact-p {
	margin-top:-10px;
	margin-bottom: 20px;
}

.tokyo {
	font-size: 30px;
	display: inline-block;
	margin-bottom: 50px;
	color:#fff;
}

.tokyo:hover {
	color:#fff!important;
}

.mail {
	margin-right: 20px;
	position: relative;
	top:5px;
}

.main-contents {
  height: 20vh;
  position: relative;
}
.main-contents:before {
  position: absolute;
  content: "";
  background: #333;
  width: 1px;
  height: 100%;
  left: 50%;
  top:20%;
}

.parent {
	text-align: center;
}

.san {
	display:inline-block;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 75px 100px 75px;
	border-color: transparent transparent #d1d1d1 transparent;
	line-height: 0px;
	position: relative;
	top:30px;
}
</style>
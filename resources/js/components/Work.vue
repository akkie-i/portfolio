<template>
    <div class="works fadein">
        <div class="text-center con-2">
            <h2 class="h2-contents">Works</h2>
            <h3 class="service-h3 text-center w-p">ホームページ制作、BGM制作、<br class="br-sp">動画編集、写真編集、空撮、Kindle作家として<br class="br-sp">書籍も販売しています。</h3>
            <ul>
                <li class="sp-menu"><a href="https://drive.google.com/drive/folders/1Kq7F8kICiS0WeK5VrTrWAqJeZXnupcIR" target="blank" class="port lazyload" data-bg="../img/code.jpg">Portfolio</a></li>
                <li class="sp-menu movie lazyload" data-bg="../img/drone2.jpg"><a href="https://www.youtube.com/embed/ZQCPsFPDPn4" target="blank">Movie</a></li>
                <li class="sp-menu kindle lazyload" data-bg="../img/james.jpg"><a href="https://amzn.to/2KOdR81" target="blank">Kindle</a></li>
                <li class="sp-menu inter lazyload" data-bg="../img/interview.jpg"><a href="https://souspeak.com/wh/taikendan/zizi/" target="blank">Interview</a></li>
            </ul>
        </div>
        <div class="clear"></div>
    </div>

</template>

<style lang='scss' scoped>
.works h3 {
	margin-bottom: 70px;
}


.service-h3 {
	margin-top:-20px;
	line-height: 1.5em;
}

.works {
	padding-top: 60px;
	/*background-image: url(../img/work.jpg)!important;*/
	background-repeat: no-repeat;
	background-size: cover;
	background-position:center;
	height:100vh;
	line-height: 1.9;
}

.works:hover {
	filter:saturate(100%);
}

.works a {
	text-decoration: none;
}

.video{
  position:relative;
  width:100%;
  padding-top:56.25%;
  height: 0;
  overflow:hidden;
  margin-bottom: 20px;
}
.video iframe{
  position:absolute;
  top:0;
  right:0;
  width:100%;
  height:100%;
}

.sp-menu a {
	font-size: 100px;
	text-align: center;
	display: block;
	color:#fff;
	text-decoration: none;
	letter-spacing: 0.3em;
	padding:20px 0;
}

.sp-menu {
	width: 50%;
	float: left;
}

.sp-menu:hover {
	opacity:0.8;
}

.port {
	/*background-image: url(../img/code.jpg);*/
	background-size: cover;
	background-position:center;
	background-repeat: no-repeat;
}

.movie {
	/*background-image: url(../img/drone2.jpg);*/
	background-size: cover;
	background-position:25% 20%;
	background-repeat: no-repeat;
}

.kindle {
	/*background-image: url(../img/james.jpg);*/
	background-size: cover;
	background-position:center;
	background-repeat: no-repeat;
}

.inter {
	/*background-image: url(../img/interview.jpg);*/
	background-size: cover;
	background-position:center;
	background-repeat: no-repeat;
}
</style>
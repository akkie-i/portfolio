<template>
    <div class="service fadein">
        <div class="container">
            <h2 class="h2-contents hg">Service</h2>
            <h3 class="service-h3 text-center">デザインから<br class="br-sp">HTML、CSS、JavaScrpt コーディングまで。<br>
ウェブサイト制作全般に対応いたします。</h3>
            <div class="row text-center co">
                <div class="col-md-4">
                    <div class="circle">
                        <span class="circle1">
        <i class="fas fa-desktop"></i>
    </span>
                    </div>
                    <h3 class="title-text">ホームページ制作</h3>
                    <p class="title-sub">ウェブ制作全般</p>
                    <p class="caption">企画から制作、運営サポートまで、
                        <br>お気軽にご相談ください。</p>
                </div>
                <div class="col-md-4">
                    <div class="circle">
                        <span class="circle2">
        <i class="fab fa-wordpress"></i>
    </span>
                    </div>
                    <h3 class="title-text wpc">WordPress</h3>
                    <p class="title-sub wpsub">設計・デザイン</p>
                    <p class="caption">更新が必要なサイトは
                        <br>WordPress をご提案しています。
                        <br>個人ブログやウェブマガジンにも対応可能です。</p>
                </div>
                <div class="col-md-4">
                    <div class="circle">
                        <span class="circle3">
        <i class="far fa-building"></i>
    </span>
                    </div>
                    <h3 class="title-text">コーポレートサイト</h3>
                    <p class="title-sub">会社案内・商品紹介</p>
                    <p class="caption">会社のイメージを重視しながら
                        <br>会社概要やお知らせの掲載、
                        <br>所在地地図の設置などに対応します。
                        <br>キャンペーンページや
                        <br>ブランドサイトもご相談ください。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.service {
	padding-top: 50px;
	/*background-image: url(../img/perthsunset2.jpg)!important;*/
	background-repeat: no-repeat;
	background-size: cover;
	background-position:center;
	height:100vh;
	line-height: 1.9;
}

.service:hover {
	filter:saturate(100%);
}

.service-h3 {
	margin-bottom:60px;
	font-size: 15px;
	color:#fff;
}

.wpc {
	font-size: 19px;
	letter-spacing: 0.2em
}

.circle1 {
display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color:#4295A5;
  text-align:center;
  line-height: 260px;
  vertical-align: middle;
  color:#fff;
}

.circle2 {
display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color:#EC5F;
  text-align:center;
  line-height:260px;
  vertical-align: middle;
  color:#fff;
}



.circle3 {
display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color:#EC5F59;
  text-align:center;
  line-height:260px;
  vertical-align: middle;
  color:#fff;
}



.fa-desktop {
	font-size: 90px;
}

.fa-wordpress,.fa-building {
	font-size: 90px;
}

.title-text {
	padding-top: 50px;
	font-weight: bold;
	font-size: 20px;
	color:#fff;
}

.title-sub {
	font-weight: bold;
	padding-bottom: 20px;
	font-size: 14px;
	color:#fff;
}

.caption {
	color:#fff!important;
}
</style>
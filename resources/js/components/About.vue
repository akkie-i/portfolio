<template>

  <div class="about fadein">
    <div class="container">
      <h2 class="h2-contents ab">About</h2>
      <div class="row">

        <div class="col-md-6 col-xs-12 text-center">
          <img src="img/asakusa2.jpg" class="me">
          <div class="row nn">
            <h3 class="skills text-center">Skills</h3>

            <!-- Skills_HTML -->
            <div class="col-md-6 col-xs-6">
              <h3 class="bar" style="color:#fff;">HTML</h3>
              <div class="progress">
                <div class="html progress-bar active" style="width:90%"></div>
              </div>
            </div>

            <!-- Skills_CSS -->
            <div class="col-md-6 col-xs-6">
              <h3 class="bar" style="color:#fff;">CSS</h3>
              <div class="progress">
                <div class="css progress-bar active" style="width:80%"></div>
              </div>
            </div>

            <!-- Skills_JavaScript -->
            <div class="col-md-6 col-xs-6">
              <h3 class="bar" style="color:#fff;">JavaScript</h3>
              <div class="progress">
                <div class="java progress-bar active" style="width:60%"></div>
              </div>
            </div>

            <!-- Skills_Wordpress -->
            <div class="col-md-6 col-xs-6">
              <h3 class="bar" style="color:#fff;">WordPress</h3>
              <div class="progress">
                <div class="wp progress-bar active" style="width:70%"></div>
              </div>
            </div>

            <!-- Skills_example -->       
            <div class="col-md-6 col-xs-6">
              <h3 class="bar" style="color:#fff;">Photoshop</h3>
              <div class="progress">
                <div class="ps progress-bar active" style="width:80%"></div>
              </div>
            </div>

            <!-- Skills_example -->
            <div class="col-md-6 col-xs-6">
              <h3 class="bar" style="color:#fff;">Premiere Pro</h3>
              <div class="progress">
                <div class="pp progress-bar active" style="width:80%"></div>
              </div>
            </div>

          </div> <!--div class="row nn"-->
        </div> <!--div class="col-md-6 col-xs-12 text-center"-->

        <div class="col-md-6 col-xs-12 text-center right">
          <p class="about-p">岩澤 輝人 ／ Akihito Iwasawa</p>
          <p class="about-p1">Programmer ／ Engineer ／ Blogger</p>
          <p class="about-p2">千葉県船橋市生まれ</p>
          <p class="about-p3">大学を中退後、<br>紆余曲折しながらも<br class="br-sp">Webエンジニアへ転身</p>
          <p class="about-p4">現在までのキャリア</p>

          <table style="margin:0 auto;color:#fff;">
            <tr>
              <td>→</td>
              <td>夏はライフガード、<br class="br-sp">冬はスノボインストラクター</td>
            </tr>
            <tr>
              <td>→</td>
              <td>リゾートバイト3ヶ月で100万円稼ぐ</td>
            </tr>
            <tr>
              <td>→</td>
              <td>フィリピン英語留学</td>
            </tr>
            <tr>
              <td>→</td>
              <td>オーストラリア留学＆ワーホリ</td>
            </tr>
            <tr>
              <td>→</td>
              <td>Web系フリーランス</td>
            </tr>
          </table>

          <div class="row icon">
            <div class="col-md-3 col-xs-3">
              <a href="https://twitter.com/ZiziNomad" target="blank"><i class="fab fa-twitter"></i></a>
            </div>
            <div class="col-md-3 col-xs-3">
              <a href="https://www.instagram.com/fantasista002/?hl=ja" target="blank"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="col-md-3 col-xs-3">
              <a href="https://www.youtube.com/channel/UCfusQpPSqptG_1rY7qLQtpg?view_as=subscriber" target="blank"><i class="fab fa-youtube"></i></a>
            </div>
            <div class="col-md-3 col-xs-3">
              <a href="mailto:zizi@zizi.tokyo"><i class="far fa-envelope"></i></a>
            </div>
          </div>

        </div> <!--div class="col-md-6 col-xs-12 text-center right"-->
      </div> <!--div class="row"-->
    </div> <!--div class="container"-->
  </div> <!--div class="about fadein"-->

</template>

<style lang='scss' scoped>
.about {
	background-image: url(../../../public/images/slide-1.jpg);
	background-position:center;
	background-repeat: no-repeat;
	background-size: cover;
	line-height: 1.9;
}

.ab {
	margin-bottom: 50px!important;
}

.me {
	border-radius: 10%;
	display: inline-block;
	width: 90%;
}

.skills {
	font-size:30px;
	padding: 20px;
	color:#fff;
}

.bar {
	padding-bottom: 10px;
}

.about {
	padding-top: 50px;
	padding-bottom: 50px;
	height:100vh;
}

.about p {
	color:#fff;
}

.about-p {
	font-size: 40px;

}

.about-p1 {
	margin-bottom: 30px;
	font-size: 20px;
}

.about-p2 {
	margin-bottom: 30px;
}

.about-p3 {
	margin-bottom: 30px;
}

.about-p4 {
	margin-bottom: 20px;
}

.h2-contents {
	font-size: 50px;
	margin-bottom: 65px;
	text-align: center;
}

.fab,.far {
  margin-top: 40px;
  font-size: 40px;
  color:#fff;
}

.right {
	padding-top: 0px;
}


.row {
	width: 90%;
	margin:0 auto;
}

.row-custom {
	margin: 0 auto;
	width: 100%!important;
}


.progress-bar {
	transition-duration:5s;
	background-color:#31485C;
}


.fa-twitter:hover {
	color:#9EE9FA;
}

.fa-instagram:hover {
	color:#E23A5C;
}

.fa-youtube:hover {
	color:#EA3323;
}

.fa-envelope:hover {
	color:#ccc;
}

.icon {
	margin-top: 0px;
}
</style>
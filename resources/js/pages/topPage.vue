<template>
  <div>    
    <div class="button fadein">
      <button class="example sp">MESSAGE</button>
    </div>
    <div class="main fadein pc">
      <div class="container main-r">
        <div class="letter new">
          <p class="main-p">
            はじめまして、岩澤輝人と申します。
            <br>東京都を拠点に
            <br class="br-sp">ウェブ系のエンジニアとして活動しています。
            <br>
          </p>
          <p class="main-p2">普段はベンチャー企業に勤めており、
            <br class="br-sp">ウェブサイトやアプリアプリケーション全般の開発に携わっています。
          </p>
          <p class="main-p3">個人でのウェブサイト制作やウェブアプリ、
            <br class="br-sp">ウェブ全般のご依頼もお受けさせていただいてます。
          </p>
          <p class="main-p4">これまでは、このサイトをはじめ、
            <br>個人向けのブログサイト、ホームページ制作などをさせていただきました。
            <br>技術を通じて、ヒトやサービス、
            <br class="br-sp">さまざまなカタチで関わり合いをもてればと思います。
          </p>
          <p class="main-p7">出会った方々と末永いお付き合いができますよう、</p>
          <p class="main-p9">精一杯のサービスを提供させていただきます。</p>
          <p class="main-p10">よろしくお願い致します。</p>
          <p>gitテスト用に変更を加えてみた</p>
          <p>ブランチ用にさらに変更</p>
        </div>
      </div>
    </div>
  </div>   
</template>

<style lang='scss' scoped>

  .main {
    height:100vh;
    padding-top: 150px;
    padding-bottom:150px;
    background-color:#1A1A1A;
  }

  .letter {
    writing-mode: vertical-rl;
    width: 100%;
    text-align: justify;
    text-justify: inter-ideograph;
    letter-spacing: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height:45px;
  }

  .main-p,.main-p2,.main-p3,.main-p4,.main-p5,.main-p6,.main-p7,.main-p8,.main-p9,.main-p10 {
    padding-left: 50px;
    font-family:han;
  }

  .main-p10 {
    padding-left:0px!important;
  }

  .main-r {
    width: 70%;
  }
  
</style>
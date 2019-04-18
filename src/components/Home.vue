<template>
  <div>
    <div class="uk-container">
      <!--主幻燈片-->
      <div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="autoplay:true; pause-on-hover: true; autoplay-interval:6000; min-height: 300; max-height: 500">
        <ul class="uk-slideshow-items" >
          <li><img src="/static/Home/home_slides2.jpg" alt="" uk-cover></li>
          <li><img src="/static/Home/home_slides3.jpg" alt="" uk-cover></li>
          <li><img src="/static/Home/active.jpg" alt="" uk-cover></li>
          <li><img src="/static/Home/active1.jpg" alt="" uk-cover></li>
          <li><img src="/static/Home/active2.jpg" alt="" uk-cover></li>
        </ul>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
        <div class="uk-position-bottom-center uk-position-small">
            <ul class="uk-dotnav">
                <li uk-slideshow-item="0"><a href="#"></a></li>
                <li uk-slideshow-item="1"><a href="#"></a></li>
                <li uk-slideshow-item="2"><a href="#"></a></li>
                <li uk-slideshow-item="3"><a href="#"></a></li>
                <li uk-slideshow-item="4"><a href="#"></a></li>
            </ul>
        </div>
      </div>
      <!-- 實驗室介紹 -->
      <div class="uk-padding">
        <div uk-scrollspy="cls: uk-animation-scale-down; repeat: false">
          <h1 class="introduction">INTRODUCTION</h1>
        </div>
        <hr class="uk-divider-icon">
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                  <img src="/static/Home/highComputing.png" alt="">
              </div>
            </div>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                  <h3 class="uk-heading-bullet uk-padding-small uk-padding-remove-horizontal">高效能運算</h3>
                  <div class="uk-text-left">
                    <p>本研究室採用NVIDIA GPU進行平行加速運算，並搭建伺服器機櫃以利於資料及建置。透過應用程式平行化機制及其推出的CUDA技術，能在有限或較短的時間內可以完成複雜或大量運算工作以大幅提高應用程式的處理能力。</p>
                    <p class="uk-text-bold">本研究室與NVIDIA合作，成立 NVIDIA-Taipei Tech Embedded GPU Joint Lab.，並運用NVIDIA TX1 GPU Embedded System進行各種嵌入式裝置應用，如擴增實境沙盤等。 </p>
                  </div>
              </div>
            </div>
        </div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                  <h3 class="uk-heading-bullet uk-padding-small uk-padding-remove-horizontal">深度學習</h3>
                  <div class="uk-text-left">
                    <p>本研究室在深度學習領域頗有心得，舉凡如使用通過選取候選區域，並對相應區域進行卷積運算的Faster R-CNN，乃至基於單一迴歸的目標檢測方法YOLO，皆有實作。此外，結合過去本研究室已深厚耕耘的CUDA平行計算來進行硬體加速，
                      在高維度的遙測影像分析上能達到實時(Real-time)的速度。目前已在遙測影像的船舶偵測領域中，以深度學習的方法榮獲國際期刊刊登其研究論文。</p>
                  </div>
              </div>
            </div>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                <img data-src="/static/Home/deepLearning.png" width="450" alt="" uk-img>
              </div>
            </div>
        </div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                <img data-src="/static/Home/satellite.png" width="450" alt="" uk-img>
              </div>
            </div>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                  <h3 class="uk-heading-bullet uk-padding-small uk-padding-remove-horizontal">遙測影像</h3>
                  <div class="uk-text-left">
                    <p>本實驗室使用合成孔徑雷達(Synthetic Aperture Radar, SAR)影像來針對遙測技術進行研究。在地表環境和特定目標監測的應用上，SAR訊號已被證實具有高度的偵測和識別能力。隨著高解析度的SAR影像硬體建置的能力提昇，可進一步對SAR影像進行前處理、
                      SAR影像特徵萃取、SAR影像目標物辨識等其他研究項目。目前已發表不少期刊論文，如利用全波方法(Full-Wave Approach)模擬SAR影像的成像等。
                    </p>
                  </div>
              </div>
            </div>
        </div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                  <h3 class="uk-heading-bullet uk-padding-small uk-padding-remove-horizontal">大數據</h3>
                  <div class="uk-text-left">
                    <p>本研究室在大數據領域的研究主要聚焦於Apache所開源的Hadoop Ecosystem及其底下的軟體專案應用。另外，我們結合Hadoop、深度學習及高效能運算裝置GPU，
                      藉由其分散式計算平台的特性，加速架構的運行，同時提升其穩定度。目前執行科技部計畫中之軟體定義資料中心(Software-Defined Data Center，簡稱SDDC)部分即使用Hadoop Ecosystem完成。</p>
                  </div>
              </div>
            </div>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                <img data-src="/static/Home/cloud-computing.png" width="450" alt="" uk-img>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.introduction{
  font-family: "Arial Black";
}
.init{
    padding: 0;
    margin: 0;
}
.flag_m {
    position: relative;
}
.flag {
    position: absolute;
    left: 220px;
    top: 6px;
    width: 10px;
    height: 22px;
    background-color: #258aa7;
}
.uk-heading-bullet::before {
    border-left: 10px solid #258aa7;
}
</style>

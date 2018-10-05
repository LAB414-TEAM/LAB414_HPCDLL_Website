<template>
  <div>
    <div class="uk-container">
      <!--主幻燈片-->
      <div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="autoplay:true; pause-on-hover: true; autoplay-interval:6000; min-height: 300; max-height: 500">
        <ul class="uk-slideshow-items" >
          <li><img src="/static/Home/home_slides2.jpg" alt="" uk-cover></li>
          <li><img src="/static/Home/home_slides3.jpg" alt="" uk-cover></li>
        </ul>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
        <div class="uk-position-bottom-center uk-position-small">
            <ul class="uk-dotnav">
                <li uk-slideshow-item="0"><a href="#"></a></li>
                <li uk-slideshow-item="1"><a href="#"></a></li>
            </ul>
        </div>
      </div>
      <!-- 實驗室介紹 -->
      <div class="uk-padding">
        <div uk-scrollspy="cls: uk-animation-scale-down; repeat: true">
          <h1 class="introduction">INTRODUCTION</h1>
        </div>
        <hr class="uk-divider-icon">
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                  <img src="/static/Home/machineLearning.jpg" alt="">
              </div>
            </div>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                  <h3 class="uk-heading-bullet uk-padding-small uk-padding-remove-horizontal">高效能運算</h3>
                  <div class="uk-text-left">
                    <p>一幅數位影像是指一影像在空間座標和亮度上都數位化後影像。數位影像可視為一二維矩陣。每一行和列值確定了影像中一個點，而其對應矩陣元素值即該像素點的顏色值。
                      人們對數位影像處理方法之興趣起源於兩個主要應用領域：改善影像資訊，使人能理解；及處理景物數據，使得機器能自動感知。影像處理技術已被廣泛應用，例如地理學家藉由計算機處理，
                      增強了影像對比度，或將亮度準位編碼成彩色，，研究由航空或衛星所拍攝得影像，判斷地層變化的狀況。</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                  <h3 class="uk-heading-bullet uk-padding-small uk-padding-remove-horizontal">深度學習</h3>
                  <div class="uk-text-left">
                    <p>本研究室在深度學習領域頗有心得，舉凡如使用通過選取候選區域，並對相應區域進行卷積運算的Faster R-CNN，乃至基於迴歸的目標檢測方法YOLO，皆有實作。
                        此外，結合過去本研究室已深厚耕耘的CUDA平行計算來進行硬體加速，在高維度的遙測影像分析上能達到實時(Real-time)的速度。目前已在遙測影像的船舶偵測領域中，
                        以深度學習的方法榮獲國際期刊刊登其研究論文。</p>
                  </div>
              </div>
            </div>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                  <img src="/static/Home/deepLearning.jpg" alt="">
              </div>
            </div>
        </div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                  <img src="https://gisgeography.com/wp-content/uploads/2014/10/100-remote-sensing-uses-logo-top-678x322.png" alt="">
              </div>
            </div>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                  <h3 class="uk-heading-bullet uk-padding-small uk-padding-remove-horizontal">遙測圖像</h3>
                  <div class="uk-text-left">
                    <p>廣義是指用間接的手段來獲取目標狀態信息的方法。但一般多指從人造衛星或飛機對地面觀測，通過電磁波（包括光波）的傳播與接收，感知目標的某些特性並加以進行分析的技術，
                      而本實驗室使用合成孔徑雷達(SAR)影像來針對遙測技術做研究。在地表環境和特定目標監測的應用上，合成孔徑雷達訊號已被證實具有高度的偵測和識別能力。隨著高解析度的SAR影像硬體建置的能力提昇，
                      特別在高頻底下的SAR影像目標物結構的特性更為顯著，且以此研究為基礎，可進一步對SAR影像進行前處理、SAR影像特徵萃取、SAR影像目標物辨識等其他研究項目。
                    </p>
                  </div>
              </div>
            </div>
        </div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                  <h3 class="uk-heading-bullet uk-padding-small uk-padding-remove-horizontal">圖形識別</h3>
                  <div class="uk-text-left">
                    <p>LAB414致力於圖形識別演算法的開發及實現。
                    研究方向涵蓋計算機視覺(Computer Vision )、圖形識別(Pattern recognition)和機器學習(Machine Learning)等工具與理論
                    ，並應用於高光譜影像、雷達影像上。</p>
                  </div>
              </div>
            </div>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                  <img src="https://image.slidesharecdn.com/patternrecognition-140505095048-phpapp01/95/pattern-recognition-1-638.jpg?cb=1399283485" alt="">
              </div>
            </div>
        </div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                  <img src="/static/Home/image_processing.jpg" alt="">
              </div>
            </div>
            <div>
              <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                  <h3 class="uk-heading-bullet uk-padding-small uk-padding-remove-horizontal">影像處理</h3>
                  <div class="uk-text-left">
                    <p>隨著電腦運算能力不斷加強，GPU技術提高，大數據成熟，人工智慧時代來臨
                    ，對於影像中進行處理、分析、量測，有著密不可分的關西。本實驗室目前利用深度學習進行影像處理，例如:物件偵測
                    </p>
                  </div>
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

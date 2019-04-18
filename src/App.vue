<template>
  <div id="app">
    <div class="uk-container uk-background-secondary uk-light">
      <nav uk-navbar>
        <div class="uk-position-center-left uk-padding uk-padding-remove-vertical">
          <!-- <a href="/"><img data-src="/static/Logo.png" width="120" alt="" uk-img></a> -->
          <a class="uk-button uk-button-text"
             href="/"
             uk-icon="icon: bolt; ratio: 1.5"
             style="font-size: 20px; font-weight: bold;">高效能計算與深度學習研究室</a>
        </div>
        <!--右邊選單-->
        <div class="uk-navbar-right uk-padding uk-padding-remove-vertical">
          <ul class="uk-navbar-nav">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/Publication">Publication</router-link>
            </li>
            <li>
              <!-- <a href="#modal-example"
                  uk-toggle>Youtube</a>
              <div id="modal-example"
                    uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                  <button class="uk-modal-close-default"
                          type="button"
                          uk-close></button>
                  <h2 class="uk-modal-title">施工中</h2>
                  <p>正在施工中，請耐心等候!!</p>
                </div>
              </div> -->
              <router-link to="/Youtube">Youtube</router-link>
            </li>
            <li>
              <a href="#">People</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <router-link to="/Professor">Professor</router-link>
                    <div class="uk-navbar-dropdown">
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li>aa</li>
                        <li>bb</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <router-link to="/Phd">Ph.D</router-link>
                  </li>
                  <li>
                    <router-link to="/Master">Master</router-link>
                  </li>
                  <li>
                    <a href="#">Undergraduate</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <router-link to="/Gallery">Gallery</router-link>
            </li>
            <li>
              <router-link to="/Resource">Resource</router-link>
            </li>
            <li>
                <a href="#">Contact</a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <a href="https://www.ntut.edu.tw/bin/home.php"
                         target="_blank">北科大</a>
                    </li>
                    <li>
                      <a href="https://www.ee.ntut.edu.tw/"
                         target="_blank">電機系</a>
                    </li>
                    <li>
                      <a href="#modal-example"
                         uk-toggle>站內信</a>
                      <div id="modal-example"
                           uk-modal>
                        <div class="uk-modal-dialog uk-modal-body">
                          <button class="uk-modal-close-default"
                                  type="button"
                                  uk-close></button>
                          <h2 class="uk-modal-title">請先登入</h2>
                          <p>登入系統未完成，故無法登入也無法站內，拍謝!!</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view></router-view>
    <!-- footer -->
    <div class="footer uk-container uk-light uk-padding uk-padding-remove-horizontal uk-padding-remove-bottom uk-background-secondary">
      <h3>國立臺北科技大學電機工程系 高效能計算與深度學習研究室</h3>
      <p>台北市忠孝東路三段1號綜合科館414-1室</p>
      <p>© NTUT High Performance Computing and Deep Learning Lab. 2018</p>
      <p class="uk-article-meta"><a href="https://github.com/LAB414-TEAM/LAB414_HPCDLL_Website" class="uk-icon-button" uk-icon="github-alt" target="_blank" ></a> &nbsp; Design by <i>W.H Lee</i>, <i>Y.C Lin</i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.uk-container {
    padding-left: 0px;
    padding-right: 0px;
}
#app {
  font-family: "Microsoft JhengHei","Arial Black", "Avenir", "Helvetica", "Arial", sans-serif;
  text-align: center;
}
h3 {
  margin: 0;
  font-family: "Microsoft JhengHei";
  font-weight: bold;
}
.menu{
  z-index: 2000;
  left: -1px;
}
</style>

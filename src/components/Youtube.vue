<template>
    <div class="uk-container uk-padding">
          <div class="uk-column-1-1@s uk-column-1-2@m">
            <div class="uk-padding-small uk-flex" v-for="(item, index) in URL" :key="index">
              <div class="uk-padding uk-padding-remove-vertical">
                  <iframe width="250" :src=item.src frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="uk-width-5-6 uk-position-relative">
                <h4 class="paper-title">{{item.title}}</h4>
              </div>
            </div>
            <!-- <div class="uk-padding-small uk-flex">
              <div class="uk-padding uk-padding-remove-vertical">
                  <iframe width="250" src="https://www.youtube.com/embed/ry82OkXvblU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="uk-width-5-6 uk-position-relative">
                <h4 class="paper-title">NTUT EE Lab414 - Sandbox - TX1 GPU embedded system 嵌入式沙盤展示</h4>
              </div>
            </div> -->
          </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      URL: [
        {
          src: 'https://www.youtube.com/embed/8gVZxQ8tq1I',
          title: 'NTUT EE Lab414 Project TP - Ship Detection GUI Demo'
        },
        {
          src: 'https://www.youtube.com/embed/ry82OkXvblU',
          title: 'NTUT EE Lab414 - Sandbox - TX1 GPU embedded system 嵌入式沙盤展示'
        },
        {
          src: 'https://www.youtube.com/embed/OaALgSEg0RE',
          title: 'ICSANE2016 ( seminar, award ceremony and Banquet)'
        },
        {
          src: 'https://www.youtube.com/embed/A9J_CC75DsM',
          title: 'ICSANE2016 award ceremony'
        },
        {
          src: 'https://www.youtube.com/embed/PIy-VbTsCfM',
          title: '自動餵魚機器APP'
        },
        {
          src: 'https://www.youtube.com/embed/GV6joVNEzMI',
          title: 'Kenict 體感結合校園導覽系統'
        },
        {
          src: 'https://www.youtube.com/embed/lrBKyxm8Uq4',
          title: '沙盤模擬'
        },
        {
          src: 'https://www.youtube.com/embed/Z00b9qV-bOk',
          title: '人臉辨識結合手勢偵測'
        },
        {
          src: 'https://www.youtube.com/embed/3xWvCYJq-L4',
          title: '遺留物偵測'
        },
        {
          src: 'https://www.youtube.com/embed/2CaQMEypwtY',
          title: '利用紅外線與智慧型手機預防銀髮族久坐'
        },
        {
          src: 'https://www.youtube.com/embed/s7NikPKDkEo',
          title: '結合RFID與人臉辨識應用於嵌入式系統'
        },
        {
          src: 'https://www.youtube.com/embed/lDxymATEmZ0',
          title: '北科校園導覽遊戲設計影片'
        },
        {
          src: 'https://www.youtube.com/embed/wktWHZpjyE0',
          title: 'Tsunami Simulation in Taiwan Region 海嘯模擬'
        },
        {
          src: 'https://www.youtube.com/embed/x931e8fn2xA',
          title: '電子地圖服務應用於 iOS App 展示'
        },
        {
          src: 'https://www.youtube.com/embed/9roBOgO-zhg',
          title: '校園電子佈告欄系統展示'
        },
        {
          src: 'https://www.youtube.com/embed/ey_UqD5tT9E',
          title: '人體骨架追蹤專題展示'
        },
        {
          src: 'https://www.youtube.com/embed/jNnZ63tdw6Q',
          title: '擴增實境應用於樓層導覽展示'
        },
        {
          src: 'https://www.youtube.com/embed/g1SJs0ehOqM',
          title: 'Kinect 深度影像應用成果展示'
        },
        {
          src: 'https://www.youtube.com/embed/1WtFdH10Ch8',
          title: 'AR擴增實境應用於互動式建築物展示'
        },
        {
          src: 'https://www.youtube.com/embed/Jno1gG4c4Z0',
          title: '北科3D校園行走影片'
        }
      ]
    }
  }
}
</script>

<style>
.paper-title{
  font-family: Arial;
  font-weight: bold;
  color: #990000;
  margin: 0;
}
</style>

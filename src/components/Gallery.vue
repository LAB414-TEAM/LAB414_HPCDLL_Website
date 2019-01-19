<template>
  <div class="uk-container uk-padding">
    <div>
      <!-- Create tabs -->
      <ul class="uk-child-width-expand" uk-tab="animation: uk-animation-fade">
        <li v-for="tabName in gy.category" :key="tabName"><a href="">{{ tabName }}</a></li>
      </ul>
      <!-- Show many albums -->
      <ul class="uk-switcher uk-margin">
        <div v-for="tabName in gy.category" :key="tabName" class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center uk-margin-top" uk-grid>
          <div id="album" v-for="(album, i) in gy.GetCategoryList(tabName)" :key="i" v-on:click="OpenAlbum(album)" href="#modal-full" uk-toggle>
            <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
              <img :src="album.cover">
              <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">{{ album.title }}</h4></div>
                <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">{{ album.date }}</h4></div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
    <!-- modal-full region -->
    <div id="modal-full" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <!-- specify album viewport -->
        <div class="uk-background-muted uk-padding uk-panel" uk-height-viewport>
          <h2 v-if="showAlbum" class="uk-modal-title">{{ showAlbum.title }}</h2>
          <div v-if="showAlbum">
            <gallery v-bind:images="showAlbum.images" :index="index" @close="index = null"></gallery>
            <div
              class="image"
              v-for="(image, imageIndex) in showAlbum.images"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')', width: '275px', height: '200px' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueGallery from 'vue-gallery'

class Album {
  constructor (category, date, title, numMax) {
    this.category = category
    this.date = date
    this.title = title
    this.cover = '/static/Gallery/' + category + '/' + title + '/cover.jpg'
    this.numMax = numMax
    this.images = this.GetImages()
  }
  GetImages () {
    var imgs = []
    for (let num = 1; num <= this.numMax; num++) {
      imgs.push('/static/Gallery/' + this.category + '/' + this.title.replace(/\s+/g, '%20') + '/' + num + '.jpg')
    }
    return imgs
  }
}

class GY {
  constructor (albums, category) {
    this.albums = albums
    this.category = category
  }
  GetCategoryList (category) {
    var list = []
    this.albums.forEach(element => {
      if (element.category === category) {
        list.push(element)
      }
    })
    return list
  }
}

export default {
  data () {
    return {
      gy: new GY(
        [
          // new Album('學術活動', '20161124-20161125', 'ICSANE 2016', 2018),
          new Album('學術活動', '20180119', '106年度 IEEE IGRSS Taipei Chapter 頒獎', 22),
          new Album('學術活動', '20180612', '東京大學資深榮譽教授廣瀨明演講', 47),
          new Album('學術活動', '20180926', '千里眼計畫 1', 4),
          new Album('學術活動', '20181003', '千里眼計畫 2', 11),
          new Album('學術活動', '20181017', '千里眼計畫 3', 9),
          new Album('學術活動', '20181027', '北聯大教師社群 吳博 讀書會', 19),
          new Album('學術活動', '20181130', '北聯大教師社群 鞠博 研討會', 7),
          new Album('學術活動', '20190111', '107年度 IEEE IGRSS Taipei Chapter 頒獎', 4),
          new Album('實驗室活動', '20170506', '1062 期末歡送會', 5),
          new Album('實驗室活動', '20181005', '新加坡外商徵才面試', 8),
          new Album('實驗室活動', '20181026', '1071 期中同樂會', 38),
          new Album('實驗室活動', '20181224', '1071 聖誕節 Party', 31),
          new Album('實驗室活動', '20190110', '1071 期末火鍋趴', 8),
          new Album('實驗室活動', '20190117', '2018 尾牙', 45),
          new Album('Seminar', '20170927', '1061 金融科技Fintech區塊鏈介紹', 2),
          new Album('Seminar', '20171018', '1061 Pattern recoginition related topics', 3),
          new Album('Seminar', '20171122', '1061 Educational strategies for learning English', 4),
          new Album('Seminar', '20171129', '1061 Neural Networks', 7),
          new Album('Seminar', '20171227', '1061 電腦繪圖-處理系統研究與經驗分享', 6),
          new Album('Seminar', '20180110', '1061 海洋汙染防治', 7),
          new Album('Seminar', '20180314', '1062 Using Artificial Intelligence in E-commerce', 3),
          new Album('Seminar', '20180321', '1062 輔助機器人系統處理研究與經驗分享', 3),
          new Album('Seminar', '20180328', '1062 Sentinel-1應用簡介', 3),
          new Album('Seminar', '20180411', '1062 遨遊星際-從太空探索移民宇宙實現可行性', 3),
          new Album('Seminar', '20180502', '1062 NextDrive 日本能源物聯網經驗分享', 3),
          new Album('Seminar', '20180919', '1071 AI棟樑養成之路', 10),
          new Album('Seminar', '20180926', '1071 運動影像分析', 12),
          new Album('Seminar', '20181003', '1071 醫學訊號處理與演算法設計', 19),
          new Album('Seminar', '20181017', '1071 Non-Intrusive Device-Free Posture Recognition for Elderly People Using Deep Learning and Infrared Sensors', 21),
          new Album('Seminar', '20181031', '1071 Joint SourceRelay Optimization for Full-Duplex MIMO Relaying with SWIPT-Enabled MMSE Receivers', 10),
          new Album('Seminar', '20181114', '1071 多階層時空區段碼 Multilevel concatenated space-time codes', 9),
          new Album('Seminar', '20181121', '1071 千里眼與順風耳-人工智慧、深度學習與視訊監控應用', 8),
          new Album('Seminar', '20181205', '1071 音樂欣賞', 9),
          new Album('Seminar', '20181219', '1071 Robotic Vision and Applications', 11),
          new Album('Seminar', '20190102', '1071 神基科技企業規畫發展經驗分享', 24),
          new Album('碩士班口試', '20180716', '105級 王以文', 7),
          new Album('碩士班口試', '20180716', '105級 陳柏堯', 27),
          new Album('碩士班口試', '201807xx', '105級 蕭志宇', 11),
          new Album('碩士班口試', '201807xx', '105級 邱立承', 9),
          new Album('碩士班口試', '201807xx', '105級 任哲威', 9)
        ],
        ['學術活動', '實驗室活動', 'Seminar', '碩士班口試']
      ),
      index: null,
      showAlbum: null
    }
  },
  components: {
    'gallery': VueGallery
  },
  methods: {
    OpenAlbum: function (album) {
      this.showAlbum = album
    }
  }
}
</script>

<style>
.uk-tab>*>a {
  font-size: 24px;
  font-weight: bold;
  text-transform: initial;
  border-width: 3px;
}
.uk-tab>.uk-active>a {
    color: #333;
    border-color: #00e038;
}
#album h4 {
  font-family: "Microsoft JhengHei","Arial Black", "Avenir", "Helvetica", "Arial", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: black;
}
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>

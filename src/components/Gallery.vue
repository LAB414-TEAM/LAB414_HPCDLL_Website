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
          <div id="album" v-for="(album, i) in gy.GetCategoryList(tabName)" :key="i">
            <div class="uk-inline-clip uk-transition-toggle" tabindex="0" uk-toggle="target: #modal-close-default">
              <img :src="album.cover">
              <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">{{ album.title }}</h4></div>
                <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">{{ album.date }}</h4></div>
              </div>
            </div>
            <div id="modal-close-default" uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                    <button class="uk-modal-close-default" type="button" uk-close></button>
                    <h2 class="uk-modal-title">Default</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
          </div>
        </div>
      </ul>
      <!-- light box -->
    </div>
  </div>
</template>
<script>
import VueGallery from 'vue-gallery'

class Album {
  constructor (category, title, date, numMax) {
    this.category = category
    this.title = title
    this.date = date
    this.cover = '/static/Gallery/' + category + '/' + title + '/1.jpg'
    this.numMax = numMax
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
          new Album('學術活動', 'IEEE IGRSS Taipei Chapter 頒獎', '2018109', 23),
          new Album('學術活動', '日本學者短期訪問', '20180615', 23),
          new Album('實驗室聚會', '1062期末歡送會', '20170506', 1),
          new Album('Seminar', '金融科技Fintech區塊鏈介紹', '20170927', 2),
          new Album('Seminar', 'Pattern recoginition related topics', '20171018', 2),
          new Album('Seminar', 'Educational strategies for learning English', '20171122', 2),
          new Album('Seminar', '神經網路影像處理', '20181129', 2),
          new Album('Seminar', 'Device-Free Non-Privacy Invasive Activity Monitoring of Elderly People in A Smart House', '20181227', 2),
          new Album('Seminar', '海洋汙染防治', '20180110', 2),
          new Album('Seminar', 'AI Architecture', '20180314', 2),
          new Album('Seminar', '輔助機器人', '20180321', 2),
          new Album('Seminar', '合成孔徑雷達', '20180328', 2),
          new Album('Seminar', '太空衛星科普 福衛三號為例', '20180411', 2),
          new Album('Seminar', 'GPU在測繪上的應用', '20180502', 2)
        ],
        ['學術活動', 'Seminar', '實驗室聚會']
      ),
      images: [
        'https://dummyimage.com/800/ffffff/000000',
        'https://dummyimage.com/1600/ffffff/000000',
        'https://dummyimage.com/1280/000000/ffffff',
        'https://dummyimage.com/400/000000/ffffff'
      ],
      index: null
    }
  },
  components: {
    'gallery': VueGallery
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
</style>

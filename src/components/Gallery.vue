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
  constructor (category, title, date, numMax) {
    this.category = category
    this.title = title
    this.date = date
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
          new Album('學術活動', '日本學者短期訪問', '20180615', 23),
          new Album('學術活動', 'IEEE IGRSS Taipei Chapter 頒獎', '2018109', 22),
          new Album('學術活動', 'ICSANE 2016', '20161124', 25),
          new Album('實驗室聚會', '1062期末歡送會', '20170506', 1),
          new Album('Seminar', '金融科技Fintech區塊鏈介紹', '20170927', 2),
          new Album('Seminar', 'Pattern recoginition related topics', '20171018', 3),
          new Album('Seminar', 'Educational strategies for learning English', '20171122', 4),
          new Album('Seminar', '神經網路影像處理', '20181129', 7),
          new Album('Seminar', 'Device-Free Non-Privacy Invasive Activity Monitoring of Elderly People in A Smart House', '20181227', 6),
          new Album('Seminar', '海洋汙染防治', '20180110', 7),
          new Album('Seminar', 'AI Architecture', '20180314', 3),
          new Album('Seminar', '輔助機器人', '20180321', 3),
          new Album('Seminar', '合成孔徑雷達', '20180328', 3),
          new Album('Seminar', '太空衛星科普 福衛三號為例', '20180411', 3),
          new Album('Seminar', 'GPU在測繪上的應用', '20180502', 3),
          new Album('105級口試', '蕭志宇', '201807xx', 11),
          new Album('105級口試', '邱立承', '201807xx', 9),
          new Album('105級口試', '任哲威', '201807xx', 9),
          new Album('105級口試', '陳柏堯', '201807xx', 27),
          new Album('105級口試', '王以文', '201807xx', 7)
        ],
        ['學術活動', 'Seminar', '實驗室聚會', '105級口試']
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

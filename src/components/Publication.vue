<template>
    <div  class="uk-container uk-padding">
      <ul class="uk-child-width-expand" uk-tab="animation: uk-animation-fade">
          <li><a href="#">Journals</a></li>
          <li><a href="#">Conference</a></li>
      </ul>

      <ul class="uk-switcher uk-margin">
          <li>
            <div v-for="(annual, i) in journal" :key="i">
              <!-- Year -->
              <div class="uk-padding-small">
                <p class="uk-text-lead">{{annual.Year}}</p>
                <hr class="uk-divider-icon">
              </div>
              <!-- Journals Content -->
              <div class="uk-text-left">
                <ul v-for="(paper, i) in annual.Papers" :key="i" class="uk-list uk-margin-remove">
                  <li>
                    <div class="uk-padding-small uk-flex">
                      <div class="uk-padding uk-padding-remove-vertical">
                        <img :src=" '/static/Publication/Journals/' + paper.src"  width="200" alt="">
                      </div>
                      <div class="uk-width-5-6 uk-position-relative">
                        <h4 class="paper-title">{{paper.title}}</h4>
                        <p class="paper-author">{{paper.author}}</p>
                        <span class="publistJournal">{{paper.publist}}</span>
                        <div class="uk-position-bottom-right">
                          <a class="uk-button button-color" target="_blank" :href="paper.pdfURL" v-show="paper.isPDF">PDF</a>
                          <a class="uk-button button-color" target="_blank" :href="paper.videoURL" v-show="paper.isVideo">Video</a>
                          <a class="uk-button button-color" target="_blank" :href="paper.poster" v-show="paper.isPoster">POSTER</a>
                        </div>
                      </div>
                    </div>
                    <hr style="margin: 10px;">
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div v-for="(annual, i) in conference" :key="i">
              <!-- Year -->
              <div class="uk-padding-small">
                <p class="uk-text-lead">{{annual.Year}}</p>
                <hr class="uk-divider-icon">
              </div>
              <!-- Conference Content -->
              <div class="uk-text-left">
                <ul v-for="(paper, i) in annual.Papers" :key="i" class="uk-list uk-margin-remove">
                  <li>
                    <div class="uk-padding-small uk-flex">
                      <div class="uk-padding uk-padding-remove-vertical">
                        <img :src=" '/static/Publication/Conference/' + paper.src"  width="200" alt="">
                      </div>
                      <div class="uk-width-5-6 uk-position-relative">
                        <h4 class="paper-title">{{paper.title}}</h4>
                        <p class="paper-author">{{paper.author}}</p>
                        <span class="publistJournal">{{paper.publist}}</span>
                        <div class="uk-position-bottom-right">
                          <a class="uk-button button-color" target="_blank" :href="paper.pdfURL" v-show="paper.isPDF">PDF</a>
                          <a class="uk-button button-color" target="_blank" :href="paper.videoURL" v-show="paper.isVideo">Video</a>
                          <a class="uk-button button-color" target="_blank" :href="paper.poster" v-show="paper.isPoster">POSTER</a>
                        </div>
                      </div>
                    </div>
                    <hr style="margin: 10px;">
                  </li>
                </ul>
              </div>
            </div>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      journal: '',
      conference: ''
    }
  },
  mounted () {
    this.$http.get('/static/Json/Conference.json').then(response => {
      console.log(response.data)
      this.conference = response.data
    })
    this.$http.get('/static/Json/Journals.json').then(response => {
      console.log(response.data)
      this.journal = response.data
    })
  }
}
</script>

<style scoped>
.title{
  font-family: Arial;
  font-weight: bold;
  color: #000000;
}
.class_title{
  font-family: Arial;
  font-weight: bold;
  color: #0078d7;
  margin-bottom: 0px;
  margin-top: 20px;
}
.paper-title{
  font-family: Arial;
  font-weight: bold;
  color: #990000;
  margin: 0;
}
.paper-author{
  margin: 15px 0px 5px 0px;
  font-family: Arial;
}
.publistJournal {
  font-style: italic;
  font-size: 12pt;
  color: #888;
}
.uk-button {
  font-weight: bold;
}
.button-color {
  background-color: #990000;
  color: #ffffff;
}
.button-color:hover {
  background-color: #bd0000;
}
.uk-text-lead {
  font-family: Arial;
  font-weight: bold;
  margin: 0;
}
.uk-divider-icon {
  margin: 10px 0px 0px 0px;
}
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
</style>

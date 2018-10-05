<template>
  <div id="Master" class="uk-container">
    <div class="uk-padding">
      <ul class="uk-subnav uk-subnav-pill" uk-margin uk-switcher>
        <li><a href="#">107級</a></li>
        <li><a href="#">106級</a></li>
        <li><a href="#">105級</a></li>
        <li><a href="#">104級</a></li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <!--107級-->
        <li>
          <div class="memberCard uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: div > .uk-card; delay:500; repeat:false">
            <div v-for="(item, i) in people.M107" :key="i">
              <div class="uk-card uk-card-default uk-card-body">
                <div class="cardImg uk-card-media-top uk-height-medium">
                  <img :src="item.src">
                </div>
                  <h3>{{item.name}}</h3>
                  <hr>
                  <div class="uk-flex uk-flex-center">
                    <a :href="item.thesisURL" class="uk-icon-button" uk-icon="link" target="_blank"></a>
                    <p class="uk-margin-small-left uk-margin-small">{{item.thesis}}</p>
                  </div>
                  <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </li>
        <!--106級-->
        <li>
          <div class="memberCard uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: div > .uk-card; delay:500; repeat:false">
            <div v-for="(item, i) in  people.M106" :key="i">
              <div class="uk-card uk-card-default uk-card-body">
                <div class="cardImg uk-card-media-top uk-height-medium">
                  <img :src="item.src">
                </div>
                  <h3>{{item.name}}</h3>
                  <hr>
                  <div class="uk-flex uk-flex-center">
                    <a :href="item.thesisURL" class="uk-icon-button" uk-icon="link" target="_blank"></a>
                    <p class="uk-margin-small-left uk-margin-small">{{item.thesis}}</p>
                  </div>
                  <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </li>
        <!--105級-->
        <li>
          <div class="memberCard uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: div > .uk-card; delay:500; repeat:false">
            <div v-for="(item, i) in  people.M105" :key="i">
              <div class="uk-card uk-card-default uk-card-body">
                <div class="cardImg uk-card-media-top uk-height-medium">
                  <img :src="item.src">
                </div>
                  <h3>{{item.name}}</h3>
                  <hr>
                  <div class="uk-flex uk-flex-center">
                    <a :href="item.thesisURL" class="uk-icon-button" uk-icon="link" target="_blank"></a>
                    <p class="uk-margin-small-left uk-margin-small">{{item.thesis}}</p>
                  </div>
                  <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </li>
        <!--104級-->
        <li>
          <div class="memberCard uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: div > .uk-card; delay:500; repeat:false">
            <div v-for="(item, i) in  people.M104" :key="i">
              <div class="uk-card uk-card-default uk-card-body">
                <div class="cardImg uk-card-media-top uk-height-medium">
                  <img :src="item.src">
                </div>
                  <h3>{{item.name}}</h3>
                  <hr>
                  <div class="uk-flex uk-flex-center">
                    <a :href="item.thesisURL" class="uk-icon-button" uk-icon="link" target="_blank"></a>
                    <p class="uk-margin-small-left uk-margin-small">{{item.thesis}}</p>
                  </div>
                  <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!--switcher-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      people: ''
    }
  },
  mounted () {
    this.$http.get('/static/Json/Master.json').then(response => {
      console.log(response.data)
      this.people = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Master {
  font-family: "Microsoft JhengHei";
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.tabHeader{
  font-size: 24px;
}
.cardImg{
  height: 400px;
}
</style>

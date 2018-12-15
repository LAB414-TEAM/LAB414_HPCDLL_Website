<template>
  <div id="Master" class="uk-container">
    <div class="uk-padding">
      <ul class="uk-subnav uk-subnav-pill" uk-margin uk-switcher>
        <li><a href="#">107級</a></li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <!--107級-->
        <li>
          <div class="memberCard uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: div > .uk-card; delay:500; repeat:false">
            <div v-for="(item, i) in Phd" :key="i">
              <div class="uk-card uk-card-default uk-card-body">
                <div class="cardImg uk-card-media-top uk-height-medium">
                  <img :src="item.src">
                </div>
                  <h3>{{item.name}}</h3>
                  <hr>
                  <div>
                    <span class="uk-margin-small-right uk-icon" uk-icon="location">{{item.country}}</span>
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
      Phd: [
        {
          src: '/static/Phd/Phd_1.jpg',
          name: '高岡峻一',
          country: 'Japan',
          description: 'xxx'
        },
        {
          src: '/static/Phd/Phd_2.jpg',
          name: 'Amare Anagaw',
          country: '衣索比亞',
          description: 'xxx'
        }
      ]
    }
  }
}
</script>

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

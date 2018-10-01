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
            <div v-for="(item, i) in M107" :key="i">
              <div class="uk-card uk-card-default uk-card-body">
                <div class="cardImg uk-card-media-top uk-height-medium">
                  <img :src="item.src">
                </div>
                  <h3>{{item.name}}</h3>
                  <hr>
                  <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </li>
        <!--106級-->
        <li>
          <div class="memberCard uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: div > .uk-card; delay:500; repeat:false">
            <div v-for="(item, i) in M106" :key="i">
              <div class="uk-card uk-card-default uk-card-body">
                <div class="cardImg uk-card-media-top uk-height-medium">
                  <img :src="item.src">
                </div>
                  <h3>{{item.name}}</h3>
                  <hr>
                  <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </li>
        <!--105級-->
        <li>

        </li>
        <!--104級-->
        <li>
          <div class="memberCard uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: div > .uk-card; delay:500; repeat:false">
            <div v-for="(item, i) in M104" :key="i">
              <div class="uk-card uk-card-default uk-card-body">
                <div class="cardImg uk-card-media-top uk-height-medium">
                  <img :src="item.src">
                </div>
                  <h3>{{item.name}}</h3>
                  <hr>
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
      M107: [
        {
          src: '/static/M107/M107_1.jpg',
          name: '林佑昌',
          description: 'ㄔㄐㄕ'
        },
        {
          src: '/static/M107/M107_2.jpg',
          name: '蔡明諺',
          description: '左邊的...XDDD'
        },
        {
          src: '/static/M107/M107_3.jpg',
          name: '莊昇達',
          description: '抓藥達人'
        },
        {
          src: '/static/M107/M107_4.jpg',
          name: '彭冠偉',
          description: '文大很大'
        },
        {
          src: '/static/M107/M107_5.jpg',
          name: '張韜略',
          description: '韜哥'
        },
        {
          src: '/static/M107/M107_6.jpg',
          name: '楊斯宇',
          description: 'bb'
        },
        {
          src: '/static/M107/M107_7.jpg',
          name: 'Vishnu Priy',
          description: '印度'
        },
        {
          src: '/static/M107/M107_8.jpg',
          name: 'Praveen Kuma',
          description: '印度'
        }
      ],
      M106: [
        {
          src: '/static/M106/M106_1.jpg',
          name: '李偉弘',
          description: '神魔宅男x達人'
        },
        {
          src: '/static/M106/M106_2.jpg',
          name: '曾國維',
          description: '政大咩頭'
        },
        {
          src: '/static/M106/M106_3.jpg',
          name: '陳威倫',
          description: '工研打醬油'
        },
        {
          src: '/static/M106/M106_4.jpg',
          name: '印翊誠',
          description: 'Yin'
        },
        {
          src: '/static/M106/M106_5.jpg',
          name: '江吉弘',
          description: '我要交有大肌肌的女朋友'
        },
        {
          src: '/static/M106/M106_6.jpg',
          name: '張宏恩',
          description: '專業老司機'
        },
        {
          src: '/static/M106/M106_7.jpg',
          name: '馬宇豐',
          description: '實驗室暖男'
        },
        {
          src: '/static/M106/M106_8.jpg',
          name: '廖宜健',
          description: '課金大佬x三餐配一單'
        }
      ],
      M104: [
        {
          src: '/static/M104/M104_1.jpg',
          name: '鄭羽婕',
          description: '123'
        },
        {
          src: '/static/M104/M104_1.jpg',
          name: '鄭羽婕',
          description: '123'
        }
      ]
    }
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

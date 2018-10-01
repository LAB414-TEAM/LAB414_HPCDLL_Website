<template>
    <div  class="uk-container">
      <img src="/static/Publication.png" alt="">
      <!-- Journals -->
      <div>
        <div class="uk-text-left uk-padding-small uk-padding-remove-bottom">
          <h2 class="class_title">Journals</h2>
        </div>
        <div v-for="(annual, i) in Journals" :key="i">
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
      </div>
      <!-- Conference -->
      <div>
        <div class="uk-text-left uk-padding-small uk-padding-remove-bottom">
          <h2 class="class_title">Conference</h2>
        </div>
        <div v-for="(annual, i) in Conference" :key="i">
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
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      Journals: [
        {
          Year: '2018',
          Papers: [
            {
              src: 'Journals_2018_1.JPG',
              title: 'Imaging simulation for synthetic aperture radar: a full-wave approach',
              author: 'Chiung-Shen Ku, Kun-Shan Chen*, Pao-Chi Chang, and Yang-Lang Chang',
              publist: 'Remote Sensing',
              pdfURL: 'http://www.mdpi.com/2072-4292/10/9/1404',
              videoURL: null,
              posterURL: null,
              isPDF: true,
              isVideo: false,
              isPoster: false
            },
            {
              src: 'Journals_2018_2.png',
              title: 'Color Enhancement for Four-Component Decomposed Polarimetric SAR Image Based on a CIE-Lab Encoding',
              author: 'Cheng-Yen Chiang, Kun-Shan Chen*, Chih-Yuan Chu, Yang-Lang Chang and Kuo-Chin Fan',
              publist: 'Remote Sensing',
              pdfURL: 'http://www.mdpi.com/2072-4292/10/9/1404',
              videoURL: null,
              posterURL: null,
              isPDF: true,
              isVideo: false,
              isPoster: false
            }
          ]
        },
        {
          Year: '2016',
          Papers: [
            {
              src: 'no_picture.jpg',
              title: 'Layer-Aware 3D-IC Partitioning for Area-Overhead Reduction Considering the Power of Interconnections and Pads',
              author: 'Yang-Lang Chang*, Chih-Yu Hsiao, Wei-Hong Lee, Amare Anagaw Ayele and Lena Chang',
              publist: 'IEICE Transactions on Fundamentals of Electronics, Communications and Computer Sciences',
              pdfURL: null,
              videoURL: null,
              posterURL: null,
              isPDF: false,
              isVideo: false,
              isPoster: false
            }
          ]
        }
      ],
      Conference: [
        {
          Year: '2018',
          Papers: [
            {
              src: 'no_picture.jpg',
              title: 'Feature Synthesis and Target Classification for High-Resolution SAR Images',
              author: 'Yang-Lang Chang*, Cheng-Yen Chiang, Sina Hadipour and Wen-Yen Chang',
              publist: 'the International Conference on Space, Aeronautical and Navigational Electronics 2018 (ICSANE 2018)',
              pdfURL: null,
              videoURL: null,
              posterURL: null,
              isPDF: false,
              isVideo: false,
              isPoster: false
            },
            {
              src: 'no_picture.jpg',
              title: 'RCS Near-field to Far-field Transformation Estimation by Using Simple GTD Target Models',
              author: 'Hirokazu Kobayashi, Shun-ichi Takaoka, Yang-Lang Chang',
              publist: 'the International Conference on Space, Aeronautical and Navigational Electronics 2018 (ICSANE 2018)',
              pdfURL: null,
              videoURL: null,
              posterURL: null,
              isPDF: false,
              isVideo: false,
              isPoster: false
            },
            {
              src: 'no_picture.jpg',
              title: 'Improved Point Source Spread Model for 3-Dimensional Radar Target',
              author: 'Hirokazu Kobayashi, Shun-ichi Takaoka, Chih-Yuan Chu, Yang-Lang Chang',
              publist: 'the International Conference on Space, Aeronautical and Navigational Electronics 2018 (ICSANE 2018)',
              pdfURL: null,
              videoURL: null,
              posterURL: null,
              isPDF: false,
              isVideo: false,
              isPoster: false
            },
            {
              src: 'no_picture.jpg',
              title: 'Automatic Target Recognition based on Generative Adversarial Networks for Synthetic Aperture Radar Images',
              author: 'Yang-Lang Chang, Bo-Yao Chen, Chih-Yuan Chu and Sina Hadipour',
              publist: ' IEICE Workshops on SANE 2018 (SANE2018)',
              pdfURL: null,
              videoURL: null,
              posterURL: null,
              isPDF: false,
              isVideo: false,
              isPoster: false
            },
            {
              src: 'Conference_2018_1.jpg',
              title: 'SAR IMAGE SHIP DETECTION BASED ON YOLOV2 DEEP LEARNING FRAMEWORK',
              author: 'Yang-Lang Chang*, Chih-Yu Hsiao, Wei-Hong Lee, Amare Anagaw Ayele and Lena Chang',
              publist: 'IEEE International Geoscience and Remote Sensing Symposium IGARSS2018',
              pdfURL: null,
              videoURL: null,
              posterURL: null,
              isPDF: null,
              isVideo: false,
              isPoster: false
            },
            {
              src: 'no_picture.jpg',
              title: 'SIMULATION OF ISAR MOTION COMPENSATION FOR MOVING TARGETS BASED ON PARTICLE SWARM OPTIMIZATION ',
              author: 'Cheng-Yen Chiang, Yang-Lang Chang*, Bo Yao Chen, Sina Hadipour, Yi Wen Wang, and Kuo-Chin Fan',
              publist: 'IEEE International Geoscience and Remote Sensing Symposium IGARSS2018',
              pdfURL: null,
              videoURL: null,
              posterURL: null,
              isPDF: false,
              isVideo: false,
              isPoster: false
            },
            {
              src: 'no_picture.jpg',
              title: 'GPU ACCELERATION OF UAV IMAGE SPLICING USING ORIENTED FAST AND ROTATED BRIEF COMBINED WITH PCA',
              author: 'Chia-Cheng Yeh, Yang-Lang Chang, Pai-Hui Hsu and Cheng-Huan Hsien',
              publist: 'IEEE International Geoscience and Remote Sensing Symposium IGARSS2018',
              pdfURL: null,
              videoURL: null,
              posterURL: null,
              isPDF: false,
              isVideo: false,
              isPoster: false
            }
          ]
        },
        {
          Year: '2017',
          Papers: [
            {
              src: 'Conference_2017_1.JPG',
              title: 'A MODIFIED ADAPTABLE NEAREST FEATURE SPACE CLASSIFIER FOR REMOTE SENSING IMAGES',
              author: 'Yang-Lang Chang*, Lena Chang, Ming-Xiu Xu, Chihyuan Chu',
              publist: 'IEEE International Geoscience and Remote Sensing Symposium IGARSS2017',
              pdfURL: 'https://ieeexplore.ieee.org/document/8127687/',
              videoURL: null,
              posterURL: null,
              isPDF: true,
              isVideo: false,
              isPoster: false
            },
            {
              src: 'Conference_2017_2.JPG',
              title: 'IMPURITY FUNCTION BAND PRIORITIZATION BASED ON PARTICLE SWARM OPTIMIZATION AND GRAVITATIONAL SEARCH ALGORITHM FOR HYPERSPECTRAL IMAGES',
              author: 'Yang-Lang Chang*, Lena Chang, Tzu-Wei Tseng, Chihyuan Chu',
              publist: 'IEEE International Geoscience and Remote Sensing Symposium IGARSS2017',
              pdfURL: 'https://ieeexplore.ieee.org/document/8127322/',
              videoURL: null,
              posterURL: null,
              isPDF: true,
              isVideo: false,
              isPoster: false
            }
          ]
        }
      ]
    }
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
</style>

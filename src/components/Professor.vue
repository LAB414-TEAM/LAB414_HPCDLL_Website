<template>
  <div class="professor uk-container">
      <!-- <div class="uk-background-cover uk-height-large uk-overflow-hidden uk-flex uk-flex-top uk-inline" style="background-image: url(/static/backgroundProfessor.jpg)">
        <div class="uk-overlay-default uk-position-cover"></div>
        <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical uk-overlay uk-position-center uk-dark">
            <h1 class="uk-heading-primary" uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">指導教授</h1>
        </div>
      </div> -->
      <!-- <article class="uk-container uk-margin uk-comment">
          <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                  <img class="uk-comment-avatar" src="/static/professor.jpg" width="150" height="150" alt="">
              </div>
              <div class="uk-width-expand">
                <h3 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">張陽郎教授</a></h3>
              </div>
          </header>
      </article>
      <div class="uk-container uk-position-relative">
        <div>
          <h3 class="uk-heading-divider">Education</h3>
        </div>
      </div>             -->
      <!-- 教授頭像 -->
      <div class="uk-padding">
        <h1 class="uk-heading-line uk-text-center" style="font-family: Microsoft JhengHei; font-weight: bold;"><span>張陽郎教授</span></h1>
        <img src="/static/professor1.JPG" alt="">
      </div>
      <!-- 教授基本資訊 -->
      <div class="uk-padding">
        <div class="uk-column-1-2 uk-column-divider uk-text-medium">
          <div class="uk-padding" uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
            <img src="/static/career.png" width="50" height="50" alt="">
            <h3 class="uk-padding-small">Positions Held</h3>
            <p>國立台北科技大學 電機系主任</p>
            <p>IEEE GRSS 台北分會主席</p>
            <p>第12屆ICSANE2016聯合主席</p>
          </div>
          <div class="uk-padding" uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
            <img src="/static/education.png" width="50" height="50" alt="">
            <h3 class="uk-padding-small">Education</h3>
            <p>國立中央大學資訊工程研究所博士 (2003)</p>
            <p>美國紐約雪城大學資訊工程研究所碩士 (1993)</p>
            <p>國立中原大學電機工程學士 (1987)</p>
          </div>
        </div>
        <div class="uk-column-1-2 uk-column-divider uk-text-medium">
          <div class="uk-padding" uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
            <img src="/static/profession.png" width="50" height="50" alt="">
            <h3 class="uk-padding-small">Research Interests</h3>
            <p>高效能計算</p>
            <p>深度學習</p>
            <p>圖像辨識</p>
            <p>影像處理</p>
            <p>遙測影像</p>
          </div>
          <div class="uk-padding" uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
            <img src="/static/mail.png" width="50" height="50" alt="">
            <h3 class="uk-padding-small">Contact</h3>
            <p>台北市忠孝東路三段1號綜合科館414-1室</p>
            <p>Email: ylchang@ntut.edu.tw</p>
            <p>Voice: 886-2-2771-2171 ext.:2156 <br> Fax: 886-2-2731-7187</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Professional Experiences</h1>
        <hr class="uk-divider-icon">
      <ul class="uk-list uk-list-bullet uk-text-left" v-for="(item, i) in Experience" :key="i">
        <li>
          {{item.L1}}
          <ul class="list-second" v-for="(sec, j) in item.L2" :key="j">
            <li>{{sec.job}}</li>
          </ul>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Experience: [
        {
          L1: 'National Taipei University of Technology (Taipei Tech), Taiwan',
          L2: [
            {job: ' Chair, Department of Electrical Engineering, 2018 – present'},
            {job: ' Director, NVIDIA-Taipei Tech Embedded GPU Joint Lab, 2014 - present'},
            {job: ' Director, High Performance Computing Lab, 2013 - present'},
            {job: ' Public Relations Director, Office of the Secretariat, 2012 - 2014'},
            {job: 'Assistant Dean, College of Electrical Engineering and Computer Science, 2011'},
            {job: 'Convener, Computer Engineering Track, Department of Electrical Engineering, 2010 - 2011'},
            {job: 'Professor, Department of Electrical Engineering, 2012 – present'},
            {job: ' Member, Curriculum Committee, College of Electrical Engineering and Computer Science, 2006-2007'},
            {job: ' Member, Departmental Faculty Evaluation, Space and Academic Committee, 2012- present'},
            {job: 'Member, Departmental Curriculum Committee, 2011- 2012'},
            {job: 'Member, Departmental Academic and Development Committee, 2010- 2011'},
            {job: ' Associate Professor, Department of Electrical Engineering, 2005 – 2011'}
          ]
        },
        {
          L1: 'Cooperative Institute for Meteorological Satellite Studies, University of Wisconsin—Madison, USA',
          L2: [
            {job: 'Visiting Scientist, Space Science and Engineering Center, 2013'}
          ]
        },
        {
          L1: 'National Taipei College of Business, Taiwan',
          L2: [
            {job: 'Associate Professor, Department of Information Management, 2004 - 2005'}
          ]
        },
        {
          L1: 'St. John"s University, Taiwan',
          L2: [
            {job: ' Associate Professor, Department of Computer Science and Information Engineering, 2003 - 2004'},
            {job: ' Lecturer, Department of Electrical Engineering, 1994 - 2003'}
          ]
        },
        {
          L1: 'ALCATEL, Taiwan',
          L2: [
            {job: 'Software Development Engineer, TAISEL, ALCATEL, 1993 - 1994'}
          ]
        },
        {
          L1: 'IBM"s Syracuse University off-campus education center, Poughkeepsie, New York USA',
          L2: [
            {job: 'Teaching Assistant, Prof. Garth Foster, Electrical and Computer Engineering, 1992 - 1993'}
          ]
        },
        {
          L1: 'NDC IBM, Taiwan',
          L2: [
            {job: 'Hardware Design Engineer, 1989 - 1991'}
          ]
        },
        {
          L1: 'National Taipei Institute of Technology, Taiwan',
          L2: [
            {job: 'Teaching Assistant, Department of Electrical Engineering, 1987 - 1989'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
p{
  margin: 0;
}
.list-second{
  list-style-type: square;
}
</style>

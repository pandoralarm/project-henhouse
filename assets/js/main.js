var app = new Vue({
  el: '#app',
  data: {
    render: true,
    main: true,
    window: false,
    door: true,
    leftnav: false,
    compass_sub: false,
    user_sub: false,
    rightnav: false,
    start: true,
    cat: false,
    sub: false,
    topic: false,
    lastcat: false,
    lastsub: false,
    logged: false,
    zoom_left: false,
    zoom_right: false,
    selected_pos: 0,
    zoom_start: 0,
    zoom_end: 1,
    billboard: "State a new opinion",
    image: 'assets',

  
    opinions: [
      {
        pos: 1,
        opinion: 'State a new opinion',
        agree: 65,
        disagree: 35,
      },
      {
        pos: 2,
        opinion: 'Opinion Position 2',
        agree: 65,
        disagree: 35,
      },
      {
        pos: 3,
        opinion: 'Opinion Position 3',
        agree: 65,
        disagree: 35,
      }
    ],

    users: [
    {
      pos: 1,
      user: 'Rudd',
      votes: 1098,
      medal: true,
      badge: true,
      date: '21-02-2020',
    },
    {
      pos: 2,
      user: 'Petra',
      votes: 954,
      medal: false,
      badge: true,
      date: '02-01-2020',
    },
    {
      pos: 3,
      user: 'Gus',
      votes: 854,
      medal: true,
      badge: false,
      date: '22-05-2020',
    }


  ],

  },
  mounted() {
    window.addEventListener(
      "orientationchange",
      this.handleOrientationChange
    );
  },
  methods: {
    handleOrientationChange() {
      const orientation = window.screen.orientation.type
      if (orientation === "portrait-primary") {
        // portrait mode
        render = false;
      } else if (orientation === "landscape-primary") {
        // landscape mode
        render = true;
      }
    },

    zoomin_left(n) {

      this.selected_pos = n;
      this.zoom_start = this.selected_pos-2;
      this.zoom_end = this.selected_pos-1;
      this.zoom_left = true;

      current = $(window).height();
      $('.zoom_left').css('top', current + ( 45 * (this.selected_pos - 1))+'px');
     
    },

    zoomin_right(n) {

      this.selected_pos = n;
      this.zoom_start = this.selected_pos-2;
      this.zoom_end = this.selected_pos-1;
      this.zoom_right = true;

      current = $(window).height();
      $('.zoom_right').css('top', current + ( 45 * (this.selected_pos - 1))+'px');

    },

    scrollup() {
      prevtopl = parseInt($('.zoom_left').css('top'));
      console.log($('.zoom_left').animate({top: prevtopl-45+'px'}));
      this.zoomin_left(this.selected_pos -1);
    },

    scrolldown() {
      prevtopl = parseInt($('.zoom_left').css('top'));
      console.log($('.zoom_left').animate({top: prevtopl+45+'px'}));
      this.zoomin_left(this.selected_pos +1);
     },

    scrollupr() {
      prevtopr = parseInt($('.zoom_right').css('top'));
      console.log($('.zoom_right').animate({top: prevtopr-45+'px'}));
      this.zoomin_right(this.selected_pos -1);
    },

    scrolldownr() {
      prevtopr = parseInt($('.zoom_right').css('top'));
      console.log($('.zoom_right').animate({top: prevtopr+45+'px'}));
      this.zoomin_right(this.selected_pos +1);
    },
  }
})
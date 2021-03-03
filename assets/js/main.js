var app = new Vue({
  el: '#app',
  data: {
    render: true,
    main: true,
    window: false,
    door: true,
    leftnav: false,
    navigation: '',
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
    scrl_up: true,
    scrl_dn: true,
    zoom_start: 0,
    zoom_end: 1,
    billboard: "State a new opinion",
    image: 'assets',


    categories: {
      category: { category_name : 'Sports, Games, Recreational',
                  subcategories : { 
                      subcategory : { subcategory_name : 'Soccer',
                                    topics : {
                                      topic : { subtopic_name : 'Subcat1-top1'},
                                      topic : { subtopic_name : 'Subcat1-top2'},
                                      topic : { subtopic_name : 'Subcat1-top3'},
                                      topic : { subtopic_name : 'Subcat1-top4'},
                                      topic : { subtopic_name : 'Subcat1-top5'},
                                    },
                      },
                      subcategory : { subcategory_name : 'Volleyball',
                                    topics : {
                                      topic : { subtopic_name : 'Subcat2-top1'},
                                      topic : { subtopic_name : 'Subcat2-top2'},
                                      topic : { subtopic_name : 'Subcat2-top3'},
                                      topic : { subtopic_name : 'Subcat2-top4'},
                                      topic : { subtopic_name : 'Subcat2-top5'},
                                    },
                      },
                      subcategory : { subcategory_name : 'Volleyball',
                                    topics : {
                                      topic : { subtopic_name : 'Subcat3-top1'},
                                      topic : { subtopic_name : 'Subcat3-top2'},
                                      topic : { subtopic_name : 'Subcat3-top3'},
                                      topic : { subtopic_name : 'Subcat3-top4'},
                                      topic : { subtopic_name : 'Subcat3-top5'},
                                    },
                      },
                  },
      },
      category: { category_name : 'Technology and Science',
                  subcategories : { 
                      subcategory : { subcategory_name : 'Computers',
                                    topics : {
                                      topic : { subtopic_name : 'Subcat1-top1'},
                                      topic : { subtopic_name : 'Subcat1-top2'},
                                      topic : { subtopic_name : 'Subcat1-top3'},
                                      topic : { subtopic_name : 'Subcat1-top4'},
                                      topic : { subtopic_name : 'Subcat1-top5'},
                                    },
                      },
                      subcategory : { subcategory_name : 'Planes',
                                    topics : {
                                      topic : { subtopic_name : 'Subcat2-top1'},
                                      topic : { subtopic_name : 'Subcat2-top2'},
                                      topic : { subtopic_name : 'Subcat2-top3'},
                                      topic : { subtopic_name : 'Subcat2-top4'},
                                      topic : { subtopic_name : 'Subcat2-top5'},
                                    },
                      },
                      subcategory : { subcategory_name : 'Planets',
                                    topics : {
                                      topic : { subtopic_name : 'Subcat3-top1'},
                                      topic : { subtopic_name : 'Subcat3-top2'},
                                      topic : { subtopic_name : 'Subcat3-top3'},
                                      topic : { subtopic_name : 'Subcat3-top4'},
                                      topic : { subtopic_name : 'Subcat3-top5'},
                                    },
                      },
                    },
      },
      category: { category_name : 'Arts and Cultural',
                  subcategories : { 
                      subcategory : { subcategory_name : 'Dances',
                                    topics : {
                                      topic : { subtopic_name : 'Subcat1-top1'},
                                      topic : { subtopic_name : 'Subcat1-top2'},
                                      topic : { subtopic_name : 'Subcat1-top3'},
                                      topic : { subtopic_name : 'Subcat1-top4'},
                                      topic : { subtopic_name : 'Subcat1-top5'},
                                    },
                      },
                      subcategory : { subcategory_name : 'Music',
                                    topics : {
                                      topic : { subtopic_name : 'Subcat2-top1'},
                                      topic : { subtopic_name : 'Subcat2-top2'},
                                      topic : { subtopic_name : 'Subcat2-top3'},
                                      topic : { subtopic_name : 'Subcat2-top4'},
                                      topic : { subtopic_name : 'Subcat2-top5'},
                                    },
                      },
                      subcategory : { subcategory_name : 'History',
                                    topics : {
                                      topic : { subtopic_name : 'Subcat3-top1'},
                                      topic : { subtopic_name : 'Subcat3-top2'},
                                      topic : { subtopic_name : 'Subcat3-top3'},
                                      topic : { subtopic_name : 'Subcat3-top4'},
                                      topic : { subtopic_name : 'Subcat3-top5'},
                                    },
                      },
                    },
      },
    },

  
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
      },
      {
        pos: 4,
        opinion: 'Opinion Position 4',
        agree: 65,
        disagree: 35,
      },
      {
        pos: 5,
        opinion: 'Lorem Ipsum Dolor Sit Amet',
        agree: 65,
        disagree: 35,
      },
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

  methods: {
    defocus(){
      /* RESETS THE STATE OF SIDEBARS AND ZOOM POSITIONS */
      this.zoom_left = false; 
      this.zoom_right = false; 
      this.leftnav = false;  
      this.rightnav = false;

      this.selected_pos = 0;
    },
    checkPosLeft(){
      /* DISABLES THE SCROLL UP OR DOWN BOTTOM ON ZOOM WINDOW */
      console.log(this.selected_pos);
      console.log(this.opinions.length);
      if (this.selected_pos == 1){
        this.scrl_up = false;
        this.scrl_dn = true;
      } else if (this.selected_pos == this.opinions.length-1) {
        this.scrl_up = true;
        this.scrl_dn = false;
      } else {
        this.scrl_up = true;
        this.scrl_dn = true;
      }
    },
    checkPosRight(){
      /* DISABLES THE SCROLL UP OR DOWN BOTTOM ON ZOOM WINDOW */
      console.log(this.selected_pos);
      console.log(this.opinions.length);
      if (this.selected_pos == 1){
        this.scrl_up = false;
        this.scrl_dn = true;
      } else if (this.selected_pos == this.users.length-1) {
        this.scrl_up = true;
        this.scrl_dn = false;
      } else {
        this.scrl_up = true;
        this.scrl_dn = true;
      }
    },
    zoomin_left(n) {

      /* 
        THIS BLOCK ASSIGNS THE POSITION OF OPINION
        THE USER CHOOSES TO ZOOM IN TO, THEN DETERMINES
        WHICH INDEX OF THE DATA ARRAY IT WILL DISPLAY
        ON THE ZOOM WINDOW REFERRING TO zoom_start AND zoom_end
        ASSUMING THE CONSTRAINT OF n CAN NEVER BE THE LAST ONE

        BUG : WHEN THE ZOOM WINDOW IS TRUE, IF THE USER CHOSES
              THE LAST INDEX, IT WILL MOVE BUT THE DATA WONT BE
              DISPLAYED DUE TO UNAVAILABLE INDEX
      */
      current = this.selected_pos;
      this.selected_pos = n;
      this.zoom_start = this.selected_pos-2;
      this.zoom_end = this.selected_pos-1;
      this.zoom_left = true;

      /* 
        THIS BLOCK IS WHAT MOVES THE ZOOM WINDOW
        BASE DETERMINES THE POSITION WHERE THE 
        ZOOM WINDOW WILL APPEAR (REFER TO CSS),
        THEN THE ZOOM WINDOW WILL BE MOVED TO THE SELECTED
        POSITION ACCORDING TO THE INDEX BY ANIMATING IT

        setTimeOut IS NEEDED BECAUSE ALTHOUGH THE CALCULATED
        POSITION HAS BEEN ASSIGNED BY JQUERY, VUE RUNS IT
        AT THE SAME TIME SO THE ZOOM WINDOW DOESNT HAVE THE TIME 
        TO REACT TO THE CHANGE OF TOP POSITION ON CSS.
      */
      base = .14*$(window).height();
      interval = 0.05*$(window).height();
      target = parseInt(base + ( interval * (this.selected_pos - 1)));

      /* 
        IF CONDITION IS USED HERE IS USED TO DETERMINE WHEN
        SCROLLING ANIMATION SHOULD ONLY OCCUR AFTER THE ZOOM
        WINDOW APPEAR
      */
      if (current == 0){
        setTimeout(function() {
          $('.zoom_left').animate({top: target+'px'}, 0, 'linear');
        }, 0);
      } else {
        setTimeout(function() {
          $('.zoom_left').animate({top: target+'px'});
        }, 0);
      }
      
      this.checkPosLeft();
     
    },

    zoomin_right(n) {

      /* 
        THIS BLOCK ASSIGNS THE POSITION OF OPINION
        THE USER CHOOSES TO ZOOM IN TO, THEN DETERMINES
        WHICH INDEX OF THE DATA ARRAY IT WILL DISPLAY
        ON THE ZOOM WINDOW REFERRING TO zoom_start AND zoom_end
        ASSUMING THE CONSTRAINT OF n CAN NEVER BE THE LAST ONE

        BUG : WHEN THE ZOOM WINDOW IS TRUE, IF THE USER CHOSES
              THE LAST INDEX, IT WILL MOVE BUT THE DATA WONT BE
              DISPLAYED DUE TO UNAVAILABLE INDEX
      */
     current = this.selected_pos;
     this.selected_pos = n;
     this.zoom_start = this.selected_pos-2;
     this.zoom_end = this.selected_pos-1;
     this.zoom_right = true;

     /* 
       THIS BLOCK IS WHAT MOVES THE ZOOM WINDOW
       BASE DETERMINES THE POSITION WHERE THE 
       ZOOM WINDOW WILL APPEAR (REFER TO CSS),
       THEN THE ZOOM WINDOW WILL BE MOVED TO THE SELECTED
       POSITION ACCORDING TO THE INDEX BY ANIMATING IT

       setTimeOut IS NEEDED BECAUSE ALTHOUGH THE CALCULATED
       POSITION HAS BEEN ASSIGNED BY JQUERY, VUE RUNS IT
       AT THE SAME TIME SO THE ZOOM WINDOW DOESNT HAVE THE TIME 
       TO REACT TO THE CHANGE OF TOP POSITION ON CSS.
     */
     base = .14*$(window).height();
     interval = 0.05*$(window).height();
     target = parseInt(base + ( interval * (this.selected_pos - 1)));
     if (current == 0){
       setTimeout(function() {
         $('.zoom_right').animate({top: target+'px'}, 0, 'linear');
       }, 0);
     } else {
       setTimeout(function() {
         $('.zoom_right').animate({top: target+'px'});
       }, 0);
     }
     
     this.checkPosRight();

    },

    left_scrollup() {
      /* SENDS SELECTED POSITION FROM SCROLL TO ZOOM WINDOW */
      this.zoomin_left(this.selected_pos -1);
      this.checkPosLeft();
    },

    left_scrolldown() {
      /* SENDS SELECTED POSITION FROM SCROLL TO ZOOM WINDOW */
      this.zoomin_left(this.selected_pos +1);
      this.checkPosLeft();
     },

    right_scrollup() {
      /* SENDS SELECTED POSITION FROM SCROLL TO ZOOM WINDOW */
      prevtop = parseInt($('.zoom_right').css('top'));
      interval = 0.05*$(window).height();
      console.log($('.zoom_right').animate({top: prevtop-interval+'px'}));
      this.zoomin_right(this.selected_pos -1);
      this.checkPosRight();
    },

    right_scrolldown() {
      /* SENDS SELECTED POSITION FROM SCROLL TO ZOOM WINDOW */
      prevtop = parseInt($('.zoom_right').css('top'));
      interval = 0.05*$(window).height();
      console.log($('.zoom_right').animate({top: prevtop+interval+'px'}));
      this.zoomin_right(this.selected_pos +1);
      this.checkPosRight();
    },
    compassnav() {
      /* CONSTRATNT DUE TO MENU CAN ONLY OPEN ONE AT A TIME */
      if (this.navigation) {
        this.navigation = '';
      } else {
        this.navigation = 'compass';
      }
    },
    usernav() {
      /* CONSTRATNT DUE TO MENU CAN ONLY OPEN ONE AT A TIME */
      if (this.navigation) {
        this.navigation = '';
      } else {
        this.navigation = 'user';
      }
    }
  }
})
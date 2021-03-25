var app = new Vue({
  el: '#app',
  data: {
    // CONTAINS APPLICATION STATES
    states: {
      screen : {
        render: true,
        main: true,
        window: false,
        leftnav: false,
        rightnav: false,
      },
      object : {
        door: true,
        start: true,
        logged: false,
        zoom_left: false,
        zoom_right: false,
        scrl_up: true,
        scrl_dn: true,
      },
      values : {
        navigation: '',
        selected_category: false,
        selected_sub: false,
        selected_topic: false,
        previous_category: false,
        previous_sub: false,
        selected_pos: 0,
        zoom_start: 0,
        zoom_end: 1,
        add_input: '',
      }
    },
   
    // CONTAINS STRINGS TO DISPLAY, MADE FOR LANGUAGE SUPPORT
    strings : {
      billboard: "State a new opinion",
      image: 'assets',
      start: 'START',
      category: 'Select A Category',
      select: 'select',
      windowTitle: 'Chicken Ranch',
      windowContext: 'Design under construction',
      menu : {
        compass : {
          home: 'Home',
          battery: 'Hen Battery',
          rules: 'Rulse of The Game',
          ranch: 'Ranch',
          about: 'About',
        },
        user: {
          profile: 'Profile',
          notifications: 'Notifications',
          chats: 'Chats',
          opinion: 'Add Opinion',
          logoff: 'Log off',
                    
        },
      },

      sides: {
        opinions: 'Most Popular Opinions',
        users: 'Most Popular Users',
      },

    },

  
    // DISPLAYED CATEGORIES, SUBS, AND TOPICS. 
    categories: {
      category1: { category_name : 'Sports, Games, Recreational',
                  subcategories : { 
                      subcategory1 : { subcategory_name : 'Soccer',
                                    topics : {
                                      topic1 : { subtopic_name : 'Subcat1-top1'},
                                      topic2 : { subtopic_name : 'Subcat1-top2'},
                                      topic3 : { subtopic_name : 'Subcat1-top3'},
                                      topic4 : { subtopic_name : 'Subcat1-top4'},
                                      topic5 : { subtopic_name : 'Subcat1-top5'},
                                    },
                      },
                      subcategory2 : { subcategory_name : 'Volleyball',
                                    topics : {
                                      topic1 : { subtopic_name : 'Subcat2-top1'},
                                      topic2 : { subtopic_name : 'Subcat2-top2'},
                                      topic3 : { subtopic_name : 'Subcat2-top3'},
                                      topic4 : { subtopic_name : 'Subcat2-top4'},
                                      topic5 : { subtopic_name : 'Subcat2-top5'},
                                    },
                      },
                      subcategory3 : { subcategory_name : 'Basketball',
                                    topics : {
                                      topic1 : { subtopic_name : 'Subcat3-top1'},
                                      topic2 : { subtopic_name : 'Subcat3-top2'},
                                      topic3 : { subtopic_name : 'Subcat3-top3'},
                                      topic4 : { subtopic_name : 'Subcat3-top4'},
                                      topic5 : { subtopic_name : 'Subcat3-top5'},
                                    },
                      },
                  },
      },
      category2: { category_name : 'Technology and Science',
                  subcategories : { 
                      subcategory1 : { subcategory_name : 'Computers',
                                    topics : {
                                      topic1 : { subtopic_name : 'Subcat1-top1'},
                                      topic2 : { subtopic_name : 'Subcat1-top2'},
                                      topic3 : { subtopic_name : 'Subcat1-top3'},
                                      topic4 : { subtopic_name : 'Subcat1-top4'},
                                      topic5 : { subtopic_name : 'Subcat1-top5'},
                                    },
                      },
                      subcategory2 : { subcategory_name : 'Planes',
                                    topics : {
                                      topic1 : { subtopic_name : 'Subcat2-top1'},
                                      topic2 : { subtopic_name : 'Subcat2-top2'},
                                      topic3 : { subtopic_name : 'Subcat2-top3'},
                                      topic4 : { subtopic_name : 'Subcat2-top4'},
                                      topic5 : { subtopic_name : 'Subcat2-top5'},
                                    },
                      },
                      subcategory3 : { subcategory_name : 'Planets',
                                    topics : {
                                      topic1 : { subtopic_name : 'Subcat3-top1'},
                                      topic2 : { subtopic_name : 'Subcat3-top2'},
                                      topic3 : { subtopic_name : 'Subcat3-top3'},
                                      topic4 : { subtopic_name : 'Subcat3-top4'},
                                      topic5 : { subtopic_name : 'Subcat3-top5'},
                                    },
                      },
                    },
      },
      category3: { category_name : 'Arts and Cultural',
                  subcategories : { 
                      subcategory1 : { subcategory_name : 'Dances',
                                    topics : {
                                      topic1 : { subtopic_name : 'Subcat1-top1'},
                                      topic2 : { subtopic_name : 'Subcat1-top2'},
                                      topic3 : { subtopic_name : 'Subcat1-top3'},
                                      topic4 : { subtopic_name : 'Subcat1-top4'},
                                      topic5 : { subtopic_name : 'Subcat1-top5'},
                                    },
                      },
                      subcategory2 : { subcategory_name : 'Music',
                                    topics : {
                                      topic1 : { subtopic_name : 'Subcat2-top1'},
                                      topic2 : { subtopic_name : 'Subcat2-top2'},
                                      topic3 : { subtopic_name : 'Subcat2-top3'},
                                      topic4 : { subtopic_name : 'Subcat2-top4'},
                                      topic5 : { subtopic_name : 'Subcat2-top5'},
                                    },
                      },
                      subcategory3 : { subcategory_name : 'History',
                                    topics : {
                                      topic1 : { subtopic_name : 'Subcat3-top1'},
                                      topic2 : { subtopic_name : 'Subcat3-top2'},
                                      topic3 : { subtopic_name : 'Subcat3-top3'},
                                      topic4 : { subtopic_name : 'Subcat3-top4'},
                                      topic5 : { subtopic_name : 'Subcat3-top5'},
                                    },
                      },
                    },
      },
    },
    //POPULAR OPINIONS
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
    //POPULAR USERS
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
    // DEFOCUS ANY FOCUSED WINDOW OR NAV
    defocus(){
      /* RESETS THE STATE OF SIDEBARS AND ZOOM POSITIONS */
      this.states.object.zoom_left = false; 
      this.states.object.zoom_right = false; 
      this.states.screen.leftnav = false;  
      this.states.screen.rightnav = false;

      this.states.values.selected_pos = 0;
    },

    // DISABLES BUTTON FOR EACH NAV IF REACHES BOTTOM LIST
    checkPosLeft(){
      /* DISABLES THE SCROLL UP OR DOWN BOTTOM ON ZOOM WINDOW */
      console.log(this.states.values.selected_pos);
      console.log(this.opinions.length);
      if (this.states.values.selected_pos == 1){
        this.states.object.scrl_up = false;
        this.states.object.scrl_dn = true;
      } else if (this.states.values.selected_pos == this.opinions.length-1) {
        this.states.object.scrl_up = true;
        this.states.object.scrl_dn = false;
      } else {
        this.states.object.scrl_up = true;
        this.states.object.scrl_dn = true;
      }
    },
    checkPosRight(){
      /* DISABLES THE SCROLL UP OR DOWN BOTTOM ON ZOOM WINDOW */
      console.log(this.states.values.selected_pos);
      console.log(this.opinions.length);
      if (this.states.values.selected_pos == 1){
        this.states.object.scrl_up = false;
        this.states.object.scrl_dn = true;
      } else if (this.states.values.selected_pos == this.users.length-1) {
        this.states.object.scrl_up = true;
        this.states.object.scrl_dn = false;
      } else {
        this.states.object.scrl_up = true;
        this.states.object.scrl_dn = true;
      }
    },

    //OPENS ZOOM WINDOW
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
      current = this.states.values.selected_pos;
      this.states.values.selected_pos = n;
      this.states.values.zoom_start = this.states.values.selected_pos-2;
      this.states.values.zoom_end = this.states.values.selected_pos-1;
      this.states.object.zoom_left = true;

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
      target = parseInt(base + ( interval * (this.states.values.selected_pos - 1)));

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
     current = this.states.values.selected_pos;
     this.states.values.selected_pos = n;
     this.states.values.zoom_start = this.states.values.selected_pos-2;
     this.states.values.zoom_end = this.states.values.selected_pos-1;
     this.states.object.zoom_right = true;

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
     target = parseInt(base + ( interval * (this.states.values.selected_pos - 1)));

      /* 
        IF CONDITION IS USED HERE IS USED TO DETERMINE WHEN
        SCROLLING ANIMATION SHOULD ONLY OCCUR AFTER THE ZOOM
        WINDOW APPEAR
      */
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

    //SCROLL TRIGGERS FOR LEFT
    left_scrollup() {
      /* SENDS SELECTED POSITION FROM SCROLL TO ZOOM WINDOW */
      this.zoomin_left(this.states.values.selected_pos -1);
      this.checkPosLeft();
    },
    left_scrolldown() {
      /* SENDS SELECTED POSITION FROM SCROLL TO ZOOM WINDOW */
      this.zoomin_left(this.states.values.selected_pos +1);
      this.checkPosLeft();
     },

    //SCROLL TRIGGERS FOR RIGHT
    right_scrollup() {
      /* SENDS SELECTED POSITION FROM SCROLL TO ZOOM WINDOW */
      this.zoomin_right(this.states.values.selected_pos -1);
      this.checkPosRight();
    },
    right_scrolldown() {
      /* SENDS SELECTED POSITION FROM SCROLL TO ZOOM WINDOW */
      this.zoomin_right(this.states.values.selected_pos +1);
      this.checkPosRight();
    },

    //OPENS COMPASS NAVIGATION
    compassnav() {
      /* CONSTRATNT DUE TO MENU CAN ONLY OPEN ONE AT A TIME */
      if (this.states.values.navigation) {
        this.states.values.navigation = '';
      } else {
        this.states.values.navigation = 'compass';
      }
    },

    //OPENS USER NAVIGATION
    usernav() {
      /* CONSTRATNT DUE TO MENU CAN ONLY OPEN ONE AT A TIME */
      if (this.states.values.navigation) {
        this.states.values.navigation = '';
      } else {
        this.states.values.navigation = 'user';
      }
    },

    // ADDS NEW SUBS AND OR TOPICS
    newSubCategory(category_position, category_name){
      if (this.states.values.add_input != ''){
        sublength = Object.keys(this.categories["category1"]["subcategories"]).length;
        this.categories['category'+category_position]
                       ['subcategories']
                       ['subcategory'+(sublength+1)] 
                       = {subcategory_name: category_name, topics : {}};
        this.states.object.door = false;  
        this.states.values.previous_category = this.states.values.selected_category;
        this.states.values.selected_category = false;
        this.states.object.door = true;  
        this.states.values.selected_category = this.states.values.previous_category;
        this.states.values.add_input = '';
      }
      
    },
    newSubTopic(category_position, subcategory_position, subtopic_name){
      if (this.states.values.add_input != ''){
        sublength = Object.keys(this.categories["category"+category_position]
                    ["subcategories"]["subcategory"+subcategory_position]["topics"]).length;
        this.categories['category'+category_position]
                      ['subcategories']
                      ['subcategory'+subcategory_position]
                      ['topics']
                      ['topic'+(sublength+1)]
                      = {subtopic_name: subtopic_name};

        this.states.values.previous_sub = this.states.values.selected_sub;
        this.states.values.selected_sub = false;
        this.states.values.selected_sub = this.states.values.previous_sub;
        this.states.values.add_input = '';
      }
    }
  }
})
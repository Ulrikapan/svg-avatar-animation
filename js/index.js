// --- Avatar Svg Animation ----//
/* 設定變數 */
var avatar = $('#avatar'),
    avatar_bg = $('#avatar_bg'),
    avatarCanvas = $('.avatarCanvas'),
    welcome_btn = $('.welcome_btn'),
    welcome_content = $('.welcome_content'),
    content01 = $('.content01'),
    content02 = $('.content02'),
    content03 = $('.content03'),
    head = $('#head'),
    neck = $('#neck'),
    hair_left = $('#hair_left'),
    hair_right = $('#hair_right'),
    ear_left = $('#ear_left'),
    ear_right = $('#ear_right'),
    fringe = $('#fringe'),
    mouth_bite = $('#mouth_bite'),
    mouth_woo = $('#mouth_woo'),
    mouth_eat = $('#mouth_eat'),
    mouth_eat2 = $('#mouth_eat2'),
    mouth_smile = $('#mouth_smile'),
    eyebrow = $('#eyebrow'),
    eyes = $('#eyes'),
    blush = $('#blush'),
    right_arm_0 = $('#right_arm_0'),
    left_arm_0 = $('#left_arm_0'),
    right_arm_1 = $('#right_arm_1'),
    right_arm_1_arm = $('#right_arm_1_arm'),
    right_arm_1_hand = $('#right_arm_1_hand'),
    left_arm_1 = $('#left_arm_1'),
    left_arm_1_arm = $('#left_arm_1_arm'),
    left_arm_1_hand = $('#left_arm_1_hand'),
    shine_right_star_1 = $('#shine_right_star_1'),
    shine_right_star_2 = $('#shine_right_star_2'),
    shine_right_star_3 = $('#shine_right_star_3'),
    shine_left_star_1 = $('#shine_left_star_1'),
    shine_left_star_2 = $('#shine_left_star_2'),
    shine_left_star_3 = $('#shine_left_star_3'),    
    pizza_group = $('#pizza_group'),
    bited = $('#bited'),
    stingies = $('#stingies'),
    pizza = $('#pizza'),
    drip1 = $('#drip1'),
    drip2 = $('#drip2'),
    drip3 = $('#drip3'),
    drip3_1 = $('#drip3_1'),
    cocktailnlight_1 = $('#cocktailnlight_1'),
    lemon = $('#lemon'),
    light_none = $('#light_none'),
    cup = $('#cup'),
    juice = $('#juice'),
    section_home = $('.section_home'),
    section_home_bg = $('.section_home_bg'),
    tl_avatar;


/* 建立timeline */
tl_avatar = new TimelineLite();

/* 元素設定初始狀態*/
tl_avatar.set(mouth_bite, {autoAlpha: 0, x: "-=40px", y: "-=10px"});
tl_avatar.set(mouth_woo, {autoAlpha: 0, scale: 0, y: "-=5px"});
tl_avatar.set(mouth_eat, {autoAlpha: 0, x: "-=40px", y: "-=5px", scaleY: .8, scaleX: .9});
tl_avatar.set(mouth_eat2, {autoAlpha: 0, x: "-=40px", y: "-=5px"});
tl_avatar.set(pizza_group, {autoAlpha: 0})
tl_avatar.set(stingies, {autoAlpha: 0});
tl_avatar.set(drip1, {autoAlpha: 0, scaleY: 0});
tl_avatar.set(drip2, {autoAlpha: 0, scaleY: 0});
tl_avatar.set(drip3, {autoAlpha: 0, scaleY: 0});
tl_avatar.set(drip3_1, {autoAlpha: 0});
tl_avatar.set(shine_right_star_1, {autoAlpha: 0});
tl_avatar.set(shine_right_star_2, {autoAlpha: 0});
tl_avatar.set(shine_right_star_3, {autoAlpha: 0});
tl_avatar.set(shine_left_star_1, {autoAlpha: 0, y: "+=30px"});
tl_avatar.set(shine_left_star_2, {autoAlpha: 0, y: "+=30px"});
tl_avatar.set(shine_left_star_3, {autoAlpha: 0, y: "+=30px"});
tl_avatar.set(cocktailnlight_1, {autoAlpha: 0, y: "-=20px"});
tl_avatar.set(left_arm_1, {autoAlpha: 0});
tl_avatar.set(right_arm_1, {autoAlpha: 0, y: "+=10px"});
tl_avatar.set(hair_right, {autoAlpha: 0});


/* 動畫設定 */

tl_avatar
  // 背景出現
  .from(avatar_bg ,.5, {yPercent: 50, xPercent: 50, autoAlpha: 0, scale: 0 ,ease: Back.easeOut})
  // 人物出現
  .from(avatar, 1, {xPercent: 25, yPercent: 50, autoAlpha: 0, scale: .5, ease: Elastic.easeOut}, "+=.3")
  // 右手舉起
  .to(left_arm_0, .5,{ autoAlpha: 0, ease: Back.easeInOut},)
  .to(left_arm_1, .5, { autoAlpha: 1, ease: Back.easeInOut}, "-=.4")
  // 揮手
  .to(left_arm_1_hand, .5, { rotation: 10, transformOrigin: "center bottom"}, "cut2")
  .to(left_arm_1_hand, .5, { rotation: 0, transformOrigin: "center bottom"})
  .to(left_arm_1_hand, .5, { rotation: 10, transformOrigin: "center bottom"})
  .to(left_arm_1_hand, .5, { rotation: 0, transformOrigin: "center bottom"})
  // 第一段文字出現
  .from(welcome_content, .8, { autoAlpha: 0, width: 0, padding: '0px 0px'}, "cut2")
  // 第一段文字消失
  .to(welcome_content, .5, { width: 0, padding: '0px 0px'}, "cut3")
  .to(content01, .5 ,{ display: "none"}, "cut3")
  // 第二段文字出現
  .fromTo(welcome_content, .8, {width: 0},{ width: "+=320px", padding: '0px 10px'}, "cut4")
  .to(content02, .8 ,{ display: "inline-block"}, "cut4")
  // Pizza出現
  .to(pizza_group, 1, { autoAlpha: 1, y: "+=15px", ease: Power4.easeOut}, "cut5")
  .to(shine_left_star_1, .5, {autoAlpha: 1, y: "-=15px", ease: Power4.easeOut}, "cut5")
  .to(shine_left_star_1, .2, {autoAlpha: 0, ease: Power4.easeOut})
  .to(shine_left_star_2, .7, {autoAlpha: 1, y: "-=15px", ease: Power4.easeOut}, "cut5+=.3")
  .to(shine_left_star_2, .2, {autoAlpha: 0, ease: Power4.easeOut})
  .to(shine_left_star_3, .9, {autoAlpha: 1, y: "-=15px", ease: Power4.easeOut}, "cut5+=.5")
  .to(shine_left_star_3, .2, {autoAlpha: 0, ease: Power4.easeOut})
  // Pizza 滴下
  .to(drip1, .3, {autoAlpha: 1, scaleY: 1, ease: Back.easeOut} ,"-=.4")
  .to(drip2, .3, {autoAlpha: 1, scaleY: 1, ease: Back.easeOut} ,"-=.4")
  .to(drip3, .3, {autoAlpha: 1, scaleY: 1, ease: Back.easeOut} ,"-=.4")
  .to(drip3_1, .3, {autoAlpha: 1, scaleY: 1, ease: Back.easeOut}, "-=.4")

  // 表情
  .to(mouth_smile, .4, {autoAlpha: 0}, "cut5")
  .to(mouth_woo, .3, {autoAlpha: 1, scale: 1,x: "-=60px"}, "cut5")
  .to(hair_left, .4 ,{autoAlpha: 0,ease: Back.easeOut}, "cut5")
  .to(hair_right, .3 ,{autoAlpha: 1,ease: Back.easeOut}, "cut5")
  .to(ear_left, .3 ,{autoAlpha: 0}, "cut5")
  .to(eyes, .3, {x: "-=30px"}, "cut5")
  .to(eyebrow, .3, {x: "-=30px" , y: "-=10px"}, "cut5")
  .to(blush, .3, {x: "-=30px"}, "cut5")
  .to(fringe, .3, {x: "-=30px"}, "cut5")

  // Pizza 咬一口
  .to(mouth_bite, .3 , {autoAlpha: 1}, "cut6")
  .to(mouth_woo, .3 , {autoAlpha: 0} , "cut6")
  .to(head, .4 ,{rotation: "-3", transformOrigin:"center bottom", y: "+=10px", ease: Power4.easeOut})
  .to(neck, .4 ,{y: "+=5px", ease: Power4.easeOut}, "-=.4")
  .to(mouth_bite, .3, {autoAlpha: 0}, "-=.2")
  .to(mouth_eat, .3 , {autoAlpha: 1})
  .to(mouth_eat, .2, {scaleY: .5}, "-=.2")
  .to(eyebrow, .3, {x: "-=0px" , y: 0}, "-=.3")
  .to(bited, .5, {x: "+=30px", ease: Back.easeOut}, "cut7")
  .to(stingies, .5, {x: "+=35px", autoAlpha: 1, ease: Back.easeOut}, "cut7")
  .to(head, .3 ,{rotation: 0, transformOrigin:"center bottom", ease: Power4.easeOut, y: 0},"cut7")
  .to(neck, .3 ,{y: 0, ease: Power4.easeOut}, "cut7")
  .to(bited, .3, {autoAlpha: 0})
  .to(stingies, .3, {autoAlpha: 0}, "-=.3")

  // 頭歸位 咀嚼
  .to(mouth_eat, .2, {scaleY: .5})
  .to(head, .2 , {y: 0}, "-=.2")
  .to(mouth_eat, .2, {scaleY: .8})
  .to(mouth_eat, .2, {scaleY: 1, y: "+=4px"})
  .to(head, .2 , {y: "+=4px"}, "-=.2")
  .to(neck, .2 ,{y: "+=1px", ease: Power4.easeOut}, "-=.2")
  .to(mouth_eat, .2, {scaleY: .8})
  .to(mouth_eat, .2, {scaleY: .5, y: 0})
  .to(head, .2 , {y: 0}, "-=.2")
  .to(neck, .2 ,{y: 0, ease: Power4.easeOut}, "-=.2")
  .to(mouth_eat, .2, {scaleY: .8})
  .to(mouth_eat, .2, {scaleY: 1, y: "+=4px"})
  .to(head, .2 , {y: "+=4px"}, "-=.2")
  .to(neck, .2 ,{y: "+=1px", ease: Power4.easeOut}, "-=.2")
  .to(mouth_eat, .2, {scaleY: .8})
  .to(mouth_eat, .2, {scaleY: .5, y: 0})
  .to(head, .2 , {y: 0}, "-=.2")
  .to(neck, .2 ,{y: 0, ease: Power4.easeOut}, "-=.2")
  .to(mouth_eat, .2, {scaleY: .8})
  .to(mouth_eat, .2, {scaleY: 1, y: "+=4px"})
  .to(head, .2 , {y: "+=4px"}, "-=.2")
  .to(neck, .2 ,{y: "+=1px", ease: Power4.easeOut}, "-=.2")

  // 第二段文字消失
  .to(welcome_content, .5, { width: 0, padding: '0px 0px'}, "cut8")
  .to(content02, .5 ,{ display: "none"}, "cut8")


  // Pizza消失 手放下
  .to(pizza_group, .5, {autoAlpha: 0, y: "+=10px"}, "cut8")
  .to(left_arm_0, .5,{ autoAlpha: 1, ease: Back.easeInOut},"cut8")
  .to(left_arm_1, .5, { autoAlpha: 0, ease: Back.easeInOut}, "cut8-=.1")
  // 右手舉起
  .to(right_arm_0, .5, {autoAlpha: 0, ease: Back.easeInOut}, "cut8+=.2")
  .to(right_arm_1, .5, {autoAlpha: 1, y: 0, ease: Back.easeInOut}, "cut8+=.3")

  // 表情
  .to(mouth_eat, .3 , {autoAlpha: 0}, "cut8+=.2")
  .to(mouth_smile, .3, {autoAlpha: 1}, "cut8+=.2")
  .to(hair_right, .4 ,{autoAlpha: 0,ease: Back.easeOut}, "cut8+=.2")
  .to(hair_left, .3 ,{autoAlpha: 1,ease: Back.easeOut}, "cut8+=.2")
  .to(ear_right, .3 ,{autoAlpha: 0}, "cut8+=.2")
  .to(ear_left, .3 ,{autoAlpha: 1}, "cut8+=.2")
  .to(eyes, .3, {x: "+=30px"}, "cut8+=.2")
  .to(eyebrow, .3, {x: "+=30px"}, "cut8+=.2")
  .to(blush, .3, {x: "+=30px"}, "cut8+=.2")
  .to(fringe, .3, {x: "+=30px"}, "cut8+=.2")

  // 飲料出現
  .to(cocktailnlight_1, 1, {autoAlpha: 1, y: "+=15px", ease: Power4.easeOut}, "cut9" )
  .to(shine_right_star_1, .5, {autoAlpha: 1, y: "+=10px", ease: Power4.easeOut}, "cut9")
  .to(shine_right_star_1, .2, {autoAlpha: 0, ease: Power4.easeOut})
  .to(shine_right_star_2, .7, {autoAlpha: 1, y: "+=10px", ease: Power4.easeOut}, "cut9+=.3")
  .to(shine_right_star_2, .2, {autoAlpha: 0, ease: Power4.easeOut})
  .to(shine_right_star_3, .9, {autoAlpha: 1, y: "+=10px", ease: Power4.easeOut}, "cut9+=.5")
  .to(shine_right_star_3, .2, {autoAlpha: 0, ease: Power4.easeOut})

  // 第三段文字出現
  .fromTo(welcome_content, .8, {width: 0},{ width: "+=300px", padding: '0px 10px'}, "cut9")
  .to(content03, .8 ,{ display: "inline-block"}, "cut9")

  //文字畫面停
  .to(welcome_content, 1, {autoAlpha: 1})

  // 畫面往上
  .to(section_home_bg, 2, {yPercent: "-=100%", ease: Expo.easeOut} ,"cut10")
  .to(avatarCanvas, 2, {yPercent: "-=98%", ease: Expo.easeOut}, "cut10")


  // 臉部驚訝
  .to(mouth_smile, .2, {autoAlpha: 0}, "cut10")
  .to(mouth_woo, .2, {x: "+=40px", autoAlpha: 1, scale: 1.1}, "cut10")
  .to(eyebrow, .3, {x: "+=5px", y: "-=10px"}, "cut10")

  // 手滑
  .to(right_arm_1_hand, .5, { rotation: 10, transformOrigin: "center bottom"}, "cut10")
  .to(right_arm_1_arm, .5, { rotation: "-10", transformOrigin: "left bottom", x: "+=10px", y: "+=5px"}, "cut10")

  // 杯子掉落
  .to(cocktailnlight_1, 4, {autoAlpha: 1, xPercent: "-=220px",rotation: "+=900", transformOrigin: "center bottom", scale: 2}, "cut10")
  .to(juice, 2, {autoAlpha: 0}, "cut10")
  .to(cup, 2, {fill: "#424A56", opacity: 1}, "cut10")
  .to(light_none, 2, {autoAlpha: 0}, "cut10")
  .to(lemon, 2, {xPercent: "-=105%"}, "cut10")



  // 淡出
  .to(head, 2, {autoAlpha: 0}, "cut10+=1")
  .to(body, 2, {autoAlpha: 0}, "cut10+=1")
  .to(right_arm_1, 2, {autoAlpha: 0}, "cut10+=1")
  .to(left_arm_0, 2, {autoAlpha: 0}, "cut10+=1")
  .to(neck, 2, {autoAlpha: 0}, "cut10+=1")
  .to(avatar_bg, 2, {autoAlpha: 0}, "cut10+=1")
  .to(welcome_content, 2, {autoAlpha: 0}, "cut10+=1" )


welcome_btn.click(
  function(){
    tl_avatar.seek(0);
  })
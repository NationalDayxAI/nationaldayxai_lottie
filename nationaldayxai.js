 var animData = {
  wrapper: document.getElementById('lottie'),
  animType: 'svg',
  loop: true,
  prerender: true,
  autoplay: true,
  path: 'https://raw.githubusercontent.com/NationalDayxAI/nationaldayxai_lottie/main/nationaldayxai.json'
 };
 var anim = bodymovin.loadAnimation(animData);
	window.onresize = anim.resize.bind(anim);

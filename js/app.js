// 获取轮播DOM元素
const bannerInner = document.querySelector('.banner-inner');
const imgs = document.querySelectorAll('.banner-inner img');


// 轮播配置
let currentIndex = 0;
const imgLen = imgs.length;
const intervalTime = 3000;
let timer = null;

// 获取当前图片实际宽度
const getCurrentWidth = () => imgs[0].offsetWidth;

// 切换图片位移
function moveBanner()
{
  const width = getCurrentWidth();
  bannerInner.style.transform = `translateX(-${currentIndex * width}px)`;
}

function autoPlay()
{
  currentIndex++;
  if (currentIndex >= imgLen)
  {
    currentIndex = 0;// 循环回到首张
  }
  moveBanner();
}// 自动轮播逻辑

function initPlay()
{
  clearInterval(timer);
  timer = setInterval(autoPlay, intervalTime);
}// 开启轮播

window.onresize = () => moveBanner();// 窗口缩放自动适配

initPlay();// 初始化执行

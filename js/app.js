// 获取轮播图元素
const bannerInner = document.querySelector('.banner-inner');
const imgs = document.querySelectorAll('.banner-inner img');
const dots = document.querySelector('.dots');

// 配置
let currentIndex = 0; // 当前第几张
const imgWidth = imgs[0].offsetWidth; // 一张图的宽度
const len = imgs.length; // 总数量
const speed = 3000; // 3秒切换一次

// 自动播放
function autoPlay() {
  currentIndex++;

  // 到头了回到第一张
  if (currentIndex >= len) {
    currentIndex = 0;
  }

  // 移动图片
  bannerInner.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
  bannerInner.style.transition = '0.5s ease';
}

// 启动定时器
setInterval(autoPlay, speed);

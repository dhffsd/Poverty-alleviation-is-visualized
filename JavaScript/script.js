function toggleMenu() {
  const menuContainer = document.getElementById('menu-container');
  const menuIcon = document.getElementById('menu-icon');
  const closeButton = document.getElementById('menu-close');

  if (menuContainer.classList.contains('visible')) {
    menuContainer.classList.remove('visible');
    menuIcon.style.opacity = '1'; // 显示菜单图标
    closeButton.style.opacity = '0'; // 隐藏关闭按钮
  } else {
    menuContainer.classList.add('visible');
    menuIcon.style.opacity = '0'; // 隐藏菜单图标
    closeButton.style.opacity = '1'; // 显示关闭按钮
  }
}

function scrollToNext() {
  // 检查当前显示的文本，如果是第四段文字，则跳转到下一个页面
  const visibleText = document.querySelector('.text-fade.visible');
  if (visibleText && visibleText.id === 'text4') {
    // 这里可以替换成您想要跳转的页面的URL
    window.location.href = 'animation1.html';
  } else {
    // 如果不是第四段文字，显示下一个文本
    const texts = document.querySelectorAll('.text-fade');
    let nextIndex = Array.from(texts).indexOf(visibleText) + 1;
    if (nextIndex >= texts.length) {
      nextIndex = 0; // 如果是最后一个文本，则循环到第一个
    }
    texts[nextIndex].classList.add('visible');
  }
}

// 初始化显示第一段文字
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('text1').classList.add('visible');
});

document.addEventListener('DOMContentLoaded', function() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const text4 = document.getElementById('text4'); // 获取第四段文字的元素
  const backgroundVideo = document.getElementById('background-video');
  const background1Video = document.getElementById('background1-video')


  // backgroundVideo.style.display = 'none';
  // background1Video.style.display = 'block';


  document.getElementById('menu-icon').style.opacity = '0';
  document.getElementById('menu-close').style.opacity = '0';
  document.getElementById('arrow-container').style.opacity = '0';
  // 显示第一段文字
  text1.classList.add('visible');

  // 4秒后隐藏第一段文字，显示第二段文字
  setTimeout(() => {
    text1.classList.remove('visible');
    text2.classList.add('visible');
  }, 6000);

  // 8秒后隐藏第二段文字，显示第三段文字
  setTimeout(() => {
    text2.classList.remove('visible');
    text3.classList.add('visible');
  }, 15000);

  // 12秒后隐藏第三段文字，显示第四段文字，并切换到第二个视频
  setTimeout(() => {
    text3.classList.remove('visible');
    text4.classList.add('visible'); // 显示第四段文字
    document.body.classList.add('flash');
    document.getElementById('menu-icon').style.opacity = '1';
    document.getElementById('menu-close').style.opacity = '1';
    document.getElementById('arrow-container').style.opacity = '1';
    setTimeout(() => {
      document.body.classList.remove('flash');
      backgroundVideo.style.display = 'none';
      background1Video.classList.add('blur');
      background1Video.style.display = 'block';
    }, 10000);
  }, 24000);
});

function closeModal() {
  var modal = document.querySelector('.modal');
  modal.style.display = 'none';
}
let currentFrameIndex = 2; // 从1开始

function navigateFramess(direction) {
  const frames = document.querySelectorAll('.frame');
  currentFrameIndex += direction;

  if (currentFrameIndex < 1) {
    currentFrameIndex = frames.length;
  } else if (currentFrameIndex > frames.length) {
    currentFrameIndex = 1;
  }

  selectFrame(frames[currentFrameIndex - 1]); // 减1以匹配从1开始的索引
}

function selectFrame(frame) {
  const frames = document.querySelectorAll('.frame');
  frames.forEach(f => f.classList.remove('active'));
  frame.classList.add('active');
  const index = parseInt(frame.getAttribute('data-frame-index'));
  window.location.href = `animation${index + 1}.html`; // 跳转到对应的网页
}

document.addEventListener('DOMContentLoaded', function() {
  const frames = document.querySelectorAll('.frame');
  // 假设第一个圆点的 data-frame-index 是 "1"，我们激活索引为 "1" 的圆点
  const currentActiveFrame = document.querySelector('.frame[data-frame-index="0"]');
  currentActiveFrame.classList.add('active'); // 初始化时，激活第一个圆点

  frames.forEach(frame => {
    frame.addEventListener('click', function() {
      // 移除所有圆点的激活状态
      frames.forEach(f => f.classList.remove('active'));
      // 给当前点击的圆点添加激活状态
      this.classList.add('active');
      // 获取当前的 frame index，并加 1（因为索引从1开始）
      const index = parseInt(this.getAttribute('data-frame-index'));
      // 跳转到对应的网页
      window.location.href = `animation${index+1}.html`;
    });
  });
});

function showModal() {
  var modal = document.querySelector('.modal');
  var virtualFrames = document.querySelector('.virtual-frames');
  modal.style.display = 'block'; // 显示模态框
  virtualFrames.style.display = 'block'; // 显示虚拟框架
  document.querySelectorAll('.virtual-frame')[0].classList.add('active'); // 激活第一个虚拟框架
}

document.addEventListener('DOMContentLoaded', function() {
  const lightPoint = document.getElementById('lightPoint');
  const container = document.querySelector('.container'); // 假设光点需要显示在.container中

  // 设置光点的位置
  lightPoint.style.left = '50%'; // 居中显示
  lightPoint.style.top = '20%'; // 居中显示

  // 5秒后显示光点
  setTimeout(function() {
    lightPoint.style.opacity = 1; // 改变透明度来显示光点
    lightPoint.style.pointerEvents = 'auto'; // 允许点击
  }, 5000); // 5秒后执行

  // 添加点击事件
  lightPoint.addEventListener('click', function() {
    // 这里可以添加点击光点后的交互逻辑
    console.log('光点被点击了！');
    window.location.href = 'CarbonDioxide/CarbonDioxide.html';
    lightPoint.style.opacity = 0; // 点击后隐藏光点
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.title');
  const virtualFrames = document.querySelector('.virtual-frames');
  const modal = document.querySelector('.modal');
  const footer = document.querySelector('.footer-text');

  // 初始时隐藏所有虚拟框架、立方体容器和模态框
  modal.style.display = 'none';
  footer.style.display = 'none';

  // 标题淡出后再等待3秒，隐藏标题并显示其他所有内容
  setTimeout(() => {
    footer.style.display = 'block';
    // document.querySelectorAll('.virtual-frame')[0].classList.add('active'); // 激活第一个虚拟框架
    modal.style.display = 'block'; // 显示模态框
    // 给虚拟框架和立方体容器添加渐入效果
    virtualFrames.style.animation = 'fadeIn 3s ease-out forwards';
  }, 5000); // 12秒后（6秒渐入 + 3秒等待 + 3秒渐出）
});


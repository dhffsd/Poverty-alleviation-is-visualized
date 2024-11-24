document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.title');
  const virtualFrames = document.querySelector('.virtual-frames');
  const cubesContainer = document.querySelector('.cubes-container');
  const modal = document.querySelector('.modal');
  const footer = document.querySelector('.footer-text');
  const footer1 = document.querySelector('.footer1-text');

  // 初始时隐藏所有虚拟框架、立方体容器和模态框
  virtualFrames.style.display = 'none';
  cubesContainer.style.display = 'none';
  modal.style.display = 'none';
  footer.style.display = 'none';
  footer1.style.display = 'none';

  // 显示标题并开始渐入动画
  title.style.display = 'block'; // 先显示标题以便渐入动画可以执行

  // 9秒后（6秒渐入 + 3秒等待）开始淡出标题
  setTimeout(() => {
    title.classList.add('fade-out');
  }, 9000);

  // 标题淡出后再等待3秒，隐藏标题并显示其他所有内容
  setTimeout(() => {
    title.style.display = 'none'; // 隐藏标题
    // virtualFrames.style.display = 'block'; // 显示虚拟框架
    cubesContainer.style.display = 'block'; // 显示立方体容器
    footer.style.display = 'block';
    footer1.style.display = 'block';
    // document.querySelectorAll('.virtual-frame')[0].classList.add('active'); // 激活第一个虚拟框架
    // modal.style.display = 'block'; // 显示模态框

    // 给虚拟框架和立方体容器添加渐入效果
    virtualFrames.style.animation = 'fadeIn 3s ease-out forwards';
    cubesContainer.style.animation = 'fadeIn 3s ease-out forwards';
  }, 12000); // 12秒后（6秒渐入 + 3秒等待 + 3秒渐出）
});
// 显示模态框的函数
function showModal() {
  var modal = document.querySelector('.modal');
  var virtualFrames = document.querySelector('.virtual-frames');
  modal.style.display = 'block'; // 显示模态框
  virtualFrames.style.display = 'block'; // 显示虚拟框架
  document.querySelectorAll('.virtual-frame')[0].classList.add('active'); // 激活第一个虚拟框架
}

// 关闭模态框的函数
function closeModal() {
  var modal = document.querySelector('.modal');
  modal.style.display = 'none';
  document.querySelector('.virtual-frames').style.display = 'none'; // 隐藏虚拟框架
}
let currentFrameIndex = 1; // 从1开始

function navigateFrames(direction) {
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
function showFrame(index) {
  const frames = document.querySelectorAll('.virtual-frame');
  frames.forEach((frame, i) => {
    frame.style.display = i === index ? 'block' : 'none';
  });
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

document.addEventListener('DOMContentLoaded', () => {
  showFrame(currentFrameIndex);
});

document.addEventListener('DOMContentLoaded', function() {
  const cubesContainer = document.querySelector('.cubes-container');
  const cubeCount = 31; // 总共34个立方体
  const cubeSize = 20; // 每个立方体的大小

  // 包含中国34个省级行政区的脱贫信息数组
  const regionData = [
    { region: '北京', info: '北京市如期完成了新时代脱贫攻坚目标任务' },
    { region: '天津', info: '天津市通过东西部扶贫协作和支援合作，助力50个结对贫困县、335.65万贫困人口脱贫摘帽，实现“两不愁三保障”。' },
    { region: '河北', info: '河北省232.3万建档立卡贫困人口全部脱贫，62个贫困县全部摘帽，7746个贫困村全部出列。' },
    { region: '山西', info: '山西省58个贫困县全部摘帽，7993个贫困村全部退出，贫困人口减少到2.16万人，贫困发生率降至0.1%以下。' },
    { region: '内蒙古', info: '内蒙古自治区实现了157万贫困人口全部脱贫，57个贫困旗县和3681个贫困嘎查村全部摘帽退出。' },
    { region: '辽宁', info: '辽宁省完成了1.42万剩余贫困人口的脱贫任务，贫困发生率降至0.06%。' },
    { region: '吉林', info: '吉林省8个贫困县全部实现脱贫摘帽，贫困发生率降至0.07%，全省建档立卡贫困人口70万人全部脱贫。' },
    { region: '黑龙江', info: '黑龙江省62.5万建档立卡农村贫困人口全部脱贫，20个国家级和8个省级贫困县全部摘帽，1778个贫困村全部出列。' },
    { region: '上海', info: '上海市如期完成新时代脱贫攻坚目标任务，现行标准下9899万农村贫困人口全部脱贫，832个贫困县全部摘帽，12.8万个贫困村全部出列。' },
    { region: '江苏', info: '江苏省254.9万建档立卡低收入人口和821个省定经济薄弱村全部达标，12个省级重点帮扶县（区）全部摘帽。' },
    { region: '浙江', info: '浙江省农村贫困人口全部脱贫，贫困发生率降至零。' },
    { region: '安徽', info: '安徽省31个贫困县全部摘帽，贫困人口由2014年的484万人降至2019年底的8.7万人，贫困发生率由9.1%降至0.16%。' },
    { region: '福建', info: '福建省现行标准下农村建档立卡贫困人口全部脱贫，2201个建档立卡贫困村全部退出，23个省级扶贫开发工作重点县全部摘帽。' },
    { region: '江西', info: '江西省25个贫困县全部脱贫退出，全省建档立卡贫困人口从2013年底的346万人减至2019年底的9.6万人，贫困发生率从9.21%降至0.27%。' },
    { region: '山东', info: '山东省省标以下贫困人口全部实现脱贫，8654个省扶贫工作重点村全部退出。' },
    { region: '河南', info: '河南省53个贫困县、9536个贫困村、718.6万建档立卡贫困人口全部脱贫。' },
    { region: '湖北', info: '湖北省581万贫困人口全部脱贫，37个贫困县全部摘帽，4821个贫困村全部出列。' },
    { region: '湖南', info: '湖南省51个贫困县全部脱贫摘帽，6920个贫困村全部脱贫出列，767万贫困人口摆脱贫困。' },
    { region: '广东', info: '广东省内161.5万相对贫困人口和2277个相对贫困村全部达到脱贫出列标准。' },
    { region: '广西', info: '广西壮族自治区54个贫困县全部摘帽，106个有扶贫开发工作任务的县（市、区）建档立卡贫困人口全部脱贫，5379个贫困村全部出列。' },
    { region: '海南', info: '海南省15.21万户、64.97万人全部脱贫，600个贫困村全部出列，5个贫困县全部摘帽。' },
    { region: '重庆', info: '重庆市14个国家扶贫开发工作重点区县和4个市级扶贫开发工作重点区县全部脱贫摘帽，1919个贫困村全部整村脱贫，累计动态识别的190.6万建档立卡贫困人口全部脱贫。' },
    { region: '四川', info: '四川省建档立卡贫困人口从2013年底的625万人减少到2019年底的20万人，贫困发生率从9.6%下降到0.3%。' },
    { region: '贵州', info: '贵州省923万贫困人口全部脱贫，66个贫困县全部摘帽，9000个贫困村全部出列。' },
    { region: '云南', info: '云南省实现了现行标准下农村贫困人口全部脱贫，88个贫困县全部摘帽，8502个贫困村全部出列。' },
    { region: '西藏', info: '西藏自治区实现了74个贫困县区全部摘帽，62.8万建档立卡贫困人口脱贫，贫困发生率降为0。' },
    { region: '陕西', info: '陕西省56个贫困县（区）全部实现“摘帽”，96.2%的贫困人口脱贫，贫困发生率下降到0.75%。' },
    { region: '甘肃', info: '甘肃省累计减贫550万人，75个贫困县全部摘帽，7262个贫困村中6867个退出贫困序列。' },
    { region: '青海', info: '青海省53.9万贫困人口全部脱贫，全省42个贫困县（市、区、行委）全部退出贫困县序列。' },
    { region: '宁夏', info: '宁夏回族自治区9个贫困县全部摘帽，1100个贫困村全部出列，62.4万农村贫困人口全部脱贫。' },
    { region: '新疆', info: '新疆维吾尔自治区306.49万农村贫困人口全部脱贫，3666个贫困村全部退出，35个贫困县全部摘帽。' }
  ];

  // 创建并添加立方体
  regionData.forEach((item, index) => {
    const cube = createCube(index, `${item.region}：${item.info}`, cubeSize);
    cubesContainer.appendChild(cube);
  });
});

function createCube(index, infoText, cubeSize) {
  const cube = document.createElement('div');
  cube.className = 'cube';
  cube.style.left = '0px'; // 所有立方体都位于容器的最左边
  cube.style.top = `${index * cubeSize}px`; // 垂直方向上排列

  const info = document.createElement('div');
  info.className = 'cube-info';
  info.textContent = infoText; // 指定的信息
  cube.appendChild(info);

  return cube;
}



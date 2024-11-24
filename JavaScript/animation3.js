let currentFrameIndex = 4; // 从1开始

function navigateFramesss(direction) {
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

document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.title');
  const virtualFrames = document.querySelector('.virtual-frames');
  const modal = document.querySelector('.modal');
  const footer = document.querySelector('.footer-text');
  const footer1 = document.querySelector('.footer1-text');
  const stars = document.querySelector('.starsforty-container');

  // 初始时隐藏所有虚拟框架、立方体容器和模态框
  modal.style.display = 'none';
  footer.style.display = 'none';
  footer1.style.display = 'none';
  stars.style.display = 'none';

  // 标题淡出后再等待3秒，隐藏标题并显示其他所有内容
  setTimeout(() => {
    footer.style.display = 'block';
    // document.querySelectorAll('.virtual-frame')[0].classList.add('active'); // 激活第一个虚拟框架
    modal.style.display = 'block'; // 显示模态框
    footer1.style.display = 'block';
    stars.style.display = 'block';
    // 给虚拟框架和立方体容器添加渐入效果
    // virtualFrames.style.animation = 'fadeIn 3s ease-out forwards';
  }, 9000); // 12秒后（6秒渐入 + 3秒等待 + 3秒渐出）
});
function showModal() {
  var modal = document.querySelector('.modal');
  var virtualFrames = document.querySelector('.virtual-frames');
  modal.style.display = 'block'; // 显示模态框
  virtualFrames.style.display = 'block'; // 显示虚拟框架
  document.querySelectorAll('.virtual-frame')[0].classList.add('active'); // 激活第一个虚拟框架
}
function closeModal() {
  var modal = document.querySelector('.modal');
  modal.style.display = 'none';
}





const body = document.body
//星星脚本代码
const starCreate= ()=>{
  let star=''
  //一次生成10颗星星
  for(let i=0;i<10;i++) {
    star = document.createElement('div')
    star.classList.add('star')
    let r = Math.random()*4 + 2 //半径2~4px
    star.style.width=r+'px'
    star.style.height=r+'px'
    star.style.left=Math.random()*innerWidth+'px'
    star.style.top=Math.random()*innerHeight+'px'
    body.append(star)
  }
  setTimeout(()=>{
    star.remove()
  },400)

}
setInterval(()=>{
  starCreate()
},900)


//流星脚本代码
const meteorCreate=()=>{
  let meteor=document.createElement('div')
  meteor.classList.add('meteor')
  let size=Math.random()*10+100
  meteor.style.width=size+'px'
  meteor.style.right=Math.random()*innerWidth+'px'
  meteor.style.top=Math.random()*innerHeight+'px'
  body.append(meteor)
  setTimeout(()=>{
    meteor.remove()
  },400)
}

setInterval(()=>{
  meteorCreate()
},1000)

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.starsforty-container');

  // 为每颗星星指定固定位置
  const starsInfo = [
    {
      top: '20%',
      left: '20%',
      info: '姜仕坤，委书记，晴隆原县，曾经誓言“只要还有一个晴隆人没有脱贫，我这个县委书记就不能休息”的晴隆原县委书记姜仕坤，为脱贫梦想耗尽了最后心力，用46年的短暂生命兑现了庄严承诺，于2016年4月，因突发疾病去世'
    },
    {
      top: '30%',
      left: '50%',
      info: '文伟红，第一书记，沿河县大坪村，连续七年驻扎在脱贫一线，给父母家书中说“要坚持到脱贫攻坚胜利那一天”，却在胜利来临前永远长眠在了曾经战斗的土地上。'
    },
    {
      top: '50%',
      left: '70%',
      info: '王小权，第一书记，台江县长滩村，为苗乡群众脱贫致富日夜奔波，不幸倒在了苗乡侗寨的扶贫路上。于2019年12月26日不幸因公殉职。'
    },
    {
      top: '60%',
      left: '10%',
      info: '吴兴堂，驻村干部，黎平县龙额镇亚罕村，“虽明显感觉身体不适，却一心扑在工作上未及时就医。2019年5月21日，吴兴堂因积劳成疾不幸去世。为贫困群众送物品，对于吴兴堂来说是常事。他每次去镇上开会或到县城办事，都会帮村民带米带面、买肉买盐，还一家家地送上门去。'
    },
    {
      top: '20%',
      left: '40%',
      info: '罗朋，街道临聘志愿者，纳雍县曙光镇河沟村，“身为毕节市纳雍县曙光镇河沟村河沟组贫困户，在享受易地扶贫搬迁等服务政策后，以街道临聘志愿者身份入职。'
    },
    {
      top: '80%',
      left: '30%',
      info: '丁永华，第一书记，三都自治县普安镇基村，“2017年9月5日，在回村途中突发急病，倒在了脱贫一线战场，生命的年轮定格在53岁。丁永华规划的三大产业，奠定了阳基村的发展方向'
    },
    {
      top: '70%',
      left: '85%',
      info: '陈永凤，村主任、村妇联主席，大方县凤山乡谢都村，“在2018年大方县脱贫攻坚冲刺期间，陈永凤经常出现头晕目眩、四肢乏力等症状，并于当年11月26日在上班时突发脑梗住院，仅仅15天后，尚未痊愈的她主动申请回到脱贫攻坚一线。'
    },
    {
      top: '90%',
      left: '55%',
      info: '徐梅，扶贫干部，遵义市总工会，“在赶往习水县督导扶贫工作的途中遭遇车祸，不幸遇难。徐梅在工作中总是主动帮助同事，积极参与扶贫工作，她的去世让同事和村民都感到非常悲痛。'
    },
    {
      top: '40%',
      left: '90%',
      info: '余永流，驻村干部，汇川区，“因积劳成疾生命永远停留在33岁的刻度上，那封广为流传的《呈公主殿下书》不禁让人泪流满面，不满三岁的“公主殿下”还来不及感受父亲的挚爱，这位“臣”已经永远不告而别。'
    },
    {
      top: '50%',
      left: '50%',
      info: '文朝荣，老支书，毕节市赫章县海雀村，“文朝荣带领村民植树造林，兴农治愚挖穷根，将“苦甲天下”的穷村子，带上了“林茂粮丰”的致富路。他二十多年如一日的工作，最终因积劳成疾医治无效去世。'
    },
    {
      top: '85%',
      left: '15%',
      info: '耿展宇，办事处原副主任，毕节金海湖新区青龙街道，“在2019年10月18日，为搜集脱贫攻坚资料，途经贵州省毕节市211省道时突遇交通事故，因公牺牲，年仅33岁。'
    },
    {
      top: '30%',
      left: '60%',
      info: '龙长春，市委书记，遵义市，“龙长春卸任之时，遵义正处在决战脱贫攻坚、决胜全面小康的关键时刻。卸任之际，龙长春心头最深的愧疚、最大的遗憾之一，就是脱贫攻坚还未告捷。终因病医治无效，于2021年1月22日0时05分在贵阳逝世，享年58岁。'
    }
  ];


  starsInfo.forEach(star => {
    const div = document.createElement('div');
    div.className = 'star';
    div.style.top = `${star.top}`;
    div.style.left = `${star.left}`;
    container.appendChild(div);

    const infoDiv = document.createElement('span');
    infoDiv.className = 'star-info';
    infoDiv.textContent = star.info;
    infoDiv.style.left = `${parseInt(star.left) + 10}px`; // 信息显示在星星右侧10px处
    infoDiv.style.top = `${parseInt(star.top)}px`; // 信息与星星顶部对齐
    container.appendChild(infoDiv);
  });
});

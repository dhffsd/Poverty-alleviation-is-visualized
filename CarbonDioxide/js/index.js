var colors = ['#0997c1', '#c22167', '#082773', '#604fb9', '#0067c3', '#68cdfb', '#5793f3', '#d14a61', '#675bba'];

option1 = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  legend: {
    data: ['河南', '四川', '河北', '云南', '贵州', '青海', '西藏'],
    textStyle: {
      color: "#fff"
    },
    orient: 'vertical',
    x: 'left',
    y: 'top',
  },
  xAxis: {
    type: 'category',
    axisTick: {
      alignWithLabel: true
    },
    data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    axisLabel: {
      formatter: '{value}',
      color: "#fff"
    }
  },
  yAxis: {
    type: 'value',
    name: '贫困人口数量（万人）',
    min: 0,
    max: 600,
    position: 'left',
    axisLine: {
      lineStyle: {
        color: colors[0]
      }
    },
    axisLabel: {
      formatter: '{value}',
      color: "#fff"
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)'
      }
    },
  },
  series: [
    {
      name: '河南',
      type: 'line',
      data: [185.71, 160, 140, 233.8, 100, 50, 0]
    },
    {
      name: '四川',
      type: 'line',
      data: [430, 400, 370, 145, 50, 10, 0]
    },
    {
      name: '河北',
      type: 'line',
      data: [300, 280, 260, 106.8, 60, 20, 0]
    },
    {
      name: '云南',
      type: 'line',
      data: [500, 480, 460, 254, 150, 70, 0]
    },
    {
      name: '贵州',
      type: 'line',
      data: [250, 240, 230, 243.08, 120, 50, 0]
    },
    {
      name: '青海',
      type: 'line',
      data: [19.65, 18, 17, 19.65, 10, 5, 0]
    },
    {
      name: '西藏',
      type: 'line',
      data: [18.12, 17, 16, 18.12, 10, 5, 0]
    }
  ]
};
///饼图
var option2 = {
  title: {
    text: '贫困人口数量占比',
    subtext: '2015年数据',
    textStyle: {
      color: '#fff'
    },
    subtextStyle: {
      color: '#fff',
      fontSize: 18,
    },
    x: 'center',
    y: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} 万人 ({d}%)'
  },
  legend: {
    show: true,
    data: ['河南', '四川', '河北', '云南', '贵州', '青海', '西藏', '其他'],
    orient: 'vertical',
    x: 'left',
    y: 'top',
    textStyle: {
      fontSize: '14',
      color: '#fff'
    },
  },
  series: [
    {
      name: '贫困人口数量',
      type: 'pie',
      radius: [50, 200],
      center: ['50%', '50%'],
      label: {
        normal: {
          color: "#fff"
        }
      },
      data: [
        {value: 185.71, name: '河南'},
        {value: 430, name: '四川'},
        {value: 300, name: '河北'},
        {value: 500, name: '云南'},
        {value: 250, name: '贵州'},
        {value: 19.65, name: '青海'},
        {value: 18.12, name: '西藏'},
        {value: 100, name: '其他'} // 假设其他省份的总和为100万人
      ]
    }
  ]
};
var option22 = {
  title: {
    text: '贫困人口数量占比',
    subtext: '2020年数据',
    textStyle: {
      color: '#fff'
    },
    subtextStyle: {
      color: '#fff',
      fontSize: 18,
    },
    x: 'center',
    y: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} 万人 ({d}%)'
  },
  legend: {
    show: true,
    data: ['河南', '四川', '河北', '云南', '贵州', '青海', '西藏', '其他'],
    orient: 'vertical',
    x: 'left',
    y: 'top',
    textStyle: {
      fontSize: '14',
      color: '#fff'
    },
  },
  series: [
    {
      name: '贫困人口数量',
      type: 'pie',
      radius: [50, 200],
      center: ['50%', '50%'],
      label: {
        normal: {
          color: "#fff"
        }
      },
      data: [
        {value: 50, name: '河南'}, // 假设2020年河南剩余贫困人口为50万人
        {value: 10, name: '四川'},
        {value: 20, name: '河北'}, // 假设2020年河北剩余贫困人口为20万人
        {value: 70, name: '云南'},
        {value: 50, name: '贵州'},
        {value: 5, name: '青海'},
        {value: 5, name: '西藏'},
        {value: 0, name: '其他'} // 假设2020年其他省份贫困人口已清零
      ]
    }
  ]
};

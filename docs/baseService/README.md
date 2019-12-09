---
title: 大屏可视化组件
date: 2019-05-10
---

::: tip
大屏可视化组件提供了基于websocket的双工通信功能, 满足大屏对数据实时的需要，同时也为多个大屏项目提供了可复用的组件。
:::

## 文件引入
以CDN的方式在项目的入口html文件通过script引入大屏可视化文件。
入口index.html引入方式如下:
```html
<!-- 图表插件必须引入 -->
<script src="https://mvs.gsafetyweixinsupport.cn:1080/fileserver/js/gv/echarts.js"></script>
<!-- 3D图插件,  可选 -->
<script src="https://mvs.gsafetyweixinsupport.cn:1080/fileserver/js/gv/echarts-liquidfill.js"></script>

<!-- <script src="https://mvs.gsafetyweixinsupport.cn:1080/fileserver/js/gv/echarts-gl.js"></script> -->
<!-- 字符云插件, 可选 -->
<!-- <script src="https://mvs.gsafetyweixinsupport.cn:1080/fileserver/js/gv/echarts-wordcloud.js"></script> -->
<!-- 主文件必须引入, 封装可视化调用的相关api -->
<script src="https://mvs.gsafetyweixinsupport.cn:1080/fileserver/js/gv/gv.js"></script>
```

## 项目接入配置
项目目录assets/js/中新增componentsConfig.js作为可视化组件的配置文件
```js
// websocket服务初始化
window.wsduplexclient = new gv.net.WSDuplexClient('wss://mvs.gsafetyweixinsupport.cn:1080/dv/dv/task/webSocket')
// gv服务初始化
window.restService = new gv.net.RestService('https://mvs.gsafetyweixinsupport.cn:1080/dv/')
// 双工通信连接服务器
wsduplexclient.connect();
// 加载gv服务的配置模板
gv.config.ChartTemplate.load()
// 引入安全警告组件
import safetyWarmBar from './visualComponents/safetyWarmBar.js'
// 引入燃气监测组件
import deviceScatterPrint from './visualComponents/deviceScatterPrint.js'
// 引入人员密度分析组件
import personLinePrint from './visualComponents/personLinePrint.js'
// 引入消防设备监测组件
import deviceBarPrint from './visualComponents/deviceBarPrint.js'
// 输出组件
export default {
  safetyWarmBar, deviceScatterPrint, personLinePrint, deviceBarPrint
}
```
然后在项目主文件main.js中引入
- import componentsConfig from './assets/js/componentsConfig.js'
最后加载到vue原型中
- Object.keys(componentsConfig).forEach(key => Vue.prototype[key] = componentsConfig[key])

## 组件使用
这里用代码演示"人员密度分析图"可视化组件的使用:
在personLinePrint.js文件中, 代码如下: 
```js
// 人员密度分析折线图
const personLinePrint = function(id) {
    // 开启websocket
    let vataService = new gv.net.VataService(restService, "WebSocketPersonDensity")
    // 开启gv服务
    let vataSource = new gv.source.VataSource(vataService)
    // 传入元素id
    let dom = document.getElementById(id);
    // 生成echart实例
    let personLineChart = new gv.chart.BasicLineChart(vataSource, dom)

    // echart个性化配置
    personLineChart.config("grid", {
        left: 30,
        bottom: "30%",
        width: "85%",
        y: 20 //坐标轴顶端与边框的距离
    })
    personLineChart.config("tooltip", {
        trigger: 'axis',
        confine: true,
        formatter: function(val) {
            let result = ""
            let data = val[0].data
            Object.keys(data).forEach((name, i) => {
                if (i === 0) {
                    result += data[name] + "<br>"
                } else {
                    result += val[i - 1].seriesName + ":" + data[name] + "<br>"
                }
            })
            return result
        }
    })
    personLineChart.config("legend.show", false)
    personLineChart.config("color", ["#00CCFE", "#F1CC02", "#F7541B"])
    personLineChart.config("xAxis", {
        nameLocation: "start",
        boundaryGap: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#748Dac"
            }
        },
        axisTick: {
            show: false //不显示刻度线
        },
        axisLabel: {
            textStyle: {
                color: "#7398be", //坐标值的具体的颜色
                fontSize: 14
            }
        },
        splitLine: {
            show: false //去掉分割线
        },
    })
    personLineChart.config("yAxis", {
        // interval: 0.2,
        nameGap: 10, //控制name中的文字上下的距离
        nameLocation: "start", //也是控制name
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: "#7398be", //坐标值得具体的颜色
                fontSize: 15
            }
        },
        splitLine: {
            lineStyle: {
                type: "solid", //dashed
                color: ["#143d63"] //分割线的颜色
            }
        }
    })
    personLineChart.config("series[0]", {
        symbol: "circle",
        // barWidth:15,
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: '#20334d',
                borderColor: '#03afdf'
            }
        },
        lineStyle: {
            normal: {
                color: '#03afdf'
            }
        }
    })
    personLineChart.config("series[1]", {
        symbol: "circle",
        itemStyle: {
            normal: {
                color: '#20334d',
                borderColor: '#2cd175'
            }
        },
        lineStyle: {
            normal: {
                color: '#2cd175'
            }
        }
    })
    personLineChart.config("series[2]", {
        symbol: "circle",
        itemStyle: {
            normal: {
                color: '#20334d',
                borderColor: '#f0b135'
            }
        },
        lineStyle: {
            normal: {
                color: '#f0b135'
            }
        }
    })
    personLineChart.config("series[3]", {
        symbol: "circle",
        itemStyle: {
            normal: {
                color: '#20334d',
                borderColor: '#cde1d5'
            }
        },
        lineStyle: {
            normal: {
                color: '#cde1d5'
            }
        }
    })
    personLineChart.config("tooltip", {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        textStyle: {
            align: 'left'
        }
    })

    //双工通信
    wsduplexclient.on('WebSocketPersonDensity', function(chartData) {
        personLineChart.setData(chartData);
    });

    // wsduplexclient.un('WebSocketPersonDensity')
}
export default personLinePrint
```

在项目的vue文件中, 进入页面初始化调用
```vue
<template>
    <div id="chart_xxx"></div>   
</template>
<script>
export default {
    components: {

    },
    data() {
        return {

        }
    },
    mounted() {
        this.personLinePrint('chart_xxx')
    },
    methods: {

    },
    watch: {

    }
}
</script>
```
其中'chart_xxx'是元素id。



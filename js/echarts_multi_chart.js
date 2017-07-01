// 简单测试了echarts的多图联动功能

app1 = echarts.init(document.getElementById('first'));
// app1.title = '坐标轴刻度与标签对齐';

option1 = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['北京','天津','上海','湖南']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [100, 10, 40, 90]
        }
    ]
};
app1.setOption(option1);


app2 = echarts.init(document.getElementById('second'));
// app2.title = '地图';

option2 = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['iphone5']
    },
    visualMap: {
        min: 0,
        max: 100,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: 'iphone5',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '北京',value: 100 },
                {name: '天津',value: 10 },
                {name: '上海',value: 40 },
                {name: '湖南',value: 90 },
            ]
        }
    ]
};
app2.setOption(option2);

echarts.connect([app1, app2]);
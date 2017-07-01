var app = echarts.init(document.getElementById('main'));

app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        // data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        data: null
    },
    series: [
        {
            name:'岁月无痕',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: null
            // data:[
            //     {value:335, name:'直接访问'},
            //     {value:310, name:'邮件营销'},
            //     {value:234, name:'联盟广告'},
            //     {value:135, name:'视频广告'},
            //     {value:1548, name:'搜索引擎'}
            // ]
        }
    ]
};

$(document).ready(function() {
    // alert('ready');
    $.get('http://localhost:8888/get_data', function(data) {
        // alert(JSON.stringify(data));
        var legend_data = [], series_data = [];
        data.forEach(function(user) {
            legend_data.push(user.name);
            series_data.push({'name': user.name, 'value': user.age});
        })
        // console.log(legend_data);
        // console.log(JSON.stringify(series_data));
        option.legend.data = legend_data;
        option.series[0].data = series_data;
        app.setOption(option);
    })
})

// app.setOption(option);
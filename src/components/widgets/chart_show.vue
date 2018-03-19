<template>
    <chart :options="options" ref="pie" auto-resize></chart>
</template>

<script>
  export default {
    data (){
        return{
          options : {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {}
            }]
          }

    }
    }
  }
</script>

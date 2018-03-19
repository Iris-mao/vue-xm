<template>
    <div class="mainwrap">
        <p class="page-header">Chart list</p>
        <div class="chart-wrap">
            <chartShow></chartShow>
        </div>
    </div>
</template>

<script>
    import chartShow from '../widgets/chart_show.vue'

    export default {
      components : {chartShow}
    }
</script>

<template>
  <div>
    <div>
      <select v-model="curr_reg" @change="change_reg">
        <option v-for="r in regions" :key="r.noc">{{ r.noc }}  {{ r.notes }}  {{ r.region }}</option>
      </select>
    </div>
  



  <DataTable class="table table-hover table-striped" width="100%" :data="medals">
    <thead>
      <tr>
        <th v-for="c in columns" :key="c">{{ c }}</th>
      </tr>
    </thead>
    <tfoot>
    </tfoot>
  </DataTable>

  
  <div class="container">
    <div class="row">
      <div class="col-sm">
       <VuePlotly :data="p2" :layout="{barmode: 'group'}"></VuePlotly>
       <VuePlotly :data="p3" :layout="{barmode: 'group'}"></VuePlotly>
       <VuePlotly :data="p4" :layout="{barmode: 'group'}"></VuePlotly>
       <VuePlotly :data="p5" :layout="{barmode: 'group'}"></VuePlotly>
        <HelloWorld :data="p6" />
     
     
     </div>
   </div>
 </div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net-bs5'
import { VuePlotly } from 'vue3-plotly';
import { api_medals,api_cbs,api_events,api_medals2,api_regions,api_cbs2,api_mf_noc,api_age_hight } from '@/api'

export default {
  name: 'App',
  components: {
    DataTable,
    VuePlotly,
    HelloWorld
    
  },
  data(){
    return{
      medals:[],
      p2:[],
      p3:[],
      p4:[],
      p5:[],
      p6:[],
      layout:{},
      cbs:{},
      events:{},
      columns:["medal","amount"],
      regions:{},
      curr_reg:{},
    }
  },
  setup(){
    DataTable.use(DataTablesLib)

  },
  async mounted(){

    this.regions = await api_regions()
    this.p2 = await api_medals2("AUT")
    this.medals = await api_medals("AUT")
    // console.log(await api_medals("AUT"))
    this.cbs = await api_cbs()
    this.events = await api_events()

  },
  methods:{
    async change_reg(){
      let temp_reg = this.curr_reg.split(" ")[0]
      this.p2 = await api_medals2(temp_reg)
      this.p3 = await api_cbs2(temp_reg)
      this.p4 = await api_mf_noc(temp_reg)
      this.p5 = await api_age_hight(temp_reg)
      this.p6 = await api_age_hight(temp_reg)
      this.medals = await api_medals(temp_reg)
      // console.log(await api_cbs2(temp_reg))
    }
  }
}
</script>

<style>

@import 'bootstrap';
@import 'datatables.net-bs5';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

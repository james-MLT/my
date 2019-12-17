<template>
<div class="home">
<el-aside width="200px" style="background-color: rgb(51, 51, 51)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <router-link to="/home/index1">
            <el-menu-item index="1-1">选项1</el-menu-item>
          </router-link>
          <router-link to="/home/index2">
<el-menu-item index="1-2">选项2</el-menu-item>
          </router-link>
          
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>

    <router-view class="aaa"></router-view>
  
</div>
 

 
</template>



<script>
// @ is an alias to /src

export default {
 methods: {
   getUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
      })
   },
   alertUuid(){
     alert(this.getUUID());
   }
 },
  
};
</script>

<style lang="scss">
.home{
  display: flex;
  height:100%;
}
.aaa{
  flex:1;
  background:rgb(233, 233, 233);
}
 .el-aside {
   flex-grow:0;
    position: relative;
    top:0px;
    bottom:0px;
    background-color: rgb(51, 51, 51);
  }
.el-submenu{
  background-color: rgb(51, 51, 51);
  color:aliceblue !important;
}
.el-menu{
  background-color:  rgb(51, 51, 51) !important;
  border:none !important;
 
}
.el-menu-item{
  color: aliceblue !important;
   &:focus{
    background-color:  rgb(80, 80, 80) !important;
  }
}
.el-submenu__title{
  color:aliceblue !important;
  &:hover{
    background-color:  rgb(80, 80, 80) !important;
  }
}
.el-menu-item:hover{
  background-color:  rgb(80, 80, 80) !important;
}
</style>

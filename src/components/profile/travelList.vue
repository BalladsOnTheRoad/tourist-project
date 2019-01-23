<template>
    <div class="travel_list">
        <div class="travel_title">
            <h3>厦门速览</h3>
        </div>
        <div class="travel_content">
            <p>
                厦门 四季如春，气候宜人，凭借“城在海上，海在城中”的天然禀赋而被誉为“海上花园”   、“ 中国 最温馨的城市”美称，这里集山、海、岛、城、于一体，高品位旅 资源类型之多、密度之大让人流连忘返。这里有见证社会变迁，同时被誉为“音乐之岛”   、“万国建筑博览”的5A级风景区— 鼓浪屿   ，有全国种类最... <span><router-link to="/">[详情]</router-link></span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .travel_list{
        width        : 100%;
        height       : 245px;
        border       : solid 1px #333333;
        margin-bottom: 55px;
        padding      : 14px 52px 0 47px;
    }
    .travel_title{
        
        h3{
            font-size   : 36px;
            font-weight : normal;
            font-stretch: normal;
            color       : #333333;
        }
    }
    .travel_content{
        margin-top: 10px;
        p{
            font-size: 24px;
            color    : #333333;
            a{
                color: #0376b8;
            }
        }
    }
</style>
<style lang="less" scoped>
	.ui-panel {
		padding-bottom: 5px;

		.ui-grid-trisect {
			li {
				position: relative;

				p {
					position: absolute;
					bottom: 0px;
					height: 30px;
					line-height: 30px;
					color: #fff;
					width: 100%;
					text-align: center;
					font-size: 14px;
					background: rgba(0,0,0,0.6);
					padding:0px 5px;
				}
			}
		}

	}
</style>

<template>
<div class="page-content">
    <div class="page" v-if="!loadingRouteData" transition="fade">
        <header-bar :title="title" right="search"></header-bar>

        <section class="ui-panel" v-for="module in modules">
            <router-link class="ui-arrowlink" tag="h2" :to="{name:'list', params: {type: module.name}}">
                {{module.title}}
                <span class="ui-panel-subtitle">{{module.total}}个</span>
            </router-link>
            
            <ul class="ui-grid-trisect">
                <router-link tag="li" v-for="r in module.list" :key="r.id" :to="{name:'show', params:{id: r.id}}">
                    <div class="ui-grid-trisect-img">
                        <img :src="r.images.large" alt="">
                        <p class="ui-nowrap">{{r.title}}</p>
                    </div>
                </router-link>
            </ul>
        </section>

    </div>
    <loading :show="loadingRouteData"></loading>
</div>
</template>
<script src="./index.js"></script>

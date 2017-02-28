<style lang="less" scoped>
	.summary {
		padding-bottom: 10px;
	}

	.directors {
		padding-bottom: 10px;
		
		.ui-row {
			padding-left: 5px;
		}

		.ui-col {
			padding-left: 5px;
		}

		img {
			width: 100%;
		}
	}
</style>
<template>
    <div class="page-content">
        <transition name="slide">
            <div class="page" v-if="!loadingRouteData">
                <header-bar left="back" :title="title" right="search"></header-bar>
                <div class="banner">
                    <div class="blur" :style="{backgroundImage: 'url('+ image +')'}"></div>
                    <div class="info">
                        <div class="img"><img :src="image" alt=""></div>
                        <div class="txt">
                            <h1 class="ui-nowrap">{{title}}</h1>
                            <p class="ui-nowrap">
                                <star :score="score" size="large"></star>
                            </p>
                            <p class="ui-nowrap">类型：{{genres.join(' ')}}</p>
                            <p class="ui-nowrap">主演：<span v-for="cast in casts">{{cast.name}} </span></p>
                            <p class="ui-nowrap">地区：{{countries.join(' ')}}</p>
                        </div>
                    </div>
                </div>
                <section class="ui-panel summary">
                    <h2><a>剧情简介</a><span class="ui-panel-subtitle"></span></h2>
                    <div class="ui-whitespace ui-txt-justify ui-txt-sub ui-txt-info">{{summary}}</div>
                </section>
                <section class="ui-panel directors">
                    <h2 class="ui-arrowlink"><a>导演</a><span class="ui-panel-subtitle"></span></h2>
                    <div class="ui-row ui-whitespace">
                        <router-link tag="div" class="ui-col ui-col-33" v-for="director in directors" :to="{name: 'director', params: {id: director.id}}">
                            <img v-if="director.avatars" :src="director.avatars.large">
                            <h5 class="ui-nowrap ui-arrow">{{director.name}} <a>(查看)</a></h5>
                        </router-link>
                    </div>
                </section>
            </div>
        </transition>
        <loading :show="loadingRouteData"></loading>
    </div>
</template>
<script src="./show.js"></script>
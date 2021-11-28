import { List, Tag } from "@arco-design/web-react";
const Skill = () => {
	const green = "#00b42a";
	const red = "#f53f3f";
	const blue = "#168cff";
	return (
		<div className="item skill" >
			<List
				style={{ width: 622 }}
				header={<h1>技能</h1>}
				bordered={false}
				split={false}
			>
				<List.Item>
					<h3>
						1. 热衷于函数式编程, tdd(测试驱动开发)
					</h3>
					<span>
						读过的书籍有<Tag color={green} >代码整洁之道</Tag>，<Tag color={green} >重构1</Tag>&<Tag color={green} >重构2</Tag><br/>

						熟悉<Tag color={green}>vim</Tag>操作(写后端代码从不用鼠标与触控板)
					</span>
				</List.Item>
				<List.Item>
					<h3>
						2. 熟悉<Tag color={red} >es6</Tag>,<Tag color={red} >typescript</Tag>，熟悉tscong.json配置, 熟悉.d.ts声明文件编写，熟悉<Tag color={green} >npm</Tag>，package.json常用字段，熟悉<Tag color={red}>git</Tag>操作
					</h3>
					<span>
						从 0 到 1，搭建一个体系完善的公司内部<Tag color={green} >前端 React 组件库</Tag>
					</span>
				</List.Item>
				<List.Item>
					<h3>
						3. 了解commonjs模块, es6模块, 熟悉babel, webpack, 了解<Tag color={red}>promse</Tag>任务流
					</h3>
					<span>
						<Tag color={red} >使用webpack独立搭建过react项目</Tag>，并做了<Tag color={blue} >代码分离</Tag>，<Tag color={blue}>alias</Tag>, <Tag color={blue}>proxy</Tag>,常用loader(less-loader, file-loader, bable-loader)的配置
					</span>
				</List.Item>
				<List.Item>
					<h3>
						5. 熟悉小程序开发，接触flutter开发，了解want-weapp与flutter常用widget
					</h3>
					<span>
						了解微信<Tag color={red}>小程序页面栈</Tag>
					</span>
				</List.Item>
				<List.Item>
					<h3>
						6. 了解项目中常用的设计模式
					</h3>
					<span>
						单例模式， 装饰器模式，<Tag color={green} >观察者模式</Tag>，<Tag color={green}>发布订阅模式</Tag>熟悉solid原则，了解spring中ioc, aop 依赖注入，面向切面
					</span>
				</List.Item>
				<List.Item>
					<h3>
						7. 具备一定的工程能力，熟悉<Tag color={green}>git</Tag>, <Tag color={green}>docker</Tag>, <Tag color={green} >CI/CD(持续集成)</Tag>，npm, 配置过nginx
					</h3>
					<span>
						熟悉git 合并代码(<Tag color={blue} >rebase</Tag>) 熟悉 git钩子(pre-commit), 使用过nginx搭建反向代理解决前端<Tag color={blue} >跨域问题</Tag>
					</span>
				</List.Item>
				<List.Item>
					<h3>
						8. 熟悉<Tag color={red} >react</Tag>开发，熟悉常用的<Tag color={red}>hooks</Tag>，熟悉react全家桶(react-router, react-reudx)
					</h3>
					<span>
						熟悉虚拟dom(<Tag color={blue} >Virtual DOM</Tag>) 重绘<br/>
						熟悉react部分源码, 监听者模式 <br/>
						熟悉<Tag color={red}>useState</Tag>, <Tag color={red}>useEffect</Tag>, useCallback, useMemo <br/>
						熟悉react中组件传值 <br/>
						熟悉react router中 <Tag color={blue} >history</Tag>与<Tag color={blue}>hash</Tag>
					</span>
				</List.Item>
				<List.Item>
					<h3>
						9. 熟悉<Tag color={blue}>vue</Tag>,vuex,vue-router,vue-axios,vuetify,element-ui等框架
					</h3>
					<span>
						熟悉vue双向绑定原理，vue声明周期, vue-router导航守卫
					</span>
				</List.Item>
				<List.Item>
					<h3>
						9. 熟悉webpack，熟悉常用的配置：(例如：<Tag color={blue}>proxy</Tag>, <Tag color={blue}>devServer</Tag>, 常用的loader, webpack代码分离<Tag color={blue}>SplitChunksPlugin</Tag>, <Tag color={blue} >alias</Tag>)
					</h3>
				</List.Item>
				<List.Item>
					<h3>
						10. 使用过egg.js，koa.js，<Tag color={green}>midway</Tag>，并配置相应的<Tag color={green}>cors</Tag>,graphql,swagger-doc, sequlize,redis使用过spring boot,了解常用的注解, 使用过mybatis 了解mysql & redis
					</h3>
				</List.Item>
				<List.Item>
					<h3>
						11. 配置过本机dns, 熟悉<Tag color={blue} >resultful api</Tag>接口, 熟悉常用的linux配置，mysql , redis, 接触过 k8s, 懂得看日志排查后端接口错误
					</h3>
				</List.Item>
				<List.Item>
					<h3>
						12. 了解页面渲染原理与部分性能优化
					</h3>
					<span>
						<Tag color={blue} >BFC</Tag> & <Tag color={blue} >IFC</Tag> 块级格式化上下文 & 行内框产生的格式上下文 <br/>
					</span>
					<span>
						<Tag color={blue}>reflow</Tag>&<Tag color={blue}>repaint</Tag> 重绘 重排 <br/>
					</span>
					<span>
						普通图层 css硬件加速 复合图层<br/>
					</span>
					<span>
						了解从输入URL到页面加载的过程(前端页面渲染，后端，网络，js单线程，js引擎)
					</span>
				</List.Item>
			</List>
		</div>
	);
};

export default Skill;

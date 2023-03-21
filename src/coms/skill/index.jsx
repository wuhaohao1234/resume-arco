import {useRef, useEffect} from "react";

import { Tag } from "@arco-design/web-react";
import MarkdownIt from "markdown-it";
const Skill = () => {
	const markdown = useRef(null);
	const md = new MarkdownIt();
	const str = `
1. 热衷于**函数式编程**, tdd(测试驱动开发)

读过的书籍有代码整洁之道，重构1&重构2

熟悉**vim**操作(写后端代码从不用鼠标与触控板)

2. 熟悉**es6**,**typescript**，熟悉tscong.json配置, 熟悉.d.ts声明文件编写，熟悉npm，**package.json**常用字段，熟悉**git**操作

从 0 到 1，搭建一个体系完善的公司内部**前端 React 组件库**

3. 了解**commonjs**模块, **es6**模块, 熟悉**babel**, **webpack**, 了解**promse**任务流

**使用webpack独立搭建过react项目**，并做了**代码分离**，**alias**, **proxy**,常用loader(less-loader, file-loader, bable-loader)的配置

做过webpack性能优化:Tree Shaking，webpack-parallel-uglify-plugin，Tree Shaking，SplitChunksPlugin

5. 熟悉小程序开发，接触flutter开发，了解want-weapp与flutter常用widget，做过react native

了解微信**小程序页面栈**

6. 了解项目中常用的设计模式

单例模式， 装饰器模式，**观察者模式**，**发布订阅模式**熟悉**solid**原则，了解spring中ioc, aop 依赖注入，面向切面

7. 具备一定的**工程**能力，熟悉**git**, **docker**, **CI/CD(持续集成)**，**npm**, 配置过**nginx**

熟悉git 合并代码(**rebase**) 熟悉 git钩子(pre-commit), 使用过nginx搭建反向代理解决**前端跨域**问题

8. 熟悉react开发，熟悉**常用的hooks**，熟悉react全家桶(react-router, react-reudx)

	熟悉虚拟dom(Virtual DOM) 重绘

	熟悉react部分源码, 监听者模式

	熟悉**useState**, **useEffect**, useCallback, useMemo, useRef

	熟悉react中组件传值

	熟悉react router中 **history与hash**

9. 熟悉vue,vuex,vue-router,vue-axios,vuetify,element-ui等框架

	熟悉vue**双向绑定原理**，vue声明周期, vue-router**导航守卫**

9. 熟悉webpack，熟悉常用的配置：(例如：**proxy**, **devServer**, 常用的loader, webpack代码分离**SplitChunksPlugin**, **alias**)

10. 使用过egg.js，koa.js，midway，并配置相应的**cors**,**graphql**,**swagger-doc**, **sequlize**,**redis**使用过spring boot,了解常用的注解, 使用过mybatis 了解mysql & redis

11. 配置过本机**dns**, 熟悉resultful api接口, 熟悉常用的**linux commander**，**mysql**, **redis**, 懂得看日志排查后端接口错误

12. 了解页面渲染原理与部分性能优化

	BFC & IFC 块级格式化上下文 & 行内框产生的格式上下文

	reflow&repaint 重绘 重排

	普通图层 css硬件加速 复合图层

	了解从输入URL到页面加载的过程(前端页面渲染，后端，网络，js单线程，js引擎)
`;

	const result = md.render(str);
	useEffect(() => {
		document.querySelector(".item .content").innerHTML = result;
		// markdown.innerHTMl = result;
	}, [markdown]);
	return (
		<div className="item skill" >
			<h2>技能</h2>
			<div className="desc" >
				<Tag color="#86909c" >TDD</Tag>
				<Tag color="#168cff" >es6</Tag>
				<Tag color="#b71de8" >typescript</Tag>
				<Tag color="#00b42a" >react</Tag>
				<Tag color="#165dff" >nodejs</Tag>
				<Tag color="#ff7d00" >webpack</Tag>
				<Tag color="#7bc616" >git</Tag>
				<Tag color="#0fc6c2" >docker</Tag>
				<Tag color="#eb0aa4" >nginx</Tag>
				<Tag color="#86909c" >CI/CD</Tag>
				<Tag color="#f53f3f" >Spring</Tag>
			</div>
			<div className="content" ref={markdown} ></div>
		</div>
	);
};

export default Skill;

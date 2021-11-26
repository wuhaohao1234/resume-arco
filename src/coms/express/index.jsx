import { List } from "@arco-design/web-react";

const ExpressInfo = () => {
	return (
		<div className="item express" >
			<List
				bordered={false}
				split={false}
				header={<div>
					<h2>工作经历</h2>
				</div>} 
			>
				<List.Item>
					<div className="header">
						<h2>
              博彦科技
						</h2>
						<span>
              2021-02 - 至今
						</span>
					</div>
					<div className="content">
						<h5>
              主要从事dataq下智能标签与画像分析的研发
						</h5>
						<h6>
              dataq是帮助客户(数据分析人员, 运营人员, 产品经理)实现数据资源管理，潜在规律挖掘和业务决策优化。
						</h6>
						<br/>
						<h5>
              业务工作(react)
						</h5>
						<h6>
              1. 使用butterfly(小蝴蝶) 完成 对象关系图开发
						</h6>
						<h6>
              2. 使用monaco-editor/react 完成 画像分析sqlIde 编辑器的开发
						</h6>
						<h6>
              3. 开发智能标签下的对象列表，新建对象，等增删改查业务代码
						</h6>
						<h6>
              4. 开发画像分析下的数据探查功能
						</h6>
						<br/>
						<h5>
              基础设施(react)
						</h5>
						<h6>
              1. 使用honeycomb 完成前端微服务的搭建(代替原有的iframe)
						</h6>
						<h6>
              2. 使用dumi 完成前端公共组件库的搭建，并发布tnpm dataq-basic-component, 对于Table, Form, Pagination的封装, 以及封装全局ErrorAlert
						</h6>
					</div>
				</List.Item>
				<List.Item>
					<div className="header">
						<h2>
              烽火通信
						</h2>
						<span>
              2020-01 - 2021-02
						</span>
					</div>
					<div className="content">
						<h5>
              主要负责云计算计费模块开发，告警业务开发, 云计算资源，资源池, 前端项目持续集成环境搭建
						</h5>
						<h6>
              这家公司主要做云计算业务
						</h6>
						<br/>
						<h5>
              业务工作(react)
						</h5>
						<h6>
              1. 开发云计算计费模块, 计费项，折扣项，账单
						</h6>
						<h6>
              2. 开发告警业务模块
						</h6>
						<br/>
						<h5>
              基础设施(react)
						</h5>
						<h6>
              1. 使用jekins完成前端项目持续集成
						</h6>
						<h6>
              2. 使用docker nginx搭建前端测试环境
						</h6>
						<h6>
              3. 前端公共组件搭建
						</h6>
						<h6>
              4. 数据字典开发，前端有很多关于枚举类的硬编码，难以维护且难以复用，于是开发数据字典功能。实现枚举数据的统一管理、方便复用、便于维护、也使得代码整洁度提高。
						</h6>
						<h6>
              5. 使用qiankun代替iframe 实现前端微服务
						</h6>
					</div>
				</List.Item>
				<List.Item>
					<div className="header">
						<h2>
              国联质检
						</h2>
						<span>
              2019-09 - 2020-02
						</span>
					</div>
					<div className="content">
						<h5>
              主要负责负责国检链小程序研发, 负责码上摆摊小程序研发, 负责码上摆摊城管端小程序研发, 负责国联集团管理系统研发(react技术栈)
						</h5>
						<h6>
              这家公司是一家检测公司(传统公司)，因组长跑路后(创业)研发组解散
						</h6>
						<br/>
						<h5>
              业务工作(react)
						</h5>
						<h6>
              1. 小程序开发：国检链小程序开发，码上摆摊小程序开发，码上摆摊城管端小程序开发
						</h6>
						<h6>
              2. 做技术选型使用nodejs代替spring, 使用react代替vue, 开发国联集团管理系统。后因转型成本高导致研发团队解散
						</h6>
					</div>
				</List.Item>
				<List.Item>
					<div className="header">
						<h2>
              深圳科科智能
						</h2>
						<span>
              2018-01 - 2019-09
						</span>
					</div>
					<div className="content">
						<h5>
              主要负责pte小程序开发，杭州学同科技公司的E人师表钉钉小程序开发, 青塘智印小程序开发
						</h5>
						<h6>
              公司是家小公司，拥有独立产品，主要做pte培训的学习平台，会接外包
						</h6>
						<br/>
						<h5>
              业务工作(vue / react)
						</h5>
						<h6>
              1. 负责pte黑科技学习平台小程序朗读句子模块开发
						</h6>
						<h6>
              2. 负责学同科技公司E人师表钉钉小程序研发
						</h6>
						<h6>
              3. 负责嘉印阔鸿公司的青塘智印小程序开发
						</h6>
						<h5>
              基础设施
						</h5>
						<h6>
              负责公司代码基础设施搭建：持续集成，建立代码风格，三套环境的搭建(dev, test, pro)
						</h6>
						<h6>
              负责后端代码编写，最后由docker转向leancloud云函数，几乎0运维工作
						</h6>
					</div>
				</List.Item>
			</List>
		</div>
	);
};

export default ExpressInfo;

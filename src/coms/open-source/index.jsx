import { List, Link } from "@arco-design/web-react";

const OpenSource = () => {
	return (
		<div className="item open-source">
			<List
				size='small'
				header={<div>
					<h2>个人开源及爱好</h2>
				</div>}
				bordered={false}
				split={false}
			>
				<List.Item>
					<h4>
						微信公众号: <Link target="_blank" href="https://mp.weixin.qq.com/s/L9kXFKwqikiCcCV1PY8B0Q"  >全栈阿布</Link>
					</h4>
					<span>
            发表个人学习的技术文章
					</span>
				</List.Item>
				<List.Item>
					<h4>
						微信小程序: <Link target="_blank" href="#"  >全栈阿布</Link>
					</h4>
					<span>
            发表自己读过的书籍笔记，帮助更多的人爱上读书(服务器已挂掉, 详情看语雀)
					</span>
				</List.Item>
				<List.Item>
					<h4>
						个人官网: <Link target="_blank" href="https://wuhaohao1234.github.io"  >wuhaohao1234</Link>
					</h4>
					<span>
            主要文章在<Link target="_blank" href="https://www.yuque.com/abu0418" >语雀</Link>,
						<Link target="_blank" href="https://www.zhihu.com/people/wu-hao-hao-69" >知乎</Link>
						<Link target="_blank" href="https://github.com/wuhaohao1234/coder-docs" >coder-docs</Link>
					</span>
				</List.Item>
			</List>
		</div>
	);
};

export default OpenSource;

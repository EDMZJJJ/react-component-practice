export interface TreeNode {
  id : string | number //id用于绑定key
  name : string //name用于显示
  children? : TreeNode[] //children用于存储子节点
  selected : boolean //selected用于存储节点是否选中
}

export interface TreeProps {
  data : TreeNode[] //data用于存储树的数据
  onSelect : (id : string | number) => void //onSelect用于处理节点选中事件
}
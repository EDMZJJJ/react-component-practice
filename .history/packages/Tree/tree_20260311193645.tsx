import React from "react";
import type { TreeProps,TreeNode } from "./type";
import './styles.css'
const Tree: React.FC<TreeProps> = ({data,onChecked}) => {
  const [treeData,setTreeData] = React.useState<TreeNode[]>(data);
  
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, item: TreeNode) => {
    setTreeData(getTreeData(item)); // 更新选中状态
    onChecked && onChecked({ ...item, selected: e.target.checked }) // 触发回调
  }
  const getTreeData = (item: TreeNode) => {
    const newData:TreeNode[] = treeData.map((node: TreeNode) => {
      if (node.id === item.id) {
        return { ...node, selected: !node.selected };
      }
      if (node.children) {
        return { ...node, children: getTreeData(item) };
      }
      return node;
    });
    return newData;
  } 
  return (
    <div>
      {
        treeData.map(item => (
          <div key={item.id}>
            <input type="checkbox" checked={item.selected} onChange={(e) => handleChecked(e,item)} />
            <span>{item.name}</span>
            <div className='tree-node'>
              {
                item.children && <Tree data={item.children} onChecked={onChecked} />
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}
export default Tree;
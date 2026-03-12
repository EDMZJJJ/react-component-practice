import React from "react";
import type { TreeProps,TreeNode } from "./type";
import './styles.css'
import { no } from "element-plus/es/locales.mjs";
const Tree: React.FC<TreeProps> = ({data,onChecked}) => {
  const [treeData,setTreeData] = React.useState<TreeNode[]>(data);
  
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, item: TreeNode) => {
    setTreeData(getTreeData(treeData,item)); // 更新选中状态
    onChecked && onChecked({ ...item, selected: e.target.checked }) // 触发回调
  }
  const getTreeData = (data: TreeNode[], item: TreeNode) => {
    const newData:TreeNode[] = data.map((node: TreeNode) => {
      if (node.id === item.id) {
        if(node.children) { 
          const updateChildren = (children: TreeNode[], selected: boolean): TreeNode[] => {
            return children.map(child => {
              const updatedChild = { ...child, selected };
              if (child.children) {
                updatedChild.children = updateChildren(child.children, selected);
              }
              return updatedChild;
            });
          };
          return { ...node, selected: !node.selected, children: updateChildren(node.children, !node.selected) };
        }
        return { ...node, selected: !node.selected };
      }
      if (node.children) {
        return { ...node, children: getTreeData(node.children, item) };
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
import React from "react";
import type { TreeProps,TreeNode } from "./type";
import './styles.css'
const Tree: React.FC<TreeProps> = ({data,onChecked}) => {
  const [treeData,setTreeData] = React.useState<TreeNode[]>(data);
  
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, node: TreeNode) => {
    setTreeData(prev => {
      const newData = [...prev];
      const updateNode = (nodes: TreeNode[]) => {
        for(let i=0;i<nodes.length;i++) {
          if(nodes[i].id === node.id) {
            nodes[i].selected = e.target.checked;
            break;
          }
          if(nodes[i].children) {
            updateNode(nodes[i].children!);
          }
        }
      }
      updateNode(newData);
      return newData;
    });
    onChecked && onChecked({ ...node, selected: e.target.checked }) // 触发回调
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
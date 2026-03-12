export interface TreeNode {
  id : string | number
  name : string
  children? : TreeNode[]
  selected:boolean
}
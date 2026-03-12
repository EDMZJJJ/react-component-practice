import React from "react";
import type { TreeProps,TreeNode } from "./type";

const Tree: React.FC<TreeProps> = ({data,onChecked}) => {
  const renderTree = (nodes : TreeNode[]) => {
    return (
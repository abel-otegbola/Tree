import { useState } from 'react';
import TreeNode from '../treeNode';
import TreeComponentRenderer from '../treeNode';

interface TreeNode {
  id: number;
  name: string;
  children: TreeNode[];
}

function TreeComponent() {
  const [tree, setTree] = useState<TreeNode>({ id: 1, name: "Root", children: [] });

  function addChildToNode(node: TreeNode, childNode: TreeNode) {
    node.children.push(childNode);
  }

  function handleNodeClick(nodeId: number) {
    const newChildObject: TreeNode = {
      id: Math.floor(Math.random() * 1000),
      name: "Category",
      children: []
    };

    setTree((prevTree) => {
      const newTree = JSON.parse(JSON.stringify(prevTree));
      addNewObjectToClickedNode(newTree, nodeId, newChildObject);
      return newTree;
    });
  }

  function addNewObjectToClickedNode(tree: TreeNode, nodeId: number, newObject: TreeNode) {
    if (tree.id === nodeId) {
      addChildToNode(tree, newObject);
      return;
    }
    for (const child of tree.children) {
      addNewObjectToClickedNode(child, nodeId, newObject);
    }
  }    
  
    function handleNodeNameChange(nodeId: number, newName: string) {
        setTree((prevTree) => {
        const newTree = JSON.parse(JSON.stringify(prevTree));
        changeNodeName(newTree, nodeId, newName);
        return newTree;
        });
    }


    function changeNodeName(tree: any, nodeId: number, newName: string) {
        if (tree.id === nodeId) {
        tree.name = newName;
        return;
        }
        for (const child of tree.children) {
        changeNodeName(child, nodeId, newName);
        }
    }

    function handleNodeDelete(nodeId: number) {
        setTree((prevTree) => {
          const newTree = JSON.parse(JSON.stringify(prevTree));
          deleteNode(newTree, nodeId);
          return newTree;
        });
      }

    function deleteNode(tree: TreeNode, nodeId: number) {
        const index = tree.children.findIndex((child) => child.id === nodeId);
        if (index !== -1) {
          tree.children.splice(index, 1);
          return;
        }
        for (const child of tree.children) {
          deleteNode(child, nodeId);
        }
      }

  return (
    <div >
      <TreeComponentRenderer tree={tree} onNodeClick={handleNodeClick} onNodeNameChange={handleNodeNameChange} onNodeDelete={handleNodeDelete} />
    </div>
  );
}


export default TreeComponent;

  
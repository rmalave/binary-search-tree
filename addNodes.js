function addNodes(tree) {
  if (!tree.root) return 0;

  return _addNodes(tree.root);
}

function _addNodes(node) {
  if (!node) return 0;

  return _addNodes(node.left.data) +
         _addNodes(node.right.data);
}

import React from 'react';
import { Handle, Position } from 'reactflow';

const MyCustomNode = ({ data, isConnectable }) => {
  // Handle any user interactions here. For example, a click handler:
  const handleClick = () => {
    console.log('Node clicked!');
    // Implement what should happen when the node is clicked
  };

  return (
    <div onClick={handleClick}>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      {/* Add your custom node UI here */}
      <div>
        My Custom Node Content
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default MyCustomNode;

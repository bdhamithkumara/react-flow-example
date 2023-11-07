import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';

import 'reactflow/dist/style.css';
 
const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1 is node' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2 is node' } },
    { id: '3', position: { x: 0, y: 200 }, data: { label: '3 is node' } },
  ];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

//We can move nodes around, connect them together, delete them ????

const AddingInteractivity = () => {

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
   
    const onConnect = useCallback(
      (params) => setEdges((eds) => addEdge(params, eds)),
      [setEdges],

    );
   
  return (
    <div style={{ width: '80vw', height: '80vh' }} className='bg-blue-600'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  )
}

export default AddingInteractivity
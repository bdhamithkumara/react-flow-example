import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant
} from 'reactflow';
 
import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const BackgroundProps = () => {

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
      >
        
        <Background
        id="1"
        color="#f1f1f1"
        gap={10}
        size={5}
        /*  Lines = 'lines',
            Dots = 'dots',
            Cross = 'cross',
        */
        variant={BackgroundVariant.Cross}
      />
      </ReactFlow>
    </div>
  )
}

export default BackgroundProps
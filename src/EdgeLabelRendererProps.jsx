import React, { useCallback } from 'react';
import ReactFlow, {
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
    EdgeLabelRenderer,
    BaseEdge ,
    getBezierPath,

} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', type: 'input', data: { label: 'Node 1' },position: { x: 0, y: 0 },},
  { id: '2', type: 'output', data: { label: 'Node 2' }, position: { x: 0, y: 400 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', data: { label: 'edge label', }}
];

const EdgeLabelRendererProps = () => {
  
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
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
              <Controls/>
              <BaseEdge id={'e1-2'}  />
              <EdgeLabelRenderer>
                <div
                  style={{
                    position: 'absolute',
                    transform: `translate(-50%, -50%) )`,
                    background: '#ffcc00',
                    padding: 10,
                    borderRadius: 5,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                  className="nodrag nopan"
                >
                 edge label
                </div>
              </EdgeLabelRenderer>
          </ReactFlow>
      </div>
  )
}

export default EdgeLabelRendererProps
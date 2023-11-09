import React, { useCallback } from 'react';
import ReactFlow, {
    Controls,
    ControlButton,
    useNodesState,
    useEdgesState,
    addEdge,

} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const ControlButtonAndControl = () => {

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


                <Controls

                    showZoom={true}
                    showFitView={true}
                    showInteractive={true}
                    /*
                        fitViewOptions=
                        padding?: number;
                        includeHiddenNodes?: boolean;
                        minZoom?: number;
                        maxZoom?: number;
                        duration?: number;
                        nodes?: (Partial<Node> & { id: Node['id'] })[];
                    */
                    position={"bottom-left"}
                /*
                    'top-left'
                    'top-center'
                    'top-right'
                    'bottom-left'
                    'bottom-center'
                    'bottom-right';
                */
                >
                    <ControlButton onClick={() => alert('Something magical just happened. ✨')} className='w-[20px] h-[20px]'>
                        icon
                    </ControlButton>
                </Controls>

            </ReactFlow>
        </div>
    )
}

export default ControlButtonAndControl
import './App.css'
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

//Creating your first flow

//There are a few things to pay attention to here:
//🎨 You must import the React Flow stylesheet.
//📐 The <ReactFlow /> component must be wrapped in an element with a width and height.

// in initialNodes  have id position data
// for that id need to give unique id
// for postion have x and y
// for data have label that mean label for that initial node (showing the user)

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '3', position: { x: 0, y: 200 }, data: { label: '3' } },
];

// for initial Edges have id source target
// for that id need to give unique id
// source mean initial node id (from)
// target mean initial node id (to)

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' }
];

function CreatingYourFirstFlow() {

  return (
    <>
    <div style={{ width: '80vw', height: '80vh' }} className='bg-blue-600'>
    <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
    </>
  )
}

export default CreatingYourFirstFlow

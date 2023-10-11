import { FaPlus, FaCheck, FaTimes, FaPen } from "react-icons/fa"
import "../../assets/scss/category.css"
import { useState } from "react"

interface TreeProps {
    tree: {
        id: number;
        name: string;
        children: TreeProps[];
    }
    onNodeClick: (nodeId: number) => void;
    onNodeNameChange: (nodeId: number, newName: string) => void;
    onNodeDelete: (nodeId: number) => void;
}

  
export default function TreeComponentRenderer({ tree , onNodeClick, onNodeNameChange, onNodeDelete }: TreeProps) {
    const [edit, setEdit] = useState(false)

    return (
        <div className="tree">
            <div className={`category ${tree.id === 1 ? "root" : tree.children.length === 0 ? "no-child" : ""}`}>
                {
                    edit ? 
                    <input defaultValue={tree.name} onChange={(e) => onNodeNameChange(tree.id, e.target.value)} /> 
                    :
                    <p className={`${tree.id === 1 ? "zero" : tree.id === 2 ? "one" : tree.id === 3 ? "two" : ""}`}>{tree.name}</p>
                }

                <span>
                    <FaPlus onClick={() => onNodeClick(tree.id)}/>
                </span>

                <span onClick={() => setEdit(!edit)} className={edit ? "done" : "edit"}>
                    {
                        edit ? <FaCheck /> : <FaPen/>
                    }
                </span>

                {
                    tree.id === 1 ? ""
                    :
                    <span className="times">
                        <FaTimes onClick={() => onNodeDelete(tree.id)}/>
                    </span>
                }
                
            </div>
            {tree.children.length > 0 && (
                <div className="child">
                    <div className="background"></div>
                    {tree.children.map((child: any) => (
                        <TreeComponentRenderer  key={child.id} tree={child} onNodeClick={onNodeClick} onNodeNameChange={onNodeNameChange} onNodeDelete={onNodeDelete}/>
                    ))}
                </div>
            )}
        </div>
    );
}
import { FaPlus, FaCheck, FaTimes, FaPen } from "react-icons/fa"
import "../../assets/scss/category.css"
import { useState } from "react"

interface TreeProps {
    tree: any,
    onNodeClick: (nodeId: number) => void;
    onNodeNameChange: (nodeId: number, newName: string) => void;
    onNodeDelete: (nodeId: number) => void;
}

  
export default function TreeComponentRenderer({ tree , onNodeClick, onNodeNameChange, onNodeDelete }: TreeProps) {
    const [edit, setEdit] = useState(false)

    const numberToString: any = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight"
    }

    return (
        <div className={`tree ${numberToString[tree.children.length]}`}>
            <div className={`category ${tree.id === 1 ? "root" : tree.children.length === 0 ? "no-child" : "" }`}>
                {
                    edit ? 
                    <input defaultValue={tree.name} onChange={(e) => onNodeNameChange(tree.id, e.target.value)} /> 
                    :
                    <p  onClick={() => setEdit(!edit)} className={numberToString[tree.id]}>{tree.name}</p>
                }

                <div className="actions">
                    <span>
                        <FaPlus onClick={() => onNodeClick(tree.id)}/>
                    </span>

                    <span onClick={() => setEdit(!edit)} className={edit ? "done" : "edit"}>
                        {
                            edit ? <FaCheck /> : <FaPen/>
                        }
                    </span>
                    <span className="times">
                        <FaTimes onClick={() => onNodeDelete(tree.id !== 1 ? tree.id : 0)}/>
                    </span>
                </div>
                
            </div>
            {tree.children.length > 0 && (
                <div className="child">
                    {tree.children.map((child: any) => (
                        <div key={child.id} className="category--box">
                            <div className="line"></div>
                            <TreeComponentRenderer tree={child} onNodeClick={onNodeClick} onNodeNameChange={onNodeNameChange} onNodeDelete={onNodeDelete}/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
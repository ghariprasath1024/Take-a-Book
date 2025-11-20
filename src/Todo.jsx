import React, { useState } from "react";

const Todo = () => {
    let [storeitem, setStoreitem] = useState([]);//storeing the index
    let [usecare, setUsecare] = useState("");// input field
    let [edit, setedit] = useState(false);//button in changing {save:add}
    let [editindex, setEditindex] = useState(null);// input field in the changing field
    let [ischecked, setIschecked] = useState(false);//check box

    
    const add = () => {
        if (usecare !== "") { //not a emty
            if (edit) {
                let updateditems = storeitem.map((item, i) =>
                    i === editindex ? usecare : item
                );
                setStoreitem(updateditems);
                setedit(false);
                setEditindex(null);
            } else {
                setStoreitem([...storeitem, usecare]);
            }
            setUsecare("");
        }
    };
    // deleting the index
    const deleteitems = (index) => {
        let deleteitem = storeitem.filter((ele, i) => i !== index);
        setStoreitem(deleteitem);
    }
    // upper to the index
    const edit1 = (index) => {
        setUsecare(storeitem[index]);
        setedit(true);
        setEditindex(index);
    };

    return (
        <div className="body">
            <div className="content">
                <h1> Take a Book</h1>
                <div className="inputtype">
                    <input
                        type="text"
                        value={usecare}
                        onChange={(event) => setUsecare(event.target.value)}
                        placeholder="Add New Task"
                        className="input"
                    />
                    <button onClick={add} className="button1">{edit ? "SAVE" : "ADD"}</button>
                </div>
                <ol>
                    {
                        storeitem.map((tasks, index) =>

                            <li key={index}>
                                <div className="li">
                                    <input
                                        type="checkbox"
                                        checked={ischecked}
                                        onChange={() => setIschecked(!ischecked)}
                                        className="check" />
                                    <label style={{ textDecoration: ischecked ? 'line-through' : 'none' }}>{tasks}</label>
                                    <div className="button2">
                                        <button onClick={() => deleteitems(index)} className="button3">Delete</button>
                                        <button onClick={() => edit1(index)} className="button3">Edit</button>
                                    </div>
                                </div>
                            </li>

                        )}
                </ol>
            </div>
        </div>
    )
}
export default Todo;
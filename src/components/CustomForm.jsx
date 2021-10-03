import { useState } from "react";

function CustomForm({submit}) {
    const [depth, setDepth] = useState(1);
    const [number, setNumber] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if(depth > 0 && number > 0) submit(depth, number);
    }

    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="depth">
            Depth: 
            <input
                type="number"
                name="depth"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
            />
        </label>
        <label htmlFor="number">
            Number: 
            <input
                type="number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
        </label>
        <button type="submit">Create List</button>
      </form>
    );
}

export default CustomForm;
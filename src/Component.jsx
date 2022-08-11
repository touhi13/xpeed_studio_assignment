import React, { useState, useRef } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "./constants";
import Popup from "./Popup";

const style = {
  border: "1px dashed black",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move"
};
const Component = ({ data, components, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);
  // console.log(isDragging);

  const component = components[data.id];

  //popup
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        ref={ref}
        style={{ ...style, opacity }}
        className="component draggable"
        onClick={() => { setIsOpen(true) }}
      >
        <div>{data.id}</div>
        <div>{component.content}</div>

      </div>
      {console.log(isOpen, data.id)}
      {isOpen && (
        // console.log(isOpen,data.id)
        <Popup setIsOpen={setIsOpen} itemId={data.id} />
      )}
    </>
  );
};
export default Component;

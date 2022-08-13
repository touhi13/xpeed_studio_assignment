import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { COLUMN } from "./constants";
import DropZone from "./DropZone";
import Component from "./Component";

const style = {};
const Column = ({ data, components, handleDrop, path }) => {
  // console.log(data, components)
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: COLUMN,
      id: data.id,
      children: data.children,
      path
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderComponent = (component, currentPath) => {
    return (
      <Component
        key={component.id}
        data={component}
        components={components}
        path={currentPath}
      />
    );
  };

  return (
    data.componentType !== 'row' ? (
      <div
        ref={ref}
        style={{ ...style, opacity }}
        className="base draggable column"
      >
        {/* {console.log(data.componentType)} */}
        {data.componentType !== 'column' ? data.id : `new column ${data.id}`}

        {
          data.componentType !== 'column' &&
          data.children.map((component, index) => {
            const currentPath = `${path}-${index}`;

            return (
              <React.Fragment key={component.id}>
                <DropZone
                  data={{
                    path: currentPath,
                    childrenCount: data.children.length
                  }}
                  onDrop={handleDrop}
                />

                {
                  data.componentType !== 'column' &&
                  renderComponent(component, currentPath)
                }
              </React.Fragment>
            );
          })}
        <DropZone
          data={{
            path: `${path}-${data.children.length}`,
            childrenCount: data.children.length
          }}
          onDrop={handleDrop}
          isLast
        />
      </div>) : (<></>)
  );
};
export default Column;

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styles from './index.less';
import React, { useState } from 'react';

const BasicDrag = () => {
  const [list, setList] = useState(() => [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
    { id: '4', content: 'Item 4' },
    { id: '5', content: 'Item 5' },
  ]);
  const dragEnd = (result: any) => {
    console.log(result);
    if (!result.destination) {
      return;
    }

    const newList = Array.from(list);
    const [reorderedItem] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, reorderedItem);
    setList(newList);
  };

  const draggableList = list.map((item, index) => {
    return (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={styles.item}
              style={{
                ...provided.draggableProps.style,
                backgroundColor: snapshot.isDragging ? 'red' : 'white',
              }}
            >
              {item.content}
            </div>
          );
        }}
      </Draggable>
    );
  });
  return (
    <div className={'flex justify-center mt-2'}>
      <DragDropContext onDragEnd={dragEnd}>
        <Droppable droppableId={'droppable'}>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={styles.container}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'white' }}
            >
              {draggableList}
              {/*provided.placeholder不能丢*/}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default BasicDrag;

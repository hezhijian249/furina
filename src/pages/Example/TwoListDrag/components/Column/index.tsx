import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './index.less';
type Props = {
  draggableId: string;
  data: any[];
  index: number;
  isScrollable?: boolean;
  isCombineEnabled?: boolean;
  useClone?: boolean;
};
export const Column: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
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
            )}
          </Draggable>
        );
      })}
    </>
  );
};

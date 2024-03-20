import React from 'react';
import styles from '../styles/collapseItem.module.less';
import { Draggable, Droppable, DroppableProvided } from 'react-beautiful-dnd';

export const CollapseItem: React.FC<{
  dataSource: any[];
}> = ({ dataSource }) => {
  return (
    <div className={'flex'}>
      {dataSource.map((item, index: number) => {
        return (
          <div key={item.id} className={styles.full}>
            <Droppable droppableId={item.id}>
              {(provided: DroppableProvided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.name}
                      </div>
                    )}
                  </Draggable>
                </div>
              )}
            </Droppable>
          </div>
        );
      })}
    </div>
  );
};

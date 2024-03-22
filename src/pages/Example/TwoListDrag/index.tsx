import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styles from './index.less';
import { Column } from '@/pages/Example/TwoListDrag/components/Column';
import { useState } from 'react';

const TwoListDrag = () => {
  const [columns] = useState(() => [
    {
      id: 'column1',
      title: '列表1',
      cards: [
        { id: 'card1', content: 'Buy groceries' },
        { id: 'card2', content: 'Call Mom' },
        { id: 'card3', content: 'Finish homework' },
      ],
    },
    {
      id: 'column2',
      title: '列表2',
      cards: [
        { id: 'card4', content: 'Write blog post' },
        { id: 'card5', content: 'Call John' },
        { id: 'card6', content: 'Finish project' },
      ],
    },
  ]);
  return (
    <DragDropContext onDragEnd={(result) => console.log(result)}>
      <Droppable droppableId={'board'}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={styles.container}>
            {columns.map((column, index) => (
              <>
                <div className={styles.column}>
                  <h2>{column.title}</h2>
                  <Column
                    key={column.id}
                    index={index}
                    draggableId={column.id}
                    data={column.cards}
                  />
                </div>
              </>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TwoListDrag;

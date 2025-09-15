import React, { useState } from 'react';

const DragDropBoxes = () => {
  const [inputText, setInputText] = useState('');
  const [boxes, setBoxes] = useState([[], [], [], []]);
  const [dragInfo, setDragInfo] = useState({ text: '', from: null });

  // إضافة النص للمربع
  const addToBox = (boxIndex) => {
    if (!inputText.trim()) return;
    const updated = [...boxes];
    updated[boxIndex].push(inputText);
    setBoxes(updated);
    setInputText('');
  };

  // بدء السحب
  const startDrag = (text, fromBox) => {
    setDragInfo({ text, from: fromBox });
  };

  // الإفلات في مربع جديد
  const dropToBox = (toBox) => {
    if (dragInfo.from === null) return;
    const updated = [...boxes];
    updated[dragInfo.from] = updated[dragInfo.from].filter(item => item !== dragInfo.text);
    updated[toBox].push(dragInfo.text);
    setBoxes(updated);
    setDragInfo({ text: '', from: null });
  };

  return (
    <div style={{ padding: '20px' }} className="drag-drop bg-success border rounded shadow-lg mx-4 mt-4">
      <h3 className="text-center" >Drag and Drop</h3>

      {/* مدخل النص */}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here"
        style={{ padding: '8px', marginBottom: '10px', width: '200px' }}
      className="input bg-gray-200   mx-auto w-50 p-2 d-block  border rounded shadow-lg mb-4"/>

      {/*   أزرار الإضافة */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }} className="button-container text-center">
        {boxes.map((_, i) => (
          <button key={i} onClick={() => addToBox(i)} className="btn btn-primary btn-lg mx-auto">Add to Box {i + 1}</button>
        ))}
      </div>

      {/* المربعات */}
      <div style={{ display: 'flex', gap: '20px' }} className="box-container mx-auto">
        {boxes.map((items, i) => (
          <div
            key={i}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => dropToBox(i)}
         
            className="box bg-gray-200 text-center mx-auto bg-dark border rounded shadow-lg w-25 p-2"
          >
            <strong>Box {i + 1}</strong>
            {items.map((text, j) => (
              <div
                key={j}
                draggable
                onDragStart={() => startDrag(text, i)}
                style={{
                  margin: '5px 0',
                  padding: '5px',
                  backgroundColor: '#ddd',
                  cursor: 'grab',
                }}
                className="item bg-gray-200 text-center mx-auto"
              >
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropBoxes;
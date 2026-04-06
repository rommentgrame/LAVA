"use client";

import React, { useState, useRef } from 'react';
import { Stage, Layer, Rect, Text, Image as KonvaImage } from 'react-konva';
import Konva from 'konva';

interface Element {
  id: string;
  type: 'text' | 'rect' | 'image';
  x: number;
  y: number;
  width: number;
  height: number;
  text?: string;
  fill?: string;
  image?: HTMLImageElement;
}

const Canvas: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const stageRef = useRef<Konva.Stage>(null);

  const addText = () => {
    const newElement: Element = {
      id: Date.now().toString(),
      type: 'text',
      x: 100,
      y: 100,
      width: 200,
      height: 50,
      text: 'New Text',
      fill: 'white',
    };
    setElements([...elements, newElement]);
  };

  const addRect = () => {
    const newElement: Element = {
      id: Date.now().toString(),
      type: 'rect',
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      fill: 'gray',
    };
    setElements([...elements, newElement]);
  };

  const handleDragEnd = (e: any, id: string) => {
    const { x, y } = e.target.position();
    setElements(elements.map(el => el.id === id ? { ...el, x, y } : el));
  };

  const handleClick = (e: any, id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="flex h-full">
      <div className="w-64 bg-gray-800 p-4">
        <button onClick={addText} className="block w-full mb-2 p-2 bg-blue-600 text-white">Add Text</button>
        <button onClick={addRect} className="block w-full mb-2 p-2 bg-green-600 text-white">Add Rect</button>
      </div>
      <div className="flex-1 bg-black">
        <Stage width={window.innerWidth - 256} height={window.innerHeight} ref={stageRef}>
          <Layer>
            {elements.map(el => {
              if (el.type === 'text') {
                return (
                  <Text
                    key={el.id}
                    x={el.x}
                    y={el.y}
                    width={el.width}
                    height={el.height}
                    text={el.text}
                    fill={el.fill}
                    draggable
                    onDragEnd={(e) => handleDragEnd(e, el.id)}
                    onClick={(e) => handleClick(e, el.id)}
                  />
                );
              }
              if (el.type === 'rect') {
                return (
                  <Rect
                    key={el.id}
                    x={el.x}
                    y={el.y}
                    width={el.width}
                    height={el.height}
                    fill={el.fill}
                    draggable
                    onDragEnd={(e) => handleDragEnd(e, el.id)}
                    onClick={(e) => handleClick(e, el.id)}
                  />
                );
              }
              return null;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Canvas;
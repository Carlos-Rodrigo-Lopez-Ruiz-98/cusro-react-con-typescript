"use client";

import { LazyImage } from './components/RandomFox';
import { useState } from 'react';
import type { MouseEventHandler } from 'react';

const random = () => Math.floor(Math.random() * 122) + 1;

const generateId = () => Math.random().toString(36).substr(2, 9);

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    }
    setImages([...images, newItem])
  }


  return (
    <main>
      <div className="m-4">
        <button
          onClick={addNewFox}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add new fox
        </button>
      </div>
      {images.map(({ id, url }, index) => (
        <div className="p-4" key={id}>
          <LazyImage
            src={url}
            width="320"
            height="auto"
            className="mx-auto rounded-md bg-gray-300"
            onClick={() => {
              console.log("holi!");
            }}
            onLazyLoad={(img) => {
              console.log(`Image #${index + 1} cargada. Nodo:`, img);
            }}
          />
        </div>
      ))}
    </main>
  )
}
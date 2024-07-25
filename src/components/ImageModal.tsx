"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageModal = ({ src, alt }: { src: string; alt: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        className="cursor-pointer"
        onClick={openModal}
        width={1024}
        height={724}
      />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative">
            <button
              className="absolute w-10 text-center h-10 top-0 right-0 p-1 mt-2 bg-gray-800 rounded-full text-red-500 text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={src}
              alt={alt}
              className="max-w-full max-h-full"
              width={1940}
              height={1080}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;

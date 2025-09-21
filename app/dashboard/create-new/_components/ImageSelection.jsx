'use client'
import React, { useState } from 'react'
import Image from 'next/image'

function ImageSelection({selectedImage}) {
  const [file, setFile] = useState()

  const onFileSelected = (event) => {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
	selectedImage(event.target.files[0])
  }

  return (
    <div>
      <label>Select Image of your room</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`border rounded-xl border-dotted flex justify-center items-center border-primary
              bg-slate-200 cursor-pointer hover:shadow-lg
              ${file ? 'p-0 bg-white' : 'p-28'}
            `}
          >
            {!file ? (
              <Image src="/imageupload.png" alt="Image" width={70} height={70} />
            ) : (
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-full h-full object-cover rounded-xl"
              />
            )}
          </div>
        </label>

        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: 'none' }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  )
}

export default ImageSelection

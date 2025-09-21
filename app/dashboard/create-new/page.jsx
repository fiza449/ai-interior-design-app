'use client'
import React from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'

function CreateNew() {

  const onHandleInputChange = (value, fieldName) =>{
		console.log(fieldName,value)
  }
  return (
	<div>
	  <h2 className='font-bold text-4xl text-primary text-center'>Experience the Magic of AI Remodeling</h2>
	  <p className='text-center text-gray-500'>Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment</p>

	  <div className='grid grid-cols-1 md:grid-cols-2  mt-10 gap-10'>
			{/**Image Selection */}
			<ImageSelection selectedImage={(value) => onHandleInputChange(value,'image')} />

			{/**Form Input Section */}
			<div>
				 {/**Room Type */}
				 <RoomType selectedRoomType={(value) => onHandleInputChange(value,'roomType')} /> 

				 {/**Design Type */}
				 <DesignType />
				 {/**Additional Requirement TextArea (Optional) */}

				 {/**Button to Generate Image */}
			</div>

	  </div>

	</div>
  )
}

export default CreateNew

import React from 'react'

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

 
  

function CustomBreadcrumb() {
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Prosjects</Breadcrumb.Item>
    <Breadcrumb.Item>Flosssdsaddsdsdsdwbite React</Breadcrumb.Item>
  </Breadcrumb>
  )
}

export default CustomBreadcrumb

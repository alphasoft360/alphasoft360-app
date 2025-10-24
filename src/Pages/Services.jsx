import React from 'react'
import ServicesImage from '../Services/ServicesImg'
import Service from '../Services/Service';
import ServicesProcess from '../Services/ServicesProcess';
import ServicesForm from '../Services/ServicesForm';
import '../Services/services.css'

const Services = () => {
  return (
    <>
      <ServicesImage />
      <Service />
      {/* Background set with color */}
      <ServicesProcess />
      <ServicesForm />
    </>
  )
}

export default Services

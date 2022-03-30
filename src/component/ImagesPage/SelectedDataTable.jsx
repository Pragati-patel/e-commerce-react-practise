import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SelectedDataTable() {
  const location = useLocation();
  console.log("state",location?.state)
  const selectedData = location?.state?.selected
  return (
    <div>SelectedDataTable</div>
  )
}

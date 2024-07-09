import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import WebDevelopment from '../Components/WebDevelopment'
import VideoEditing from '../Components/VideoEditing'
import ArchitecturalDesign from '../Components/ArchitecturalDesign'
import Animation from '../Components/Animation'
import GraphicDesign from '../Components/GraphicDesign'


export default function CategoryDetails() {
  let {type} = useParams()
  useEffect(() => {
   
    
   // Set scroll-behavior to auto
   document.documentElement.style.scrollBehavior = 'auto';
   
   // Scroll to the top of the page instantly
   window.scrollTo(0, 0);
   
   
  }, [])
  

  switch (type) {
    case 'webDevelopment':
      return (
        <WebDevelopment />
      )
    case 'animation':
      return (
        <Animation/>
      )
    case 'architecturalDesign':
      return (
        <ArchitecturalDesign/>
      )
    case 'videoEditing':
      return (
        <VideoEditing/>
        )
    case 'graphicDesign':
      return (
        <GraphicDesign/>
            )
    default:
      break;
  }
}

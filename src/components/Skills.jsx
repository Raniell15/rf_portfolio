import React, { useState, useEffect } from 'react'

const skills = [
    //Software
    {name:'HTML', level:70, category:'software'},
    {name:'CSS', level:70, category:'software'},
    {name:'JavaScript', level:70, category:'software'},
    {name:'PHP', level:80, category:'software'},
    {name:'C', level:80, category:'software'},
    {name:'C++', level:60, category:'software'},
    {name:'Java', level:60, category:'software'},
    {name:'Visual Basic', level:60, category:'software'},
    {name:'Python', level:80, category:'software'},
    {name:'Flutter', level:60, category:'software'},
    {name:'ReactJS', level:80, category:'software'},
    {name:'Flask', level:70, category:'software'},
    {name:'Django', level:70, category:'software'},
    {name:'Kivy', level:60, category:'software'},
    {name:'Tailwind CSS', level:70, category:'software'},
    {name:'Bootstrap', level:70, category:'software'},
    {name:'ExpressJS', level:70, category:'software'},
    {name:'NodeJS', level:70, category:'software'},
    {name:'Laravel Lumen', level:80, category:'software'},
    {name:'MongoDB', level:70, category:'software'},
    {name:'SQL', level:80, category:'software'},
    {name:'OpenCV', level:50, category:'software'},
    {name:'Tensorflow', level:50, category:'software'},
    

    //Hardware
    {name:'Assembly', level:70, category:'hardware'},
    {name:'SAP 1 & 2', level:80, category:'hardware'},
    {name:'Verilog', level:80, category:'hardware'},
    {name:'Arduino', level:70, category:'hardware'},
    {name:'Raspberry Pi', level:70, category:'hardware'},
    {name:'Breadboarding', level:70, category:'hardware'},
    {name:'CAD', level:70, category:'hardware'},
    {name:'Circuit Design', level:60, category:'hardware'},
    {name:'Gate-level Modeling', level:80, category:'hardware'},
    {name:'Networking', level:50, category:'hardware'},
    
    //Tools
    {name:'Postman', level:80, category:'tool'},
    {name:'VS Code', level:80, category:'tool'},
    {name:'Git/GitHub', level:80, category:'tool'},
    {name:'SQLYog', level:80, category:'tool'},
    {name:'Anaconda', level:70, category:'tool'},
    {name:'Figma', level:70, category:'tool'},

]

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleCategory = (category) => {
    setActiveCategory(category);
    localStorage.setItem('category', category);
  }

    useEffect(() => {
      localStorage.setItem('category', 'all');
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 1550);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])

  return (
    <section id="skills" className=' py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className={`text-3xl md:text-4xl mb-5 text-center text-2p opacity-0 ${isScrolled ? 'animate-fade-in' : ''}`}>
          My <span className='text-app-primary'>Skills</span>
        </h2>
        <div className='flex justify-center md:gap-6 py-10'>
            <button className={`text-silk text-lg hover:bg-app-primary/80 px-3 py-1 rounded-full opacity-0 ${isScrolled ? 'animate-fade-in-delay-1' : ''} ${activeCategory === 'all' ? 'border-app-primary border-solid border-2' : ''}`} onClick={() => handleCategory('all')}>All</button>
            <button className={`text-silk text-lg hover:bg-app-primary/80 px-3 py-1 rounded-full opacity-0 ${isScrolled ? 'animate-fade-in-delay-2' : ''} ${activeCategory === 'software' ? 'border-app-primary border-solid border-2' : ''}`} onClick={() => handleCategory('software')}>Software</button>
            <button className={`text-silk text-lg hover:bg-app-primary/80 px-3 py-1 rounded-full opacity-0 ${isScrolled ? 'animate-fade-in-delay-3' : ''} ${activeCategory === 'hardware' ? 'border-app-primary border-solid border-2' : ''}`} onClick={() => handleCategory('hardware')}>Hardware</button>
            <button className={`text-silk text-lg hover:bg-app-primary/80 px-3 py-1 rounded-full opacity-0 ${isScrolled ? 'animate-fade-in-delay-4' : ''} ${activeCategory === 'tool' ? 'border-app-primary border-solid border-2' : ''}`} onClick={() => handleCategory('tool')}>Tools</button>
          </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 opacity-0 ${isScrolled ? 'animate-fade-in-delay-5' : ''}`}>
          {skills.filter(skill => activeCategory === 'all' || skill.category === activeCategory).map((skill, key) => (
            <div key={key} className='bg-gray-900 p-6 rounded-lg shadow-xs card-hover'>
              <h2 className='text-2p text-left'>{skill.name}</h2>
              <div className='flex items-center space-x-2'>
                <h3 className='text-silk'>Lv.{skill.level}</h3>
                <div className='bg-app-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]' style={{width:skill.level + "%"}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

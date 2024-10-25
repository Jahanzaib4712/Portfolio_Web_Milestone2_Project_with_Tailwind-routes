import React from 'react'
import Skillsitem from './Skillsitem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Education & <span className='text-yellow-400'>
        Skill
        </span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] 
        items-center' >
            <div>
                <Skillsitem title="Matriculation" year="2021 - 2022"/>
                <Skillsitem title="Intermediate" year="2023 - 2025"/>
                <SkillsLanguage 
                skill1="html" 
                skill2="css" 
                skill3="Javascript" 
                level1="w-[80%]" 
                level2="w-[70%]" 
                level3="w-[80%]"/>
            </div>
            <div>
                <Skillsitem title="Arduino Enthusiast" year="2023 - 2024"/>
                <Skillsitem title="Web Developer (HTML, CSS, TypeScript)" year="2024 - 20--"/>
                <SkillsLanguage
                skill1="React Js" 
                skill2="Next Js" 
                skill3="Typescript" 
                level1="w-[36%]" 
                level2="w-[44%]" 
                level3="w-[83%]"
                />
            </div>

        </div>
    </div>
  )
}

export default Skills

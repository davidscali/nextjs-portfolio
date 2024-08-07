import React from 'react';
import withFadeIn from '@functional/withFadeIn';

function PrimeMinisterOffice() {
    return (
        <div id="Prime Minister Office" className="Prime-Minister max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40">
                
            <h1 className="text-3xl text-left text-white font-bold">Data Analyst</h1>
            <h2 className="text-xl text-left text-white font-bold mt-2"> Prime Minister's Office</h2>
            <h3 className='text-lg text-left text-white mt-2'>From September 2022</h3>
            <br />
            <p className="text-lg text-left"> In my role on the Control team, I optimize governmental surveys to assess the qualities of public service employees, offering actionable insights. Additionally, I analyzed and enhance information systems within the governmental portal and construct surveys to efficiently delegate tasks to government offices. </p>
            <div className="text-mm text-left">

                <div className="text-base font-bold mt-4">Details:</div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li>Constructed and developed control indicators using Python and Excel.</li>
                    <li>Utilized Agile methodology to analyze and characterize Information Systems within the governmental Portal,</li>
                    <p>Drafted mockups and functional documents.</p>
                    <li>Developed surveys and control criteria in Excel to optimize task allocation across various offices,</li>
                    <p> aligning with the KPIs indicators set by the state commissioner.</p>
                    <li>Leveraged SQL for data querying and analysis, designed insightful dashboards using Power BI </li>
                    <p> to empower data-driven decision-making.</p>
                </ul>

                <div className="text-base font-bold mt-4">Technologies & Skills: </div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li><strong>SQL</strong>(Power BI) </li>
                    <li><strong>Python</strong> (Pandas & Numpay)</li>
                    <li><strong>Excel</strong> (VBA)</li>
                    <li><strong>Agile Scrum</strong> (Canva,Figma,Slack)</li>
                </ul>
            </div>
        </div>
    );
}

export default withFadeIn(PrimeMinisterOffice);
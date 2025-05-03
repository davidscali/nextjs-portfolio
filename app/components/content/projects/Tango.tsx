import React from 'react';
import withFadeIn from '@functional/withFadeIn';

function TangoMe() {
    return (
        <div id="Tango" className="Tango-Me max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40">
                

            <h1 className="text-3xl text-left text-white font-bold">Marketing Data Analyst</h1>
            <h2 className="text-xl text-left text-white font-bold mt-2"> Tango</h2>
            <h3 className='text-lg text-left text-white mt-2'> Jan 2025 - Toady</h3>
            <br />
            <p className="text-lg text-left"> 
            
            At Tango, a dynamic B2C mobile app and live streaming platform, I served as a Marketing Data Analyst focused on extracting actionable insights from real-time data to optimize user acquisition and engagement in a fast-paced global environment. </p>           
            <div className="text-mm text-left">
                <div className="text-base font-bold mt-4">
                    Project:
                </div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li> Analyzed real-time marketing data ,~10M MAU, to support data-driven decisions on user behavior and content performance. </li>
                    <li> Built Looker dashboards and automated alerts to monitor KPIs in a fast-paced B2C app environment </li>
                    <li> Collaborated on performance analysis and $8M/month campaign planning, enabling agile marketing decisions. </li>
                    <li> Used advanced SQL and Python automation to streamline workflows, saving ~30% time on UA analysis.</li>
                </ul>

                <div className="text-base font-bold mt-4">Technologies: </div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li><strong>Looker, LookML</strong></li>
                    <li><strong>SQL, Python</strong></li>
                    <li><strong>BigQuery Dataset</strong></li>
                    <li><strong>GitLab</strong></li>
                    <li><strong>AirFlow</strong></li>
                    <li><strong>Anodot - Alert system</strong></li>
                </ul>
            </div>
        </div>
    );
}

export default withFadeIn(TangoMe);
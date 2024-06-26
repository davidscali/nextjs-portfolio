import React from 'react';
import withFadeIn from '@functional/withFadeIn';
import Button from '@ui/Button';

function Biography() {

    const biographyButtons: { type: 'main'; content: string; onClick?: () => void }[] = [
        { type: 'main', content: 'LinkedIn Profile', onClick: () => window.open('https://www.linkedin.com/in/david-scali/', '_blank') },
    ];

    return (
        <div data-testid="Biography" id="Biography" className="biography max-w-5xl py-20 h-full select-none border-b border-slate-700
        mx-6
        md:mx-20
        lg:mx-40
    ">
            <div className="biography-text flex 
            flex-col
            md:flex-row
            ">
                <div className="biography-text-col1 text-base
                md:mr-10
                ">
                    <p className="text-xl" >
                        <strong className="text-2xl">Academic Journey</strong> <br />
                        Completing my Bachelor's degree was a pivotal milestone in my journey. As an <strong> industrial and management engineer </strong> I believe that for creating meaningful solution, that can stand for a long time, you have to hold both tools: technological thinking and understanding social human behavior. <br/>
                        <p className='mt-3 text-xl'>Through my specialization in information systems, I acquired invaluable knowledge and skills that I applied across a spectrum of technological platforms </p>   
                    </p>

                    <p className="text-xl">
                        <br />
                        <strong className="text-2xl">Current Job</strong><br />
                        As a Data Analyst, I am eager to create value from data. I am currently working at the Prime Minister's Office where I contribute through analyses to ensure equitable representation of diverse populations in the civil service. 
                    </p>

                    <div className="text-base my-4">
                        {biographyButtons.map((button, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <span className="divider mx-1 opacity-50 select-none">/</span>}
                                <Button type={button.type} content={button.content} onClick={button.onClick} />
                            </React.Fragment>
                        ))}
                    </div>

                </div>
                {/* <div className="biography-text-col2 text-sm">
                    <p>
                        <strong>Learning Journey</strong><br />
                        One of the most significant aspects of my career as a software engineer has been the opportunity to work on various projects throughout my high school years, university and in the free time. Through these projects I have gained proficiency in technologies such as JavaScript (React.js, Next.js) and CSS (SASS, Tailwind CSS).
                    </p>

                    <p>
                        <br />
                        <strong>Soft Skills Development</strong><br />
                        In addition to technical expertise, I have also honed my soft skills throughout my career, particularly since joining Deloitte. Working in a dynamic and diverse environment has allowed me to develop effective communication and collaboration skills. I have learned the importance of strong teamwork, adaptibility, and problem-solving abilities.
                    </p>

                    <p>
                        <br />
                        <strong>Collaborative Environment</strong><br />
                        As part of a cross-functional team composed of professionals from various regions in Italy and abroad, I have learned the importance of producing code that seamlessly integrates with others&apos;. Leveraging version control systems like Git, our team ensures smooth collaboration while maintaining code integrity. Furthermore, effective communication in English has fostered a global mindset and cultural exchange within our team.
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default withFadeIn(Biography);
// export default Biography;
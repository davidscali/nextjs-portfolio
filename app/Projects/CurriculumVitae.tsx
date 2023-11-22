import Button from "../Button";

export default function CurriculumVitae() {
    return (
        <div id="Project: Curriculum Vitae" className="curriculum-vitae max-w-5xl mx-40 py-20 border-b select-none border-slate-700">
            <h1 className="text-5xl text-center text-white mb-4">Curriculum Vitae</h1>
            <div className="text-center mb-4">
            Having the need to make a CV to land my first internships, I quickly grew frustrated with the limited options provided by online resume makers, so I took matters into my own hands. Determined to create a unique and personalized CV, I embarked on the journey of learning React and Next.js. This allowed me to develop a curriculum vitae maker from scratch, tailored specifically to my needs and preferences. The process was challenging yet fulfilling, as I gained valuable skills and created a tool that perfectly showcases my qualifications and experiences.
            </div>
            <div className="flex justify-center">
                <embed src="https://nextjs-cv-snowy.vercel.app/" style={{ width: '70vw', height: '100vh' }} />
            </div>
            <div className="text-center text-lg my-4">
                Interested in how I made this? Check out the GitHub project!
            </div>
            <div className="flex justify-center">
                <Button type="main" content="View Repository" onClick={() => window.open('https://github.com/yangxdev/nextjs-cv')} />
            </div>
        </div>
    );
}
import NonresizableCaptions from './assets/nonresizable_captions.png';
import DS3CalendarTestPage from './assets/ds3_calendartestpage.png';
import GestureIdeation from './assets/gesture_ideation.png';

export function MyClasswork() {
    return (
        <section className='w-5/6'>
            <section className='mb-10'>
                <h1>My Classwork</h1>
                <p>
                    Below are 3 sections detailing 3 assignments I completed during my time in taking CS 780 at UNH, each
                    containing a brief description, image of part of its work, and a link to its corresponding design document.
                </p>
            </section>

            <section className='mb-10'>
                <h2>Tailored Mobile Design for Soon-to-Graduate Students</h2>
                <p>
                    In this design sprint, my group and I redesigned the myUSNH dashboard website, hoping to make improvements
                    and changes for our target audience of seniors about to graduate. We asked seniors about to graduate specific
                    questions to gather initial info from our target audience, redesigned 4 pages for the website, created multiple
                    paper sketches for each one with ideas we had, created a paper prototype and tested it with one interviewee,
                    created mood boards and a final Figma prototype that we presented to the class. This assignment gave us a true
                    perspective of how an extensive and careful design process leads to a well-designed product with the target
                    audience at the center of focus for its developers.
                </p>
                <figure className='mt-5 mb-5'>
                    <img src={DS3CalendarTestPage}
                        alt="An interviewee tapping a button for a day on their calendar's week view"
                        width='669'
                        height='574'
                    />
                    <figcaption>An interviewee tapping a button for a day on their calendar's week view</figcaption>
                </figure>
                <p>
                    <span className="font-semibold">Link to design document:</span> <a href="https://glass-petroleum-a1b.notion.site/Tailored-Mobile-Design-for-Soon-to-Graduate-Students-30de8c31011c80628038fa5c5c366591" target='_blank' className='text-blue-400 underline hover:text-blue-200'>Tailored Mobile Design for Soon-to-Graduate Students</a>
                </p>
            </section>

            <section className='mb-10'>
                <h2>Designing for Gestural Interaction</h2>
                <p>
                    In this design sprint, my group and I designed gestural interactions for Discord, a social media
                    app and website. We gathered a list of applications to design gestural interactions as alternatives
                    to their regular interaction methods like clicking and typing, then we decided on Discord and
                    came up with ideas for gestures to design as alternative ways for existing interactions,
                    did two 'Wizard-of-Oz' tests to simulate our ideas, then designed the software using an existing
                    python library that provides hand recognition capabilities. This assignment showed an interesting way
                    to design interactions that don't need to use the traditional keyboard and mouse or tapping on a touchscreen,
                    providing both another method of accessibility for an existing app and also a more preferable one
                    for people that may get tired of using those traditional interaction methods.
                </p>
                <figure className='mt-5 mb-5'>
                    <img src={GestureIdeation}
                        alt="Annotated sketches of thumbs up, thumbs down, and finger pointing toward screen gesture ideas for scroll up, scroll down and click actions to be used in Discord"
                        width='1722'
                        height='978'
                    />
                    <figcaption>Annotated sketches of thumbs up, thumbs down, and finger pointing toward screen gesture ideas for scroll up, scroll down and click actions to be used in Discord</figcaption>
                </figure>
                <p>
                    <span className="font-semibold">Link to design document:</span> <a href="https://glass-petroleum-a1b.notion.site/Designing-for-Gestural-Interaction-313e8c31011c80aa8980eae076c01555" target='_blank' className='text-blue-400 underline hover:text-blue-200'>Designing for Gestural Interaction</a>
                </p>
            </section>

            <section>
                <h2>Evaluating Accessibility - Accessibility Audit</h2>
                <p>
                    In this individual homework assignment, I assessed accessibility for "users with auditory disabilities" for Reddit.
                    I was unable to provide sufficient information from Reddit alone in this assignment for my target audience,
                    so I also compiled it with info I gathered from looking at YouTube's accessibility. I found numerous
                    issues that social media developers may fail to initially consider when adding video features to their
                    apps, such as a lack of resizable captions so users can easily read the content depending on their
                    eyesight abilitiies. These issues are important for providing an inclusive experience for deaf,
                    hard-of-hearing, and other individuals with auditory disabilities who may want to participate on
                    social media platforms like YouTube and Reddit.
                </p>
                <figure className='mt-5 mb-5'>
                    <img src={NonresizableCaptions}
                        alt="Annotated screenshots of YouTube mobile not providing resizing ability for captions"
                        width='683'
                        height='421'
                    />
                    <figcaption>Annotated screenshots of YouTube mobile not providing resizing ability for captions</figcaption>
                </figure>
                <p>
                    <span className="font-semibold">Link to design document:</span> <a href="https://glass-petroleum-a1b.notion.site/Accessibility-Audit-328e8c31011c80579d75e6c9039c562f" target='_blank' className='text-blue-400 underline hover:text-blue-200'>Accessibility Audit</a>
                </p>
            </section>
        </section>
    )
}
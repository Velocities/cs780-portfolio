import NonresizableCaptions from './assets/nonresizable_captions.png';

export function MyClasswork() {
    return (
        <>
            <section>
                <h1>My Classwork</h1>
                <p>
                    Below are 3 sections detailing 3 assignments I completed during my time in taking CS 780 at UNH, each
                    containing a brief description
                </p>
            </section>

            <section>
                <h2>Evaluating Accessibility</h2>
                <p>
                    In this assignment, I assessed accessibility for "users with auditory disabilities" for Reddit.
                    I was unable to provide sufficient information from Reddit alone in this assignment for my target audience,
                    so I also compiled it with info I gathered from looking at YouTube's accessibility. I found numerous
                    issues that social media developers may fail to initially consider when adding video features to their
                    apps, such as a lack of resizable captions so users can easily read the content depending on their
                    eyesight abilitiies. These issues are important for providing an inclusive experience for deaf,
                    hard-of-hearing, and other individuals with auditory disabilities who may want to participate on
                    social media platforms like YouTube and Reddit.
                </p>
                <img src={NonresizableCaptions} alt="Annotated screenshots of YouTube mobile not providing resizing ability for captions"/>
            </section>
        </>
    )
}
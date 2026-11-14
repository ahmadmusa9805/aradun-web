import Image from "next/image";

const feedback = [
  {
    name: "Maya Ellis",
    company: "Demo Company One",
    quote:
      "The project plan made the scope and next steps easy to understand. The review process felt clear from the start.",
  },
  {
    name: "Daniel Reed",
    company: "Demo Company Two",
    quote:
      "Connecting the workflow into one clear process is the kind of improvement our team would value.",
  },
  {
    name: "Adrian Chen",
    company: "Demo Company Three",
    quote:
      "A focused design direction and a straightforward inquiry experience made this concept easy to explore.",
  },
];
export function DemoFeedback() {
  return (
    <div>
      <p className="demo-disclosure">
        SAMPLE / DEMO — fictional review copy and AI-generated portraits. These
        are not real clients, endorsements or ratings.
      </p>
      <div className="demo-feedback-grid">
        {feedback.map((person, index) => (
          <article className="demo-feedback-card" key={person.name}>
            <span className="public-eyebrow">
              Demo testimonial / 0{index + 1}
            </span>
            <blockquote>
              <p>{person.quote}</p>
            </blockquote>
            <div className="demo-feedback-person">
              <span className={`demo-avatar demo-avatar--${index}`}>
                <Image
                  src="/images/demo/demo-portraits-v1.png"
                  alt="AI-generated demo portrait, not a real client"
                  width={1536}
                  height={512}
                  sizes="192px"
                />
              </span>
              <div>
                <h3>
                  {person.name} <span>· DEMO persona</span>
                </h3>
                <p>{person.company}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

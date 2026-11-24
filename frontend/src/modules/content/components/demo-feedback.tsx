import Image from "next/image";
import { FeedbackCarousel } from "./feedback-carousel";

const feedback = [
  {
    name: "Maya Ellis",
    company: "Example profile",
    quote:
      "The project plan made the scope and next steps easy to understand. The review process felt clear from the start.",
  },
  {
    name: "Daniel Reed",
    company: "Example profile",
    quote:
      "Connecting the workflow into one clear process is the kind of improvement our team would value.",
  },
  {
    name: "Adrian Chen",
    company: "Example profile",
    quote:
      "A focused design direction and a straightforward inquiry experience made this concept easy to explore.",
  },
  {
    name: "Elena Brooks",
    company: "Example profile",
    quote:
      "A useful project conversation starts with clear questions, priorities and a shared understanding of the next step.",
  },
  {
    name: "Oliver Hayes",
    company: "Example profile",
    quote:
      "The information should make it easy to understand the service and decide what to discuss in an initial brief.",
  },
  {
    name: "Sofia Martin",
    company: "Example profile",
    quote:
      "A consistent visual direction and readable content can make a complex service offering easier to explore.",
  },
  {
    name: "Lucas Bennett",
    company: "Example profile",
    quote:
      "A structured review process helps keep feedback focused on the business goal and the people using the service.",
  },
  {
    name: "Emma Fischer",
    company: "Example profile",
    quote:
      "Clear ownership and a visible next action are useful foundations for a connected workflow.",
  },
  {
    name: "Noah Collins",
    company: "Example profile",
    quote:
      "A practical handover should explain the work, the responsibilities and where to find the information needed next.",
  },
  {
    name: "Isabel Laurent",
    company: "Example profile",
    quote:
      "A focused interface gives the main message room to breathe and makes the next action easy to find.",
  },
];
export function DemoFeedback() {
  return (
    <div>
      <p className="demo-disclosure">
        Preview stories — fictional profiles for layout review.
      </p>
      <FeedbackCarousel>
        <div className="demo-feedback-grid">
          {feedback.map((person, index) => (
            <article className="demo-feedback-card" key={person.name}>
              <span className="public-eyebrow">
                Story / {String(index + 1).padStart(2, "0")}
              </span>
              <blockquote>
                <p>{person.quote}</p>
              </blockquote>
              <div className="demo-feedback-person">
                <span className={`demo-avatar demo-avatar--${index}`}>
                  {index < 3 ? (
                    <Image
                      src="/images/demo/demo-portraits-v1.png"
                      alt="Synthetic portrait for an illustrative profile"
                      width={1536}
                      height={512}
                      sizes="192px"
                    />
                  ) : (
                    <span className="feedback-initials" aria-hidden="true">
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  )}
                </span>
                <div>
                  <h3>
                    {person.name} <span>· Fictional profile</span>
                  </h3>
                  <p>{person.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </FeedbackCarousel>
    </div>
  );
}

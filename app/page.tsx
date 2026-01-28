export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl mb-2">Hi I’m Bill Cai</h1>
        <p className="text-sm opacity-60">
          I’m a third year studying CS + Finance at the University of Waterloo.
        </p>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <ul className="space-y-1">
            <li>
              Founder –{" "}
              <a
                href="https://www.nodalresearch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Nodal-Research
              </a>{" "}
              (1.2M AUM)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base mb-1 font-bold">Incoming S26</h2>
          <ul className="space-y-1">
            <li>
              Software Engineer Finance Intern –{" "}
              <a
                href="https://windbornesystems.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Windborne-Systems
              </a>{" "}
              (Palo Alto, United States)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base mb-1 font-bold">Previously</h2>
          <ul className="space-y-1">
            <li>
              Product Engineer Intern –{" "}
              <a
                href="https://www.raysengine.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                RaysEngine
              </a>{" "}
              (Hangzhou, China)
            </li>
            <li>
              Founding Member –{" "}
              <a
                href="https://www.slimescholars.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                SlimeScholars
              </a>{" "}
              (Toronto, Canada)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base mb-1 font-bold">Projects</h2>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.marbleinvestments.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Marble-Investments
              </a>{" "}
              (Ended with 1.2 AUM after averaging 70% returns for 3 years)
            </li>
          </ul>
        </div>
      </div>

      <p className="text-sm italic mt-12">
        I see immense potential in standing at the intersection of tech and
        finance.
      </p>

      <p className="text-sm">
        <a href="/blog" className="underline">
          blog
        </a>
      </p>
    </div>
  );
}


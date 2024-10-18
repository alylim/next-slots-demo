import Image from "next/image";

export default function Presentation() {
  return (
    <>
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold mb-4">What are Parallel Routes?</h1>
        <p className="text-lg mb-4">
          Parallel Routes allows you to simultaneously or conditionally render one or more pages
          within the same layout.
        </p>
        <div className="relative w-full h-64 mb-4">
          <Image
            src="/images/parallel-routes.png"
            alt="No Streaming"
            fill
            objectFit="contain" // Ensure the image fits without cropping
          />
        </div>
      </div>

      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold mb-4">Server-Side Rendering</h1>
        <div className="mb-4">
          <p className="mb-2">
            The Server-Side Rendering (SSR) process involves several steps before a user can see and
            interact with a page:
          </p>
          <ol className="list-decimal list-inside mb-4 pl-6">
            <li>All data for a given page is fetched on the server.</li>
            <li>The server then renders the HTML for the page.</li>
            <li>The HTML, CSS, and JavaScript for the page are sent to the client.</li>
            <li>A non-interactive user interface is shown using the generated HTML and CSS.</li>
            <li>Finally, React hydrates the user interface to make it interactive.</li>
          </ol>
          <div className="relative w-full h-64 mb-4">
            <Image
              src="/images/nostream.png"
              alt="No Streaming"
              fill
              objectFit="contain" // Ensure the image fits without cropping
            />
          </div>
          <p className="mb-2">
            These steps are sequential and blocking, meaning the server can only render the HTML for
            a page once all the data has been fetched. And, on the client, React can only hydrate
            the UI once the code for all components in the page has been downloaded.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Streaming</h2>
          <p className="mb-2">
            {`Streaming allows you to break down the page's HTML into smaller chunks and progressively
            send those chunks from the server to the client.`}
          </p>
        </div>

        <div className="relative w-full h-64 mb-4">
          <Image
            src="/images/streaming.png"
            alt="Streaming"
            fill
            objectFit="contain" // Ensure the image fits without cropping
          />
        </div>
        <p className="mb-4">
          This process ensures that the user experiences a fast initial page load, improving metrics
          like Time to First Byte (TTFB) and First Contentful Paint (FCP). It can reduce perceived
          loading times and provide a smoother user experience.
        </p>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Streaming can reduce the Time to First Byte (TTFB) and First Contentful Paint (FCP). It
          also helps improve Time to Interactive (TTI), especially on slower devices.
        </p>
      </div>

      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold mb-4">Page Load Time Metrics</h1>
        <div className="space-y-4">
          <p className="mb-2">
            <strong>Time to First Byte (TTFB):</strong> The time it takes for the server to send the
            first byte of data in response to a request. It’s an indicator of server performance and
            network latency.
          </p>
          <p className="mb-2">
            <strong>First Contentful Paint (FCP):</strong> The time it takes for the browser to
            render the first piece of content (text, image, etc.) on the page. A quicker FCP
            indicates a faster perceived loading time.
          </p>
          <p className="mb-2">
            <strong>Largest Contentful Paint (LCP):</strong> Measures when the largest visible
            content element is rendered. It’s an important metric for user experience, as it
            reflects the loading speed of the main content.
          </p>
          <p className="mb-2">
            <strong>Time to Interactive (TTI):</strong> The time it takes for the page to become
            fully interactive. This includes all JavaScript being downloaded and executed.
          </p>
          <p className="mb-2">
            <strong>Cumulative Layout Shift (CLS):</strong> Measures the visual stability of the
            page. A low CLS score indicates a stable page that doesn’t shift unexpectedly as content
            loads.
          </p>
        </div>
      </div>
    </>
  );
}

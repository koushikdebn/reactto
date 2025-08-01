import { Link } from "react-router-dom";
import NotFoundImage from "@images/notfound.jpg";
export default function NotFound() {
  return (
    <div>
        <div className="mx-auto max-w-screen-sm text-center">
          <img src={NotFoundImage} alt="intro" className="mx-auto my-auto" />
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 dark:text-white">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
   
  )
}
